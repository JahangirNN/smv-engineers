"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "motion/react"
import type { Slide } from "@/lib/types"

interface HeroSliderProps {
  slides: Slide[]
  height?: string
}

export function HeroSlider({ slides, height = "h-[50vh] md:h-[80vh]" }: HeroSliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const autoplay = useCallback(
    () => Autoplay({ delay: 6000, stopOnInteraction: false }),
    []
  )
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay()])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className={`relative ${height} overflow-hidden`}>
      <div ref={emblaRef} className="embla__viewport h-full">
        <div className="embla__container h-full">
          {slides.map((slide, i) => (
            <div key={i} className="embla__slide relative h-full">
              <picture>
                <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                <img
                  src={slide.desktopImage}
                  alt={`Slide ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-900/40 to-brand-950/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-950/30 to-transparent" />
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24 max-w-4xl"
              >
                <span className="inline-block text-accent-400 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-3 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {slide.label}
                </span>
                <p className="text-white/95 text-sm md:text-lg leading-relaxed max-w-3xl font-light">
                  {slide.caption}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white rounded-full p-2.5 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 backdrop-blur-md text-white rounded-full p-2.5 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === selectedIndex
                ? "w-10 h-2.5 bg-accent-500 shadow-lg shadow-accent-500/30"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
