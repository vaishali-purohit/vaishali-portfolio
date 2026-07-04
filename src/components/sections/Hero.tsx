import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import { SITE_CONFIG, METRICS } from "@/lib/constants"

export default function Hero() {
  return (
    <header className="relative overflow-hidden pb-20 pt-28">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {SITE_CONFIG.location}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl dark:text-gray-100">
            {SITE_CONFIG.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-gray-700 md:text-xl dark:text-gray-300">
            {SITE_CONFIG.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects/modelia">View Case Study</Button>
            <Button href={SITE_CONFIG.resume} variant="secondary">
              Download Resume
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </header>
  )
}
