"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, animate } from "motion/react"
import { BlueprintDrawing } from "@/components/BlueprintDrawing"

const STORAGE_KEY = "smv_intro_seen"
const WORDMARK = "SMV ENGINEERS"

export function IntroLoader() {
  const [mounted, setMounted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced || sessionStorage.getItem(STORAGE_KEY) === "1") {
      sessionStorage.setItem(STORAGE_KEY, "1")
      return
    }
    setMounted(true)
    const controls = animate(0, 100, {
      duration: 2.1,
      ease: "easeInOut",
      onUpdate: (v) => setProgress(Math.round(v))
    })
    const timer = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1")
      setExiting(true)
    }, 2400)
    return () => {
      controls.stop()
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (!exiting) return
    const timer = setTimeout(() => setGone(true), 2000)
    return () => clearTimeout(timer)
  }, [exiting])

  const skip = () => {
    if (exiting) return
    sessionStorage.setItem(STORAGE_KEY, "1")
    setExiting(true)
  }

  if (!mounted || gone) return null

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="intro-content"
          className="fixed inset-0 z-[100] bg-brand-950 noise cursor-pointer select-none"
          onClick={skip}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <BlueprintDrawing delay={0.3} className="w-[min(420px,80vw)] text-white/60" strokeWidth={1.2} />

            <div className="mt-8 flex overflow-hidden">
              {WORDMARK.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "120%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.55 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  className={`font-display font-bold text-2xl md:text-4xl tracking-[0.32em] ${
                    ch === " " ? "w-6 md:w-9" : "text-white"
                  }`}
                >
                  {ch}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.25 }}
              className="mt-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-accent-400"
            >
              Complex Structures, Simple Solutions
            </motion.p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
            <div className="flex items-end justify-between">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Est. 2007 — Surat, India
              </p>
              <p className="font-display font-bold text-2xl text-white/80 tabular-nums">
                {String(progress).padStart(3, "0")}
                <span className="text-accent-500">%</span>
              </p>
            </div>
            <div className="mt-3 h-px w-full bg-white/10">
              <motion.div
                className="h-px bg-accent-500 origin-left"
                style={{ scaleX: progress / 100 }}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="intro-curtains"
          className="fixed inset-0 z-[100] pointer-events-none"
          exit={{ opacity: 0, transition: { delay: 0.85, duration: 0.35 } }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-brand-950"
            initial={{ y: 0 }}
            exit={{ y: "-101%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-brand-950"
            initial={{ y: 0 }}
            exit={{ y: "101%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
