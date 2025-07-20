"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero"
import AboutSection from "@/components/about"
import SkillsSection from "@/components/skills"
import ProjectsSection from "@/components/projects"
import CompetitionsSection from "@/components/competitions"
import ExperienceSection from "@/components/experience"
import GallerySection from "@/components/gallery"
import ContactSection from "@/components/contact"
import Footer from "@/components/footer"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CompetitionsSection />
      <ExperienceSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  )
}
