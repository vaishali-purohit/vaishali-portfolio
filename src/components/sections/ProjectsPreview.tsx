"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Button from "@/components/ui/Button"
import RevealOnScroll from "@/components/ui/RevealOnScroll"
import { PROJECTS } from "@/lib/constants"

const CASE_STUDY_SLUGS = new Set(["modelia", "axa", "deqode", "msc-eo-ai"])

export default function ProjectsPreview() {
  const rest = PROJECTS.filter((project) => !CASE_STUDY_SLUGS.has(project.slug))

  if (rest.length === 0) return null

  return (
    <section className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-xl font-semibold text-foreground">
          Other Work
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {rest.map((project, i) => (
            <RevealOnScroll key={project.slug} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex h-full flex-col justify-between rounded-lg border border-border bg-background p-6 hover:shadow-md"
              >
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="font-semibold text-foreground hover:underline">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.tagline}
                  </p>
                </Link>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/projects" variant="secondary">
            View detailed engineering breakdown →
          </Button>
        </div>
      </div>
    </section>
  )
}
