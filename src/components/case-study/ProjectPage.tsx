import Container from "@/components/ui/Container"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import Link from "next/link"
import {
  ArchitectureFlow,
  ImpactGrid,
} from "@/components/case-study/ArchitectureFlow"
import { SITE_CONFIG } from "@/lib/constants"
import type { ProjectCaseStudy } from "@/lib/constants"

export function ProjectPage({ project }: { project: ProjectCaseStudy }) {
  return (
    <Container>
      <article className="py-20">
        <header className="max-w-3xl">
          <p className="text-sm text-muted-foreground">
            Case Study
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {project.client} &middot; {project.period}
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Button href={SITE_CONFIG.resume} variant="secondary">
              Download Resume
            </Button>
          </div>
        </header>

        <Section>
          <h2 className="text-xl font-semibold text-foreground">
            Problem Statement
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            {project.problem}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-semibold text-foreground">
            {project.design.title}
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            I worked on a {project.design.title.toLowerCase()} where:
          </p>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-muted-foreground">
            {project.design.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-border bg-muted p-6">
            <ArchitectureFlow items={project.architectureFlow} />
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-semibold text-foreground">
            My Contributions
          </h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-muted-foreground">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="text-xl font-semibold text-foreground">
            Engineering Trade-offs
          </h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-muted-foreground">
            {project.tradeoffs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="text-xl font-semibold text-foreground">
            Impact
          </h2>
          <div className="mt-6">
            <ImpactGrid items={project.impact} />
          </div>
        </Section>

        <div className="mt-12 border-t border-border pt-8">
          <Link
            href="/projects"
            className="text-sm font-medium text-foreground underline underline-offset-4 hover:no-underline"
          >
            ← Back to all projects
          </Link>
        </div>
      </article>
    </Container>
  )
}
