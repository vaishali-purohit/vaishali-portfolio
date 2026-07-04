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
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Case Study
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-100">
            {project.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Client: {project.client}
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            {project.tagline}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700 dark:border-gray-700 dark:text-gray-200"
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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Problem Statement
          </h2>
          <p className="mt-3 max-w-3xl text-gray-700 dark:text-gray-300">
            {project.problem}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {project.design.title}
          </h2>
          <p className="mt-3 max-w-3xl text-gray-700 dark:text-gray-300">
            I worked on a {project.design.title.toLowerCase()} where:
          </p>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            {project.design.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900">
            <ArchitectureFlow items={project.architectureFlow} />
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            My Contributions
          </h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Engineering Trade-offs
          </h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
            {project.tradeoffs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Impact
          </h2>
          <div className="mt-6">
            <ImpactGrid items={project.impact} />
          </div>
        </Section>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <Link
            href="/projects"
            className="text-sm font-medium text-gray-900 underline underline-offset-4 hover:no-underline dark:text-gray-100"
          >
            ← Back to all projects
          </Link>
        </div>
      </article>
    </Container>
  )
}
