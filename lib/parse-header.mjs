export function parseHeader(value) {
  const [name, raw] = value.split(':');
  return { name: name.trim().toLowerCase(), value: raw.trim() };
}
