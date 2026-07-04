import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Projects & Engineering Systems</h1>

      <p className="mt-4 text-gray-600">
        Production systems I’ve designed and contributed to across AI platforms,
        enterprise systems, and real-time applications.
      </p>

      <div className="mt-10 space-y-6">
        <Link
          href="/projects/modelia"
          className="block border p-5 rounded-md hover:bg-gray-50"
        >
          <h2 className="font-semibold">AI Fashion Platform (Modelia)</h2>
          <p className="text-sm text-gray-600 mt-1">
            SSR/CSR hybrid AI platform serving 100k+ users with 30% latency
            reduction.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            React • TypeScript • Node.js • AI Systems • System Design
          </p>
        </Link>

        <div className="border p-5 rounded-md">
          <h2 className="font-semibold">Enterprise Insurance System (AXA)</h2>
          <p className="text-sm text-gray-600 mt-1">
            Built scalable claim processing UI improving efficiency by 40%.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            React • TypeScript • REST APIs • Enterprise Systems
          </p>
        </div>

        <div className="border p-5 rounded-md">
          <h2 className="font-semibold">Real-time Taxi Platform (DEQODE)</h2>
          <p className="text-sm text-gray-600 mt-1">
            WebSocket-based live tracking system supporting 5,000+ daily rides.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            React • Node.js • WebSockets • Google Maps
          </p>
        </div>

        <div className="border p-5 rounded-md">
          <h2 className="font-semibold">
            Authentication & Security Systems (miniOrange)
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Worked on enterprise authentication plugins improving adoption by
            30%.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Wordpress • Security Systems • Enterprise Plugins
          </p>
        </div>
      </div>
    </div>
  );
}
