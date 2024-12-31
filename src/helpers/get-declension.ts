export const getDeclension = (
  count: number,
  titles: [string, string, string]
): string => {
  const cases: number[] = [2, 0, 1, 1, 1, 2];

  return titles[
    count % 100 > 4 && count % 100 < 20
      ? 2
      : cases[count % 10 < 5 ? count % 10 : 5]
  ];
};
