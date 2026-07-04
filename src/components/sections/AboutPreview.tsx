import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t">
      <h2 className="text-xl font-semibold">About</h2>

      <p className="mt-4 text-gray-600">
        Senior engineer with experience across AI platforms, enterprise systems,
        and real-time applications. Currently pursuing MSc in Data Science at
        University of Leicester.
      </p>

      <Link href="/about" className="mt-4 inline-block text-sm underline">
        Read more
      </Link>
    </section>
  );
}
