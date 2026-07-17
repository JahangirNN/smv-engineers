import { img } from './assets'
import type {
  Slide, TeamMember, Client, JobOpening, Office,
  ServiceCategory, Project, ProjectCategory
} from './types'

export const SITE_NAME = "SMV Engineers"
export const TAGLINE = "Complex Structures, Simple Solutions"
export const EMAIL = "admin@smvengineers.com"
export const HR_EMAIL = "hr@smvengineers.com"

export const NAV_ITEMS = [
  { label: "The Firm", href: "/the-firm" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Projects", href: "/projects" },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/smvengineers",
  linkedin: "https://www.linkedin.com/company/smv-engineers/",
  twitter: "https://twitter.com/smv_engineers",
  instagram: "https://www.instagram.com/smv_engineers/"
} as const

export const HERO_SLIDES: Slide[] = [
  {
    desktopImage: img("/images/hero/new_hero_banner.jpg"),
    mobileImage: img("/images/hero/Main_Banner_Image_xs-1.jpg"),
    caption: "SMV Engineers is a Structural Engineering Firm providing excellent and innovative yet simple engineering solutions to complex structures. Founded in 2007, we have provided structural designs for numerous projects in USA, India and UAE.",
    label: "Our Firm"
  },
  {
    desktopImage: img("/images/hero/IMG_02.jpg"),
    mobileImage: img("/images/hero/IMG_02_Mobile.jpg"),
    caption: "We collaborate with developers, owners, architects, contractors and other engineers, to develop effective and optimized structural solutions to deliver successful projects.",
    label: "Our Expertise"
  },
  {
    desktopImage: img("/images/hero/IMG_03.jpg"),
    mobileImage: img("/images/hero/IMG_03_Mobile.jpg"),
    caption: "Our team of highly qualified structural engineers and technicians provides design of all types of building and non-building structures with cutting edge technology and state of the art design software.",
    label: "Our Processes"
  },
  {
    desktopImage: img("/images/hero/IMG_04.jpg"),
    mobileImage: img("/images/hero/IMG_04_Mobile.jpg"),
    caption: "Our goal is to make the whole experience of structural engineering a pleasant one for our clients by providing excellent support and service through our commitment to technical excellence.",
    label: "Our Passion"
  },
  {
    desktopImage: img("/images/hero/IMG_05.jpg"),
    mobileImage: img("/images/hero/IMG_05_Mobile.jpg"),
    caption: "We provide structural designs from concept to construction that are adaptive to any local market, ensuring code compliance and cost efficiency across USA, India and UAE.",
    label: "Why Use SMV"
  }
]

export const OFFICES: Office[] = [
  {
    name: "Surat (Head Office)",
    address: [
      "Floor 2, En-Vision Tech House,",
      "New City Light Road, Bharthana,",
      "Surat-395007, Gujarat, INDIA."
    ],
    phone: "+91 6354834994",
    email: EMAIL
  },
  {
    name: "Vadodara",
    address: [
      `2nd Floor, "AARANYA" Plot No. 17,`,
      "Above Ajit Nair Architects Atelier Pvt. Ltd.",
      "Sangath Bungalows, B/h GEB Substation, Off Sama Savli Road,",
      "Vadodara-390 008, Gujarat, INDIA."
    ],
    phone: "0265-231-1473",
    email: EMAIL
  },
  {
    name: "Ahmedabad",
    address: [
      "Maharashi Complex, 2nd Floor,",
      "5, Sardar Patel Colony,",
      "Stadium Road, Sardar Patel Colony,",
      "Ahmedabad-380014, Gujarat, INDIA."
    ],
    phone: "0265-231-1473",
    email: EMAIL
  }
]

const TEAM_IMAGE_MAP: Record<string, string> = {
  "Muni Vimawala": "Muni-removebg-preview.png",
  "Nihar Doctor": "Niharsir-removebg-preview.png",
  "Dipak Rathod": "Surat-Dipak_Rathod-removebg-preview.png",
  "Arpan Desai": "Website_Image_-_AD-1-removebg-preview.png",
  "Mehul Gandhi": "Vadodara-Mehul_Gandhi-removebg-preview-1.png",
  "Jayraj Lukose": "Jayraj-final.png",
  "Jigna Desai": "Ahmedabad-Jigna-removebg-preview.png",
  "Arvind Patel": "Arvind_Patel_1-removebg-preview-1.png",
  "Digvijay Patankar": "Digvijay.png",
  "Chhaya Solanki": "Surat-Chhaya-removebg-preview.png",
  "Vishal Patel": "VP_PHOTO-removebg-preview.png",
  "Nirav Parekh": "Photo_-_Nirav_Parekh-removebg-preview.png",
  "Sunil Parmar": "3.Sunil_Parmar-removebg-preview.png",
  "Jahanvi Parmar": "4.jahanvi-removebg-preview.png",
  "Jitendra Bhandari": "5.-Jitendra-Bhandari.png",
  "Hitesh Patel": "6.Hitesh_patel-removebg-preview.png",
  "Sushil Sharma": "7.Sushil_Sharma-removebg-preview-1-1.png",
  "Pooja Barbodhania": "8.POOJA-removebg-preview-5.png",
  "Rahul Lad": "9.Rahul_Lad-removebg-preview-1.png",
  "Namrata Patel": "Namrata_2-removebg-preview-1.png",
  "Sushil Patel": "18.Sushil_Patel-removebg-preview.png",
  "Pintu Bhanderi": "28.Pintu-removebg-preview-final-1.png",
  "Kapil Rathore": "Kapil-Rathore-2.jpg",
  "Rohan Gandhi": "Rohan-removebg-preview.png",
  "Dhruvil Jariwala": "Dhruvil-Jariwala.png",
  "Ramesh Kumavat": "IMG_0119-fotor-bg-remover-2023060416405.png",
  "Pratham Prajapati": "Pratham-Prajapati-Image.png",
  "Bhargav Sondagar": "Bhargav-Sondagar-2.jpg",
  "Dhrumil Korpe": "Dhrumil-korpe-1.png",
  "Rohit Mistry": "Photograph-for-office-website-1.jpg",
  "Yash Patel": "Yash_Patel-removebg-preview.png",
  "Darshan Chauhan": "Darshan_Chauhan-removebg-preview.png",
  "Jaydip Budheliya": "Vadodara-Jaydeep-.png",
  "Divyesh Patel": "Vadodara-DIVYESH-PATEL.png",
  "Dhrumil Mehta": "Dhrumil-Mehta.png",
  "Satish Patel": "Satish_Patel-removebg-preview-1.png",
  "Balvant Rajuput": "29.Balvant-removebg-preview-1-e1616480832537.png",
  "Pankaj Verma": "Pankaj-Verma.png",
}

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Muni Vimawala", role: "Founder – Tech. Advisor", office: "Global", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Muni Vimawala"]}`) },
  { name: "Nihar Doctor", role: "CEO", office: "SMVE-Surat", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Nihar Doctor"]}`) },
  { name: "Dipak Rathod", role: "Senior Project Manager", office: "SMVE-Surat", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Dipak Rathod"]}`) },
  { name: "Arpan Desai", role: "Senior Project Manager", office: "SMVE-Surat", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Arpan Desai"]}`) },
  { name: "Mehul Gandhi", role: "Project Manager", office: "SMVE-Vadodara", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Mehul Gandhi"]}`) },
  { name: "Jayraj Lukose", role: "Associate", office: "SMVE-Vadodara", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Jayraj Lukose"]}`) },
  { name: "Jigna Desai", role: "Management Consultant", office: "SMVE-Ahmedabad", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Jigna Desai"]}`) },
  { name: "Arvind Patel", role: "India Division Head", office: "SMVE-Ahmedabad", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Arvind Patel"]}`) },
  { name: "Digvijay Patankar", role: "Project Manager", office: "SMVE-Vadodara", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Digvijay Patankar"]}`) },
  { name: "Chhaya Solanki", role: "HR Manager", office: "SMVE-Surat", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Chhaya Solanki"]}`) },
  { name: "Vishal Patel", role: "IT Manager", office: "SMVE-Surat", isLeadership: true,   image: img(`/images/team/${TEAM_IMAGE_MAP["Vishal Patel"]}`) },
  { name: "Nirav Parekh", role: "Assistant Project Manager", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Nirav Parekh"]}`) },
  { name: "Sunil Parmar", role: "Assistant BIM Manager", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Sunil Parmar"]}`) },
  { name: "Jahanvi Parmar", role: "Assistant BIM Manager", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Jahanvi Parmar"]}`) },
  { name: "Jitendra Bhandari", role: "BIM-II", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Jitendra Bhandari"]}`) },
  { name: "Hitesh Patel", role: "BIM-IV", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Hitesh Patel"]}`) },
  { name: "Sushil Sharma", role: "Structural Engineer-III", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Sushil Sharma"]}`) },
  { name: "Pooja Barbodhania", role: "BIM-II", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Pooja Barbodhania"]}`) },
  { name: "Rahul Lad", role: "BIM-III", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Rahul Lad"]}`) },
  { name: "Namrata Patel", role: "Structural Engineer-III", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Namrata Patel"]}`) },
  { name: "Sushil Patel", role: "CAD Technician-I", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Sushil Patel"]}`) },
  { name: "Pintu Bhanderi", role: "BIM-III", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Pintu Bhanderi"]}`) },
  { name: "Kapil Rathore", role: "BIM-III", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Kapil Rathore"]}`) },
  { name: "Rohan Gandhi", role: "Engineer-III", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Rohan Gandhi"]}`) },
  { name: "Dhruvil Jariwala", role: "Engineer-III", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Dhruvil Jariwala"]}`) },
  { name: "Ramesh Kumavat", role: "Engineer-II", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Ramesh Kumavat"]}`) },
  { name: "Pratham Prajapati", role: "Engineer – III", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Pratham Prajapati"]}`) },
  { name: "Bhargav Sondagar", role: "BIM-I", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Bhargav Sondagar"]}`) },
  { name: "Dhrumil Korpe", role: "BIM-I", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Dhrumil Korpe"]}`) },
  { name: "Rohit Mistry", role: "BIM Tech", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Rohit Mistry"]}`) },
  { name: "Yash Patel", role: "Engineer-I", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Yash Patel"]}`) },
  { name: "Darshan Chauhan", role: "Engineer-II", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Darshan Chauhan"]}`) },
  { name: "Jaydip Budheliya", role: "Engineer-II", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Jaydip Budheliya"]}`) },
  { name: "Divyesh Patel", role: "Engineer-II", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Divyesh Patel"]}`) },
  { name: "Dhrumil Mehta", role: "Engineer-II", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Dhrumil Mehta"]}`) },
  { name: "Satish Patel", role: "Office Caretaker", office: "SMVE-Surat", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Satish Patel"]}`) },
  { name: "Balvant Rajuput", role: "Office Caretaker", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Balvant Rajuput"]}`) },
  { name: "Pankaj Verma", role: "Engineer-I", office: "SMVE-Vadodara", isLeadership: false,   image: img(`/images/team/${TEAM_IMAGE_MAP["Pankaj Verma"]}`) },
]

export const CLIENTS: Client[] = [
  { name: "Peterson Strehle Martinson, Inc.", logo: "Peterson_Strehle_Martinson.png" },
  { name: "WSP Global Inc.", logo: "WSP_Global.png" },
  { name: "29e6, LLC", logo: "29e6_LLC.png" },
  { name: "EQUAGEN", logo: "EQUAGEN.png" },
  { name: "Aarti Industries Limited", logo: "Aarti_Industries.png" },
  { name: "L&T Technology Services", logo: "LT_Technology_Services.png" },
  { name: "Yashashvi Rasayan PVT. LTD", logo: "Yashashvi_Rasayan.png" },
  { name: "Arabian Gulf Steel Industries", logo: "Arabian_Gulf_Steel.png" },
  { name: "Tejan Fabricators", logo: "Tejan_Fabricators.png" },
  { name: "Keselec", logo: "Keselec.png" },
  { name: "Abbott Healthcare Pvt. Ltd.", logo: "Abbott_Healthcare.png" },
  { name: "Cube Construction Engineering", logo: "Cube_Construction.png" },
  { name: "Indorama Ventures", logo: "Indorama_Ventures.png" },
  { name: "Sahasra Technik", logo: "Sahasra_Technik.png" },
  { name: "Lyondellbasell", logo: "Lyondellbasell.png" },
  { name: "Niyati Engineering Pvt. Ltd.", logo: "Niyati_Engineering.png" },
  { name: "Bluetex (I) Pvt Ltd", logo: "Bluetex_I_Pvt_Ltd.png" },
  { name: "PTD Cleantech Solution", logo: "PTD_Cleantech.png" },
  { name: "SR+A", logo: "SR+A.png" },
  { name: "Goyal & Co.", logo: "Goyal_and_Co.png" },
  { name: "Sahjanand Group", logo: "Sahjanand_Group.png" },
  { name: "Atul Industries", logo: "Atul_Industries.png" },
  { name: "Rallis India Limited", logo: "Rallis_India.png" },
  { name: "Deepak Phenolic Limited", logo: "Deepak_Phenolic.png" },
  { name: "ProTechX Engineering", logo: "ProTechX_Engineering.png" },
  { name: "David Weekly Homes", logo: "David_Weekly_Homes.png" },
  { name: "SM7 Design", logo: "SM7_Design.png" }
]

export const LICENSE_LOGOS = ["EIL.png", "AMC.png", "GIDC.png", "Gift.png", "Dholera.png"]
export const LICENSE_NAMES = [
  "Engineers India Limited",
  "Ahmedabad Municipal Corporation",
  "Gujarat Industrial Development Corporation",
  "GIFT City",
  "Dholera Special Investment Region"
]

export const JOB_OPENINGS: JobOpening[] = [
  {
    title: "BIM Modeller",
    category: "",
    locations: ["Surat", "Vadodara"],
    date: "2026",
    requirements: "Diploma/ B.E/ B.Tech (Civil), 1-7 Yrs experience (Freshers with relevant skill can apply)",
    skills: "REVIT preferred, Exposure to US Codes/Standards preferred",
    slug: "bim-modeller"
  },
  {
    title: "Structure Engineer",
    category: "Structural Engineer",
    locations: ["Surat", "Vadodara"],
    date: "2026",
    requirements: "B.E/ B.Tech (Civil) or M.E./M. Tech in Civil-Structural, 1-7 Yrs experience (Freshers can apply)",
    skills: "ETABS/STAAD/RCDC essential, US Codes/Standards preferred",
    slug: "structure-engineer"
  },
  {
    title: "BIM Steel Detailer (Civil/Structural)",
    category: "Civil Engineer",
    locations: ["Vadodara"],
    date: "2026",
    requirements: "Diploma/Degree in Civil/Structural Engineering, 0-10 Yrs experience (Freshers with Steel/Revit proficiency can apply)",
    skills: "BIM and steel detailing software proficiency",
    slug: "civil-engineerce-ii"
  }
]

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Core Strengths",
    services: [
      {
        title: "Structural Engineering",
        details: "New structures + Rehabilitations/Renovations/Additions. Design using RC, PT, Reinforced Masonry, Structural Steel, Wood and Composite. Existing building retrofitting.",
        subItems: [
          "New Structures — Design of buildings/structures using RC, PT, Reinforced Masonry, Structural Steel, Wood and Composite",
          "Rehabilitations / Renovations / Additions — Repairing, rehabilitating, retrofitting existing structures"
        ]
      },
      {
        title: "Seismic Engineering",
        details: "Performance-Based seismic design of new structures. Seismic evaluation and retrofitting of existing structures.",
        subItems: [
          "Performance-Based Design (PBD) approach for unconventional/critical facilities",
          "Seismic evaluation of older structures designed with outdated codes",
          "Seismic retrofitting to enhance performance during design earthquakes"
        ]
      },
      {
        title: "Speciality Structural Engineering",
        details: "Cold Storages, Industrial Structures, Tall buildings & long span structures, Earth retaining & excavation shoring, Deep foundations, Telecom support structures.",
        subItems: [
          "Cold Storages — Food processing & cold storage design",
          "Industrial Structures — Specialized knowledge of construction types, methods, local codes",
          "Tall buildings & long span structures — Maximizing unobstructed floor space",
          "Earth retaining & excavation shoring — Optimum design with safety checks",
          "Deep foundations — Economical and constructible solutions",
          "Telecom support structures — Monopoles, lattice towers, guyed towers"
        ]
      },
      {
        title: "Plant Engineering",
        details: "Civil Engineering, Architecture, MEP, Fire Safety, Mechanical/Piping."
      }
    ]
  },
  {
    name: "Related Services",
    services: [
      {
        title: "Structural Review & Audits",
        details: "Peer review, proof checking, structural audit for code compliance."
      },
      {
        title: "Value Engineering",
        details: "Cost analysis, alternative solutions, constructability assessments."
      },
      {
        title: "Analytical Modelling",
        details: "Creating analysis and FE models using various software."
      },
      {
        title: "Steel Connection Designs",
        details: "Comprehensive engineering for structural steel projects worldwide."
      }
    ]
  },
  {
    name: "Solutions",
    services: [
      {
        title: "Building Information Modelling",
        details: "BIM — intelligent 3D project modeling for stakeholder collaboration."
      },
      {
        title: "Construction Related",
        details: "Constructibility Review, Fabrication/Shop Drawings."
      }
    ]
  }
]

export const PROJECTS: Project[] = [
  { name: "East Olive Apartments", location: "WA, USA", category: "Residential" },
  { name: "Janak Mistry Bungalow", location: "Surat, Gujarat, India", category: "Residential" },
  { name: "Milan Dalal Residence", location: "Ahmedabad, Gujarat, India", category: "Residential" },
  { name: "Amantra Bungalow", location: "Surat, Gujarat, India", category: "Residential" },
  { name: "Hardik Shah Bungalow", location: "Surat, Gujarat, India", category: "Residential" },
  { name: "Stoneway 41st Apartments", location: "Redesign", category: "Residential" },
  { name: "Ballard 65th Blue Birch", location: "WA, USA", category: "Residential" },
  { name: "903 Peachtree", location: "Atlanta, USA", category: "Residential" },
  { name: "Greenwood Mixed Use", location: "WA, USA", category: "Residential" },
  { name: "Seamar Vancouver Housing", location: "", category: "Residential" },
  { name: "Des Moines Apartments", location: "WA", category: "Residential" },
  { name: "Salmonberry Apartments", location: "WA, USA", category: "Residential" },
  { name: "500 Square Apartments", location: "Bellingham", category: "Residential" },
  { name: "18th Avenue Apartments", location: "Seattle, WA, USA", category: "Residential" },
  { name: "Union Residency", location: "Surat, Gujarat, India", category: "Residential" },
  { name: "Milan Dalal Bungalow", location: "Ahmedabad, Gujarat, India", category: "Residential" },
  { name: "Edmonds Apartments", location: "", category: "Residential" },
  { name: "Sola on Harvard", location: "Seattle, WA, USA", category: "Residential" },
  { name: "Riviera Flories-Skycity", location: "Ahmedabad, Gujarat, India", category: "Residential" },
  { name: "Aquatica", location: "Surat, Gujarat, India", category: "Residential" },
  { name: "Shree Tirupati Balaji Township", location: "Unn, Gujarat, India", category: "Residential" },
  { name: "Satyamev Luxor", location: "Ahmedabad, Gujarat, India", category: "Residential" },
  { name: "La Marque", location: "Ahmedabad, Gujarat, India", category: "Residential" },
  { name: "Rivanta", location: "Gandhinagar, Gujarat, India", category: "Residential" },
  { name: "Gala Bellissimo", location: "Ahmedabad, Gujarat, India", category: "Residential" },
  { name: "The Signature", location: "GIFT City, Gandhinagar, Gujarat", category: "Residential" },
  { name: "World Trade Center", location: "GIFT City, Gandhinagar, Gujarat, India", category: "Residential" },
  { name: "Staybridge Suites", location: "WA, USA", category: "Commercial" },
  { name: "Marriott Courtyard", location: "WA, USA", category: "Commercial" },
  { name: "Hilton Garden Inn", location: "Olympia, WA, USA", category: "Commercial" },
  { name: "Hampton Inn & Suites", location: "WA, USA", category: "Commercial" },
  { name: "The Westin", location: "SC, USA", category: "Commercial" },
  { name: "Hard Rock Hotel / Hyatt House", location: "KS, USA", category: "Commercial" },
  { name: "Hillsboro Hotel", location: "", category: "Commercial" },
  { name: "Na Mu Lodge", location: "Leavenworth, WA, USA", category: "Commercial" },
  { name: "En-Vision Commercial Building", location: "Surat, Gujarat, India", category: "Commercial" },
  { name: "Madera Retail Building", location: "", category: "Commercial" },
  { name: "FK House", location: "Bellevue, WA, USA", category: "Commercial" },
  { name: "The Brigade", location: "GIFT City, Gandhinagar, Gujarat, India", category: "Commercial" },
  { name: "Capital 2", location: "", category: "Commercial" },
  { name: "Seatec Hilton Garden Inn", location: "WA, USA", category: "Commercial" },
  { name: "GEPIL", location: "Haryana, India", category: "Industrial" },
  { name: "Single Storey Retail Building", location: "USA", category: "Industrial" },
  { name: "Project SCMA", location: "", category: "Industrial" },
  { name: "Aroma Biotech", location: "Vijaywada, Andhra Pradesh, India", category: "Industrial" },
  { name: "Ben E. Keith", location: "Houston, TX, USA", category: "Industrial" },
  { name: "Newcold Tacoma", location: "", category: "Industrial" },
  { name: "400 108th Avenue NE Bellevue", location: "Seismic and Condition Study", category: "Industrial" },
  { name: "Darigold Sunnyside", location: "", category: "Industrial" },
  { name: "Darigold Dryer Re-Build", location: "Caldwell, Idaho", category: "Industrial" },
  { name: "Wylie Retaining Wall", location: "", category: "Industrial" },
  { name: "New Cold Burley High Bay Foundation", location: "", category: "Industrial" },
  { name: "Telecom Structure Project", location: "", category: "Industrial" },
  { name: "Henningsen Cold Storage and Norpac Office", location: "USA", category: "Industrial" },
  { name: "488 N Lasalle", location: "", category: "Industrial" },
  { name: "Chincholi Sugar", location: "India", category: "Industrial" },
  { name: "Amway Extraction Concentration Facility", location: "", category: "Industrial" },
  { name: "USCS Georgia Medline Site", location: "", category: "Industrial" },
  { name: "Project Z", location: "", category: "Industrial" },
  { name: "Newcold Burley Low Bay Preliminary", location: "", category: "Industrial" },
  { name: "Commercial Cold Storage / Dry Storage Addition", location: "", category: "Industrial" },
  { name: "Pipe Rack: Chemical Plant", location: "Dahej, Gujarat, India", category: "Industrial" },
  { name: "Yash Specialty Chemicals LLP", location: "Dahej, Gujarat, India", category: "Industrial" },
  { name: "Rallis India Ltd. — Warehouse Expansion", location: "Gujarat, India", category: "Industrial" },
  { name: "Bluetex Industries Pvt. Ltd Unit (I)", location: "Panoli, Gujarat, India", category: "Industrial" },
  { name: "Aarti Industries Limited — Neo to Saffron Plant", location: "Dahej, Gujarat, India", category: "Industrial" },
  { name: "GEPIL Admin Office", location: "Haryana, India", category: "Industrial" },
  { name: "Enhanced Service Facility", location: "Everett, WA, USA", category: "Healthcare" },
  { name: "Wrangell Hospital", location: "", category: "Healthcare" },
  { name: "Medical Office-1", location: "USA", category: "Healthcare" },
  { name: "Medical Office-2", location: "Anacortes, WA, USA", category: "Healthcare" },
  { name: "Kadlec West Clearwater MOB", location: "", category: "Healthcare" },
  { name: "Lower Columbia Pathology Lab", location: "USA", category: "Healthcare" },
  { name: "Medical Arts Pavilion", location: "USA", category: "Healthcare" },
  { name: "Issaquah Elementary 16", location: "", category: "Educational" },
  { name: "Clark Elementary", location: "", category: "Educational" },
  { name: "GRCC Trades", location: "", category: "Educational" },
  { name: "HP Loyola Centre", location: "", category: "Educational" },
  { name: "Three Seattle Schools — Reroof and Seismic", location: "", category: "Educational" },
  { name: "Community Hall", location: "Sirohi, India", category: "Special Structures" },
  { name: "King Abdulaziz City for Science and Technology", location: "", category: "Special Structures" },
  { name: "Community Hall / Guest House", location: "Nana, Rajasthan, India", category: "Special Structures" },
  { name: "Calvary Apostolic Tabernacle Church Addition", location: "", category: "Special Structures" },
]

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "Residential", "Commercial", "Healthcare", "Industrial", "Educational",
  "Special Structures"
]

export const FEATURED_PROJECTS = [
  { name: "Newcold Tacoma", image: img("/images/projects/proj_one-1.jpg") },
  { name: "Amantra Bungalow", image: img("/images/projects/proj_two.jpg") },
  { name: "Marriott Courtyard", image: img("/images/projects/proj_four.jpg") },
  { name: "Aquatica", image: img("/images/projects/proj_three.jpg") },
  { name: "Union Residency", image: img("/images/projects/UR-1.jpg") },
]
