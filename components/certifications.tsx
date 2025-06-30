"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award } from "lucide-react"

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "C++ Programming",
      issuer: "Codio",
      description: "Advanced programming concepts and data structures",
    },
    {
      title: "ReactJS Development",
      issuer: "Professional Certification",
      description: "Modern React development and state management",
    },
    {
      title: "Backend Development",
      issuer: "Professional Certification",
      description: "Node.js, Express, and API development",
    },
    {
      title: "DBMS and SQL",
      issuer: "Database Management",
      description: "Database design and SQL optimization",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-emerald-400">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/20 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                    <p className="text-emerald-400 font-medium mb-2">{cert.issuer}</p>
                    <p className="text-slate-300 text-sm">{cert.description}</p>
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

export default Certifications
