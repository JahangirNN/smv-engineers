import { useEffect, useRef, useState } from "react"
import { animate, useInView } from "motion/react"

interface StatCounterProps {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  label: string
  onDark?: boolean
}

export function StatCounter({ value, suffix = "", prefix = "", decimals = 0, label, onDark = false }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v)
    })
    return () => controls.stop()
  }, [inView, value])

  const formatted = display.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })

  return (
    <div ref={ref} className="text-center px-4 py-6">
      <p
        className={`font-display font-bold text-4xl md:text-5xl tracking-tight tabular-nums ${
          onDark ? "text-white" : "text-brand-900"
        }`}
      >
        {prefix}
        {formatted}
        <span className="text-accent-500">{suffix}</span>
      </p>
      <p
        className={`mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${
          onDark ? "text-brand-300" : "text-muted"
        }`}
      >
        {label}
      </p>
    </div>
  )
}
