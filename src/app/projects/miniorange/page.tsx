import { PROJECTS } from "@/lib/constants"
import { ProjectPage } from "@/components/case-study/ProjectPage"

export default function ProjectMiniOrangePage() {
  const project = PROJECTS.find((p) => p.slug === "miniorange")
  if (!project) return null
  return <ProjectPage project={project} />
}
