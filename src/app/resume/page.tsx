import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { SITE_CONFIG } from "@/lib/constants"

export default function ResumePage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Resume
        </h1>

        <p className="mt-6 max-w-2xl text-gray-700 dark:text-gray-300">
          Download my resume or read the experience summary below.
        </p>

        <div className="mt-8">
          <Button href={SITE_CONFIG.resume} variant="primary">
            Download Resume
          </Button>
        </div>

        <div className="mt-16 max-w-3xl space-y-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Senior Software Engineer — Modelia
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              AI Platform · React, TypeScript, Node.js
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
              <li>
                Architected hybrid SSR/CSR system supporting 100k+ monthly users.
              </li>
              <li>
                Reduced response latency by 30% via caching, streaming, and async
                orchestration.
              </li>
              <li>
                Built reusable component system that improved feature delivery
                time by 25%.
              </li>
              <li>
                Led frontend system design and collaborated with ML teams on
                generation pipelines.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Software Engineer — AXA
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Enterprise Insurance Systems · React, TypeScript, REST APIs
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
              <li>
                Delivered scalable claim processing UI improving throughput by
                40%.
              </li>
              <li>
                Reduced UI defect escape rate by 15% via type safety and testing
                discipline.
              </li>
              <li>
                Standardized shared design system across 6 enterprise modules.
              </li>
              <li>
                Implemented lazy-loaded routes and optimistic updates for key
                workflows.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Solution Engineer — Deqode
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Real-time Systems · React, Node.js, WebSockets
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
              <li>
                Built live taxi tracking UI with Google Maps using WebSocket
                fan-out.
              </li>
              <li>
                Delivered sub-second location updates for 5,000+ daily rides.
              </li>
              <li>
                Optimized payload size and reconnection logic for mobile
                reliability.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Engineer — miniOrange
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Security Plugins · WordPress, SSO, Enterprise Auth
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
              <li>
                Designed extensible plugin architecture powering 8 SSO/MFA
                modules.
              </li>
              <li>
                Improved enterprise plugin adoption by 30% via streamlined admin
                UX.
              </li>
              <li>
                Introduced automated regression tests for common security exploit
                vectors.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
