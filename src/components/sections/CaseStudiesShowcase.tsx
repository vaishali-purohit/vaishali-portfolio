import { CaseStudySection } from "@/components/case-study/CaseStudySection"
import ViewModeToggle from "@/components/ui/ViewModeToggle"
import { PROJECTS } from "@/lib/constants"

const FEATURED_SLUGS = ["modelia", "axa", "deqode", "msc-eo-ai"]

export default function CaseStudiesShowcase() {
  const featured = FEATURED_SLUGS.map((slug) =>
    PROJECTS.find((project) => project.slug === slug),
  ).filter((project): project is NonNullable<typeof project> => Boolean(project))

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            Case Studies
          </h2>
          <ViewModeToggle />
        </div>

        {featured.map((project) => (
          <CaseStudySection key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
