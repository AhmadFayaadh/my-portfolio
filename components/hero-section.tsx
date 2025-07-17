"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16"
    >
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <img
            src="/images/profile/ahmad-fayaadh-profile.jpg"
            alt="Ahmad Fayaadh Baisa"
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-8 border-4 border-white shadow-lg object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Ahmad Fayaadh Baisa</h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8 font-light">
          Cybersecurity Enthusiast & Informatics Student
        </p>
        <Button
          onClick={() => scrollToSection("about")}
          className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-lg"
        >
          Learn More
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
