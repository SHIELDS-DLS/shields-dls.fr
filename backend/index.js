import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import fs from "fs";
import path from "path";

// Charger la configuration
const configPath = path.join(process.cwd(), "config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const app = express();
const PORT = config.server.port;

// Middleware
app.use(cors());
app.use(express.json());

// Configuration HelloAsso
const HELLOASSO_CLIENT_ID = config.helloasso.clientId;
const HELLOASSO_CLIENT_SECRET = config.helloasso.clientSecret;
const HELLOASSO_BASE_URL = "https://api.helloasso.com";

// Cache pour le token d'accès
let accessTokenCache = {
  token: null,
  expiresAt: null,
};

/**
 * Récupère un token d'accès HelloAsso
 */
async function getAccessToken() {
  // Vérifier si le token en cache est encore valide
  if (accessTokenCache.token && accessTokenCache.expiresAt > Date.now()) {
    return accessTokenCache.token;
  }

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: HELLOASSO_CLIENT_ID,
      client_secret: HELLOASSO_CLIENT_SECRET,
    }),
  };

  try {
    const response = await fetch(`${HELLOASSO_BASE_URL}/oauth2/token`, options);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    // Mettre en cache le token (durée de vie - 5 minutes de sécurité)
    accessTokenCache.token = data.access_token;
    accessTokenCache.expiresAt = Date.now() + (data.expires_in - 300) * 1000;

    return data.access_token;
  } catch (error) {
    console.error("Erreur lors de la récupération du token d'accès:", error);
    throw error;
  }
}

/**
 * Récupère la liste des membres et extrait seulement les données nécessaires
 */
async function fetchMembers(accessToken) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(
      `${HELLOASSO_BASE_URL}/v5/organizations/shields/forms/Membership/adhesion-shields-2026/orders?pageIndex=1&pageSize=40&withDetails=true`,
      options
    );

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    const orders = data.data || [];

    // Extraire seulement les données nécessaires
    return orders.map((order) => ({
      id: order.id,
      name: order.items?.[0]?.customFields?.[0]?.answer || "Nom non disponible",
      membershipType:
        order.items?.[0]?.name?.replace(/^Adhésion /, "") ||
        "Type non disponible",
    }));
  } catch (error) {
    console.error("Erreur lors de la récupération des membres:", error);
    throw error;
  }
}

// Routes
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.get("/members", async (req, res) => {
  try {
    // Vérifier la configuration
    if (!HELLOASSO_CLIENT_ID || !HELLOASSO_CLIENT_SECRET) {
      return res.status(500).json({
        error: "Configuration manquante",
        message: "Les identifiants HelloAsso ne sont pas configurés",
      });
    }

    // Récupérer le token d'accès
    const accessToken = await getAccessToken();

    // Récupérer les membres
    const members = await fetchMembers(accessToken);

    res.json({
      members,
      count: members.length,
    });
  } catch (error) {
    console.error("Erreur dans /members:", error);
    res.status(500).json({
      error: "Erreur serveur",
      message: error.message,
    });
  }
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Erreur serveur interne",
    message:
      config.environment === "dev"
        ? err.message
        : "An unexpected error occurred",
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📋 Health check disponible sur http://localhost:${PORT}/health`);
});
