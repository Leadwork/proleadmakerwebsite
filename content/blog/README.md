# Pro Lead Maker Blog – Publishing Guide

The blog is powered by **MDX files in this folder**. Adding a new post is as simple as creating a new `.mdx` file and committing it to GitHub. The site rebuilds automatically (on Vercel/Netlify) and the post appears.

## How to add a new post

1. Create a new file in `content/blog/` named `your-slug.mdx` (lowercase, hyphenated).
2. Add the required frontmatter at the top of the file:

```mdx
---
title: "Your Post Title"
excerpt: "One-sentence summary that appears in blog listings and Twitter cards."
category: "B2B Lead Generation"
date: "2026-05-14"
readTime: "8 min read"
author: "MD. Al Amin"
tags: ["lead-gen", "outbound"]
---

Your post body starts here. You can use full Markdown:

## Headings

Paragraphs with **bold**, *italics*, [links](https://example.com), and `inline code`.

- Bullet lists
- Like this

1. Numbered lists
2. Also work

> Blockquotes look great too.

\`\`\`
Code blocks
\`\`\`

Images: ![alt text](/images/blog/your-image.jpg)
```

3. Commit and push. The build pipeline will pick it up.

## Allowed categories

To keep filtering tidy, use one of these:

- `Signal-Based Prospecting`
- `B2B Lead Generation`
- `Cold Email Outreach`
- `Email Deliverability`
- `LinkedIn Lead Generation`
- `Prospect List Building`
- `Sales Prospecting`
- `Email Verification`

(Anything else still works — it'll just appear as its own filter.)

## Slug rules

- Lowercase, hyphenated, no spaces. Example: `cold-email-deliverability-guide`.
- The slug becomes the URL: `/blog/your-slug`.

## Cover images (optional)

Add `cover: "/images/blog/your-image.jpg"` to the frontmatter and place the image under `public/images/blog/`. Recommended size: 1600×900.

## Reading time

If you omit `readTime`, it auto-calculates from word count. To override, just set `readTime: "10 min read"`.

## Editing existing posts

Just edit the `.mdx` file. The URL and slug stay the same, so SEO and links stay intact.

## Need help?

The blog automatically:
- Sorts posts by date (newest first).
- Generates the sitemap entries.
- Calculates reading time.
- Renders Markdown to clean HTML with brand styling.

If something breaks, check the frontmatter syntax — that's 99% of the time the issue.
