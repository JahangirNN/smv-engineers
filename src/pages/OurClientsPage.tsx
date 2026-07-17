"use client"

import { motion } from "motion/react"
import { CTASection } from "@/components/CTASection"
import { img } from "@/lib/assets"
import { CLIENTS } from "@/lib/constants"
import { Handshake, Star } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
}

export function OurClientsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5">
              <Handshake className="text-accent-400" size={20} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Clients</h1>
            <p className="text-brand-200 max-w-2xl leading-relaxed text-lg">
              We are proud to have served a diverse range of clients across the USA, UAE, and India.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Star className="text-accent-500" size={20} />
            <h2 className="text-2xl font-bold text-gradient">Trusted By</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {CLIENTS.map((client) => (
              <motion.div
                key={client.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 flex items-center justify-center card-hover"
                title={client.name}
              >
                <img
                  src={img(`/images/logos/${client.logo}`)}
                  alt={client.name}
                  className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}
