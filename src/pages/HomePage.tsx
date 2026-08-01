"use client"

import { useCallback, useEffect, useState } from "react"
import { motion } from "motion/react"
import { Building2, Shield, Cog, HardHat, Ruler, Trees } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import slickLeft from "@/assets/icons/slick_left.svg"
import slickRight from "@/assets/icons/slick_right.svg"
import { CTASection } from "@/components/CTASection"
import { ProjectCard } from "@/components/ProjectCard"
import { SectionHeading } from "@/components/SectionHeading"
import { CurvedLink } from "@/components/CurvedLink"
import { Button } from "@/components/Button"
import { StatCounter } from "@/components/StatCounter"
import { Marquee } from "@/components/Marquee"
import { Reveal } from "@/components/Reveal"
import { img } from "@/lib/assets"
import { HERO_SLIDES, FEATURED_PROJECTS, CLIENTS } from "@/lib/constants"

const servicesData = [
  { icon: Building2, title: "Structural Engineering", desc: "RC, PT, Steel, Wood & Composite design for new structures and rehabilitations." },
  { icon: Shield, title: "Seismic Engineering", desc: "Performance-based seismic design, evaluation, and retrofitting of structures." },
  { icon: Cog, title: "Speciality Engineering", desc: "Cold storages, industrial, tall buildings, deep foundations, telecom structures." },
  { icon: HardHat, title: "Plant Engineering", desc: "Civil, MEP, Fire Safety, Mechanical/Piping for industrial facilities." },
  { icon: Ruler, title: "Structural Audits", desc: "Peer review, proof checking, and code compliance verification." },
  { icon: Trees, title: "BIM Solutions", desc: "Intelligent 3D modeling for seamless stakeholder collaboration." },
]

const MAP_MARKERS = [
  { label: "USA", left: "20%", top: "32%" },
  { label: "UAE", left: "62%", top: "46%" },
  { label: "India", left: "71%", top: "56%" },
]

