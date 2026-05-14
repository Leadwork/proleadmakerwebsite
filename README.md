# Pro Lead Maker — Website

A modern, conversion-focused B2B lead generation agency site built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## ✨ What's inside

- **Light, premium theme** built on the brand palette: `#7c3aed`, `#c026d3`, `#e91e8c`
- **Conversion-focused homepage** with hero, services, social proof, repeated CTAs, FAQ, Calendly, and a strategic free-sample form
- **MDX-based blog** with 12 long-form posts on signal-based prospecting, cold email, LinkedIn lead gen, email verification, and more
- **Easy blog publishing** — drop a `.mdx` file in `content/blog/` and it auto-appears with auto-generated reading time, sitemap, and SEO
- **Floating WhatsApp chat** with expandable card
- **Calendly booking section** (lazy-loaded for performance)
- **Trust signals everywhere** — verified Fiverr/Upwork review screenshots, star ratings, badges
- **SEO-tuned** — JSON-LD structured data, sitemap, robots.txt, OG/Twitter cards, descriptive metadata
- **Performance-tuned** — AVIF/WebP images, immutable caching, deferred GA, lazy iframes, reduced-motion support
- **Accessibility-tuned** — skip-to-content link, focus rings, ARIA labels, semantic HTML

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint
```

## 🗂 Project structure

```
src/
  app/                       # Next.js app router pages
    page.tsx                 # Homepage
    blog/                    # Blog index + dynamic post page
    about/ contact/ services/ results/ tools/
    layout.tsx               # Root layout (Navbar, Footer, JSON-LD)
    globals.css              # Design system tokens + utility classes
    sitemap.ts robots.ts     # SEO
  components/
    home/                    # Homepage section components
    layout/                  # Navbar, Footer, WhatsAppFloat
    shared/                  # Background, Cursor, ScrollReveal, etc.
  lib/
    constants.ts             # Site config, services, testimonials, …
    blog.ts                  # MDX post reader (frontmatter, sort, related)
    markdown.ts              # Lightweight markdown → HTML renderer

content/
  blog/
    README.md                # How to publish new posts
    *.mdx                    # Each file is one blog post

public/
  images/
    Logo.png Team-Founder.jpg
    reviews/                 # Fiverr review screenshots
```

## 📝 Adding a new blog post

1. Create `content/blog/your-post-slug.mdx`.
2. Add frontmatter:

   ```mdx
   ---
   title: "Your Post Title"
   excerpt: "One-sentence summary."
   category: "B2B Lead Generation"
   date: "2026-05-15"
   readTime: "9 min read"
   author: "MD. Al Amin"
   tags: ["b2b", "outbound"]
   ---

   Your Markdown body…
   ```

3. Commit & push. Build picks it up automatically. Sitemap auto-updates.

Full guide: [`content/blog/README.md`](content/blog/README.md).

## 🎨 Design tokens

The light/brand design system lives in `src/app/globals.css`. Key utilities:

- `.btn-primary` `.btn-secondary` `.btn-ghost`
- `.card` `.glass` `.gradient-border`
- `.gradient-text` `.gradient-text-alt`
- `.chip` (eyebrow label)
- `.hero-bg` `.soft-bg` `.accent-bg`
- `.prose-light` (blog typography)

## 🔌 Integrations

- **Formspree** for the free-sample + contact forms (`siteConfig.formspree`)
- **Calendly** embedded booking widget (`siteConfig.calendly`)
- **WhatsApp** floating chat (`siteConfig.whatsapp`)
- **Google Analytics** loaded after interactive

All keys live in `src/lib/constants.ts`.

## 🚢 Deployment

The repo deploys cleanly to **Vercel** (recommended), **Netlify**, or any Node host that supports Next.js 16.

### Recommended Vercel settings

- Framework preset: Next.js
- Build command: `next build`
- Install command: `npm install`
- Node version: 20.x or higher

## 📊 Performance targets

The site is built to hit Lighthouse 100/100/100/100. Key optimizations:

- AVIF + WebP via `next/image`
- Lazy-loaded Calendly iframe (IntersectionObserver, 200px rootMargin)
- Deferred analytics (`strategy="afterInteractive"`)
- Immutable cache headers on `/images/*` and `/_next/static/*`
- Reduced-motion handling
- Semantic HTML + ARIA + skip link

## 📄 License

© Pro Lead Maker. All rights reserved.
