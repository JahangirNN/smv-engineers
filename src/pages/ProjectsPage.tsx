"use client"

import { useState, useMemo } from "react"
import { motion } from "motion/react"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/constants"
import { FolderKanban } from "lucide-react"
import type { ProjectCategory } from "@/lib/types"

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
      <PageHero
        eyebrow="Our Portfolio"
        title="Our"
        outline="Projects."
        lead="We have delivered structural design and engineering solutions to over 100 clients in the last 13 years covering residential, commercial, healthcare, industrial, educational and a variety of other structural landscapes."
        icon={FolderKanban}
      />

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

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, i) => (
                <div
                  key={`${project.name}-${i}`}
                  className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden card-hover flex flex-col"
                >
                  {project.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-100">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] bg-gradient-to-br from-brand-800 to-brand-950 flex items-center justify-center">
                      <FolderKanban className="text-accent-400/60" size={28} />
                    </div>
                  )}
                  <div className="px-5 py-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-500/40 mt-2 shrink-0" />
                    <div>
                      <p className="font-medium text-brand-800 text-sm leading-snug">{project.name}</p>
                      {project.location && (
                        <p className="text-xs text-muted mt-1">{project.location}</p>
                      )}
                    </div>
                  </div>
                </div>
                ))}
            </div>
            ) : (
              <p className="text-center text-muted py-16 bg-white rounded-2xl border border-border/50">
                No projects in this category.
              </p>
            )}
          </motion.div>
      </section>

      <CTASection />
    </>
  )
}
