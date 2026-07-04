import Link from "next/link";

export default function ProjectsPreview() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t">
      <h2 className="text-xl font-semibold">Featured Case Studies</h2>

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-semibold text-lg">
            AI Fashion Platform (Modelia)
          </h3>
          <p className="text-gray-600 mt-2">
            Architected hybrid SSR/CSR system supporting AI image generation
            workflows for 100k+ users. Reduced latency by 30%.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Enterprise Insurance System (AXA)
          </h3>
          <p className="text-gray-600 mt-2">
            Built scalable React + TypeScript systems improving claim processing
            by 40% and reducing UI defects by 15%.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Real-time Taxi Platform</h3>
          <p className="text-gray-600 mt-2">
            Built live tracking system using WebSockets + Google Maps for 5,000+
            daily rides.
          </p>
        </div>
      </div>

      <Link href="/projects" className="mt-8 inline-block underline text-sm">
        View detailed engineering breakdown →
      </Link>
    </section>
  );
}
