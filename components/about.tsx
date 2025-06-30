"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-emerald-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-6xl font-bold text-white">
                SS
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate full stack developer from{" "}
                <span className="text-emerald-400 font-semibold">Challapalli</span>, with hands-on experience in
                building modern web applications using React.js, Node.js, Express, and MongoDB.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                Coming from a rural background has shaped my perspective and drive. When I'm not coding, you'll find me
                playing <span className="text-emerald-400 font-semibold">kabaddi</span> or exploring new technologies. I
                believe in continuous learning and solving real-world problems through code.
              </p>

              <p className="text-lg text-slate-300 leading-relaxed">
                My journey in tech is driven by curiosity and a commitment to creating meaningful digital experiences
                that make a difference in people's lives.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
