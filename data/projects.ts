export interface Project {
  title: string
  role: string
  description: string
  type: string
  image: string
  technologies: string[]
}

export const projectsData: Project[] = [
  {
    title: "ObatKu",
    role: "UI/UX Designer",
    description:
      "Mobile application designed to help users find medicines and nearby pharmacies with an intuitive interface. Features include medicine search, pharmacy locator, and prescription management.",
    type: "Mobile App Design",
    image: "/images/projects/obatku-app.jpg",
    technologies: ["Figma", "UI/UX Design", "Mobile Design", "Prototyping"],
  },
  {
    title: "Pemula Travel",
    role: "UI/UX Designer",
    description:
      "Travel booking website with clean and modern interface for flight ticket reservations. Includes search functionality, booking flow, and payment integration design.",
    type: "Web Design",
    image: "/images/projects/pemula-travel.jpeg",
    technologies: ["Figma", "Web Design", "User Research", "Wireframing"],
  },
  {
    title: "Portfolio Website",
    role: "Web Developer",
    description:
      "Personal portfolio website built with modern web technologies. Features responsive design, smooth animations, and optimized performance.",
    type: "Web Development",
    image: "/images/projects/portofolio-website.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Notes",
    role: "Web Developer",
    description:
      "A simple web app that allows users to create, categorize, and manage personal notes. Built with a clean, responsive interface and real-time search. Data is stored in localStorage for full offline access.",
    type: "Web Development",
    image: "/images/projects/notes.png",
    technologies: ["Html", "JavaScript", "CSS"],
  },
]
