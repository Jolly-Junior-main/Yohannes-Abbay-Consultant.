/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Metric, Insight } from "../types";

export const projectsData: Project[] = [
  {
    id: "civic-center",
    title: "Transforming the Urban Core",
    subtitle: "The New Civic Center",
    category: "Civic & Cultural",
    location: "Addis Ababa, Ethiopia",
    year: "2025",
    scale: "120,000 m²",
    image: "/images/yacae_civic_center_1784558368652.jpg",
    description: "A monumental civic intervention that blends modern sculptural concrete forms with historic architectural references. The project serves as the legislative, administrative, and public heart of the district, featuring passive cooling facades, integrated water features, and porous pedestrian pathways.",
    architects: "Yohannes Abbay, Chief Architect",
    highlights: [
      "Thermal mass and sun-shading optimized using parametric algorithms",
      "Sourced local stone and recycled architectural bronze components",
      "Public rain gardens processing 100% of municipal runoff",
      "A vast public canopy that references traditional Ethiopian communal assembly structures"
    ],
    specs: [
      { label: "Client", value: "Federal Ministry of Infrastructure" },
      { label: "Status", value: "Under Construction (85% completed)" },
      { label: "Sustainability", value: "LEED Platinum (Targeted)" },
      { label: "Structural Material", value: "High-Strength Low-Carbon Concrete & Muted Copper" }
    ]
  },
  {
    id: "cbe-heights",
    title: "The Sculptural Obelisk",
    subtitle: "Financial District Headquarters",
    category: "High-Rise & Corporate",
    location: "Addis Ababa, Ethiopia",
    year: "2024",
    scale: "185,000 m²",
    image: "/images/yacae_hero_building_1784558352200.jpg",
    description: "An iconic silhouette rising from the central financial district. Inspired by the timeless verticality of traditional Ethiopian stone monolithic stelae, this structure implements cutting-edge double-skin active breathing facade technology to achieve climate-adapted interior comfort with minimal reliance on heating and cooling systems.",
    architects: "YACAE High-Rise Studio & Partners",
    highlights: [
      "Integrated solar photovoltaic panels within the vertical structural fins",
      "High-speed regenerative lift systems that recycle kinetic energy",
      "Triple-height sky gardens that filter indoor air and offer panoramic municipal views",
      "Advanced seismically isolated core framework designed for ultimate safety and performance"
    ],
    specs: [
      { label: "Client", value: "Consolidated Financial Group" },
      { label: "Height", value: "198 Meters (46 Storeys)" },
      { label: "Energy Savings", value: "42% Reduction in Operating Loads" },
      { label: "Special Finishes", value: "Anodized Architectural Bronze & Insulated Low-E Glass" }
    ]
  },
  {
    id: "kinetic-museum",
    title: "Echoes of the Rift Valley",
    subtitle: "The Kinetic Museum of Art",
    category: "Landmark & Cultural",
    location: "Addis Ababa, Ethiopia",
    year: "2026",
    scale: "35,000 m²",
    image: "/images/yacae_museum_1784558383744.jpg",
    description: "A series of interlocking, sweeping structures that emulate the geological rifting of East Africa. The building hosts vast exhibition spaces, state-of-the-art climate-controlled preservation galleries, and performance stages that interact with natural shadows and changing daylight patterns.",
    architects: "Senior Partner Abbay Tekle",
    highlights: [
      "Dynamic self-adjusting skylights that diffuse optimal non-UV daylight into galleries",
      "Exposed aggregate concrete incorporating local basalt and volcanic ash",
      "Zero-carbon structural framework designed with local mass-timber composite structures",
      "Integrated subterranean cooling loops utilizing natural geothermal energy paths"
    ],
    specs: [
      { label: "Client", value: "National Trust for Cultural Preservation" },
      { label: "Exhibition Space", value: "18,500 m²" },
      { label: "Acoustic Rating", value: "STC 65 High-Fidelity Performance Halls" },
      { label: "Primary Metal", value: "Muted Architectural Bronze Panels" }
    ]
  }
];

