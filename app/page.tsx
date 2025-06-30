"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Leadership from "@/components/leadership"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <motion.div style={{ opacity }}>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Leadership />
        <Skills />
        <Contact />
      </motion.div>
    </div>
  )
}
