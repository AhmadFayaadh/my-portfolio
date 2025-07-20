"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image" // Import Image component

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 to-gray-800 pt-16 text-white"
    >
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Image // Use Image component
            src="/images/profile/foto-profile.jpeg"
            alt="Ahmad Fayaadh Baisa"
            width={160} 
            height={160} 
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto mb-8 border-4 border-white shadow-lg object-cover"
            priority // Load this image with high priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Ahmad Fayaadh Baisa</h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
          Cybersecurity Enthusiast & Informatics Student
        </p>
        <Button
          onClick={() => scrollToSection("about")}
          className="bg-blue-600 hover:bg-blue-500 hover:shadow-blue-500/50 hover:-translate-y-1 hover:ring-2 hover:ring-blue-500 
                    transition-all duration-300 text-white px-8 py-3 rounded-full text-lg font-medium">
          Learn More
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
