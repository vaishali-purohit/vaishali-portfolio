import Container from "@/components/ui/Container"
import { SITE_CONFIG } from "@/lib/constants"

export default function ContactPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-3xl font-semibold text-foreground">
          Contact
        </h1>

        <p className="mt-6 max-w-xl text-muted-foreground">
          Feel free to reach out for full-time roles, consulting, or
          collaborations on AI, enterprise systems, or real-time platforms.
        </p>

        <div className="mt-10 max-w-xl space-y-4 text-muted-foreground">
          <div className="rounded-lg border border-border bg-background p-5">
            <div className="text-sm text-muted-foreground">Email</div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-1 block text-base font-medium hover:underline"
            >
              {SITE_CONFIG.email}
            </a>
          </div>

          <div className="rounded-lg border border-border bg-background p-5">
            <div className="text-sm text-muted-foreground">
              LinkedIn
            </div>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-base font-medium hover:underline"
            >
              {SITE_CONFIG.linkedin.replace("https://", "")}
            </a>
          </div>

          <div className="rounded-lg border border-border bg-background p-5">
            <div className="text-sm text-muted-foreground">GitHub</div>
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-base font-medium hover:underline"
            >
              {SITE_CONFIG.github.replace("https://", "")}
            </a>
          </div>

          <div className="rounded-lg border border-border bg-background p-5">
            <div className="text-sm text-muted-foreground">
              Location
            </div>
            <p className="mt-1 text-base font-medium">{SITE_CONFIG.location}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
