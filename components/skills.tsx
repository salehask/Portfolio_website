"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      skills: ["Java", "SpringBoot", "REST APIs", "MySQL", "SQL"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman","SpringToolsSuite"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Skills & <span className="text-emerald-400">Stack</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-slate-800/30 p-6 rounded-xl border border-slate-700"
              >
                <h3 className="text-xl font-bold text-emerald-400 mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="bg-slate-700/50 px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-6 py-3 rounded-full">
              <span className="text-emerald-400 font-bold text-lg">Java Full Stack Specialist</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
