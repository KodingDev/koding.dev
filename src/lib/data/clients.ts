type Month = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";
type Year = "2019" | "2020" | "2021" | "2022" | "2023" | "2024" | "2025";
export type ClientDate = `${Month} ${Year}`;

export const parseDate = (date: ClientDate): Date => {
  const [month, year] = date.split(" ");
  return new Date(`${year}-${month}-01`);
};
