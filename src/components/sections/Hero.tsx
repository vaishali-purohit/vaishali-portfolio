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

      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <span className="px-3 py-1 border rounded-full">AI Platforms</span>
        <span className="px-3 py-1 border rounded-full">100k+ Users</span>
        <span className="px-3 py-1 border rounded-full">React / Node.js</span>
        <span className="px-3 py-1 border rounded-full">System Design</span>
      </div>

      <div className="mt-10 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-2 bg-black text-white rounded-md"
        >
          View Case Studies
        </a>

        <a href="/resume" className="px-6 py-2 border rounded-md">
          Download Resume
        </a>
      </div>
    </section>
  );
}
