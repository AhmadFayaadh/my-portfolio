import { Mail, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-navy-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">Contact Me</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's connect! I'm always open to discussing cybersecurity, technology, and new opportunities.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="mailto:ahmadfayaadhba@gmail.com"
            className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-105 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            <Mail className="h-8 w-8 mb-4" />
            <span className="font-medium">Email</span>
            <span className="text-sm text-gray-300 mt-2">ahmadfayaadhba@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/ahmad-fayaadh-baisa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-105 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            <Linkedin className="h-8 w-8 mb-4" />
            <span className="font-medium">LinkedIn</span>
            <span className="text-sm text-gray-300 mt-2">ahmad-fayaadh-baisa</span>
          </a>
          <a
            href="https://github.com/AhmadFayaadh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 rounded-lg bg-white/10 hover:bg-white/20 hover:scale-105 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            <Github className="h-8 w-8 mb-4" />
            <span className="font-medium">GitHub</span>
            <span className="text-sm text-gray-300 mt-2">AhmadFayaadh</span>
          </a>
        </div>
      </div>
    </section>
  )
}
