"use client"

import { Menu, X } from "lucide-react"

interface NavigationProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollToSection: (sectionId: string) => void
}

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "competitions", label: "Competitions" },
  { id: "contact", label: "Contact" },
]

export default function Navigation({ isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="font-bold text-xl text-navy-900">AFB</div>
          <div className="hidden md:flex space-x-8 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-cyan-400 hover:scale-105 hover:underline underline-offset-4 transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button className="md:hidden ml-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 px-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-gray-600 hover:text-cyan-400 hover:scale-105 hover:underline underline-offset-4 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}