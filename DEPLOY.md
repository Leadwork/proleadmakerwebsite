# Deploy Guide — Pro Lead Maker

This document explains how to **build, verify, commit, and push** the redesigned site to GitHub.

## ✅ What was changed in this redesign

1. **Light theme** — replaced the dark/black UI with a clean white background and brand-tinted gradients (#7c3aed, #c026d3, #e91e8c).
2. **New homepage copy** — headline now reads *"Get Pre-Qualified B2B Leads That Actually Convert Into Clients"*. The free-sample CTA is now *"Get FREE Sample Leads Before You Order"*.
3. **Repeated CTAs throughout** — three reusable CTA blocks (`CTASection`, `MiniCTA`, inline) spread across the homepage with hooks like *Get FREE Sample Leads*, *Book a Strategy Call*, *Start Growing Your Outreach*.
4. **Calendly booking** — added `CalendlyBooking` section with lazy-loaded iframe (loads only when scrolled into view).
5. **Floating WhatsApp** — upgraded floating button now opens a friendly mini-card.
6. **12 high-quality blog posts** (covering signal-based prospecting, B2B lead gen, cold email outreach, prospect lists, LinkedIn lead generation, email verification, sales prospecting, deliverability, intent signals, common mistakes, agency systems, and email warmup).
7. **Easy blog publishing** — MDX-based system. Drop a `.mdx` file in `content/blog/` and it auto-publishes with auto-calculated reading time, sitemap, and structured data. See `content/blog/README.md`.
8. **Fiverr/Upwork review screenshots** — featured in `TestimonialsSection` and on the Results page as verified social proof.
9. **Performance + SEO** — AVIF/WebP images, immutable caching, deferred analytics, security headers, JSON-LD structured data per article, sitemap with all 12 posts, skip-to-content link, ARIA labels.
10. **Premium UI/UX polish** — modern cards, gradient accents, hover-glow, scroll reveals, marquee trust ticker, animated stats with progress bars, FAQ accordion.

## 🛠 Local build + verification

From `G:\Website\V 2`:

```bash
npm install        # if you haven't already
npm run build      # production build — should finish without errors
npm start          # serve the production build on http://localhost:3000
```

Click through these pages to verify nothing is broken:

- `/` (home) — hero, services, repeated CTAs, free sample form, stats, testimonials, Calendly, FAQ
- `/blog` — should show 12 posts, featured first, rest in a grid
- `/blog/signal-based-prospecting` (and any other slug) — full article with related posts
- `/services`, `/results`, `/about`, `/contact`, `/tools`

## 🚀 Push to GitHub

### One-time setup (if you haven't yet)

```bash
cd "G:\Website\V 2"
git init
git remote add origin https://github.com/Leadwork/proleadmaker-website.git
git branch -M main
```

### Commit and push the redesign

```bash
cd "G:\Website\V 2"
git add .
git commit -m "Major redesign: light theme, new copy, MDX blog system, Calendly, 12 posts, repeated CTAs"
git push -u origin main
```

If `main` already exists on the remote and you want to overwrite it:

```bash
git push -u origin main --force
```

### Windows PowerShell one-liner

```powershell
cd "G:\Website\V 2"; git add .; git commit -m "Major redesign: light theme, new copy, MDX blog, Calendly, 12 posts"; git push -u origin main
```

## 🌐 After pushing

1. Vercel / Netlify should auto-deploy from the `main` branch.
2. Confirm the live site shows the new light theme and the 12 blog posts under `/blog`.
3. Run Lighthouse: https://pagespeed.web.dev/ — target 100/100/100/100.

## 🧪 If anything fails

Common fixes:

| Issue | Fix |
| --- | --- |
| `npm run build` fails on missing deps | `rm -rf node_modules .next && npm install` |
| Blog posts not appearing | Check `content/blog/*.mdx` exists and has frontmatter |
| Calendly not loading | Set `siteConfig.calendly` in `src/lib/constants.ts` |
| WhatsApp button silent | Set `siteConfig.whatsapp` to a `https://wa.me/<number>` URL |

## 📝 Adding future blog posts

```bash
# Create a new MDX file:
echo "" > content/blog/your-new-post.mdx
# Add frontmatter + body, then:
git add content/blog/your-new-post.mdx
git commit -m "blog: add new post"
git push
```

Full publishing rules: see `content/blog/README.md`.
