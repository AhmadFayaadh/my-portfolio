import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  cybersecurity: [
    "CTF Competitions",
    "Ethical Hacking",
    "Penetration Testing",
    "Vulnerability Assessment",
    "Network Security",
  ],
  programming: ["HTML", "CSS", "JavaScript", "Python", "C", "SQL", "Java", "React", "Next.js"],
  systems: ["Linux (Kali, Ubuntu)", "Windows", "Virtual Machines", "Docker"],
  tools: ["Figma", "Burp Suite", "Wireshark", "Metasploit", "Nmap", "Git", "VS Code"],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-navy-900">Cybersecurity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.cybersecurity.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-navy-100 text-navy-900 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-navy-900">Programming</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-900 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-navy-900">Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.systems.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-900 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-navy-900">Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-green-100 text-green-900 text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
