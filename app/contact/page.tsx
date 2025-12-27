"use client"

import { Navbar } from "@/components/navbar"
import { SectionHeader } from "@/components/section-header"
import { GlowingButton } from "@/components/glowing-button"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-32 text-center">
        <SectionHeader
          title="Get in Touch"
          subtitle="Let’s connect and create meaningful impact together."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 items-center"
        >
          <p className="text-muted-foreground">
            <a href="mailto:nardoszbelete10@gmail.com">📧 nardoszbelete10@gmail.com</a>
            <br />
            📞 (702) 355-6407
          </p>

          <div className="flex gap-4">
            <GlowingButton href="https://linkedin.com">
              LinkedIn
            </GlowingButton>
            <GlowingButton variant="secondary" href="mailto:nardoszbelete10@gmail.com">
              Email Me
            </GlowingButton>
          </div>
        </motion.div>
      </main>
    </>
  )
}
