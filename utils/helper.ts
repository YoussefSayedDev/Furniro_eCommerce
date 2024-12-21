export function formatPrice(value: number, locale = "en-US", currency = "USD") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(value);
}

// Set the item to local storage
export function setItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

// Get the item from local storage
export function getItem(key: string) {
  return localStorage.getItem(key);
}

// Remove the item from local storage
export function removeItem(key: string) {
  localStorage.removeItem(key);
}
