const galleryData = [
  {
    title: "ARA 6.0 CTF Competition",
    description: "Participating in cybersecurity capture the flag competition with team members",
    image: "/placeholder.svg?height=400&width=400",
    date: "December 2024",
    category: "Competition",
  },
  {
    title: "KSM Cyber Security Workshop",
    description: "Conducting penetration testing workshop for junior students",
    image: "/placeholder.svg?height=400&width=400",
    date: "November 2024",
    category: "Workshop",
  },
  {
    title: "ObatKu App Design Process",
    description: "Working on UI/UX design for mobile health application using Figma",
    image: "/placeholder.svg?height=400&width=400",
    date: "October 2024",
    category: "Project",
  },
  {
    title: "Dies Natalis FIK Event",
    description: "Managing registration and logistics for faculty anniversary celebration",
    image: "/placeholder.svg?height=400&width=400",
    date: "September 2024",
    category: "Event",
  },
  {
    title: "Cybersecurity Seminar",
    description: "Attending national cybersecurity seminar on ethical hacking and digital forensics",
    image: "/placeholder.svg?height=400&width=400",
    date: "August 2024",
    category: "Seminar",
  },
  {
    title: "Team Project Presentation",
    description: "Presenting network security analysis project to faculty members",
    image: "/placeholder.svg?height=400&width=400",
    date: "July 2024",
    category: "Academic",
  },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Documentation photos from cybersecurity events, competitions, projects, and academic activities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-200 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                  <span className="text-xs text-gray-300 mt-2 block">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            To add more photos: Place images in /public/images/gallery/ folder and update the gallery data
          </p>
        </div>
      </div>
    </section>
  )
}
