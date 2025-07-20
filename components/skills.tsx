import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Server, PenToolIcon as Tool } from "lucide-react" // Import icons

const skills = {
  cybersecurity: {
    icon: Shield,
    color: "text-blue-500",
    badges: [
      { name: "CTF Competitions", bg: "bg-blue-100", text: "text-blue-800" },
      { name: "Ethical Hacking", bg: "bg-blue-200", text: "text-blue-900" },
      { name: "Penetration Testing", bg: "bg-blue-100", text: "text-blue-800" },
      { name: "Network Security", bg: "bg-blue-100", text: "text-blue-800" },
    ],
  },
  Website: {
    icon: Code,
    color: "text-green-500",
    badges: [
      { name: "HTML", bg: "bg-green-100", text: "text-green-800" },
      { name: "CSS", bg: "bg-green-200", text: "text-green-900" },
      { name: "JavaScript", bg: "bg-green-100", text: "text-green-800" },
      { name: "Next.js", bg: "bg-green-100", text: "text-green-800" },
    ],
  },
  systems: {
    icon: Server,
    color: "text-purple-500",
    badges: [
      { name: "Linux (Kali, Ubuntu)", bg: "bg-purple-100", text: "text-purple-800" },
      { name: "Windows", bg: "bg-purple-200", text: "text-purple-900" },
      { name: "Virtual Machines", bg: "bg-purple-100", text: "text-purple-800" },
    ],
  },
  tools: {
    icon: Tool,
    color: "text-yellow-500",
    badges: [
      { name: "Figma", bg: "bg-yellow-100", text: "text-yellow-800" },
      { name: "Burp Suite", bg: "bg-yellow-200", text: "text-yellow-900" },
      { name: "Wireshark", bg: "bg-yellow-100", text: "text-yellow-800" },
      { name: "Nmap", bg: "bg-yellow-100", text: "text-yellow-800" },
      { name: "Git", bg: "bg-yellow-200", text: "text-yellow-900" },
      { name: "VS Code", bg: "bg-yellow-100", text: "text-yellow-800" },
    ],
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, data]) => {
            const Icon = data.icon
            return (
              <Card
                key={category}
                className="hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:border-blue-500 transition-all duration-300 flex flex-col">
                <CardHeader className="flex flex-col items-center space-y-3 pb-4">
                  <Icon className={`h-8 w-8 ${data.color}`} />
                  <CardTitle className="text-xl text-navy-900 capitalize text-center">{category}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap justify-center gap-2">
                    {data.badges.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className={`${skill.bg} ${skill.text} text-xs px-4 py-2 rounded-full cursor-pointer 
                                   hover:bg-blue-600 hover:text-white hover:shadow-md hover:shadow-blue-500/40 
                                   transition-all duration-200 border border-transparent`}>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
