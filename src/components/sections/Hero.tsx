export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <p className="text-sm text-gray-500 mb-4">Senior Full-Stack Engineer</p>

      <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
        I build scalable AI-powered web platforms
      </h1>

      <p className="mt-6 text-gray-600 max-w-2xl">
        7+ years of experience building production-grade applications using
        React, TypeScript, and Node.js. Experienced in AI systems, enterprise
        platforms, and real-time web applications.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="px-5 py-2 bg-black text-white rounded-md"
        >
          View Projects
        </a>

        <a href="/contact" className="px-5 py-2 border rounded-md">
          Contact Me
        </a>
      </div>
    </section>
  );
}
