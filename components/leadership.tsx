"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Heart, TreePine } from "lucide-react"

const Leadership = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const activities = [
    {
      title: "Tech Lead - AI Build Club",
      description: "Leading technical initiatives and mentoring fellow developers in AI and machine learning projects.",
      icon: Users,
      highlight: "Leadership",
    },
    {
      title: "NSS Volunteer",
      description:
        "Led a 7-day village camp organizing career guidance sessions, medical camps, and community outreach programs.",
      icon: Heart,
      highlight: "Community Service",
    },
    {
      title: "Environmental Initiative",
      description: "Organized tree plantation drives and environmental awareness campaigns in rural communities.",
      icon: TreePine,
      highlight: "Environmental Impact",
    },
  ]

  return (
    <section id="leadership" className="py-20 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Leadership & <span className="text-emerald-400">Activities</span>
          </h2>

          <div className="space-y-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ x: 10 }}
                className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="bg-emerald-500/20 p-4 rounded-lg">
                    <activity.icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                      <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                        {activity.highlight}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{activity.description}</p>
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

export default Leadership
