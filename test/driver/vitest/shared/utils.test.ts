import { describe, expect, it } from "vitest";
import { escapeHtml } from "@shared/utils.ts";

describe("escapeHtml()", () => {
  it("Should return empty when empty strings", () => {
    expect(escapeHtml("")).eq("");
  });

  it("Should return normal strings as-is", () => {
    expect(escapeHtml("foo bar")).eq("foo bar");
  });

  it("Should return escaped string", () => {
    expect(escapeHtml('foo "bar"')).eq("foo &quot;bar&quot;");
    expect(escapeHtml("foo & bar")).eq("foo &amp; bar");
    expect(escapeHtml("foo 'bar'")).eq("foo &#39;bar&#39;");
    expect(escapeHtml("foo < bar")).eq("foo &lt; bar");
    expect(escapeHtml("foo > bar")).eq("foo &gt; bar");
  });
});
