export type AcademicYearGroup<T> = {
  label: string;
  startYear: number;
  isCurrent: boolean;
  items: T[];
};

export function getAcademicYearLabel(input: Date | string | number): string {
  const d = new Date(input);
  const year = d.getFullYear();
  const month = d.getMonth(); // 0 = janvier
  const startYear = month >= 8 ? year : year - 1; // >= septembre
  const endYear = startYear + 1;
  return `${startYear}-${endYear}`;
}

export function getCurrentAcademicYearLabel(): string {
  return getAcademicYearLabel(new Date());
}

export function groupByAcademicYear<T>(
  items: T[],
  getDate: (item: T) => Date | string | number,
): AcademicYearGroup<T>[] {
  const current = getCurrentAcademicYearLabel();
  const map = new Map<string, AcademicYearGroup<T>>();

  for (const item of items) {
    const date = getDate(item);
    const label = getAcademicYearLabel(date);
    const startYear = parseInt(label.split("-")[0], 10);
    if (!map.has(label)) {
      map.set(label, {
        label,
        startYear,
        isCurrent: label === current,
        items: [],
      });
    }
    map.get(label)!.items.push(item);
  }

  const groups = Array.from(map.values());
  // Trier les items de chaque groupe (du plus récent au plus ancien)
  for (const g of groups) {
    g.items.sort(
      (a, b) => new Date(getDate(b)).getTime() - new Date(getDate(a)).getTime(),
    );
  }
  // Trier les groupes (année la plus récente en premier)
  groups.sort((a, b) => b.startYear - a.startYear);
  return groups;
}
