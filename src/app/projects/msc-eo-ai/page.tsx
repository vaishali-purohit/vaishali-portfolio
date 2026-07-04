import { PROJECTS } from "@/lib/constants"
import { ProjectPage } from "@/components/case-study/ProjectPage"

export default function MSCEOProjectPage() {
  const project = PROJECTS.find((p) => p.slug === "msc-eo-ai")
  if (!project) return null
  return <ProjectPage project={project} />
}
