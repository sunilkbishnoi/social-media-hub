import { Navigation } from "@/components/navigation"
import { AdvancedSearch } from "@/components/advanced-search"
import { SocialMediaHub } from "@/components/social-media-hub"
import { AboutMe } from "@/components/about-me"
import { Contact } from "@/components/contact"
import { ProjectsShowcase } from "@/components/projects-showcase"
import { VisualEnhancements } from "@/components/visual-enhancements"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navigation />
      <AdvancedSearch />
      <SocialMediaHub />
      <AboutMe />
      <ProjectsShowcase />
      <Contact />
      <VisualEnhancements />
    </main>
  )
}

