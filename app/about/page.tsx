"use client"

import { Navbar } from "@/components/navbar"
import { SectionHeader } from "@/components/section-header"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/motion"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <SectionHeader
            title="About Me"
            subtitle="A future healthcare professional driven by empathy, science, and community impact."
          />

          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            I am Nardos Belete, a dedicated Nursing and Public Health dual major
            with a passion for delivering compassionate, patient-centered care.
            My academic journey has been shaped by hands-on clinical experience,
            interdisciplinary collaboration, and a strong commitment to health
            equity and preventative care.
          </motion.p>
        </motion.div>
      </main>
    </>
  )
}
