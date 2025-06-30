"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sksaleha/",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/salehask",
      color: "hover:text-gray-400",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:shaiksaleha019@gmail.com",
      color: "hover:text-emerald-400",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-emerald-400">Together!</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
          >
            I'm always excited to work on new projects and collaborate with amazing people. Let's create something
            incredible together!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-slate-400 mb-8"
          >
            <MapPin className="w-5 h-5" />
            <span>Challapalli, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-slate-800 p-4 rounded-full text-slate-300 ${link.color} transition-all duration-200 border border-slate-700 hover:border-emerald-500/50`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.a
            href="mailto:shaiksaleha019@gmail.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-400"
      >
        <p>&copy; 2024 Sheikh Saleh. Built with React & Framer Motion.</p>
      </motion.div>
    </section>
  )
}

export default Contact
