import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Red Team Staff",
    organization: "KSM Cyber Security",
    type: "Organization",
    period: "2023 - Present",
    description: "Conducting penetration testing exercises and security assessments for student projects",
  },
  {
    title: "Media & Event Delegate",
    organization: "CATUR UPNVJ",
    type: "Organization",
    period: "2023",
    description: "Managing social media content and coordinating cybersecurity awareness events",
  },
  {
    title: "Registration & Logistics",
    organization: "Dies Natalis FIK",
    type: "Committee",
    period: "2023",
    description: "Organizing participant registration and event logistics for faculty anniversary celebration",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-navy-900">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-navy-900 mb-2">
                      {exp.organization}
                    </CardDescription>
                    <CardDescription className="text-sm text-gray-500 mb-3">{exp.period}</CardDescription>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                  <Badge variant="secondary">{exp.type}</Badge>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
