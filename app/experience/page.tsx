"use client"

import { Navbar } from "@/components/navbar"
import { SectionHeader } from "@/components/section-header"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/motion"
import Pop from "@/components/Pop"

const experiences = [
  {
    title: "Clinical Nursing Rotation",
    place: "St. Mary’s Medical Center",
    desc: "Assisted registered nurses with patient care, vital monitoring, charting, and interdisciplinary rounds.",
  },
  {
    title: "Public Health Intern",
    place: "City Health Department",
    desc: "Supported community outreach programs focused on preventative care and health education.",
  },
]

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-32">
        <SectionHeader
          title="Experience"
          subtitle="Clinical practice and public health leadership."
        />
    
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2"
        >
            
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={fadeUp}
              className="rounded-2xl bg-card p-6 border border-border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">
                {exp.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {exp.place}
              </p>
              <p className="mt-4 text-muted-foreground">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  )
}
