/**
 * Formats a given date into a string with the format "MMM DD YYYY".
 *
 * @param date - The date to be formatted.
 * @returns A formatted date string.
 */
export function formatDate(date: Date): string {
  const month = date.toLocaleString("EN", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day} ${year}`;
}
