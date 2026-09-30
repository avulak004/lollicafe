/**
 * Currency Formatter for LolliCafe
 * Formats numbers into Indian Rupees (INR, ₹).
 * Example: formatINR(149) -> "₹149"
 * Example: formatINR(149.5) -> "₹149.50"
 */

export function formatINR(price: number): string {
  if (isNaN(price)) return "₹0";

  // If price is a whole integer, format without decimals like ₹149
  const isWhole = Number.isInteger(price);

  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: isWhole ? 0 : 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(price);
}

export default formatINR;
