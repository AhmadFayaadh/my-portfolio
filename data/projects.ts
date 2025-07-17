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
    image: "/images/projects/pemula-travel.jpg",
    technologies: ["Figma", "Web Design", "User Research", "Wireframing"],
  },
  {
    title: "CTF Writeups Repository",
    role: "Security Researcher",
    description:
      "Comprehensive collection of Capture The Flag competition solutions and writeups. Covers web exploitation, cryptography, forensics, and reverse engineering challenges.",
    type: "Cybersecurity",
    image: "/images/projects/ctf-writeups.jpg",
    technologies: ["Python", "Bash", "Web Security", "Cryptography", "Forensics"],
  },
  {
    title: "Network Security Lab",
    role: "Student Researcher",
    description:
      "University project implementing various network security protocols and analyzing vulnerabilities. Includes firewall configuration and intrusion detection systems.",
    type: "Academic Project",
    image: "/images/projects/network-security.jpg",
    technologies: ["Linux", "Wireshark", "iptables", "Nmap", "Network Analysis"],
  },
  {
    title: "Vulnerability Scanner Tool",
    role: "Developer",
    description:
      "Python-based automated vulnerability scanning tool for web applications. Features include SQL injection detection, XSS scanning, and security report generation.",
    type: "Security Tool",
    image: "/images/projects/vuln-scanner.jpg",
    technologies: ["Python", "Requests", "BeautifulSoup", "Security Testing"],
  },
  {
    title: "Portfolio Website",
    role: "Full Stack Developer",
    description:
      "Personal portfolio website built with modern web technologies. Features responsive design, smooth animations, and optimized performance.",
    type: "Web Development",
    image: "/images/projects/portfolio-website.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
]
