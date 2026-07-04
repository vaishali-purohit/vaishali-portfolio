import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">Projects</h1>

      <p className="mt-4 text-gray-600">
        Engineering case studies showcasing scalable systems, AI platforms, and
        real-time applications.
      </p>

      <div className="mt-10 space-y-8">
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            AI Fashion Platform (Modelia)
          </h2>
          <p className="mt-2 text-gray-600">
            AI-powered fashion studio supporting 100k+ users with SSR/CSR hybrid
            architecture.
          </p>
          <Link
            href="/projects/modelia"
            className="mt-3 inline-block text-sm underline"
          >
            View Case Study →
          </Link>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">
            Enterprise Insurance System (AXA)
          </h2>
          <p className="mt-2 text-gray-600">
            Improved claim processing workflows by 40% using React + TypeScript
            systems.
          </p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold">Real-time Taxi Platform</h2>
          <p className="mt-2 text-gray-600">
            Built WebSocket-based live tracking system for 5,000+ daily rides.
          </p>
        </div>
      </div>
    </div>
  );
}
