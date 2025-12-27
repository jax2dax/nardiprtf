"use client"

import { Navbar } from "@/components/navbar"
import { SectionHeader } from "@/components/section-header"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/motion"

const certs = [
  "Basic Life Support (BLS)",
  "CPR & AED Certification",
  "Patient Safety & Infection Control",
  "HIPAA Compliance Training",
]

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-32">
        <SectionHeader
          title="Certifications"
          subtitle="Professional credentials supporting clinical excellence."
        />

        <motion.ul
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {certs.map((cert) => (
            <motion.li
              key={cert}
              variants={fadeUp}
              className="rounded-xl bg-card p-4 border border-border"
            >
              {cert}
            </motion.li>
          ))}
        </motion.ul>
      </main>
    </>
  )
}
