"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Real-Time Chat App",
      description:
        "A full-featured chat application built with the MERN stack, featuring real-time messaging, user login indicators, and avatar fetching from external APIs.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing clean UI design with Tailwind CSS and shadcn components for optimal user experience.",
      tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      live: "#",
    },
    {
      title: "Smooth Scrolling Web App",
      description:
        "An interactive web application demonstrating advanced animations and smooth scrolling effects using React and Framer Motion.",
      tech: ["React", "Framer Motion", "CSS3", "JavaScript"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="aspect-video bg-slate-700 relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