export const metricsData: Metric[] = [
  {
    id: "years",
    value: "15+",
    label: "Years Built",
    description: "Delivering architectural excellence, structural permanence, and master plans."
  },
  {
    id: "plans",
    value: "80+",
    label: "Master Plans",
    description: "Designing the resilient, sustainable cities and urban infrastructure of tomorrow."
  },
  {
    id: "meters",
    value: "4M+",
    label: "Sq Meters Designed",
    description: "Forging dynamic corporate headquarters, institutional facilities, and public spaces."
  }
];

export const insightsData: Insight[] = [
  {
    id: "insight-1",
    title: "Thermal Inertia and Parametric Louvers in High-Altitude Subtropical Climates",
    category: "Research",
    date: "July 12, 2026",
    readTime: "9 min read",
    image: "/images/yacae_drafting_desk_1784558399848.jpg",
    author: "Dr. Yohannes Abbay",
    summary: "An in-depth study of structural shading and passive cooling strategies tailored for high-altitude zones like Addis Ababa, avoiding mechanical refrigeration in corporate structures.",
    content: [
      "High-altitude tropical and subtropical zones present a unique architectural challenge: intense daylight and solar radiation paired with massive diurnal temperature swings. In Addis Ababa, situated at 2,350m elevation, traditional office buildings resort to heavy air conditioning, which represents an unsustainable energy deficit.",
      "Our research team at YACAE engineered a parametric louver system that responds dynamically to direct solar angles. By coordinating solar shading angles with the building's thermal mass index, we achieve stable internal temperatures between 20°C and 23°C year-round without mechanical chillers.",
      "By using high-density concrete walls integrated with a double-skin glass envelope, solar heat is captured during the day and gradually radiated into the building during the cold Addis Ababa nights. This 'thermal battery' is the cornerstone of YACAE's net-zero carbon skyscraper strategy."
    ]
  },
  {
    id: "insight-2",
    title: "Parametric Wind Mitigation in Tall Monoliths: A Case Study on CBE Heights",
    category: "Engineering",
    date: "June 04, 2026",
    readTime: "7 min read",
    image: "/images/yacae_hero_building_1784558352200.jpg",
    author: "Ing. Abbay Tekle, Lead Structural Engineer",
    summary: "Breaking down the dynamic structural engineering, seismic dampening, and aerodynamic optimization of YACAE's premier high-rise skyscrapers.",
    content: [
      "As structural monoliths scale past 150 meters, lateral forces from wind shear quickly exceed gravitational loads as the primary design driver. For CBE Heights, the wind-tunnel test simulations revealed significant vortex shedding forces at high elevations.",
      "The engineering team resolved this by carving aerodynamic vents directly into the top tier of the structure, tapering the envelope asymmetrically. This reduces the wind coefficient of drag by 35%, substantially decreasing the demand on the foundational shear walls.",
      "Furthermore, we incorporated a Tuned Liquid Column Damper (TLCD) system near the top level, utilizing recycled greywater. This dual-purpose water storage system dampens dynamic oscillations while acting as the building's primary fire-suppression and toilet flushing reserve."
    ]
  },
  {
    id: "insight-3",
    title: "Carbon-Negative Concrete: Local Aggregate & Volcanic Ash Admixtures",
    category: "Sustainability",
    date: "May 18, 2026",
    readTime: "6 min read",
    image: "/images/yacae_civic_center_1784558368652.jpg",
    author: "Hana Kebede, Sustainability Lead",
    summary: "Exploring our breakthroughs in locally sourced building materials, volcanic ash pozzolans, and lowering carbon footprint in commercial structures.",
    content: [
      "The manufacture of cement accounts for approximately 8% of global carbon dioxide emissions. For the New Civic Center, YACAE committed to reducing the embodied carbon of concrete by 50% through innovative, locally sourced aggregates.",
      "By replacing 40% of the standard Portland cement with active pozzolans sourced from local volcanic ash fields in the Rift Valley, we not only decreased carbon emissions but also improved the concrete's long-term resistance to water permeation and chemical cracking.",
      "This pozzolanic concrete aggregate gains strength steadily over centuries, echoing the architectural permanence of Lalibela's ancient rock-hewn monolithic structures. This synthesis of geological science and traditional heritage represents the future of African sustainable design."
    ]
  }
];
