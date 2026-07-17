import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { RootLayout } from "@/layouts/RootLayout"
import { HomePage } from "@/pages/HomePage"
import { TheFirmPage } from "@/pages/TheFirmPage"
import { ServicesPage } from "@/pages/ServicesPage"
import { TeamPage } from "@/pages/TeamPage"
import { ProjectsPage } from "@/pages/ProjectsPage"
import { OurClientsPage } from "@/pages/OurClientsPage"
import { CareersPage } from "@/pages/CareersPage"
import { ContactPage } from "@/pages/ContactPage"

const basename = import.meta.env.BASE_URL.replace(/\/$/, "")

function GHPagesRedirect() {
  const navigate = useNavigate()
  useEffect(() => {
    const stored = sessionStorage.getItem("redirect")
    if (stored) {
      sessionStorage.removeItem("redirect")
      const path = stored.replace(import.meta.env.BASE_URL.replace(/\/$/, ""), "") || "/"
      navigate(path, { replace: true })
    }
  }, [navigate])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <GHPagesRedirect />
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/the-firm" element={<TheFirmPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/our-clients" element={<OurClientsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
