"use client"

import { motion } from "motion/react"
import { TabSystem } from "@/components/TabSystem"
import { CTASection } from "@/components/CTASection"
import { PageHero } from "@/components/PageHero"
import { SERVICE_CATEGORIES } from "@/lib/constants"
import { Wrench } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function ServicesPage() {
  const tabs = SERVICE_CATEGORIES.map((cat) => ({
    label: cat.name,
    content: (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {cat.services.map((svc) => (
          <motion.div
            key={svc.title}
            variants={itemVariants}
            className="bg-white rounded-2xl p-7 shadow-sm border border-brand-100 card-hover"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500/10 to-accent-400/10 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accent-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-800 mb-2">{svc.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-3">{svc.details}</p>
                {svc.subItems && (
                  <ul className="space-y-1.5">
                    {svc.subItems.map((item, j) => (
                      <li key={j} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-accent-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  }))

  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Engineering"
        outline="Services."
        lead="We collaborate with developers, architects and engineers across the USA, UAE and India to provide best-in-class, innovative yet simple Structural Design & Engineering services since 2007. Our team of highly qualified structural engineers and technicians provides design of all types of building and non-building structures."
        icon={Wrench}
      />

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <TabSystem tabs={tabs} />
      </section>

      <CTASection />
    </>
  )
}
