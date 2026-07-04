import Container from "@/components/ui/Container"
import Hero from "@/components/sections/Hero"
import EngineeringHighlights from "@/components/sections/EngineeringHighlights"
import AboutPreview from "@/components/sections/AboutPreview"
import ProjectsPreview from "@/components/sections/ProjectsPreview"
import CTA from "@/components/sections/CTA"

export default function Home() {
  return (
    <Container>
      <div className="pb-20">
        <Hero />
        <EngineeringHighlights />
        <AboutPreview />
        <ProjectsPreview />
        <CTA />
      </div>
    </Container>
  )
}
