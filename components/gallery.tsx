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
              className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:scale-[1.01] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/30"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="absolute inset-0 flex items-end bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-200">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                  <span className="text-xs text-gray-300 mt-2 block">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
