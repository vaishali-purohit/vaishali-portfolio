import Container from "@/components/ui/Container"
import { FOCUS_AREAS, HIGHLIGHTS } from "@/lib/constants"

export default function AboutPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold text-foreground">
          About Me
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            Senior Full-Stack Engineer with 7+ years building scalable web applications, AI-powered platforms, and real-time systems. I specialize in React, TypeScript, Node.js, and system design, with a track record of leading teams and delivering production-grade systems across startup and enterprise environments.
          </p>

          <p className="leading-relaxed">
            My work spans hybrid SSR/CSR architectures, real-time WebSocket applications, and enterprise authentication systems. I focus on reducing latency, improving developer velocity through reusable component systems, and making data-driven product decisions.
          </p>

          <p className="leading-relaxed">
            Currently pursuing an MSc in Data Science at the University of Leicester, with a focus on AI systems, applied ML, and large-scale data workflows.
          </p>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              Core Focus Areas
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {FOCUS_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-foreground">
              Engineering Highlights
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              {HIGHLIGHTS.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  )
}
