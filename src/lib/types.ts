export interface Office {
  name: string
  address: string[]
  phone: string
  email: string
}

export interface TeamMember {
  name: string
  role: string
  office: string
  isLeadership: boolean
  image?: string
}

export interface Project {
  name: string
  location: string
  category: ProjectCategory
}

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Healthcare"
  | "Industrial"
  | "Educational"
  | "Structural Audits"
  | "Seismic Evaluations"
  | "Renovations"
  | "Special Structures"

export interface Client {
  name: string
  logo: string
}

export interface JobOpening {
  title: string
  category: string
  locations: string[]
  date: string
  requirements: string
  skills: string
  slug: string
}

export interface ServiceItem {
  title: string
  details: string
  subItems?: string[]
}

export interface ServiceCategory {
  name: string
  services: ServiceItem[]
}

export interface Slide {
  desktopImage: string
  mobileImage: string
  caption: string
  label: string
}
