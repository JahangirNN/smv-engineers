"use client"

import { motion } from "motion/react"
import { HeroSlider } from "@/components/HeroSlider"
import { TabSystem } from "@/components/TabSystem"
import { CTASection } from "@/components/CTASection"
import { img } from "@/lib/assets"
import { HERO_SLIDES, SITE_NAME, LICENSE_LOGOS, LICENSE_NAMES } from "@/lib/constants"
import { Target, Eye, Heart, Users, ShieldCheck, Lightbulb, Handshake, Download, Quote } from "lucide-react"

const values = [
  { icon: Heart, title: "Commitment", desc: "Be responsible for our actions with honesty and be committed to our promise" },
  { icon: Handshake, title: "Responsiveness", desc: "Be responsive and passionate about addressing client's needs" },
  { icon: Lightbulb, title: "Innovation", desc: "Invest in and produce new concepts by leveraging our knowledge and experience" },
  { icon: Users, title: "Team Work", desc: "Collaborate with peers inside and outside the firm to achieve excellent results" },
  { icon: ShieldCheck, title: "Integrity", desc: "Adhere to the highest professional ethics and work in compliance with codes" },
  { icon: Target, title: "Respect", desc: "Promote workplace based on humility and equality of all individuals" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function TheFirmPage() {
  const tabs = [
    {
      label: "Ideals",
      content: (
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-brand-100"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-4">
                <Eye className="text-accent-500" size={22} />
              </div>
              <h3 className="text-xl font-bold text-brand-800 mb-3">Vision</h3>
              <p className="text-muted leading-relaxed italic">
                Our vision is to be a firm with unparalleled quality and efficiency in the field of structural engineering, offering services globally with a focus on project success. Our goal is to continuously strive for technical excellence, innovations, intellectual challenges and servicing our clients with passion.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-brand-100"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-4">
                <Target className="text-accent-500" size={22} />
              </div>
              <h3 className="text-xl font-bold text-brand-800 mb-3">Mission</h3>
              <p className="text-muted leading-relaxed italic">
                Our mission is to create a brand in structural engineering services that can be relied upon and can be viewed as an exemplary in innovations, efficiency and economy. We will rigorously train and prepare structural engineering professionals with the highest ethical standards and intellect that are ready to take up challenges and serve clients with zeal.
              </p>
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-brand-800 mb-6">Core Values</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <motion.div
                    key={v.title}
                    variants={itemVariants}
                    className="bg-white rounded-xl p-6 shadow-sm border border-brand-100 card-hover"
                  >
                    <Icon className="text-accent-500 mb-3" size={22} />
                    <h4 className="font-semibold text-brand-800 mb-1.5">{v.title}</h4>
                    <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      )
    },
    {
      label: "Culture",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-start gap-4 border-l-4 border-accent-500 pl-6 mb-8 bg-accent-50/50 py-4 pr-6 rounded-r-xl">
            <Quote className="text-accent-500 shrink-0 mt-1" size={20} />
            <p className="text-muted leading-relaxed text-lg italic">
              People are most valuable resource & key differentiators in realizing our vision. We offer them freedom at work place, opportunities to learn and grow as an individual and a professional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Emphasizes Team based activities",
              "Encourages relationship building, knowledge sharing and acculturation",
              "Address new generations of employees who have different workplace expectations"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-brand-100"
              >
                <p className="text-muted text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )
    },
    {
      label: "Background",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-6"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-100">
            <p className="text-muted leading-relaxed text-lg mb-4">
              {SITE_NAME} was founded by <strong className="text-brand-800">Muni Vimawala</strong> and <strong className="text-brand-800">Nihar Doctor</strong> in 2007 with a vision of creating a brand in structural engineering that can be relied upon.
            </p>
            <p className="text-muted leading-relaxed">
              The firm was named after <strong className="text-brand-800">Late Mr. Shailesh M. Vimawala</strong>, once a renowned structural engineer in Surat. He was born in 1936 in Varad village near Surat. He earned his bachelor&apos;s from L.D. Engineering in Ahmedabad (1957), then MSE in Structural Engineering from University of Michigan at Ann Arbor. He worked in the USA and returned to India in 1962.
            </p>
          </div>
          <a
            href="/pdfs/SMVE_Presentation_Plant_Design.pdf"
            className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium transition-colors bg-accent-50 px-5 py-3 rounded-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} />
            Download Company Brochure (PDF)
          </a>
        </motion.div>
      )
    },
    {
      label: "P.E. & Licenses",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-gradient mb-8">Professional Empanelment & Licenses</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {LICENSE_LOGOS.map((logo, i) => (
              <motion.div
                key={logo}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 flex flex-col items-center gap-4 card-hover"
              >
                <img src={img(`/images/logos/${logo}`)} alt={LICENSE_NAMES[i]!} className="h-16 w-auto object-contain" />
                <span className="text-xs text-muted text-center font-medium">{LICENSE_NAMES[i]}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )
    }
  ]

  return (
    <>
      <HeroSlider slides={HERO_SLIDES} />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-brand-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-800 mb-8 tracking-tight">
              <span className="text-gradient">The Firm</span>
            </h1>
            <TabSystem tabs={tabs} />
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
