"use client"

import { motion } from "motion/react"
import { TabSystem } from "@/components/TabSystem"
import { CTASection } from "@/components/CTASection"
import { ContactForm } from "@/components/ContactForm"
import { OFFICES, EMAIL } from "@/lib/constants"
import { MapPin, Phone, Mail, MessageCircle, Building2, Send } from "lucide-react"

const generalCategories = [
  { value: "general", label: "General Inquiry" },
  { value: "structural", label: "Structural Engineering" },
  { value: "seismic", label: "Seismic Engineering" },
  { value: "plant", label: "Plant Engineering" },
  { value: "bim", label: "BIM Services" },
]

const projectCategories = [
  { value: "lifting", label: "Lifting" },
  { value: "site-solutions", label: "Site Solutions" },
  { value: "specialist-plant", label: "Specialist Plant" },
  { value: "test-inspection", label: "Test & Inspection" },
  { value: "training", label: "Training Academy" },
  { value: "explore-plant", label: "Explore Plant & Transport" },
]

const jobCategories = [
  { value: "bd-marketing", label: "BD & Marketing" },
  { value: "hr", label: "HR" },
  { value: "admin", label: "Admin" },
  { value: "engineering", label: "Engineering" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function ContactPage() {
  const formTabs = [
    {
      label: "General Inquiry",
      content: <ContactForm categories={generalCategories} submitLabel="Send Inquiry" />
    },
    {
      label: "Project Inquiry",
      content: <ContactForm categories={projectCategories} submitLabel="Submit Project Inquiry" />
    },
    {
      label: "Apply (Job)",
      content: (
        <ContactForm
          categories={jobCategories}
          successMessage="Congratulations! You have successfully applied for the job."
          submitLabel="Apply Now"
        />
      )
    }
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5">
              <MessageCircle className="text-accent-400" size={20} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Contact Us</h1>
            <p className="text-brand-200 max-w-2xl leading-relaxed text-lg">
              Get in touch with our team. We have three offices across Gujarat to serve you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <Building2 className="text-accent-500" size={20} />
              <h2 className="text-2xl font-bold text-brand-800">Our Offices</h2>
            </div>
            <div className="space-y-5">
              {OFFICES.map((office) => (
                <motion.div
                  key={office.name}
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 card-hover"
                >
                  <h3 className="font-semibold text-brand-800 mb-4 flex items-center gap-2">
                    <MapPin size={16} className="text-accent-500" />
                    {office.name}
                  </h3>
                  <div className="space-y-3 text-sm text-muted pl-6">
                    <p className="leading-relaxed">
                      {office.address.map((line, i) => (
                        <span key={i}>{line}<br /></span>
                      ))}
                    </p>
                    <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                      <Phone size={14} className="text-accent-500 shrink-0" />
                      {office.phone}
                    </a>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-2 hover:text-accent-500 transition-colors">
                      <Mail size={14} className="text-accent-500 shrink-0" />
                      {office.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="flex items-center gap-3 mb-8">
              <Send className="text-accent-500" size={20} />
              <h2 className="text-2xl font-bold text-brand-800">Send a Message</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
              <TabSystem tabs={formTabs} />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted text-lg">
            Or email us directly at{" "}
            <a href={`mailto:${EMAIL}`} className="text-accent-500 hover:text-accent-400 font-semibold transition-colors">
              {EMAIL}
            </a>
          </p>
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}
