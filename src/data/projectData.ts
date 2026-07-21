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
  },
  {
    id: "bamboo-canopy",
    title: "The Bamboo Canopy Pavilions",
    subtitle: "Eco-Tourism & Hospitality",
    category: "Hospitality & Leisure",
    location: "Hawassa, Ethiopia",
    year: "2025",
    scale: "12,500 m²",
    image: "/images/yacae_museum_1784558383744.jpg",
    description: "An eco-resort master plan featuring structures built entirely from sustainably harvested local highland bamboo. Combining traditional weaving methodologies with modern structural engineering, the pavilions achieve exceptional durability and a near-zero carbon footprint.",
    architects: "YACAE Sustainability Lab",
    highlights: [
      "100% organic and locally sourced structural materials",
      "Naturally ventilated guest suites with custom-designed bamboo solar louvers",
      "Closed-loop greywater purification system utilizing native wetland flora",
      "Award-winning lightweight hyperbolic paraboloid roof forms"
    ],
    specs: [
      { label: "Client", value: "Rift Valley Eco-Resorts Ltd." },
      { label: "Status", value: "Completed" },
      { label: "Sustainability Score", value: "Carbon-Negative Structural Envelope" },
      { label: "Awards", value: "African Green Architecture Award 2025" }
    ]
  },
  {
    id: "bole-tech-hub",
    title: "Bole Tech Hub",
    subtitle: "High-Rise & Corporate",
    category: "High-Rise & Corporate",
    location: "Addis Ababa, Ethiopia",
    year: "2026",
    scale: "45,000 m²",
    image: "/images/yacae_hero_building_1784558352200.jpg",
    description: "A mixed-use incubator tower serving as East Africa's premier technology and research ecosystem. The design features a cascading vertical atrium that encourages spontaneous cross-disciplinary collaboration and naturally draws warm air out through advanced solar chimneys.",
    architects: "Senior Partner Abbay Tekle",
    highlights: [
      "Dynamic, self-shaded double-skin glass façade tuned to high-altitude sun angles",
      "Flexible, column-free interior floor plates supported by an external steel diagrid",
      "Integrated micro-wind turbines harvesting wind shear at high altitudes",
      "A three-storey communal garden terrace featuring native highland conifers"
    ],
    specs: [
      { label: "Client", value: "Ethiopia Technology Development Fund" },
      { label: "Status", value: "Under Construction (60% completed)" },
      { label: "Floors", value: "28 Storeys" },
      { label: "Structural System", value: "External Steel Diagrid & Concrete Core" }
    ]
  },
  {
    id: "rift-botanical-garden",
    title: "The Rift Valley Botanical Garden",
    subtitle: "Landmark & Cultural",
    category: "Civic & Cultural",
    location: "Bishoftu, Ethiopia",
    year: "2024",
    scale: "80,000 m²",
    image: "/images/yacae_civic_center_1784558368652.jpg",
    description: "A sprawling education and preservation campus dedicated to documenting and protecting the unique flora of the East African Rift System. The central biome domes are constructed using high-performance glass with integrated ETFE pneumatic cushions.",
    architects: "Hana Kebede & Landscape Partners",
    highlights: [
      "Three climatic biomes controlled through low-energy automated misting systems",
      "Rammed-earth visitor centers using soils excavated directly from the site",
      "Extensive rainwater harvesting lakes supplying 100% of the garden's irrigation",
      "Winding elevated canopy walkways overlooking rare endemics"
    ],
    specs: [
      { label: "Client", value: "African Conservation Alliance" },
      { label: "Status", value: "Completed" },
      { label: "Key Material", value: "Rammed Earth & Recyclable ETFE Cushions" },
      { label: "Water Savings", value: "85% reduction in municipal water demand" }
    ]
  },
  {
    id: "gibe-hydro-nexus",
    title: "The Gibe Hydro-Nexus",
    subtitle: "Infrastructure & Engineering",
    category: "Infrastructure",
    location: "Gibe River, Ethiopia",
    year: "2025",
    scale: "15,000 m²",
    image: "/images/yacae_drafting_desk_1784558399848.jpg",
    description: "An elegant, architectural intervention at a major hydroelectric node, housing turbine exhibition rooms, control facilities, and a research institute. The design uses flowing, curvilinear concrete volumes that mirror the fluid dynamics of the river system.",
    architects: "YACAE Infrastructure Studio",
    highlights: [
      "Spatially integrated visitors' center perched over the water intake channels",
      "Thermal mass concrete walls that regulate temperature inside high-heat server rooms",
      "A public observation deck integrated with the structural spillway layout",
      "Use of fly-ash aggregate concrete to maximize resistance to water corrosion"
    ],
    specs: [
      { label: "Client", value: "Ethiopian Electric Power" },
      { label: "Status", value: "Completed" },
      { label: "Structural Type", value: "Post-Tensioned Cantilevered Concrete" },
      { label: "Concrete Grade", value: "C50 High-Performance Hydrated Mix" }
    ]
  },
  {
    id: "meskel-walkways",
    title: "Meskel Square Pedestrian Walkways",
    subtitle: "Civic & Cultural Infrastructure",
    category: "Civic & Cultural",
    location: "Addis Ababa, Ethiopia",
    year: "2024",
    scale: "65,000 m²",
    image: "/images/yacae_civic_center_1784558368652.jpg",
    description: "A comprehensive pedestrian-first master plan designed to decongest and green the urban pathways surrounding the historic Meskel Square. The design incorporates permeable pavement patterns, dynamic shade structures, and civic assembly pockets.",
    architects: "Yohannes Abbay, Chief Architect",
    highlights: [
      "Permeable basalt stone tiles that filter rainwater into underground aquifers",
      "A system of sculptural tensile shade canopies incorporating solar charging ports",
      "Densely planted bio-swales that mitigate urban heat island effects",
      "Dedicated micro-mobility lanes for bicycles, scooters, and pedestrians"
    ],
    specs: [
      { label: "Client", value: "Addis Ababa City Administration" },
      { label: "Status", value: "Completed" },
      { label: "Walkway Length", value: "2.4 Kilometers" },
      { label: "Tree Count", value: "1,200+ indigenous trees planted" }
    ]
  },
  {
    id: "entoto-observatory-lodge",
    title: "The Entoto Observatory Lodge",
    subtitle: "Eco-Tourism & Hospitality",
    category: "Hospitality & Leisure",
    location: "Entoto Hills, Ethiopia",
    year: "2026",
    scale: "8,500 m²",
    image: "/images/yacae_museum_1784558383744.jpg",
    description: "Nestled high in the eucalyptus forests of Mt. Entoto, this observatory and wellness lodge is designed to touch the ground lightly. Circular structural modules are raised on steel stilts, preserving the native forest roots and minimizing soil disruption.",
    architects: "YACAE High-Altitude Studio",
    highlights: [
      "Telescopic star-gazing domes integrated seamlessly with lodge suites",
      "Eucalyptus-wood cladding repurposed from fallen regional trees",
      "Raised-stilt design saving 95% of existing forest undergrowth",
      "Advanced off-grid solar energy battery bank and rainwater recycling"
    ],
    specs: [
      { label: "Client", value: "Federal Tourism Commission" },
      { label: "Status", value: "Under Construction (90% completed)" },
      { label: "Altitude", value: "2,950 Meters Above Sea Level" },
      { label: "Structural Frame", value: "Recycled Structural Steel & Eucalyptus Glulam" }
    ]
  },
  {
    id: "addis-smart-transit",
    title: "The Addis Smart Transit Terminal",
    subtitle: "Infrastructure & Transit",
    category: "Infrastructure",
    location: "Addis Ababa, Ethiopia",
    year: "2025",
    scale: "75,000 m²",
    image: "/images/yacae_hero_building_1784558352200.jpg",
    description: "A state-of-the-art transit interchange connecting the central Light Rail Transit (LRT) network with regional bus systems. The terminal features a massive soaring space-frame roof that provides shelter, channels light, and facilitates natural air movement.",
    architects: "YACAE Infrastructure Studio",
    highlights: [
      "Innovative space-frame canopy spanning 120 meters without intermediate columns",
      "Integrated floor pressure sensors to analyze and guide pedestrian flow dynamically",
      "Solar rooftop array supplying 100% of terminal energy during peak hours",
      "Sound-dampening architectural concrete wall panels for acoustic comfort"
    ],
    specs: [
      { label: "Client", value: "Ethiopian Railways Corporation" },
      { label: "Status", value: "Under Construction (75% completed)" },
      { label: "Daily Capacity", value: "150,000 Passengers" },
      { label: "Special Tech", value: "Integrated Smart Passenger Information Display Systems" }
    ]
  },
  {
    id: "nile-riverfront",
    title: "The Nile Riverfront Master Plan",
    subtitle: "Urban Design & Master Plan",
    category: "Civic & Cultural",
    location: "Bahir Dar, Ethiopia",
    year: "2026",
    scale: "320,000 m²",
    image: "/images/yacae_civic_center_1784558368652.jpg",
    description: "An ambitious urban renewal scheme transforming the Blue Nile riverfront into a vibrant, pedestrian-only civic park, cultural walk, and ecological sanctuary. The design respects the delicate riverine ecosystem while providing world-class public infrastructure.",
    architects: "YACAE Master Planning Division",
    highlights: [
      "Natural wetland filtration zones to naturally treat urban runoff before entering the Nile",
      "Floating amphitheater platforms constructed with low-impact materials",
      "A continuous 5km tree-lined promenade for walkers, runners, and cyclists",
      "Cultural craft markets designed with traditional modular timber structures"
    ],
    specs: [
      { label: "Client", value: "Amhara Region Development Bureau" },
      { label: "Status", value: "Design Approved / Phased Construction Starting" },
      { label: "Sustainability", value: "Zero-Runoff Urban Master Plan" },
      { label: "Key Feature", value: "Continuous Ecological Buffer Zone" }
    ]
  },
  {
    id: "red-sea-trade-center",
    title: "The Red Sea Trade Center",
    subtitle: "Commercial & Trade Complex",
    category: "High-Rise & Corporate",
    location: "Adama, Ethiopia",
    year: "2024",
    scale: "92,000 m²",
    image: "/images/yacae_drafting_desk_1784558399848.jpg",
    description: "A futuristic commercial exchange hub located at a vital economic node. The building features an advanced double-curvature structural skin designed to withstand the intense thermal expansions and high winds characteristic of the Rift Valley plains.",
    architects: "Senior Partner Yohannes Abbay",
    highlights: [
      "Double-curvature GFRC (Glass Fiber Reinforced Concrete) exterior screen",
      "Massive subterranean logistics level with automatic cargo sorting",
      "Dynamic solar-tracking shade panels that reduce solar heat gain by 50%",
      "A vast public plaza featuring cooling mist columns and indigenous desert palms"
    ],
    specs: [
      { label: "Client", value: "Adama Trade & Development Corp." },
      { label: "Status", value: "Completed" },
      { label: "Primary Material", value: "Self-Cleaning Photocatalytic GFRC" },
      { label: "Structural Standard", value: "Seismic Design Category D Compliant" }
    ]
  },
  {
    id: "national-library-expansion",
    title: "The National Library Expansion",
    subtitle: "Civic & Cultural Heritage",
    category: "Civic & Cultural",
    location: "Addis Ababa, Ethiopia",
    year: "2025",
    scale: "28,000 m²",
    image: "/images/yacae_museum_1784558383744.jpg",
    description: "A sensitive contemporary extension of the historic library building, housing rare manuscripts, modern digital archives, and silent reading gardens. The design pays homage to ancient parchment scrolls with curved, layered architectural forms.",
    architects: "Hana Kebede, Lead Architect",
    highlights: [
      "State-of-the-art nitrogen-controlled archival vault for rare historic Ge'ez scripts",
      "Light-wells lined with reflective, hand-beaten bronze panels to guide soft indirect light",
      "Open-air reading terraces surrounded by a tranquil water moat",
      "Integrated solar roof producing 120% of building's annual electrical needs"
    ],
    specs: [
      { label: "Client", value: "Ministry of Culture and Tourism" },
      { label: "Status", value: "Completed" },
      { label: "Acoustics", value: "Optimized Silent Reading Atrium (<30 dB)" },
      { label: "Green Building", value: "EDGE Advanced Certified (45% Energy Savings)" }
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
