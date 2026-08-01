"use client"

import { motion } from "motion/react"

interface BlueprintDrawingProps {
  className?: string
  delay?: number
  strokeWidth?: number
}

const GRID = [
  "M40 40 V236",
  "M120 40 V236",
  "M200 40 V236",
  "M280 40 V236",
  "M360 40 V236",
  "M40 80 H360",
  "M40 120 H360",
  "M40 160 H360",
  "M40 200 H360",
]

const STRUCTURE = [
  "M20 236 H380",
  "M64 236 V116",
  "M200 236 V116",
  "M336 236 V116",
  "M40 116 H360",
  "M64 116 L200 44",
  "M200 44 L336 116",
  "M200 44 V116",
  "M200 44 L132 116",
  "M200 44 L268 116",
  "M20 252 H380",
]

const FURNITURE = [
  "M20 246 V258",
  "M380 246 V258",
  "M344 48 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0",
  "M356 42 l-5 9 l5 -3.5 l5 3.5 z",
]

export function BlueprintDrawing({ className = "", delay = 0, strokeWidth = 1.4 }: BlueprintDrawingProps) {
  const render = (d: string, i: number, stroke = "currentColor") => (
    <motion.path
      key={d + i}
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay: delay + i * 0.14, ease: [0.4, 0, 0.2, 1] }}
    />
  )

  return (
    <svg
      viewBox="0 0 400 260"
      fill="none"
      className={className}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity={0.35}>
        {GRID.map((d, i) => render(d, i, "currentColor"))}
      </g>
      <g>{STRUCTURE.map((d, i) => render(d, i + GRID.length))}</g>
      <g opacity={0.8}>{FURNITURE.map((d, i) => render(d, i + GRID.length + STRUCTURE.length))}</g>
    </svg>
  )
}
