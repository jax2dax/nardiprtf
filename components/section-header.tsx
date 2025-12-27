'use client'
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"

export function SectionHeader({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-semibold">
        {title}
      </h2>
      <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  )
}
