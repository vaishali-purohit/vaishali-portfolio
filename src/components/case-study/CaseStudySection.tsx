"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import RevealOnScroll from "@/components/ui/RevealOnScroll"
import { ArchitectureFlow } from "@/components/case-study/ArchitectureFlow"
import { useViewMode } from "@/context/ViewModeContext"
import type { ProjectCaseStudy } from "@/lib/constants"

const SVGArchitectureDiagram = dynamic(
  () =>
    import("@/components/case-study/ArchitectureDiagram").then(
      (m) => m.ArchitectureDiagram,
    ),
  {
    loading: () => (
      <div className="h-64 w-full animate-pulse rounded-lg bg-muted" />
    ),
  },
)

export function CaseStudySection({ project }: { project: ProjectCaseStudy }) {
  const { mode } = useViewMode()
  const isDeepDive = mode === "deepdive"

  return (
    <article className="border-t border-border py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <RevealOnScroll>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              {project.client} · {project.period}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {project.problem}
            </p>

            <h4 className="mt-6 text-sm font-semibold text-foreground">
              {project.design.title}
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {(isDeepDive
                ? project.design.items
                : project.design.items.slice(0, 3)
              ).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {isDeepDive && (
              <>
                <h4 className="mt-6 text-sm font-semibold text-foreground">
                  Engineering Trade-offs
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {project.tradeoffs.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-accent">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              {project.impact.slice(0, isDeepDive ? 4 : 2).map((item) => (
                <div
                  key={item.metric}
                  className="rounded-md border border-border bg-muted px-3 py-2"
                >
                  <div className="text-lg font-bold text-foreground">
                    {item.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="mt-6 inline-block text-sm font-medium text-accent underline underline-offset-4 hover:no-underline"
            >
              Read full case study →
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.08}>
          <div className="flex h-full items-center justify-center rounded-lg border border-border bg-muted p-6">
            {isDeepDive ? (
              <SVGArchitectureDiagram nodes={project.architectureFlow} />
            ) : (
              <ArchitectureFlow items={project.architectureFlow} />
            )}
          </div>
        </RevealOnScroll>
      </div>
    </article>
  )
}
