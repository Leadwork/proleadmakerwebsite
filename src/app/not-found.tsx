import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center hero-bg px-5">
      <div className="text-center max-w-lg">
        <div className="chip mb-5">
          <span>404 — Page Not Found</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold gradient-text font-display mb-4">
          We can&apos;t find that page
        </h1>
        <p className="text-ink-600 mb-8 leading-relaxed">
          The page you&apos;re looking for may have moved or never existed. In the meantime,
          here are a few good places to go.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/blog" className="btn-secondary">Read the Blog</Link>
          <Link href="/#free-sample" className="btn-ghost">🎁 FREE Sample Leads →</Link>
        </div>
      </div>
    </section>
  );
}
