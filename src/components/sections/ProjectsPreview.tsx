import Button from "@/components/ui/Button"
import { PROJECTS } from "@/lib/constants"

export default function ProjectsPreview() {
  const featured = PROJECTS.slice(0, 3)

  return (
    <section className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-xl font-semibold text-foreground">
          Featured Case Studies
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between rounded-lg border border-border bg-background p-6 transition hover:border-border dark:hover:border-muted-foreground"
            >
              <div>
                <h3 className="font-semibold text-foreground group-hover:underline">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-muted-foreground">
                  {project.tagline}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/projects" variant="secondary">
            View detailed engineering breakdown →
          </Button>
        </div>
      </div>
    </section>
  )
}
