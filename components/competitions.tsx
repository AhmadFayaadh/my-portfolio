"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const competitions = [
  {
    name: "Permikomnas CTF",
    organization: "Permikomnas",
    year: "2025",
    status: "Participated",
    description:
      "National cybersecurity competition organized by Indonesian Computer Student Association.",
    logo: "/images/competitions/permikomnas.png",
    certificateLink: "#",
    writeupLink: "https://github.com/AhmadFayaadh/CTF-Writeups/tree/main/CTF-Writeups/Permifest",
    certificateImage: "/images/certificates/sertifikat-permifest.jpg",
  },
  {
    name: "FindIT CTF",
    organization: "UGM",
    year: "2025",
    status: "Participated",
    description: "Capture The Flag competition with web exploitation, cryptography, and forensics challenges.",
    logo: "/images/competitions/findit-logo.svg",
    certificateLink: "#",
    writeupLink: null,
    certificateImage: "/images/certificates/sertifikat-findit.jpg",
  },
  {
    name: "ARA 6.0 CTF",
    organization: "HMIT ITS",
    year: "2025",
    status: "Participated",
    description:
      "Capture The Flag competition with web exploitation, cryptography, and forensics challenges.",
    logo: "/images/competitions/ara-6.0-logo.jpg",
    certificateLink: "#",
    writeupLink: "https://github.com/AhmadFayaadh/CTF-Writeups/tree/main/CTF-Writeups/ARA%206.0",
    certificateImage: "/images/certificates/sertifikat-ara-ctf.png",
  },
  {
    name: "ACADefense",
    organization: "ACAD-C.SIRT",
    year: "2025",
    status: "Top 50",
    description:
      "Advanced cybersecurity competition focusing on defense strategies and incident response.",
    logo: "/images/competitions/acad-logo.png",
    certificateLink: "#",
    writeupLink: "https://github.com/AhmadFayaadh/CTF-Writeups/tree/main/CTF-Writeups/ACADefense",
    certificateImage: null,
  }
]

export default function CompetitionsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  const closePopup = () => setSelectedCertificate(null)

  return (
    <section id="competitions" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Competitions & Writeups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((c, i) => (
            <Card
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-5 transition-all duration-300 ease-in-out flex flex-col 
                        justify-between hover:border-blue-500 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-3">
                  {c.logo && (
                    <Image
                      src={c.logo}
                      alt={`${c.name} Logo`}
                      width={48}
                      height={48}
                      className="rounded object-contain"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{c.name}</h3>
                    <p className="text-sm text-gray-500">{c.organization}</p>
                  </div>
                </div>
                <div className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 ml-2">
                  {c.year}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-800 mb-1">{c.status}</p>
              <p className="text-sm text-gray-600 mb-4">{c.description}</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {c.certificateImage && (
                  <Button
                    variant="outline"
                    className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white hover:shadow-md hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 bg-transparent px-4 py-2 rounded-md text-sm"
                    onClick={() => setSelectedCertificate(c.certificateImage)}
                  >
                    View Certificate
                  </Button>
                )}
                {c.writeupLink && (
                  <Button
                    variant="outline"
                    className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white hover:shadow-md hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300 bg-transparent px-4 py-2 rounded-md text-sm"
                    onClick={() => window.open(c.writeupLink, "_blank")}
                  >
                    GitHub Writeup
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closePopup}>
          <div className="bg-white p-6 rounded-lg max-w-3xl max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closePopup}
            >
              ✕
            </button>
            <Image
              src={selectedCertificate}
              alt="Certificate"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}