import { galleryData } from "@/data/gallery"
import Image from "next/image" // Import Image component

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
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-[1.01] hover:border-cyan-400 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                {/* Add relative to parent for Image fill */}
                <Image // Use Image component
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill // Use fill to make image take up parent space
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Define sizes for responsiveness
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
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
      </div>
    </section>
  )
}
