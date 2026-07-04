import Link from "next/link";

export default function ProjectsPreview() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 border-t">
      <h2 className="text-xl font-semibold">Featured Projects</h2>

      <div className="mt-6 space-y-4">
        <div>
          <h3 className="font-medium">AI Fashion Platform (Modelia)</h3>
          <p className="text-sm text-gray-600">
            AI-powered fashion studio serving 100k+ users with SSR/CSR hybrid
            architecture.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Enterprise Insurance System (AXA)</h3>
          <p className="text-sm text-gray-600">
            Improved claim processing by 40% using React + TypeScript systems.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Real-time Taxi Platform</h3>
          <p className="text-sm text-gray-600">
            Built live tracking system using WebSockets and Google Maps APIs.
          </p>
        </div>
      </div>

      <Link href="/projects" className="mt-4 inline-block text-sm underline">
        View all projects
      </Link>
    </section>
  );
}
