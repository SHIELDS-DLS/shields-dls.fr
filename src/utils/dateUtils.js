/**
 * Calcule le nombre de jours restants jusqu'à une date donnée.
 * @param {string} date - La date de la compétition.
 * @returns {number} - Le nombre de jours restants.
 */
export function getDaysLeft(date) {
  const today = new Date();
  const competitionDate = new Date(date);
  const diffTime = competitionDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}
