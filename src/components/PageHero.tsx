import type { LucideIcon } from "lucide-react"
import { motion } from "motion/react"

interface PageHeroProps {
  eyebrow: string
  title: string
  outline?: string
  lead: string
  icon: LucideIcon
}

export function PageHero({ eyebrow, title, outline, lead, icon: Icon }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 noise pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
      <div className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-brand-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-[380px] h-[380px] rounded-full bg-accent-500/10 blur-[110px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-accent-500" />
            <span className="text-accent-400 text-[11px] font-semibold uppercase tracking-[0.3em]">
              {eyebrow}
            </span>
          </div>

          <div className="mt-6 flex items-start gap-5">
            <div className="w-12 h-12 border border-white/15 bg-white/5 flex items-center justify-center shrink-0 mt-2">
              <Icon className="text-accent-400" size={22} strokeWidth={1.6} />
            </div>
            <h1 className="font-display font-bold text-white tracking-tight leading-[1.02] text-4xl md:text-5xl lg:text-6xl">
              {title}{" "}
              {outline && <span className="text-outline-light">{outline}</span>}
            </h1>
          </div>

          <p className="mt-6 text-brand-200 max-w-3xl leading-relaxed text-base md:text-lg">
            {lead}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
