import Link from "next/link"

export default function AboutPreview() {
  return (
    <section className="border-t border-gray-200 bg-muted dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          About
        </h2>

        <div className="mt-6 max-w-2xl text-gray-700 dark:text-gray-300">
          <p>
            Senior engineer with experience across AI platforms, enterprise
            systems, and real-time applications. Currently pursuing MSc in Data
            Science at University of Leicester with a focus on applied AI and
            scalable systems.
          </p>
        </div>

        <Link
          href="/about"
          className="mt-4 inline-block text-sm font-medium text-gray-900 underline underline-offset-4 hover:no-underline dark:text-gray-100"
        >
          Read more →
        </Link>
      </div>
    </section>
  )
}
