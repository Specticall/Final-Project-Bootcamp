export function formatNumber(number?: number) {
  if (!number) return undefined;
  return number.toLocaleString();
}
