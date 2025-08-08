/**
 * Calcule le nombre de jours restants jusqu'à une date donnée.
 * @param {string} date - La date.
 * @returns {number} - Le nombre de jours restants.
 */
export interface GetDaysLeftParams {
  date: string;
}

export interface GetDaysLeftResult {
  daysLeft: number;
}

export function getDaysLeft(date: string): number {
  const today = new Date();
  const competitionDate = new Date(date);
  const diffTime = competitionDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

/**
 * Calcule le nombre de jours/mois/années passés depuis une date donnée.
 * @param {string} date - La date.
 * @returns {Object} - Le temps écoulé et son type.
 */
export interface ElapsedTime {
  time: number;
  type: "jour" | "jours" | "mois" | "an" | "ans";
}

export function getElapsedTime(date: string): ElapsedTime {
  const today = new Date();
  const competitionDate = new Date(date);
  const diffTime = today.getTime() - competitionDate.getTime();

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
