export default function CTA() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t text-center">
      <h2 className="text-2xl font-semibold">
        Open to Remote & Ready to Relocate
      </h2>

      <p className="mt-4 text-gray-600">
        I’m currently looking for Senior Full-Stack / AI Engineering roles where
        I can contribute to scalable systems and product-driven teams.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <a href="/resume" className="px-6 py-2 bg-black text-white rounded-md">
          Download Resume
        </a>

        <a
          href="mailto:vaishalipurohit12@gmail.com"
          className="px-6 py-2 border rounded-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
