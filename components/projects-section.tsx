import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projectsData = [
  {
    title: "ObatKu",
    role: "UI/UX Designer",
    description:
      "Mobile application designed to help users find medicines and nearby pharmacies with an intuitive interface. Features include medicine search, pharmacy locator, and prescription management.",
    type: "Mobile App Design",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Figma", "UI/UX Design", "Mobile Design", "Prototyping"],
  },
  {
    title: "Pemula Travel",
    role: "UI/UX Designer",
    description:
      "Travel booking website with clean and modern interface for flight ticket reservations. Includes search functionality, booking flow, and payment integration design.",
    type: "Web Design",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Figma", "Web Design", "User Research", "Wireframing"],
  },
  {
    title: "CTF Writeups Repository",
    role: "Security Researcher",
    description:
      "Comprehensive collection of Capture The Flag competition solutions and writeups. Covers web exploitation, cryptography, forensics, and reverse engineering challenges.",
    type: "Cybersecurity",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Bash", "Web Security", "Cryptography", "Forensics"],
  },
  {
    title: "Network Security Lab",
    role: "Student Researcher",
    description:
      "University project implementing various network security protocols and analyzing vulnerabilities. Includes firewall configuration and intrusion detection systems.",
    type: "Academic Project",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Linux", "Wireshark", "iptables", "Nmap", "Network Analysis"],
  },
  {
    title: "Vulnerability Scanner Tool",
    role: "Developer",
    description:
      "Python-based automated vulnerability scanning tool for web applications. Features include SQL injection detection, XSS scanning, and security report generation.",
    type: "Security Tool",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Requests", "BeautifulSoup", "Security Testing"],
  },
  {
    title: "Portfolio Website",
    role: "Full Stack Developer",
    description:
      "Personal portfolio website built with modern web technologies. Features responsive design, smooth animations, and optimized performance.",
    type: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-navy-900">{project.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-gray-600 mt-1">{project.role}</CardDescription>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-gray-100">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
