"use client"

import { motion } from "motion/react"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
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
      <PageHero
        eyebrow="Trusted Partners"
        title="Our"
        outline="Clients."
        lead="We are proud to have served a diverse range of clients across the USA, UAE, and India — developers, architects, contractors and industrial leaders."
        icon={Handshake}
      />

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
