import type { CSSProperties } from "react"
import { Link } from "react-router-dom"
import curveBlack from "@/assets/icons/btn_curve_left_black.svg"
import curveWhite from "@/assets/icons/btn_curve_left_white.svg"
import curveRightBlack from "@/assets/icons/btn_curve_right_black.svg"
import curveRightWhite from "@/assets/icons/btn_curve_right_white.svg"
import hoverCurveRed from "@/assets/icons/hover_btn_curve_left_red.svg"
import hoverCurveRightRed from "@/assets/icons/hover_btn_curve_right_red.svg"
import arrowBlack from "@/assets/icons/right_arrow_black.svg"
import arrowWhite from "@/assets/icons/right_arrow_white.svg"

interface CurvedLinkProps {
  children: string
  to: string
  tone?: "dark" | "light"
  direction?: "left" | "right"
  className?: string
}

const svgStyle = (url: string): CSSProperties => ({
  backgroundImage: `url(${url})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain"
})

export function CurvedLink({
  children,
  to,
  tone = "dark",
  direction = "left",
  className = ""
}: CurvedLinkProps) {
  const isLeft = direction === "left"
  const curve = tone === "dark" ? (isLeft ? curveBlack : curveRightBlack) : (isLeft ? curveWhite : curveRightWhite)
  const hover = isLeft ? hoverCurveRed : hoverCurveRightRed
  const arrow = tone === "dark" ? arrowBlack : arrowWhite

  return (
    <Link
      to={to}
      className={`curve-link group ${tone === "light" ? "curve-link-light" : ""} ${className}`}
    >
      <span>{children}</span>
      <img
        src={arrow}
        alt=""
        aria-hidden
        className="w-4 h-auto mt-0.5 transition-transform duration-300 group-hover:translate-x-1"
      />
      <span
        aria-hidden
        className="absolute left-[-14px] right-[-2px] bottom-0 h-[15px] transition-opacity duration-250"
        style={svgStyle(curve)}
      />
      <span
        aria-hidden
        className="absolute left-[-14px] right-[-2px] bottom-0 h-[15px] opacity-0 transition-opacity duration-250"
        style={svgStyle(hover)}
      />
    </Link>
  )
}
