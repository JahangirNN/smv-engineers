import { motion } from "motion/react"
import { Button } from "@/components/Button"
import { img } from "@/lib/assets"
import { EMAIL } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="relative overflow-hidden noise">
      <img
        src={img("/images/backgrounds/full_grey.png")}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src={img("/images/backgrounds/red_bg_arc.jpg")}
        alt=""
        aria-hidden
        className="absolute -top-20 -right-20 w-[420px] h-[420px] object-cover opacity-90 hidden md:block pointer-events-none"
      />
      <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-36"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-accent-500" />
            <span className="text-accent-500 text-[11px] font-semibold uppercase tracking-[0.3em]">
              Get In Touch
            </span>
          </div>

          <h2 className="mt-6 font-display font-bold text-brand-950 tracking-tight leading-[1.02] text-4xl md:text-6xl lg:text-7xl">
            Let&apos;s Discuss
            <br />
            Your <span className="text-outline-ember">Project.</span>
          </h2>

          <p className="mt-7 text-muted text-base md:text-lg leading-relaxed max-w-xl">
            Looking to collaborate with a reliable structural engineering firm across the
            USA, UAE or India? Write to us and we&apos;ll get back within one working day.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Button to="/contact" variant="ember">
              Contact Us
            </Button>
            <a
              href={`mailto:${EMAIL}`}
              className="font-display font-semibold text-brand-900 text-sm tracking-wider uppercase underline decoration-accent-500 decoration-2 underline-offset-8 hover:text-accent-600 transition-colors"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
