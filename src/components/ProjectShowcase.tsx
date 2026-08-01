"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import slickLeft from "@/assets/icons/slick_left.svg"
import slickRight from "@/assets/icons/slick_right.svg"
import arrowWhite from "@/assets/icons/right_arrow_white.svg"

interface ProjectShowcaseProps {
  projects: { name: string; image: string }[]
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [emblaRef, api] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4500, stopOnInteraction: true })]
  )
  const [progress, setProgress] = useState(0)
  const [current, setCurrent] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const trackY = useTransform(scrollYProgress, [0, 1], [36, -36])

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [api])

  useEffect(() => {
    if (!api) return
    const onScroll = () => setProgress(api.scrollProgress())
    onSelect()
    onScroll()
    api.on("select", onSelect)
    api.on("scroll", onScroll)
    api.on("reInit", onSelect)
    api.on("reInit", onScroll)
    return () => {
      api.off("select", onSelect)
      api.off("scroll", onScroll)
      api.off("reInit", onSelect)
      api.off("reInit", onScroll)
    }
  }, [api, onSelect])

  return (
    <div ref={sectionRef} className="relative">
      <motion.div style={{ y: trackY }} className="will-change-transform">
        <div
          ref={emblaRef}
          className="embla__viewport overflow-hidden -mx-2 px-2 cursor-grab active:cursor-grabbing"
        >
          <div className="embla__container flex gap-6">
            {projects.map((project, i) => (
              <div
                key={project.name}
                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0"
              >
                <figure className="group relative overflow-hidden corner-ticks bg-brand-950 h-[280px] md:h-[340px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/10 to-transparent" />

                  <span className="absolute top-4 left-5 font-display font-bold text-3xl leading-none text-outline-light opacity-0 translate-y-2 group-hover:opacity-60 group-hover:translate-y-0 transition-all duration-500 pointer-events-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <figcaption className="absolute bottom-0 inset-x-0 p-5 md:p-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-accent-400 mb-1.5">
                        Featured Work
                      </p>
                      <h3 className="font-display font-semibold text-white text-lg md:text-xl tracking-wide">
                        {project.name}
                      </h3>
                    </div>
                    <span className="shrink-0 w-9 h-9 border border-white/25 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-500 group-hover:border-accent-500">
                      <img src={arrowWhite} alt="" aria-hidden className="w-4 h-4" />
                    </span>
                  </figcaption>

                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-500 group-hover:w-full transition-all duration-500" />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="mt-7 flex items-center gap-5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => api?.scrollPrev()}
            aria-label="Previous projects"
            className="w-9 h-9 bg-white border border-border shadow-sm hover:bg-accent-500 hover:border-accent-500 transition-all flex items-center justify-center"
          >
            <img src={slickLeft} alt="" className="w-4 h-4" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            aria-label="Next projects"
            className="w-9 h-9 bg-white border border-border shadow-sm hover:bg-accent-500 hover:border-accent-500 transition-all flex items-center justify-center"
          >
            <img src={slickRight} alt="" className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 h-px bg-border relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-accent-500 origin-left"
            style={{ scaleX: progress }}
          />
        </div>

        <span className="font-display font-bold text-sm text-brand-900 tabular-nums">
          {String(current + 1).padStart(2, "0")}
          <span className="text-muted"> / {String(projects.length).padStart(2, "0")}</span>
        </span>
      </div>
    </div>
  )
}
