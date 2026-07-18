export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imagePath: string;
  mainImage: string;
  quote?: string;
  description?: string[];
  year?: string;
  status?: string;
  links?: ProjectLink[];
  team?: ProjectTeam[];
};

export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectTeam = {
  label: string;
  url: string;
};

export const projectsData: Project[] = [
  {
    id: "idntt",
    title: "IDNTT PRODUCT",
    category: "GENZ JEWELRY ECOMMERCE PRODUCT",
    tags: ["PRODUCT DISCOVERY", "UX STRATEGY", "WIREFRAMING", "UI UX"],
    imagePath: "/projects/IDNTT Product.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "merascorp",
    title: "MERASCORP LLP",
    category: "REAL-ESTATE WEBSITE REVAMP",
    tags: ["WEBSITE REVAMP", "BUSINESS STRATEGY", "WEBSITE DESIGN"],
    imagePath: "/projects/Merascorp LLP.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "novus",
    title: "NOVUS PRODUCT",
    category: "SMART RING APPLICATION",
    tags: ["APPLICATION DESIGN", "PRODUCT RESEARCH", "UX STRATEGY", "IA"],
    imagePath: "/projects/Novus Product.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "zuplon",
    title: "ZUPLON AI",
    category: "WEB PLATFORM",
    tags: [
      "WEBSITE DESIGN",
      "CONTENT STRATEGY",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Zuplon AI.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "astr",
    title: "ASTR APPLICATION",
    category: "WEB PLATFORM",
    tags: [
      "WEBSITE DESIGN",
      "CONTENT STRATEGY",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/ASTR Application.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "relicore",
    title: "RELICORE SOLUTIONS",
    category: "AGENCY WEBSITE REVAMP",
    tags: [
      "WEBSITE REVAMP",
      "CONTENT STRATEGY",
      "BUSINESS STRATEGY",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Relicore Solutions.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "bestuarant",
    title: "BESTUARANT PRODUCT",
    category: "END-TO-END PRODUCT DESIGN",
    tags: [
      "BRANDING",
      "PRODUCT RESEARCH",
      "WEBSITE DESIGN",
      "APPLICATION DESIGN",
    ],
    imagePath: "/projects/Bestuarant Product.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "vailyouu",
    title: "VAILYOUU AGENCY",
    category: "AGENCY WEBSITE DESIGN",
    tags: [
      "WEBSITE DESIGN",
      "CONTENT STRATEGY",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Valyouu Agengy.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "bodhiyo",
    title: "BODHIYO PRODUCT",
    category: "WEB PLATFORM",
    tags: ["PRODUCT DISCOVERY", "UX STRATEGY", "WIREFRAMING", "UI UX"],
    imagePath: "/projects/Bodhiyo Product.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "ecoworld",
    title: "ECOWORLD",
    category: "WEB lANDING PAGE",
    tags: [
      "EMOTIONAL STORYTELLING",
      "BRAND-LED VISUAL IDENTITY",
      "MOBILE-FIRST DESIGN",
      "UI UX",
    ],
    imagePath: "/projects/ECOWORLD.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "smcgh",
    title: "SMCGH EDU",
    category: "EDUCATIONAL WEBSITE REVAMP",
    tags: ["UX RESEARCH", "UX STRATEGY", "WEBSITE DESIGN", "BUSINESS STRATEGY"],
    imagePath: "/projects/smcgh edu.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "wlc",
    title: "WLC PRODUCT",
    category: "WEB PLATFORM",
    tags: ["PRODUCT RESEARCH", "UX STRATEGY", "WEB PLATFORM", "DASHBOARD"],
    imagePath: "/projects/wlc product.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "myhub",
    title: "MYHUB PRODUCT",
    category: "END-TO-END PRODUCT DESIGN",
    tags: ["PRODUCT RESEARCH", "UX STRATEGY", "APPLICATION", "WEBSITE DESIGN"],
    imagePath: "/projects/My Hub pRODUCT.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "kissan",
    title: "KISSAN PARIVAR",
    category: "FARMING ENTERPRISE WEBSITE REVAMP",
    tags: [
      "WEBSITE DESIGN",
      "CONTENT STRATEGY",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/KISSAN PARIVARKISSAN PARIVAR.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
  {
    id: "Laxmi Developers",
    title: "Laxmi Developers",
    category: "Real-Estate Website Revamp",
    tags: ["Website Revamp", "Business Strategy", "Website Design"],
    imagePath: "/projects/Laxmi Developers.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "sherpal ai",
    title: "sherpal ai",
    category: "AI-Powered SAT Preparation Platform",
    tags: [
      "Product Research",
      "UX Strategy",
      "Business Strategy",
      "APPLICATION Design",
    ],
    imagePath: "/projects/sherpal ai.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "wHERE2INVEST",
    title: "wHERE2INVEST",
    category: "FinTech Platform",
    tags: [
      "Product Research",
      "UX Strategy",
      "Business Strategy",
      "Website Design",
    ],
    imagePath: "/projects/wHERE2INVEST.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "zuplon website",
    title: "zuplon website",
    category: "Website Revamp",
    tags: [
      "WEBSITE DESIGN",
      "Content Strategy",
      "UX Research",
      "Responsive Design",
    ],
    imagePath: "/projects/zuplon website.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "shares bazaar",
    title: "shares bazaar",
    category: "FinTech Platform",
    tags: [
      "Product Research",
      "UX Strategy",
      "Business Strategy",
      "Website Design",
    ],
    imagePath: "/projects/shares bazaar.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "Roadbee",
    title: "Roadbee",
    category: "Premium Biker WEBSITE DESIGN",
    tags: ["Website Revamp", "Business Strategy", "Website Design"],
    imagePath: "/projects/Roadbee.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "tariff TRACKER",
    title: "tariff TRACKER",
    category: "Application DESIGN",
    tags: [
      "APPLICATION DESIGN",
      "Content Strategy",
      "UX Research",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/tariff TRACKER.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "ORIAN STARS",
    title: "ORIAN STARS",
    category: "ONLINE GAMING PLATFROM",
    tags: [
      "APPLICATION DESIGN",
      "Content Strategy",
      "UX Research",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/ORIAN STARS.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "MARV",
    title: "MARV",
    category: "WEBSITE DESIGN",
    tags: ["WEBSITE DESIGN", "UX Research", "RESPONSIVE DESIGN"],
    imagePath: "/projects/MARV.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "Vital Space",
    title: "Vital Space",
    category: "Real-Estate Website",
    tags: ["WEBSITE DESIGN", "UX Research", "RESPONSIVE DESIGN"],
    imagePath: "/projects/Vital Space.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "world design",
    title: "world design",
    category: "nft collection center",
    tags: ["WEBSITE DESIGN", "UX Research", "RESPONSIVE DESIGN"],
    imagePath: "/projects/world design.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "desi needs",
    title: "desi needs",
    category: "LOCAL MARKETPLACE Application",
    tags: ["APPLICATION DESIGN", "UX Research", "RESPONSIVE DESIGN"],
    imagePath: "/projects/desi needs.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "Bitsi NFT",
    title: "BITSI NFT",
    category: "nft collection center",
    tags: [
      "WEBSITE DESIGN",
      "Content Strategy",
      "UX Research",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Bitsi NFT.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "Delta HRMS",
    title: "DELTA HRMS",
    category: "HR SOFTWARE PLATFROM",
    tags: [
      "WEBSITE DESIGN",
      "PRODUCT RESEARCH",
      "UX STRATEGY",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Delta HRMS.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "Sharyalytics",
    title: "SHARYALYTICS",
    category: "INVESTING WEBSITE DESIGN",
    tags: ["WEBSITE DESIGN", "UX RESEARCH", "RESPONSIVE DESIGN"],
    imagePath: "/projects/Sharyalytics.jpg",
    mainImage: "/projects/IDNTT Product Image.jpg",
    quote:
      "Not every brand deserves a place. IDNTT was built to curate identities.",
    description: [
      "In a world where marketplaces compete by offering more, IDNTT chooses a different path less, but intentional. It is a curated jewellery platform that believes every piece should resonate with the person wearing it, and every brand should earn its place. Rather than overwhelming customers with endless options, IDNTT carefully brings together brands that reflect different identities, occasions, and moments of self-expression. Every interaction is designed to feel considered, exclusive, and personal—transforming discovery into an experience instead of a transaction.",
      "The product extends this philosophy beyond commerce. From brand discovery and curated collections to vendor onboarding and quality standards, every touchpoint is built around trust, craftsmanship, and meaningful connections between customers and brands. The goal wasn't to become another jewellery marketplace it was to build a destination where luxury is defined by curation, not abundance.",
      "As the Product Designer, I owned the experience end-to-end. From early product discovery, user research, journey mapping, and information architecture to UX flows, wireframing, design explorations, visual direction, design systems, responsive web experiences, and mobile layouts, Every iteration focused on balancing premium aesthetics with intuitive usability, creating an experience that feels curated, confident, and distinctly IDNTT.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },
];
