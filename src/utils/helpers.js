// General-purpose helper functions (date formatting, validation, etc.)
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
