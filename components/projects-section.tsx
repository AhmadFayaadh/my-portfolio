import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { projectsData } from "@/data/projects" // <-- Pastikan import ini benar

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 hover:border-blue-500 transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                {" "}
                {/* Ini adalah container gambar */}
                <img
                  src={project.image || "/placeholder.svg"} // <-- Ini tag gambar yang penting
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
