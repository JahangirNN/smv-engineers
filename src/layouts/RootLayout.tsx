import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ScrollProgress } from "@/components/ScrollProgress"
import { motion } from "motion/react"

export function RootLayout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
