export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-28">
      <p className="text-sm text-gray-500 mb-4">
        Available for Remote / Singapore Opportunities
      </p>

      <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
        Senior Full-Stack Engineer
      </h1>

      <p className="mt-6 text-lg text-gray-700 max-w-2xl">
        I build scalable AI-powered web platforms using React, TypeScript, and
        Node.js. 7+ years of experience across enterprise systems and
        high-growth startups.
      </p>

      {/* NEW SECTION */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
        <div>✔ AI-powered production systems (100k+ users)</div>
        <div>✔ 30% performance improvement in live systems</div>
        <div>✔ SSR / CSR hybrid architecture design</div>
        <div>✔ 30+ reusable component systems built</div>
        <div>✔ Backend + frontend system ownership</div>
        <div>✔ Mentored engineers & led architecture decisions</div>
      </div>

      <div className="mt-10 flex gap-4">
        <a
          href="/projects/modelia"
          className="px-6 py-2 bg-black text-white rounded-md"
        >
          View Case Study
        </a>

        <a href="/resume" className="px-6 py-2 border rounded-md">
          Download Resume
        </a>
      </div>
    </section>
  );
}
