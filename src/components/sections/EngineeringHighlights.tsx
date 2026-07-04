import { HIGHLIGHTS } from "@/lib/constants"
import RevealOnScroll from "@/components/ui/RevealOnScroll"

export default function EngineeringHighlights() {
  return (
    <section className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold text-foreground">
          Engineering Highlights
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {HIGHLIGHTS.map((highlight, i) => (
            <RevealOnScroll key={highlight} delay={i * 0.05}>
              <div className="rounded-lg border border-border bg-background p-5">
                <p className="text-sm font-medium text-foreground">
                  {highlight}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}