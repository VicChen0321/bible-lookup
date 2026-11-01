import type { InsertFormat } from "../core/formatter";

/**
 * Adapts formatted scripture to the text around the cursor. A callout must start on its
 * own line and be followed by a blank line, otherwise following text joins the callout.
 * Inline formats are inserted as-is.
 */
export function prepareInsertion(
  text: string,
  format: InsertFormat,
  textBeforeCursor: string,
): string {
  if (format !== "callout") return text;
  const lead = textBeforeCursor.trim() === "" ? "" : "\n";
  return `${lead}${text}\n\n`;
}
