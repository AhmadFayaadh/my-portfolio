"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Trophy } from "lucide-react"

const competitions = [
  {
    name: "ARA 6.0 CTF 2024",
    status: "Top 50",
    description: "Capture The Flag competition with web exploitation, cryptography, and forensics challenges",
  },
  {
    name: "Permikomnas CTF 2025",
    status: "Participated",
    description: "National cybersecurity competition organized by Indonesian Computer Student Association",
  },
  {
    name: " FindIT 2025",
    status: "Participated",
    description: "Capture The Flag competition with web exploitation, cryptography, and forensics challenges",
  },  
  {
    name: "ACADefence Challenge 2025",
    status: "Participated",
    description: "Advanced cybersecurity competition focusing on defense strategies and incident response",
  },
]

export default function CompetitionsSection() {
  return (
    <section id="competitions" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Competitions & Writeups</h2>
        <div className="space-y-4 mb-8">
          {competitions.map((competition, index) => (
            <Card
              key={index}
              className="hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 hover:border-blue-500 transition-all duration-300"
            >
              <CardContent className="py-6">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-navy-900" />
                    <h3 className="font-semibold text-gray-900">{competition.name}</h3>
                  </div>
                  <Badge variant={competition.status === "Top 50" ? "default" : "secondary"}>
                    {competition.status}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">{competition.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="outline"
            className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white hover:shadow-md hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 bg-transparent"
            onClick={() => window.open("https://github.com/AhmadFayaadh/CTF-Writeups", "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            View CTF Writeups
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
