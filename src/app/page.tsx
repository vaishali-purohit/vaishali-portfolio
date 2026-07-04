import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ProjectsPreview from "@/components/sections/ProjectsPreview";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <AboutPreview />
      <ProjectsPreview />
    </div>
  );
}
