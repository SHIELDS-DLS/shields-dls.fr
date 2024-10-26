/**
 * Calcule le nombre de jours restants jusqu'à une date donnée.
 * @param {string} date - La date.
 * @returns {number} - Le nombre de jours restants.
 */
export function getDaysLeft(date) {
  const today = new Date();
  const competitionDate = new Date(date);
  const diffTime = competitionDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

/**
 * Calcule le nombre de jours/mois/années passés depuis une date donnée.
 * @param {string} date - La date.
 * @returns {Object} - Le temps écoulé et son type.
 */
export function getElapsedTime(date) {
  const today = new Date();
  const competitionDate = new Date(date);
  const diffTime = today - competitionDate;

  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30.44); // Utiliser une moyenne pour les mois
  const diffYears = Math.floor(diffDays / 365.25); // Utiliser une moyenne pour les années

  if (diffDays < 30) {
    return { time: diffDays, type: diffDays > 1 ? "jours" : "jour" };
  } else if (diffMonths < 12) {
    return { time: diffMonths, type: diffMonths > 1 ? "mois" : "mois" };
  } else {
    return { time: diffYears, type: diffYears > 1 ? "ans" : "an" };
  }
}
