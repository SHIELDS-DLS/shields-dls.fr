# Introduction

Ce dépôt Git contient le code source du site web SHIELDS, une association étudiante dédiée à la filière Cybersécurité du Pôle Sup de La Salle. Ce site permet de centraliser et de partager les actualités, événements et projets liés à l'association.

# Maintenance

Le site repose sur plusieurs grids dynamiques qui doivent être maintenues à jour en modifiant les fichiers JSON correspondants situés dans :

📂 `src/assets/data/`

- `competitions.json` : Compétitions CTF
- `events.json` : Événements organisés par l'association
- `posts.json` : Publications LinkedIn
- `projects.json` : Projets étudiants

À chaque push sur la branche main, un workflow GitHub Actions est automatiquement déclenché. Il assure le redéploiement de la nouvelle version du site sur le serveur distant, garantissant ainsi une mise à jour continue et sans intervention manuelle.
