"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
// import { ModeToggle } from "@/components/toggle-button"

const links = [
  { name: "About", href: "/about", img: "/about-icon.png" },
  { name: "Experience", href: "/experience", img: "/experience-icon.png" },
  { name: "Certifications", href: "/certifications", img: "/certifications-icon.png" },
  { name: "Awards", href: "/awards", img: "/awards-icon.png" },
  { name: "Contact", href: "/contact", img: "/contact-icon.png" },
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
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Nardos<span className="text-primary">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="nav-glow text-sm text-muted-foreground hover:text-foreground transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile icons */}
        <div className="flex md:hidden gap-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="
                nav-glow
                w-10 h-10
                flex items-center justify-center
                rounded-full
              "
            >
              {/* <Image
                src={link.img}
                alt={link.name}
                width={22}
                height={22}
                priority
              /> */}
              O
            </Link>
          ))}
        </div>

        {/* <ModeToggle /> */}
      </nav>
    </motion.header>
  )
}
