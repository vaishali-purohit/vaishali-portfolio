import type { ProjectCaseStudy } from "@/lib/constants"

export function ArchitectureFlow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
      {items.map((step, i) => (
        <div key={step} className="flex items-center gap-2 md:gap-4">
          <div className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground">
            {step}
          </div>
          {i < items.length - 1 && (
            <span className="hidden text-muted-foreground md:inline">→</span>
          )}
        </div>
      ))}
    </div>
  )
}

export function ImpactGrid({ items }: { items: ProjectCaseStudy["impact"] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.metric}
          className="rounded-lg border border-border bg-background p-5"
        >
          <div className="text-2xl font-bold text-foreground">
            {item.metric}
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            {item.detail}
          </div>
        </div>
      ))}
    </div>
  )
}
