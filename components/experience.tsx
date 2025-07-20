import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Academic Red Team Staff",
    organization: "KSM Cyber Security",
    type: "Organization",
    period: "2024 - Present",
    description: "As a Member and Academic Red Team Staff, I developed a learning syllabus for Red Team operations, focusing on comprehensive educational modules covering offensive security strategies and techniques.",
    image: "/images/experience/foto-cyber.png",
  },
  {
    title: "Media & Event Delegate",
    organization: "CATUR UPNVJ",
    type: "Organization",
    period: "2024 - Present",
    description: "Represented the organization as a delegate in inter-organizational events, while also managing and posting Instagram stories, covering tournament announcements and partnership collaborations with CATUR UPN Veteran Jakarta's partners.",
    image: "/images/experience/foto-catur.png",
  },
  {
    title: "Bootcamp e-Learning – Program Scheduling & Academic Coordination",
    organization: "KSM Cyber Security",
    type: "Committee",
    period: "2025",
    description:
      "Serve as the person in charge (PIC) for front-end classes, coordinating with assistant mentors to ensure smooth running of sessions. Responsible for scheduling, monitoring attendance, and submitting reports after each bootcamp session.",
    image: "/images/experience/logo-cyber.png",
  },
  {
    title: "Registration & Logistics",
    organization: "Dies Natalis FIK",
    type: "Committee",
    period: "2025",
    description: "Assigned to the registration and consumption division, responsible for checking attendee registration and ensuring the availability and distribution of consumption for all guests.",
    image: "/images/experience/logo-upn.jpeg",
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-navy-900 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5
                         hover:border-blue-500 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center p-6">
              {exp.image && (
                <div className="flex-shrink-0 mr-6 mb-3 sm:mb-0 w-72">
                  <img
                    src={exp.image || "/placeholder.svg"}
                    alt={`${exp.organization} Logo`}
                    className="w-full h-full object-contain rounded-md border border-gray-200 p-1"
                  />
                </div>
              )}
              <div className="flex-grow">
                <CardHeader className="p-0 pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="text-xl font-medium text-navy-900 mb-2">
                        {exp.organization}
                      </CardDescription>
                      <CardDescription className="text-base text-gray-500 mb-3">{exp.period}</CardDescription>
                      <p className="text-gray-700 text-base">{exp.description}</p>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
