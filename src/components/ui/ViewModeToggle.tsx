"use client"

import { useViewMode, type ViewMode } from "@/context/ViewModeContext"

const OPTIONS: { value: ViewMode; label: string; hint: string }[] = [
  { value: "overview", label: "Overview", hint: "Recruiter mode" },
  { value: "deepdive", label: "Deep Dive", hint: "Engineer mode" },
]

export default function ViewModeToggle() {
  const { mode, setMode } = useViewMode()

  return (
    <div
      role="group"
      aria-label="Content depth"
      className="inline-flex items-center rounded-full border border-border bg-muted p-1"
    >
      {OPTIONS.map((option) => {
        const active = mode === option.value
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => setMode(option.value)}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${
              active
                ? "bg-accent text-accent-fg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {option.label}
            <span className="ml-1.5 hidden font-mono text-[10px] uppercase tracking-wide opacity-70 sm:inline">
              {option.hint}
            </span>
          </button>
        )
      })}
    </div>
  )
}
