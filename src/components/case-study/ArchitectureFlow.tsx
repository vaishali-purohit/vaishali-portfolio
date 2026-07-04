import type { ProjectCaseStudy } from "@/lib/constants"

export function ArchitectureFlow({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
      {items.map((step, i) => (
        <div key={step} className="flex items-center gap-2 md:gap-4">
          <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100">
            {step}
          </div>
          {i < items.length - 1 && (
            <span className="hidden text-gray-400 md:inline">→</span>
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
          className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
        >
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {item.metric}
          </div>
          <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {item.detail}
          </div>
        </div>
      ))}
    </div>
  )
}
