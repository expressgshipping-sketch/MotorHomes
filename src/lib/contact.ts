const SALES_EMAIL = "motorhomessalesuk@gmail.com";

export function openContactEmail(subject: string, fields: Record<string, string>) {
  const body = Object.entries(fields)
    .map(([label, value]) => `${label}: ${value || "Not provided"}`)
    .join("\n");
  const query = new URLSearchParams({ subject, body });
  window.location.href = `mailto:${SALES_EMAIL}?${query.toString()}`;
}
