import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GraduationCap, School } from "lucide-react"
import Image from "next/image" // Import Image component

// Data pendidikan dengan properti gambar logo dan gambar utama
const educationData = [
  {
    institution: 'Universitas Pembangunan Nasional "Veteran" Jakarta',
    degree: "Informatics Engineering",
    gpa: "3.86",
    period: "2022 - Present",
    icon: GraduationCap,
    iconColor: "text-navy-900",
    borderColor: "border-l-navy-900",
    logoImage: "/images/education/logo-upn.jpeg", // Gambar logo kecil
    mainImage: "/images/education/foto-upn.png", // Gambar utama saat hover
  },
  {
    institution: "SMA EMIISc Jakarta",
    degree: "High School - Science Program",
    gpa: null,
    period: "2019 - 2022",
    icon: School,
    iconColor: "text-gray-700",
    borderColor: "border-l-gray-400",
    logoImage: "/images/education/logo-emiisc.png",
    mainImage: "/images/education/foto-sma.png",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Education</h2>
        <div className="space-y-6">
          {educationData.map((edu, index) => {
            const Icon = edu.icon
            return (
              <Card
                key={index}
                className={`border-l-4 ${edu.borderColor} hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5
                           hover:border-blue-500 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center p-6 group`}
              >
                {edu.logoImage && (
                  <div className="flex-shrink-0 mr-8 mb-4 sm:mb-0 w-32 h-32 overflow-hidden transition-all duration-300 group-hover:w-48 relative">
                    {" "}
                    {/* Add relative to parent for Image fill */}
                    <Image // Use Image component
                      src={edu.logoImage || "/placeholder.svg"}
                      alt={`${edu.institution} Logo`}
                      fill // Use fill to make image take up parent space
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 128px, 192px" // Define sizes for responsiveness
                      className="object-contain rounded-md border border-gray-200 p-1 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    {edu.mainImage && (
                      <Image // Use Image component
                        src={edu.mainImage || "/placeholder.svg"}
                        alt={`${edu.institution} Main Photo`}
                        fill // Use fill to make image take up parent space
                        sizes="(max-width: 640px) 128px, (max-width: 768px) 128px, 192px" // Define sizes for responsiveness
                        className="object-cover rounded-md border border-gray-200 p-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    )}
                  </div>
                )}
                <div className="flex-grow">
                  <CardHeader className="p-0 pb-2">
                    <div className="flex items-center space-x-3 mb-1">
                      <Icon className={`h-7 w-7 ${edu.iconColor}`} />
                      <CardTitle className="text-2xl">{edu.institution}</CardTitle>
                    </div>
                    <CardDescription className="text-xl">
                      {edu.gpa && <span className="font-semibold text-navy-900">GPA {edu.gpa}</span>}
                      {edu.gpa && " – "}
                      {edu.degree}
                      <br />
                      <span className="text-base text-gray-500">{edu.period}</span>
                    </CardDescription>
                  </CardHeader>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
