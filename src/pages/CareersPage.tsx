"use client"

import { motion } from "motion/react"
import { TabSystem } from "@/components/TabSystem"
import { CTASection } from "@/components/CTASection"
import { JOB_OPENINGS, HR_EMAIL } from "@/lib/constants"
import { MapPin, Calendar, Briefcase, GraduationCap, BadgeCheck, Send, Compass } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function CareersPage() {
  const tabs = [
    {
      label: "Discover Possibilities",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-100">
            <div className="flex items-start gap-4 mb-6">
              <Compass className="text-accent-500 shrink-0 mt-1" size={22} />
              <p className="text-muted leading-relaxed text-lg italic border-l-4 border-accent-500 pl-6">
                People are our most valuable resource and key differentiators in realizing our Vision. We offer them freedom at work place, opportunities to learn and grow as an individual and a professional.
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              Join a team of dedicated structural engineers and professionals working on diverse projects across the USA, UAE, and India. We foster a culture of innovation, collaboration, and continuous learning.
            </p>
          </div>
        </motion.div>
      )
    },
    {
      label: "Current Openings",
      content: (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {JOB_OPENINGS.map((job) => (
            <motion.div
              key={job.slug}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 card-hover"
            >
              <h3 className="text-lg font-bold text-brand-800 mb-4">{job.title}</h3>
              <div className="space-y-2.5 text-sm text-muted mb-5">
                {job.category && (
                  <p className="flex items-center gap-2.5">
                    <Briefcase size={15} className="text-accent-500 shrink-0" />
                    {job.category}
                  </p>
                )}
                <p className="flex items-center gap-2.5">
                  <MapPin size={15} className="text-accent-500 shrink-0" />
                  {job.locations.join(", ")}
                </p>
                <p className="flex items-center gap-2.5">
                  <Calendar size={15} className="text-accent-500 shrink-0" />
                  {job.date}
                </p>
              </div>
              <div className="space-y-2.5 text-sm mb-5">
                <p><strong className="text-brand-800">Requirements:</strong><br /><span className="text-muted">{job.requirements}</span></p>
                <p><strong className="text-brand-800">Skills:</strong><br /><span className="text-muted">{job.skills}</span></p>
              </div>
              <a
                href={`mailto:${HR_EMAIL}?subject=Application for ${job.title}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-500 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all shadow-md shadow-accent-500/20"
              >
                <Send size={14} />
                Apply Now
              </a>
            </motion.div>
          ))}
        </motion.div>
      )
    },
    {
      label: "Internship Programmes",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-start gap-5 bg-white rounded-2xl p-8 shadow-sm border border-brand-100">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center shrink-0 shadow-lg shadow-accent-500/20">
              <GraduationCap className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-800 mb-3">Internship Opportunities</h3>
              <p className="text-muted leading-relaxed mb-5">
                SMV Engineers offers internship opportunities for students and recent graduates eager to gain hands-on experience in structural engineering. Interns work alongside experienced professionals on real projects, gaining exposure to full-service structural engineering from concept to construction.
              </p>
              <a
                href={`mailto:${HR_EMAIL}?subject=Internship Inquiry`}
                className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium transition-colors"
              >
                <Send size={14} />
                Send your resume
              </a>
            </div>
          </div>
        </motion.div>
      )
    }
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5">
              <BadgeCheck className="text-accent-400" size={20} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Careers</h1>
            <p className="text-brand-200 max-w-2xl leading-relaxed text-lg">
              Join our team of structural engineering professionals and build the future with us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <TabSystem tabs={tabs} />
      </section>

      <CTASection />
    </>
  )
}
