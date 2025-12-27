'use client'

import { Navbar } from "@/components/navbar"
import { SectionHeader } from "@/components/section-header"
import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/motion"

const awards = [
  {
    title: "Dean’s List",
    year: "2023–2024",
  },
  {
    title: "Community Health Leadership Award",
    year: "2024",
  },
]

export default function AwardsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-32">
        <SectionHeader
          title="Awards & Honors"
          subtitle="Recognition for academic excellence and leadership."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid gap-10 md:grid-cols-2"
        >
          {awards.map((award) => (
            <motion.div
              key={award.title}
              variants={fadeUp}
              className="group relative h-64 w-64 mx-auto flex items-center justify-center"
            >
              {/* GLOW */}
              <div
                className="
                  award-glow
                  absolute inset-0
                  rounded-full
                  ring-2 ring-violet-500/50
                  blur-md
                "
              />

              {/* CARD */}
              <div
                className="
                  relative z-10
                  h-full w-full
                  rounded-full
                  bg-card
                  border border-border
                  flex flex-col items-center justify-center
                  text-center
                "
              >
                <h3 className="text-lg font-semibold">
                  {award.title}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {award.year}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </>
  )
}