export function HomePage() {
  const [heroRef, heroApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5200, stopOnInteraction: false })])
  const [heroIndex, setHeroIndex] = useState(0)

  const onHeroSelect = useCallback(() => {
    if (!heroApi) return
    setHeroIndex(heroApi.selectedScrollSnap())
  }, [heroApi])

  useEffect(() => {
    if (!heroApi) return
    onHeroSelect()
    heroApi.on("select", onHeroSelect)
    heroApi.on("reInit", onHeroSelect)
    return () => {
      heroApi.off("select", onHeroSelect)
      heroApi.off("reInit", onHeroSelect)
    }
  }, [heroApi, onHeroSelect])

  const [projectsRef, projectsApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 4500, stopOnInteraction: true })])

  const activeSlide = HERO_SLIDES[heroIndex] ?? HERO_SLIDES[0]!

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-brand-950 noise">
        <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full bg-brand-500/20 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-52 -left-40 w-[480px] h-[480px] rounded-full bg-accent-500/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-32 md:pt-40 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-accent-500" />
              <span className="text-accent-400 text-[11px] font-semibold uppercase tracking-[0.3em]">
                SMV Engineers — Est. 2007
              </span>
            </div>

            <h1 className="mt-6 font-display font-bold text-white tracking-tight leading-[0.98] text-[13vw] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              Complex
              <br />
              Structures,
              <br />
              <span className="text-outline-light">Simple</span>{" "}
              <span className="text-gradient-ember">Solutions.</span>
            </h1>

            <p className="mt-7 text-brand-200 text-base md:text-lg leading-relaxed max-w-xl">
              Full-service structural engineering across the USA, India and UAE — from
              concept to construction, delivered with blueprint precision and
              construction-site energy.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-8">
              <Button to="/projects" variant="ember">
                Explore Our Work
              </Button>
              <CurvedLink to="/the-firm" tone="light">
                The Firm
              </CurvedLink>
            </div>

            <div className="mt-12 hidden md:block border-t border-white/10 pt-6 max-w-md">
              <p className="text-brand-300 text-sm leading-relaxed">
                <span className="text-accent-400 font-semibold uppercase tracking-widest text-[11px] mr-3">
                  {activeSlide.label}
                </span>
                {activeSlide.caption}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent-500/40 pointer-events-none hidden sm:block" />
            <div className="relative overflow-hidden corner-ticks">
              <div ref={heroRef} className="embla__viewport">
                <div className="embla__container">
                  {HERO_SLIDES.map((slide) => (
                    <div key={slide.label} className="embla__slide relative">
                      <img
                        src={slide.desktopImage}
                        alt={slide.label}
                        className="w-full h-[340px] md:h-[460px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 bg-brand-950/70 backdrop-blur-sm text-accent-400 text-[10px] font-semibold uppercase tracking-[0.25em] px-3 py-1.5 border border-white/10">
                        {slide.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <button
                  onClick={() => heroApi?.scrollPrev()}
                  aria-label="Previous slide"
                  className="w-9 h-9 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-accent-500 hover:border-accent-500 transition-all flex items-center justify-center"
                >
                  <img src={slickLeft} alt="" className="w-5 h-5" />
                </button>
                <button
                  onClick={() => heroApi?.scrollNext()}
                  aria-label="Next slide"
                  className="w-9 h-9 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-accent-500 hover:border-accent-500 transition-all flex items-center justify-center"
                >
                  <img src={slickRight} alt="" className="w-5 h-5" />
                </button>
                <span className="text-white/80 text-xs tracking-[0.3em] font-display ml-2">
                  0{heroIndex + 1} <span className="text-white/40">/ 0{HERO_SLIDES.length}</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ STATS BAND ============ */}
      <section className="relative bg-accent-500 noise overflow-hidden">
        <div className="absolute inset-0 blueprint-grid-ember pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCounter value={13} suffix="+" label="Years of Engineering" onDark />
          <StatCounter value={100} suffix="+" label="Clients Served" onDark />
          <StatCounter value={3} label="Countries of Operation" onDark />
          <StatCounter value={2007} label="Founded" onDark />
        </div>
      </section>

      {/* ============ THE FIRM ============ */}
      <section className="relative overflow-hidden py-20 md:py-32 blueprint-grid">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <SectionHeading
              eyebrow="The Firm"
              title="Structural Engineering,"
              outline="Redefined."
              lead="SMV Engineers is a full service structural engineering firm with diverse experience in the design of buildings and associated structures — from concept to construction documents, adaptive to any local market and delivered with competitive fees."
            />
            <Reveal delay={0.2} className="mt-9">
              <CurvedLink to="/the-firm">Read More About The Firm</CurvedLink>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-brand-500/10 pointer-events-none" />
              <div className="relative corner-ticks overflow-hidden">
                <img
                  src={img("/images/backgrounds/firm_bg_xs.jpg")}
                  alt="SMV Engineers office"
                  className="w-full h-[380px] md:h-[460px] object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 shadow-lg">
                  <p className="font-display font-bold text-brand-900 text-sm tracking-widest">SINCE 2007</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="relative overflow-hidden py-20 md:py-32 noise">
        <img
          src={img("/images/backgrounds/services_bg_new.jpg")}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-950/92" />
        <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
            <SectionHeading
              eyebrow="What We Do"
              title="Engineering Services,"
              outline="End to End."
              tone="light"
            />
            <Reveal delay={0.15} className="lg:justify-self-end">
              <CurvedLink to="/services" tone="light">
                View All Services
              </CurvedLink>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {servicesData.map((svc, i) => {
              const Icon = svc.icon
              return (
                <Reveal key={svc.title} delay={i * 0.06} className="h-full">
                  <div className="group h-full bg-brand-950/60 backdrop-blur-sm p-8 hover:bg-brand-900/70 transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-0.5 w-0 bg-accent-500 transition-all duration-500 group-hover:w-full" />
                    <Icon className="text-accent-400 mb-5 transition-transform duration-300 group-hover:-translate-y-1" size={26} strokeWidth={1.6} />
                    <h3 className="font-display font-semibold text-white text-lg tracking-wide mb-2.5">{svc.title}</h3>
                    <p className="text-brand-200 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="Featured Work"
              title="Projects That"
              outline="Stand Tall."
              lead="A selection of structural engineering work delivered across residential, commercial, industrial and special structures."
            />
            <Reveal delay={0.15} className="hidden md:block">
              <CurvedLink to="/projects">All Projects</CurvedLink>
            </Reveal>
          </div>

          <div className="relative">
            <div ref={projectsRef} className="embla__viewport overflow-hidden -mx-2 px-2">
              <div className="embla__container flex gap-6">
                {FEATURED_PROJECTS.map((project, i) => (
                  <div key={project.name} className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0">
                    <ProjectCard {...project} index={i} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => projectsApi?.scrollPrev()}
              aria-label="Previous projects"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-border shadow-lg hover:bg-accent-500 hover:border-accent-500 transition-all flex items-center justify-center z-10"
            >
              <img src={slickLeft} alt="" className="w-5 h-5" />
            </button>
            <button
              onClick={() => projectsApi?.scrollNext()}
              aria-label="Next projects"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-border shadow-lg hover:bg-accent-500 hover:border-accent-500 transition-all flex items-center justify-center z-10"
            >
              <img src={slickRight} alt="" className="w-5 h-5" />
            </button>
          </div>

          <Reveal className="mt-10 md:hidden">
            <CurvedLink to="/projects">All Projects</CurvedLink>
          </Reveal>
        </div>
      </section>

      {/* ============ GLOBAL REACH ============ */}
      <section className="relative overflow-hidden bg-brand-950 noise py-20 md:py-32">
        <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            eyebrow="Global Reach"
            title="One Firm,"
            outline="Three Continents."
            tone="light"
            lead="Structural design adapted to any local market — offices and active projects across the USA, UAE and India."
            align="center"
            className="mb-16"
          />

          <Reveal>
            <div className="relative max-w-4xl mx-auto">
              <img
                src={img("/images/backgrounds/World_Map.png")}
                alt="World map showing SMV Engineers global reach"
                className="w-full opacity-70"
              />
              {MAP_MARKERS.map((m) => (
                <div
                  key={m.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: m.left, top: m.top }}
                >
                  <span className="relative block w-3 h-3">
                    <span className="absolute inset-0 rounded-full bg-accent-500 animate-pulse-dot" />
                    <span className="absolute inset-0 rounded-full bg-accent-500 border-2 border-white/70" />
                  </span>
                  <span className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.25em] text-accent-400">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {["USA — Seattle / WA Projects", "UAE — Design Collaborations", "India — Surat · Ahmedabad · Vadodara"].map((chip) => (
              <span
                key={chip}
                className="px-5 py-2.5 text-xs font-medium text-white bg-white/5 border border-white/10 tracking-wider hover:border-accent-500/60 hover:text-accent-400 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CLIENTS MARQUEE ============ */}
      <section className="relative overflow-hidden py-20 md:py-24 blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            eyebrow="Trusted By"
            title="Clients We"
            outline="Collaborate With."
            align="center"
            className="mb-14"
          />
        </div>
        <Marquee items={CLIENTS} />
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 text-center">
          <CurvedLink to="/our-clients" direction="right" className="!justify-center">
            Meet Our Clients
          </CurvedLink>
        </div>
      </section>

      <CTASection />
    </>
  )
}
