import Link from "next/link"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}

export function GlowingButton({
  href,
  children,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium transition",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-[0_0_30px_theme(colors.primary/40%)] hover:scale-105"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      )}
    >
      {children}
    </Link>
  )
}
