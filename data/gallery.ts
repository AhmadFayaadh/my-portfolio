export interface GalleryItem {
  title: string
  description: string
  image: string
  date: string
  category: string
}

export const galleryData: GalleryItem[] = [
  {
    title: "Pemula Travel Web Design Process",
    description: "Working on UI/UX design for Pemula Travel online flight booking website using Figma",
    image: "/images/gallery/pemula-travel-design.png",
    date: "2024",
    category: "Project",
  },
  {
    title: "ObatKu App Design Process",
    description: "Working on UI/UX design for mobile ObatKu application using Figma",
    image: "/images/gallery/obatku-design.png",
    date: "2025",
    category: "Project",
  },
  {
    title: "Dies Natalis FIK Event",
    description: "Managing registration and logistics for faculty anniversary celebration",
    image: "/images/gallery/dies-natalis.jpeg",
    date: "2025",
    category: "Event",
  },
  {
    title: "KSM Cyber Security Bootcamp",
    description: "Attending e-Learning bootcamp focused on web development and digital skills enhancement",
    image: "/images/gallery/panitia-bootcamp.png",
    date: "2025",
    category: "Bootcamp",
  },
]
