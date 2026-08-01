"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { img } from "@/lib/assets"
import { NAV_ITEMS, SOCIAL_LINKS, SITE_NAME } from "@/lib/constants"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg shadow-brand-950/40" : "bg-gradient-to-b from-brand-950/70 to-transparent"
      }`}
    >
      <div className="hidden md:flex justify-between items-center px-6 py-1.5 border-b border-white/10">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
          Est. 2007 — Structural Engineering
        </span>
        <div className="flex gap-4 text-white/60">
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent-400 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent-400 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent-400 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent-400 transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 md:px-8 h-16 md:h-[76px]">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <img
              src={img("/images/logos/site-logo.png")}
              alt={SITE_NAME}
              className="h-9 md:h-11 w-auto brightness-0 invert opacity-95"
            />
          </motion.div>
          <span className="hidden sm:block font-display font-bold text-lg tracking-wide text-white">
            SMV&nbsp;ENGINEERS
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const active = location.pathname === item.href
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`group relative py-2 text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-200 ${
                  active ? "text-accent-400" : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white transition-colors hover:text-accent-400"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden glass-dark border-t border-white/10"
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium uppercase tracking-wider transition-all ${
                    location.pathname === item.href
                      ? "text-accent-400 bg-white/5 border-l-2 border-accent-500"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
