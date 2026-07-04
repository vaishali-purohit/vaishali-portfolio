import Container from "@/components/ui/Container"
import { SITE_CONFIG } from "@/lib/constants"

export default function ContactPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Contact
        </h1>

        <p className="mt-6 max-w-xl text-gray-700 dark:text-gray-300">
          Feel free to reach out for full-time roles, consulting, or
          collaborations on AI, enterprise systems, or real-time platforms.
        </p>

        <div className="mt-10 max-w-xl space-y-4 text-gray-700 dark:text-gray-300">
          <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-1 block text-base font-medium hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              LinkedIn
            </div>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-base font-medium hover:underline"
            >
              {SITE_CONFIG.linkedin.replace("https://", "")}
            </a>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-base font-medium hover:underline"
            >
              {SITE_CONFIG.github.replace("https://", "")}
            </a>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Location
            </div>
            <p className="mt-1 text-base font-medium">{SITE_CONFIG.location}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
