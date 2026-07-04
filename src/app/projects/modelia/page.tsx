export default function ModeliaCaseStudy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold">AI Fashion Platform (Modelia)</h1>

      <p className="mt-4 text-gray-600">
        A large-scale AI-powered fashion studio supporting image generation,
        asset management, and designer workflows for 100k+ users.
      </p>

      {/* PROBLEM */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Problem Statement</h2>
        <p className="mt-3 text-gray-700">
          The platform required supporting high-latency AI image generation
          workflows while maintaining a responsive user experience. The system
          needed to scale to 100k+ users while handling unpredictable
          compute-heavy operations.
        </p>
      </section>

      {/* SYSTEM DESIGN */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">System Design</h2>
        <p className="mt-3 text-gray-700">
          I worked on a hybrid SSR/CSR architecture where:
        </p>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• SSR handled initial rendering for performance + SEO</li>
          <li>• CSR handled interactive AI workflows</li>
          <li>• Node.js APIs managed request orchestration</li>
          <li>• AI jobs were processed asynchronously</li>
        </ul>

        <div className="mt-6 p-4 border rounded-md bg-gray-50 text-sm">
          Frontend (React SSR/CSR)
          {" → "} API Layer (Node.js)
          {" → "} AI Processing Queue
          {" → "} Model Execution Layer
          {" → "} Storage/CDN
        </div>
      </section>

      {/* CONTRIBUTION */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">My Contributions</h2>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• Designed and implemented hybrid SSR/CSR architecture</li>
          <li>• Built backend APIs for AI workflow orchestration</li>
          <li>• Integrated frontend with AI generation pipeline</li>
          <li>• Developed reusable component system (20+ components)</li>
          <li>• Collaborated with UX and product teams using Figma/Miro</li>
        </ul>
      </section>

      {/* TRADEOFFS */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Engineering Trade-offs</h2>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>
            • Chose SSR for initial load performance vs full CSR for simplicity
          </li>
          <li>• Used async job queue for AI processing to avoid blocking UI</li>
          <li>• Balanced real-time updates vs system scalability</li>
        </ul>
      </section>

      {/* IMPACT */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Impact</h2>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>• Supported 100k+ active users</li>
          <li>• Reduced response latency by 30%</li>
          <li>• Improved data loading performance by 25%</li>
          <li>• Reduced feature delivery time by 25%</li>
        </ul>
      </section>
    </div>
  );
}
