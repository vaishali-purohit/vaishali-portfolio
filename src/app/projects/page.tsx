import Link from "next/link"
import Container from "@/components/ui/Container"
import { PROJECTS } from "@/lib/constants"

export default function ProjectsPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Projects &amp; Engineering Systems
        </h1>

        <p className="mt-6 max-w-2xl text-gray-700 dark:text-gray-300">
          Production systems I’ve designed and contributed to across AI
          platforms, enterprise systems, and real-time applications.
        </p>

        <div className="mt-12 space-y-8">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-lg border border-gray-200 bg-white p-6 transition hover:border-gray-400 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-600"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:underline dark:text-gray-100">
                  {project.title}
                </h2>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {project.client}
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {project.tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600 dark:border-gray-700 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}
