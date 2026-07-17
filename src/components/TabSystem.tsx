"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence } from "motion/react"

interface Tab {
  label: string
  content: ReactNode
}

interface TabSystemProps {
  tabs: Tab[]
  defaultIndex?: number
  className?: string
}

export function TabSystem({ tabs, defaultIndex = 0, className = "" }: TabSystemProps) {
  const [active, setActive] = useState(defaultIndex)

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-1 border-b border-brand-200/70 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-5 py-3.5 text-sm font-medium transition-all duration-200 relative rounded-t-lg ${
              i === active
                ? "text-accent-500 bg-white"
                : "text-muted hover:text-brand-700 hover:bg-white/50"
            }`}
          >
            {tab.label}
            {i === active && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-500 rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {tabs[active]?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
