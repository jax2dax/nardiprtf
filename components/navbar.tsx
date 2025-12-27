"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {ModeToggle} from "@/components/toggle-button"

const links = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Certifications", href: "/certifications" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
  
]

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Nardos<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      {/* <ModeToggle /> */}
      </nav>
    </motion.header>
  )
}
