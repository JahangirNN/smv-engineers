import { Link } from "react-router-dom"
import { Mail, ArrowRight, PenLine } from "lucide-react"
import { motion } from "motion/react"
import { EMAIL } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent-500/25"
        >
          <PenLine className="text-white" size={24} />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Let&apos;s Discuss Your Project
        </h2>
        <p className="text-brand-200 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
          Ready to bring your structural engineering project to life? We&apos;re here to help with innovative, reliable solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 bg-accent-500 hover:bg-accent-400 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30"
          >
            <Mail size={18} />
            {EMAIL}
          </motion.a>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 border-2 border-white/20 hover:border-white/50 text-white px-8 py-3.5 rounded-xl font-medium transition-all backdrop-blur-sm"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
