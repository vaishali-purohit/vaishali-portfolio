import { PROJECTS } from "@/lib/constants"
import { ProjectPage } from "@/components/case-study/ProjectPage"

export default function ProjectDeqodePage() {
  const project = PROJECTS.find((p) => p.slug === "deqode")
  if (!project) return null
  return <ProjectPage project={project} />
}
