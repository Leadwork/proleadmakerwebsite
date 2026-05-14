/**
 * Tiny, focused Markdown → HTML renderer for blog posts.
 * Supports: h1-h4, paragraphs, lists, blockquotes, inline code, code blocks,
 * bold, italics, links, images, hr.
 * No external runtime dependency at render time — keeps bundle small.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function inline(text: string): string {
  let t = text;
  // Inline code
  t = t.replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`);
  // Images ![alt](url)
  t = t.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />');
  // Links [text](url)
  t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" rel="noopener">$1</a>');
  // Bold **x**
  t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // Italics *x*
  t = t.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
  return t;
}

export function renderMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let inCode = false;
  let codeLang = "";
  let codeBuf: string[] = [];
  let listType: "ul" | "ol" | null = null;
  let quoteBuf: string[] = [];

  const closeList = () => {
    if (listType) {
      out.push(`</${listType}>`);
      listType = null;
    }
  };
  const closeQuote = () => {
    if (quoteBuf.length) {
      out.push(`<blockquote>${quoteBuf.map(inline).join(" ")}</blockquote>`);
      quoteBuf = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code fences
    if (/^```/.test(line)) {
      if (inCode) {
        out.push(
          `<pre><code data-lang="${codeLang}">${escapeHtml(
            codeBuf.join("\n")
          )}</code></pre>`
        );
        inCode = false;
        codeLang = "";
        codeBuf = [];
      } else {
        closeList();
        closeQuote();
        inCode = true;
        codeLang = line.replace(/^```/, "").trim();
      }
      continue;
    }
    if (inCode) {
      codeBuf.push(line);
      continue;
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      closeList();
      closeQuote();
      out.push("<hr />");
      continue;
    }

    // Headings
    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      closeList();
      closeQuote();
      const level = h[1].length;
      out.push(`<h${level}>${inline(h[2])}</h${level}>`);
      continue;
    }

    // Blockquote
    const q = /^>\s?(.*)$/.exec(line);
    if (q) {
      closeList();
      quoteBuf.push(q[1]);
      continue;
    } else {
      closeQuote();
    }

    // Lists
    const ol = /^\s*\d+\.\s+(.*)$/.exec(line);
    const ul = /^\s*[-*]\s+(.*)$/.exec(line);
    if (ol) {
      if (listType !== "ol") {
        closeList();
        out.push("<ol>");
        listType = "ol";
      }
      out.push(`<li>${inline(ol[1])}</li>`);
      continue;
    }
    if (ul) {
      if (listType !== "ul") {
        closeList();
        out.push("<ul>");
        listType = "ul";
      }
      out.push(`<li>${inline(ul[1])}</li>`);
      continue;
    }
    closeList();

    // Paragraph or blank line
    if (line.trim() === "") {
      // skip; we paragraph-split below
    } else {
      // Aggregate consecutive non-blank lines into one paragraph
      const buf = [line];
      while (
        i + 1 < lines.length &&
        lines[i + 1].trim() !== "" &&
        !/^(#{1,4}\s|>\s|\s*[-*]\s|\s*\d+\.\s|```)/.test(lines[i + 1])
      ) {
        buf.push(lines[i + 1]);
        i++;
      }
      out.push(`<p>${inline(buf.join(" ").trim())}</p>`);
    }
  }

  closeList();
  closeQuote();
  if (inCode) {
    out.push(`<pre><code>${escapeHtml(codeBuf.join("\n"))}</code></pre>`);
  }

  return out.join("\n");
}
