import dynamic from "next/dynamic"
import Container from "@/components/ui/Container"
import Hero from "@/components/sections/Hero"
import { ViewModeProvider } from "@/context/ViewModeContext"

const EngineeringHighlights = dynamic(
  () => import("@/components/sections/EngineeringHighlights"),
)
const AboutPreview = dynamic(() => import("@/components/sections/AboutPreview"))
const CaseStudiesShowcase = dynamic(
  () => import("@/components/sections/CaseStudiesShowcase"),
)
const ProjectsPreview = dynamic(
  () => import("@/components/sections/ProjectsPreview"),
)
const CTA = dynamic(() => import("@/components/sections/CTA"))

export default function Home() {
  return (
    <Container>
      <div className="pb-20">
        <Hero />
        <ViewModeProvider>
          <EngineeringHighlights />
          <AboutPreview />
          <CaseStudiesShowcase />
          <ProjectsPreview />
          <CTA />
        </ViewModeProvider>
      </div>
    </Container>
  )
}
