import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import arrowWhite from "@/assets/icons/right_arrow_white.svg"
import arrowBlack from "@/assets/icons/right_arrow_black.svg"

interface ButtonProps {
  children: ReactNode
  to?: string
  href?: string
  variant?: "ember" | "blue" | "outline-dark" | "outline-light"
  className?: string
}

const base =
  "inline-flex items-center gap-3 px-7 py-3.5 font-display font-semibold text-sm uppercase tracking-[0.14em] transition-all duration-300 group"

const variants: Record<string, string> = {
  ember: "btn-sweep bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25 hover:shadow-accent-600/30",
  blue: "btn-sweep bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25",
  "outline-dark":
    "border-2 border-brand-500/40 text-brand-800 hover:border-brand-500 hover:text-brand-500",
  "outline-light":
    "border-2 border-white/30 text-white hover:border-accent-500 hover:text-accent-400"
}

export function Button({ children, to, href, variant = "ember", className = "" }: ButtonProps) {
  const arrow = variant === "outline-light" || variant === "ember" || variant === "blue" ? arrowWhite : arrowBlack
  const classes = `${base} ${variants[variant]} ${className}`

  const inner = (
    <>
      <span>{children}</span>
      <img
        src={arrow}
        alt=""
        aria-hidden
        className="w-3.5 h-auto transition-transform duration-300 group-hover:translate-x-1.5"
      />
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }
  return (
    <Link to={to ?? "#"} className={classes}>
      {inner}
    </Link>
  )
}
