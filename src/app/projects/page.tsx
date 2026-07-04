import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Projects & Case Studies</h1>

      <p className="mt-4 text-gray-600">
        A collection of production systems I’ve built across AI platforms,
        enterprise applications, and real-time systems.
      </p>

      <div className="mt-10 space-y-6">
        {/* MODELIA */}
        <Link
          href="/projects/modelia"
          className="block border p-5 rounded-md hover:bg-gray-50"
        >
          <h2 className="font-semibold">AI Fashion Platform (Modelia)</h2>
          <p className="text-sm text-gray-600 mt-1">
            AI-powered fashion studio serving 100k+ users with SSR/CSR hybrid
            architecture.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            React • TypeScript • Node.js • AI Systems
          </p>
        </Link>

        {/* AXA */}
        <div className="border p-5 rounded-md">
          <h2 className="font-semibold">Enterprise Insurance System (AXA)</h2>
          <p className="text-sm text-gray-600 mt-1">
            Built scalable insurance claim system improving processing
            efficiency by 40%.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            React • TypeScript • REST APIs • Enterprise Systems
          </p>
        </div>

        {/* DEQODE */}
        <div className="border p-5 rounded-md">
          <h2 className="font-semibold">
            Real-time Taxi + Trading Systems (DEQODE)
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Built WebSocket-based taxi tracking system + trading UI handling
            real-time data.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            React • Node.js • WebSockets • Google Maps
          </p>
        </div>
      </div>
    </div>
  );
}
