export function formatPercentage(num: number): string {
  return (num * 100).toFixed(2).toString().replace('.', ',') + '%';
}