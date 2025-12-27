import type { Variants } from "framer-motion"

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}
