// Minimal OCR interface to allow later swapping real engines.
export async function ocrImageToText(_buffer) {
  // Placeholder: return constant text; later wire Tesseract or API.
  return "Sample OCR text with a list:\n- item 1\n- item 2\n";
}

export function toMarkdown(text) {
  // Naive transformation: keep as-is, ensure trailing newline.
  const t = text.endsWith('\n') ? text : text + '\n';
  return t;
}
