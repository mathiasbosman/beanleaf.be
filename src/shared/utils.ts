import { Buffer } from "buffer";

/**
 * Escapes special characters in a given HTML string.
 *
 * @param {string} input - The HTML string to escape.
 * @return {string} The escaped HTML string.
 */
export function escapeHtml(input: string): string {
  const matchHtmlRegExp = /["'&<>]/;
  const str = "" + input;
  const match = matchHtmlRegExp.exec(str);

  if (match == null) {
    return str;
  }

  let escape: string;
  let html = "";
  let index: number;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = "&quot;";
        break;
      case 38: // &
        escape = "&amp;";
        break;
      case 39: // '
        escape = "&#39;";
        break;
      case 60: // <
        escape = "&lt;";
        break;
      case 62: // >
        escape = "&gt;";
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

/**
 * Sends an email to the specified recipient with an optional subject.
 *
 * @param {string} to - The email address of the recipient.
 * @param {string} [subject] - The subject of the email. Optional.
 * @returns {void} - This function does not return anything.
 */
export function sendEmail(to: string, subject?: string): void {
  const buffer = Buffer.from(to, "base64");
  window.location.href =
    `mailto:${buffer.toString()}` +
    (subject !== undefined ? `?subject=${escapeHtml(subject)}` : "");
}
