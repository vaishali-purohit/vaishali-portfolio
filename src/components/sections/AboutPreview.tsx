import Link from "next/link"

export default function AboutPreview() {
  return (
    <section className="border-t border-border bg-muted">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold text-foreground">
          About
        </h2>

        <div className="mt-6 max-w-2xl text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Senior Full-Stack Engineer with 7+ years building scalable web applications,
            AI-powered platforms, and real-time systems. Currently pursuing MSc in Data
            Science at University of Leicester with a focus on applied AI and scalable systems.
          </p>
        </div>

        <Link
          href="/about"
          className="mt-6 inline-block text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
        >
          Read more →
        </Link>
      </div>
    </section>
  )
}
