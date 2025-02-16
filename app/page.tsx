import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { SocialMediaHub } from "@/components/social-media-hub"
import { AboutMe } from "@/components/about-me"
import { Contact } from "@/components/contact"
import { ProjectsShowcase } from "@/components/projects-showcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text transition-colors duration-300">
      <Navigation />
      <Hero />
      <SocialMediaHub />
      <AboutMe />
      <ProjectsShowcase />
      <Contact />
    </main>
  )
}

