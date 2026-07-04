import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import RevealOnScroll from "@/components/ui/RevealOnScroll"
import { AnimatedCounter } from "@/components/ui/AnimatedCounter"
import { SITE_CONFIG, METRICS } from "@/lib/constants"

export default function Hero() {
  return (
    <header className="relative overflow-hidden pb-20 pt-28">
      <Container>
        <RevealOnScroll>
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground">
              {SITE_CONFIG.location}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Senior Full-Stack Engineer
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Specialist in scalable AI systems and enterprise frontend architecture. Built AI platforms serving 100k+ users, optimized workflows by 40%, and delivered real-time systems for 5,000+ daily transactions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects/modelia">View Case Study</Button>
              <Button href={SITE_CONFIG.resume} variant="secondary">
                Download Resume
              </Button>
            </div>
          </div>
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {METRICS.map((metric, i) => (
            <RevealOnScroll key={metric.label} delay={i * 0.06}>
              <div className="rounded-lg border border-border bg-background p-6 text-center shadow-sm">
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </header>
  )
}
