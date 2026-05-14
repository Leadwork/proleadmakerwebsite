import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  cover?: string;
  tags?: string[];
};

export type BlogPost = BlogPostMeta & { content: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function ensureDir(): void {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

export function getAllPostFiles(): string[] {
  ensureDir();
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
  const files = getAllPostFiles();
  const posts = files.map((file): BlogPostMeta => {
    const slug = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      category: data.category ?? "B2B Lead Generation",
      date: data.date ?? new Date().toISOString().slice(0, 10),
      readTime: data.readTime ?? `${Math.max(1, Math.round(rt.minutes))} min read`,
      author: data.author ?? "MD. Al Amin",
      cover: data.cover,
      tags: data.tags ?? [],
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureDir();
  const candidates = [
    path.join(BLOG_DIR, `${slug}.mdx`),
    path.join(BLOG_DIR, `${slug}.md`),
  ];
  const filePath = candidates.find((p) => fs.existsSync(p));
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "B2B Lead Generation",
    date: data.date ?? new Date().toISOString().slice(0, 10),
    readTime: data.readTime ?? `${Math.max(1, Math.round(rt.minutes))} min read`,
    author: data.author ?? "MD. Al Amin",
    cover: data.cover,
    tags: data.tags ?? [],
    content,
  };
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostMeta[] {
  const current = getAllPosts().find((p) => p.slug === slug);
  if (!current) return [];
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === current.category)
    .slice(0, limit);
}
