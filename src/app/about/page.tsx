import Container from "@/components/ui/Container"
import { TECH_STACK } from "@/lib/constants"

export default function AboutPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          About Me
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 text-gray-700 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            I am a Senior Full-Stack Engineer with 7+ years of experience
            building scalable web applications and AI-powered platforms. I
            specialize in React, TypeScript, Node.js, and system design, with a
            track record of leading teams and delivering production-grade systems
            across startup and enterprise environments.
          </p>

          <p className="leading-relaxed">
            My work spans hybrid SSR/CSR architectures, real-time WebSocket
            applications, and enterprise authentication systems. I focus on
            reducing latency, improving developer velocity through reusable
            component systems, and making data-driven product decisions.
          </p>

          <p className="leading-relaxed">
            Currently pursuing an MSc in Data Science at the University of
            Leicester, with a focus on AI systems, applied ML, and large-scale
            data workflows.
          </p>

          <div className="mt-10">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Core Focus Areas
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
