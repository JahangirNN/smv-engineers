"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "motion/react"
import { CTASection } from "@/components/CTASection"
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants"
import { FolderKanban } from "lucide-react"
import type { ProjectCategory } from "@/lib/types"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">("All")

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5">
              <FolderKanban className="text-accent-400" size={20} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Projects</h1>
            <p className="text-brand-200 max-w-3xl leading-relaxed text-lg">
              We have delivered structural design and engineering solutions to over 100 clients in the last 13 years covering residential, commercial, healthcare, industrial, educational and a variety of other structural landscapes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...PROJECT_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as ProjectCategory | "All")}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent-500 text-white shadow-md shadow-accent-500/20"
                  : "bg-white text-muted border border-border hover:border-accent-300 hover:text-accent-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length > 0 ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={`${project.name}-${i}`}
                    variants={itemVariants}
                    className="bg-white rounded-xl px-5 py-4 shadow-sm border border-border/50 card-hover flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-500/40 mt-2 shrink-0" />
                    <div>
                      <p className="font-medium text-brand-800 text-sm">{project.name}</p>
                      {project.location && (
                        <p className="text-xs text-muted mt-0.5">{project.location}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-muted py-16 bg-white rounded-2xl border border-border/50"
              >
                No projects in this category.
              </motion.p>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      <CTASection />
    </>
  )
}
