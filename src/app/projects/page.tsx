import Link from "next/link"
import Container from "@/components/ui/Container"
import { PROJECTS } from "@/lib/constants"

export default function ProjectsPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold text-foreground">
          Projects &amp; Engineering Systems
        </h1>

        <p className="mt-6 max-w-2xl text-muted-foreground">
          Production systems I’ve designed and contributed to across AI
          platforms, enterprise systems, and real-time applications.
        </p>

        <div className="mt-12 space-y-8">
          {PROJECTS.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-lg border border-border bg-background p-6 transition hover:border-muted-foreground"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-lg font-semibold text-foreground group-hover:underline">
                  {project.title}
                </h2>
                  <span className="text-xs text-muted-foreground">
                  {project.client}
                </span>
              </div>

                <p className="mt-2 text-sm text-muted-foreground">
                {project.tagline}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
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
