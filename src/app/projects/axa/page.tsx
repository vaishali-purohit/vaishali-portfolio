import { PROJECTS } from "@/lib/constants"
import { ProjectPage } from "@/components/case-study/ProjectPage"

export default function ProjectAXAPage() {
  const project = PROJECTS.find((p) => p.slug === "axa")
  if (!project) return null
  return <ProjectPage project={project} />
}
