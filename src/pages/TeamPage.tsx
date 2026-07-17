"use client"

import { motion } from "motion/react"
import { CTASection } from "@/components/CTASection"
import { TEAM_MEMBERS } from "@/lib/constants"
import { Users, Crown, Medal } from "lucide-react"

const officeColors: Record<string, string> = {
  "Global": "bg-accent-100 text-accent-600 border-accent-200",
  "SMVE-Surat": "bg-accent-50 text-accent-600 border-accent-200",
  "SMVE-Vadodara": "bg-accent-50 text-accent-600 border-accent-200",
  "SMVE-Ahmedabad": "bg-accent-50 text-accent-600 border-accent-200",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 }
}

export function TeamPage() {
  const leadership = TEAM_MEMBERS.filter((m) => m.isLeadership)
  const staff = TEAM_MEMBERS.filter((m) => !m.isLeadership)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5">
              <Users className="text-accent-400" size={20} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Our Team</h1>
            <p className="text-brand-200 max-w-2xl leading-relaxed text-lg">
              Meet the professionals behind SMV Engineers — a team of dedicated structural engineers, BIM specialists, and support staff across three offices.
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
          <div className="flex items-center gap-3 mb-8">
            <Crown className="text-accent-500" size={20} />
            <h2 className="text-2xl font-bold text-brand-800">Leadership</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20"
          >
            {leadership.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white rounded-2xl p-6 shadow-sm border border-brand-100 card-hover"
              >
                {member.image ? (
                  <div className="w-20 h-20 rounded-2xl overflow-hidden mb-4 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-400 flex items-center justify-center mb-4 shadow-lg shadow-accent-500/20">
                    <span className="text-lg font-bold text-white">
                      {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                )}
                <h3 className="font-semibold text-brand-800 text-lg">{member.name}</h3>
                <p className="text-sm text-muted mt-1">{member.role}</p>
                <span className={`inline-block mt-3 text-xs font-medium px-2.5 py-1 rounded-full border ${officeColors[member.office] ?? "bg-brand-50 text-muted border-border"}`}>
                  {member.office}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Medal className="text-accent-500" size={20} />
            <h2 className="text-2xl font-bold text-brand-800">Staff</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
          >
            {staff.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white rounded-xl p-4 shadow-sm border border-brand-50 flex items-start gap-3 card-hover"
              >
                {member.image ? (
                  <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 shadow-sm">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-xs font-bold text-white">
                      {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="font-medium text-brand-800 text-sm truncate">{member.name}</h3>
                  <p className="text-xs text-muted">{member.role}</p>
                  <span className={`inline-block mt-1.5 text-[10px] font-medium px-1.5 py-0.5 rounded-full border ${officeColors[member.office] ?? "bg-brand-50 text-muted border-border"}`}>
                    {member.office}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <CTASection />
    </>
  )
}
