import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Education</h2>
        <div className="space-y-6">
          <Card className="border-l-4 border-l-navy-900">
            <CardHeader>
              <CardTitle className="text-xl">Universitas Pembangunan Nasional "Veteran" Jakarta</CardTitle>
              <CardDescription className="text-lg">
                <span className="font-semibold text-navy-900">GPA 3.86</span> – Informatics Engineering
                <br />
                <span className="text-sm text-gray-500">2022 - Present</span>
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-l-4 border-l-gray-400">
            <CardHeader>
              <CardTitle className="text-xl">SMA EMIISc Jakarta</CardTitle>
              <CardDescription>
                High School - Science Program
                <br />
                <span className="text-sm text-gray-500">2019 - 2022</span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
