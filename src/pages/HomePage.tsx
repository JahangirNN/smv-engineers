"use client"

import { useCallback, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowRight, Building2, Shield, Cog, HardHat, Ruler, Trees, Compass, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { HeroSlider } from "@/components/HeroSlider"
import { CTASection } from "@/components/CTASection"
import { ProjectCard } from "@/components/ProjectCard"
import { img } from "@/lib/assets"
import { HERO_SLIDES, FEATURED_PROJECTS, SITE_NAME } from "@/lib/constants"

const servicesData = [
  { icon: Building2, title: "Structural Engineering", desc: "RC, PT, Steel, Wood & Composite design for new structures and rehabilitations." },
  { icon: Shield, title: "Seismic Engineering", desc: "Performance-based seismic design, evaluation, and retrofitting of structures." },
  { icon: Cog, title: "Speciality Engineering", desc: "Cold storages, industrial, tall buildings, deep foundations, telecom structures." },
  { icon: HardHat, title: "Plant Engineering", desc: "Civil, MEP, Fire Safety, Mechanical/Piping for industrial facilities." },
  { icon: Ruler, title: "Structural Audits", desc: "Peer review, proof checking, and code compliance verification." },
  { icon: Trees, title: "BIM Solutions", desc: "Intelligent 3D modeling for seamless stakeholder collaboration." },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export function HomePage() {
  const [projectsRef, projectsApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 4500, stopOnInteraction: true })])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onProjectsSelect = useCallback(() => {
    if (!projectsApi) return
    setCanScrollPrev(projectsApi.canScrollPrev())
    setCanScrollNext(projectsApi.canScrollNext())
  }, [projectsApi])

  useEffect(() => {
    if (!projectsApi) return
    onProjectsSelect()
    projectsApi.on("select", onProjectsSelect)
    projectsApi.on("reInit", onProjectsSelect)
    return () => {
      projectsApi.off("select", onProjectsSelect)
      projectsApi.off("reInit", onProjectsSelect)
    }
  }, [projectsApi, onProjectsSelect])

  return (
    <>
      <HeroSlider slides={HERO_SLIDES} />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-accent-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-500/10 rounded-2xl -z-10" />
              <img
                src={img("/images/logos/site-logo.png")}
                alt={SITE_NAME}
                className="h-20 w-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-4 tracking-tight">
                <span className="text-gradient">The Firm</span>
              </h2>
              <p className="text-muted leading-relaxed text-base md:text-lg mb-6">
                {SITE_NAME} is a full service structural engineering firm with diverse experience in the design of buildings and associated structures. We provide world class structural engineering with cutting edge technology, state of the art design software and in-depth experience.
              </p>
              <motion.div whileHover={{ x: 4 }} transition={{ type: "spring" }}>
                <Link
                  to="/the-firm"
                  className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium transition-colors group"
                >
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 md:py-28">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Compass className="text-accent-400" size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">What We Do</h2>
            <p className="text-brand-200 max-w-2xl mx-auto text-lg">
              Comprehensive structural engineering services from concept to construction
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {servicesData.map((svc) => {
              const Icon = svc.icon
              return (
                <motion.div
                  key={svc.title}
                  variants={itemVariants}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:bg-white/10 hover:border-accent-500/30 transition-all duration-500"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-accent-400" size={22} />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">{svc.title}</h3>
                  <p className="text-brand-200 text-sm leading-relaxed">{svc.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-accent-500/20 hover:shadow-accent-500/30 group"
            >
              View All Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-brand-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-800 mb-3 tracking-tight">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">
              A selection of our recent structural engineering projects
            </p>
          </motion.div>

          <div className="relative">
            <div ref={projectsRef} className="embla__viewport overflow-hidden -mx-2 px-2">
              <div className="embla__container flex gap-6">
                {FEATURED_PROJECTS.map((project, i) => (
                  <div key={project.name} className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                    <ProjectCard {...project} index={i} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => projectsApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm text-brand-800 rounded-full p-2.5 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed border border-border/50"
              aria-label="Previous projects"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => projectsApi?.scrollNext()}
              disabled={!canScrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm text-brand-800 rounded-full p-2.5 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed border border-border/50"
              aria-label="Next projects"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <motion.div whileHover={{ x: 4 }}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400 font-medium transition-colors group"
              >
                View All Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
