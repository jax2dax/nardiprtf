"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/motion"
import { GlowingButton } from "./glowing-button"
import { BackgroundGlow } from "./background-glow"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <BackgroundGlow />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl px-6 mx-auto text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Nardos Belete
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-muted-foreground"
        >
          Nursing & Public Health Dual Major focused on compassionate,
          evidence-based care and community impact.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex justify-center gap-4"
        >
          <GlowingButton href="/experience">
            View Experience
          </GlowingButton>

          <GlowingButton variant="secondary" href="/contact">
            Contact Me
          </GlowingButton>
        </motion.div>
      </motion.div>
    </section>
  )
}
