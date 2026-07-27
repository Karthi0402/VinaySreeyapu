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
        url: "",
      },
    ],
  },

  {
    id: "merascorp",
    title: "MERASCORP LLP",
    category: "REAL-ESTATE WEBSITE REVAMP",
    tags: ["WEBSITE REVAMP", "BUSINESS STRATEGY", "WEBSITE DESIGN"],
    imagePath: "/projects/MerasCorp LLP.jpg",
    mainImage: "/projects/MerasCorp LLP Image.jpg",
    quote:
      "Imagine a user visiting the website for the first time. 'Ye toh bas... chhodo yaar.'",
    description: [
      "That was the exact feeling the existing experience left behind. Confusing navigation, cluttered layouts, poor content hierarchy, and an outdated visual language made it difficult for users to discover projects or trust the brand. We took it into our own hands and reimagined the entire digital experience from the ground up.",
      "Meras Corp has always been focused on creating thoughtfully planned residential and commercial developments that prioritize space, quality, and long-term value. While the projects reflected that vision, the digital experience told a different story. The website felt dated, information-heavy, and difficult to navigate, making it hard for visitors to appreciate the brand or understand what made each development unique.",
      "The idea behind Meras Corp wasn't to develop another residential or commercial project. It was to rethink what modern real estate should feel like—thoughtfully planned, architecturally refined, and built around the people who will live, work, and grow within it.",
      "I worked across the complete product design process, from understanding business goals and user expectations to shaping the information architecture, user journeys, wireframes, visual direction, responsive layouts, and high-fidelity interfaces. Every design decision focused on creating a digital experience that felt intuitive, premium, and aligned with the brand's architectural philosophy.",
    ],
    year: "2026",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://www.merascorp.in/",
      },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/248774053/MERUS-CORP-Real-Estate-Website-Revamp",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (UI & UX)",
        url: "",
      },
      {
        label: "VISHAL (Frontend)",
        url: "",
      },
      {
        label: "DHEERAJ (Backend)",
        url: "",
      },
    ],
  },

  {
    id: "novus",
    title: "NOVUS PRODUCT",
    category: "SMART RING APPLICATION",
    tags: ["WEBSITE REVAMP", "BUSINESS STRATEGY", "WEBSITE DESIGN"],
    imagePath: "/projects/Novus Product.jpg",
    mainImage: "/projects/Novus Product Image.jpg",
    quote: "Not another fitness ring. A preventive health intelligence system.",
    description: [
      "Instead of flooding people with charts, numbers, and endless health metrics, Novus translates complex biological signals into clear actions—helping users understand what's happening inside their body before it becomes a problem.",
      "It's a preventive health intelligence app that combines wearable technology, AI, and clinical-grade insights to help people understand their health before problems arise. Every interaction is designed to translate complex biological data into clear, meaningful actions—creating an experience that feels intelligent, calm, and trustworthy rather than overwhelming.",
      "From the first whiteboard sketch to the final handoff, I was involved throughout the design process. I explored multiple design directions, refined user flows, structured the information architecture, built interactive prototypes, designed the visual language and iconography, and iterated continuously based on feedback to create a product that feels simple despite its complexity.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/252048685/Novus-Smart-Ring-%28Product-Branding-and-Application%29",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "",
      },
      {
        label: "AKSHAY PRASAD (Graphic)",
        url: "",
      },
      {
        label: "ADHITHYA (Product, UX)",
        url: "",
      },
    ],
  },

  {
    id: "zuplon-ai",
    title: "ZUPLON AI",
    category: "WEB PLATFORM",
    tags: [
      "WEBSITE DESIGN",
      "CONTENT STRATEGY",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Zuplon AI.jpg",
    mainImage: "/projects/Zuplon AI Image.jpg",
    quote: "An AI-first digital engineering partner.",
    description: [
      "Instead of offering generic development services, Zuplon AI helps businesses build, modernize, and scale digital products through AI, cloud engineering, DevOps, and custom software development—transforming complex business challenges into intelligent digital solutions.",
      "It's an AI-powered technology platform and engineering company focused on delivering enterprise-grade software, cloud-native applications, automation, and intelligent business solutions. Every experience is designed to communicate technical expertise with clarity—making advanced technologies approachable for founders, enterprises, and growing businesses.",
      "The website evolved through continuous exploration, refinement, and iteration. From defining the content structure and information architecture to crafting responsive interfaces, interactive prototypes, and a cohesive visual language, every design decision was made to communicate Zuplon AI's capabilities with clarity, credibility, and impact.",
    ],
    year: "2026",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://zuplon.ai",
      },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/252046319/Zuplon-AI-Enterprise-Website",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (UX & UI)",
        url: "",
      },
      {
        label: "SATYA (Dev)",
        url: "",
      },
    ],
  },

  {
    id: "astr",
    title: "ASTR APPLICATION",
    category: "SMART BOT APPLICATION",
    tags: [
      "WEBSITE DESIGN",
      "CONTENT STRATEGY",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/ASTR Application.jpg",
    mainImage: "/projects/ASTR Application Image.jpg",
    quote:
      "An AI-powered educational robot designed to grow with every stage of a child's learning journey.",
    description: [
      "Instead of relying on overstimulating screen time or gamified learning, ASTR helps children develop curiosity, critical thinking, and independent learning through calm, age-appropriate interactions. Combining physical robotics with AI, it creates a learning experience that evolves from early childhood to young adulthood.",
      "It's a family-centered learning ecosystem built for both children and parents. While children explore education, conversations, and extracurricular activities through their AI companion, parents receive thoughtful observations, activity insights, and tools to better understand their child's growth—without overwhelming them with complex data.",
      "The product experience was shaped through continuous research, iteration, and design exploration. From defining user personas, age-based experiences, user flows, information architecture, and interaction patterns to designing the mobile app, parent dashboard, bot controls, learning experiences, prototypes, and a scalable design system, every decision was made to create a calm, trustworthy, and human-centered experience that grows alongside the child.",
    ],
    year: "2026",
    status: "in development",
    links: [
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/252049853/ASTR-Smart-Bot-%28Product-Branding-Application",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, UX & UI)",
        url: "",
      },
      {
        label: "AJIT (Graphic)",
        url: "",
      },
      {
        label: "ADHITHYA (Product, UX)",
        url: "",
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
    mainImage: "/projects/Relicore Solutions Image.jpg",
    quote:
      "Relicore Services exists for businesses that expect more than just software.",
    description: [
      "The existing website failed to communicate Relicore's true value. It looked like another software company, relying on generic messaging, dated visuals, and fragmented information that overlooked the expertise behind the brand.",
      "The challenge was to reposition Relicore from a service provider into a premium technology partner, creating an identity that communicates reliability, craftsmanship, and confidence while presenting its capabilities through a refined digital experience.",
      "Built on the belief that great technology should feel invisible, Relicore designs and engineers secure, scalable digital systems that quietly power ambitious businesses. Every platform is created with long-term reliability, thoughtful execution, and uncompromising quality at its core.",
      "My role covered UX strategy, content direction, information architecture, sitemap planning, user journeys, wireframing, visual exploration, interaction design, responsive web design, design iterations, component library creation, prototyping, and developer handoff.",
    ],
    year: "2026",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://relicoresolutions.com",
      },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/244706667/Relicore-Solutions-Agengy-Revamp",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (UX & UI)",
        url: "",
      },
      {
        label: "VISHAL (Frontend)",
        url: "",
      },
      {
        label: "DHEERAJ (Backend)",
        url: "",
      },
    ],
  },

  {
    id: "bestuarent",
    title: "BESTUARANT PRODUCT",
    category: "END-TO-END PRODUCT DESIGN",
    tags: [
      "BRANDING",
      "PRODUCT RESEARCH",
      "WEBSITE DESIGN",
      "APPLICATION DESIGN",
    ],
    imagePath: "/projects/Bestuarant Product.jpg",
    mainImage: "/projects/Bestuarant Product Image.jpg",
    quote: "A connected restaurant ecosystem.",
    description: [
      "Bestuarent is an all-in-one restaurant commerce platform built to simplify how restaurants operate and how customers order food. Instead of relying on multiple disconnected tools for ordering, menu management, payments, and operations, Bestuarent brings everything together into a single connected ecosystem.",
      "For restaurants of every size—from independent cafés to multi-location chains—the platform enables businesses to manage their digital presence, streamline operations, and deliver a faster, more seamless customer experience across delivery, pickup, dine-in, and QR ordering.",
      "Restaurant owners gain complete control over their business through a powerful management platform that centralizes menu creation, order processing, kitchen operations, inventory, taxes, gratuities, staff management, and multi-branch administration. Every workflow is designed to reduce operational complexity while improving speed, consistency, and customer satisfaction.",
      "Customers can discover nearby restaurants, browse digital menus, place orders, schedule pickups, scan QR codes for contactless dining, unlock exclusive deals, and track orders in real time.",
      "As the sole Product Designer behind Bestuarent, I was responsible for shaping the entire product ecosystem from concept to execution. I designed the restaurant management dashboard, customer-facing website, admin application, and customer mobile app, ensuring a seamless and consistent experience across every platform. Beyond the core product, I established the brand's visual identity, created scalable design systems, developed app store assets, marketing materials, website visuals, and product showcase presentations. My role covered the complete design lifecycle—from product discovery, user research, information architecture, user flows, wireframing, UX strategy, interface design, interactive prototyping, iterative testing, and developer handoff—delivering a cohesive digital experience for both restaurant businesses and their customers.",
    ],
    year: "2025",
    status: "Live",
    links: [
      {
        label: "Admin Product/Website",
        url: "https://bestaurant.ai/",
      },
      {
        label: "Bestuarant Product/Website",
        url: "https://bestaurant.ai/customer",
      },
      {
        label: "Admin App",
        url: "https://play.google.com/store/apps/details?id=com.zuplon.bestaurant&pcampaignid=web_share",
      },
      {
        label: "Customer App",
        url: "https://play.google.com/store/apps/details?id=com.zuplon.bestaurant.customer&pcampaignid=web_share",
      },
      {
        label: "Brand Identity (Behance)",
        url: "https://www.behance.net/",
      },
      {
        label: "App Assets (Behance)",
        url: "https://www.behance.net/gallery/239448061/Bestuarent-Visual-Assets",
      },
      {
        label: "Marketing Materials (Behance)",
        url: "https://www.behance.net/gallery/246891921/Brochure-Bestuarent",
      },
      {
        label: "Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/239396857/Bestuarent-Admin-Website",
      },
      {
        label: "Application Showdown (Behance)",
        url: "https://www.behance.net/gallery/237362835/Bestuarent-Application",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product, Visual)",
        url: "",
      },
      {
        label: "SATYA (Frontend)",
        url: "",
      },
      {
        label: "RONIKA (Frontend)",
        url: "",
      },
      {
        label: "DASHATH (Backend)",
        url: "",
      },
      {
        label: "SURAJ (Backend)",
        url: "",
      },
      {
        label: "MANSI (Tester)",
        url: "",
      },
    ],
  },

  {
    id: "valyouu",
    title: "VALYOUU AGENCY",
    category: "AGENCY WEBSITE REVAMP",
    tags: [
      "WEBSITE DESIGN",
      "CONTENT STRATEGIST",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Valyouu Agency.jpg",
    mainImage: "/projects/Valyouu Agency Image.jpg",
    quote:
      "Valyouu is a creative agency built on the belief that every business deserves more than good design—it deserves meaningful value.",
    description: [
      "Valyouu was reimagined to reflect this philosophy through bold storytelling, refined interactions, and a system that communicates trust, strategy, and craftsmanship across every touchpoint.",
      "More than a digital agency, Valyouu positions itself as a creative partner that transforms ideas into lasting digital experiences. The redesign focused on building a distinctive brand presence that feels confident, modern, and value-driven while creating a stronger connection between the agency and its clients.",
      "The project wasn't about redesigning a website. It was about redefining how the brand communicates. Every interaction, animation, and visual decision was crafted to express Valyouu's belief that exceptional work is measured by the value it creates, not just the aesthetics it delivers.",
    ],
    year: "2026",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://valyouu.com",
      },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/248773219/Valyouu-Agency-Website",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (UI & UX)",
        url: "",
      },
      {
        label: "SWACHHITH (Frontend)",
        url: "",
      },
    ],
  },

  {
    id: "bodhiyo",
    title: "BODHIYO PRODUCT",
    category: "WEB PLATFORM",
    tags: ["PRODUCT DESIGN", "UX STRATEGY", "WIREFRAMING", "UI UX"],
    imagePath: "/projects/Bodhiyo Product.jpg",
    mainImage: "/projects/Bodhiyo Product Image.jpg",
    quote: "A digital identity for India's workforce.",
    description: [
      "Bodhiyo is a WhatsApp-first workforce platform built to transform how skilled workers create, share, and grow their professional identity. Instead of relying on paper resumes or informal references, the platform helps people build trusted digital profiles that represent their real experience, skills, and work history.",
      "From construction workers, drivers, technicians, and domestic staff to healthcare professionals and service workers, Bodhiyo creates a single digital ecosystem where workers, employers, and institutions can connect through verified information, skill visibility, and smart opportunity matching.",
      "Employers can move beyond traditional resume screening by discovering verified talent based on skills, experience, location, and availability, while government organizations and institutions gain access to aggregated workforce insights that support better planning, training, and employment initiatives.",
      "My role spanned the complete product design process, contributing to the experience from initial discovery through final delivery. I worked across user research, UX strategy, information architecture, user flows, wireframing, interaction design, responsive experiences, WhatsApp conversational flows, digital profile systems, visual design, design systems, rapid prototyping, iterative design, usability improvements, and developer handoff to create a seamless experience for workers, employers, and institutions.",
    ],
    year: "2026",
    status: "Live",
    links: [
      {
        label: "Bodhiyo Website (Non India)",
        url: "https://www.bodhiyo.com/",
      },
      {
        label: "Bodhiyo Website (India)",
        url: "https://www.bodhiyo.in/",
      },
      {
        label: "Behance 1",
        url: "https://www.behance.net/gallery/249200543/Bodhiyo-Product-%28Non-India%29",
      },
      {
        label: "Behance 2",
        url: "https://www.behance.net/gallery/249197821/Bodhiyo-Product",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "KARTHEEK (Fullstack Dev)",
        url: "",
      },
      {
        label: "AYYAPPA (Fullstack Dev)",
        url: "",
      },
    ],
  },

  {
    id: "ecoworld",
    title: "ECOWORLD",
    category: "LANDING PAGE",
    tags: [
      "EMOTIONAL STORYTELLING",
      "BRAND-LED VISUAL IDENTITY",
      "MOBILE-FIRST DESIGN",
    ],
    imagePath: "/projects/Ecoworld.jpg",
    mainImage: "/projects/Ecoworld Image.jpg",
    quote:
      "Ecoworld redefines what a holiday home can be. Instead of offering another destination to visit, it creates a place to belong—a personalised living environment where architecture, nature, and individual lifestyle come together. Every home is shaped around its owner, making each experience deeply personal rather than universally designed.",
    description: [
      "Modern life rarely slows down. Ecoworld was created for people who want more than occasional escapes—they want a second place that feels truly theirs. Set within an expansive natural landscape, the project combines personalised architecture, protected ecosystems, and thoughtfully planned communities to transform a holiday home into a lasting extension of everyday life.",
      "Led the end-to-end UX and UI design process, including research, strategy, information architecture, content design, wireframing, responsive UI, prototyping, design systems, and developer handoff.",
    ],
    year: "2026",
    status: "Campaign Ended",
    links: [
      {
        label: "Open Design File",
        url: "https://www.figma.com/design/cbWQcScCIDSgaoFEPOpFGK/Eco-World?node-id=0-1&t=BQTOU3mCnw8l9SFu-1",
      },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/251946837/Eco-World-Landing-Page",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (UI, UX)",
        url: "",
      },
    ],
  },

  {
    id: "smcch-edu",
    title: "SMCCH EDU",
    category: "EDUCATIONAL WEBSITE REVAMP",
    tags: ["UX RESEARCH", "UX STRATEGY", "WEBSITE DESIGN", "BUSINESS STRATEGY"],
    imagePath: "/projects/SMCCH Edu.jpg",
    mainImage: "/projects/SMCCH Edu Image.jpg",
    quote: "Building the digital foundation of a modern medical institution.",
    description: [
      "Shantabaa Medical College & General Hospital is a comprehensive digital platform designed to simplify the experience of students, faculty, patients, and administrators. Instead of relying on disconnected systems, the platform brings academics, hospital services, admissions, careers, departments, events, and institutional communication into a single connected ecosystem.",
      "Built to support both medical education and healthcare delivery, the platform organizes large volumes of information into intuitive user journeys. Every interaction is designed to reduce complexity, improve accessibility, and help users quickly find what they need—whether they are applying for admission, accessing hospital services, exploring departments, or managing institutional operations.",
      "The experience focuses on clarity over complexity. Through structured navigation, thoughtful content hierarchy, and responsive interactions, the platform creates a seamless experience that reflects the institution's commitment to academic excellence, compassionate healthcare, and community service.",
      "The website was reimagined through a complete UX and visual redesign, focusing on improving information architecture, navigation, content hierarchy, and overall usability. The process included UX research, user flow optimization, wireframing, interaction design, responsive UI, design systems, rapid prototyping, and developer handoff to deliver a modern, scalable experience that better represents the institution's vision and serves its diverse audience.",
    ],
    year: "2026",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://smcgh.edu.in",
      },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/244725395/Santhabaa-Medical-Collage-Strategy-and-Website",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (UX & UI)",
        url: "",
      },
      {
        label: "VISHAL (Frontend)",
        url: "",
      },
      {
        label: "DHEERAJ (Backend)",
        url: "",
      },
    ],
  },

  {
    id: "wlc",
    title: "WLC PRODUCT",
    category: "WEB PLATFORM",
    tags: ["PRODUCT RESEARCH", "UX STRATEGY", "WEB PLATFORM", "DASHBOARD"],
    imagePath: "/projects/WLC Product.jpg",
    mainImage: "/projects/WLC Product Image.jpg",
    quote: "Not just a member platform. An executive leadership ecosystem.",
    description: [
      "Instead of managing members, leads, events, and applications across disconnected tools, WLC brings the entire leadership journey into one intelligent platform—helping the team operate with clarity, precision, and confidence.",
      "Women Leadership Circle is a private leadership operating system that connects applications, memberships, curated events, executive insights, and relationship intelligence into a single experience. Every interaction is designed to support meaningful connections, streamline internal operations, and enable high-quality leadership engagement at scale.",
      "From product discovery and UX strategy to the final design system, I was involved throughout the entire product journey. I designed complex admin workflows, executive dashboards, member experiences, event management, role-based permissions, AI-powered conversation intelligence, and responsive interfaces. Every decision was made to create a platform that feels elegant, scalable, and effortless while handling the complexity of a premium leadership ecosystem.",
    ],
    year: "2026",
    status: "Live",
    links: [
      {
        label: "Admin Platform",
        url: "https://women-cl.web.app/login",
      },
      {
        label: "Member Platform",
        url: "https://wlc-member.web.app/login",
      },
      {
        label: "Behance 1",
        url: "https://www.behance.net/gallery/252083233/WLC-Admin-Dashboard",
      },
      {
        label: "Behance 2",
        url: "https://www.behance.net/gallery/252080725/WLC-Member-Portal",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "KARTHEEK (Fullstack Dev)",
        url: "",
      },
      {
        label: "AYYAPPA (Fullstack Dev)",
        url: "",
      },
      {
        label: "ANKIT (Fullstack Dev)",
        url: "",
      },
      {
        label: "SAINADH (Frontend)",
        url: "",
      },
    ],
  },

  {
    id: "powertohire",
    title: "PTH APPLICATION",
    category: "HIRING PLATFORM",
    tags: ["PRODUCT RESEARCH", "WEBSITE DESIGN", "APPLICATION DESIGN"],
    imagePath: "/projects/PTH Application.jpg",
    mainImage: "/projects/PTH Application Image.jpg",
    quote:
      "Power To Hire is an AI-powered recruitment platform built to simplify every stage of the hiring journey. The experience was reimagined to help recruiters move faster, collaborate better, and make confident hiring decisions through intelligent workflows, automation, and a modern product experience.",
    description: [
      "Built to eliminate hiring friction, Power To Hire transforms complex recruitment workflows into a seamless digital experience. Every interaction was crafted to improve recruiter productivity, accelerate candidate evaluation, and create a platform that scales with growing hiring teams.",
      "From candidate sourcing to final hiring decisions, every experience was designed to simplify recruitment through intelligent UX. The platform combines AI-assisted screening, collaborative hiring workflows, and actionable insights into a scalable SaaS product built for modern recruitment teams.",
      "I was responsible for shaping the complete product experience from discovery to delivery. My work included UX research, information architecture, user journey mapping, interaction design, wireframing, high-fidelity UI, responsive experiences, AI workflow design, design systems, rapid prototyping, usability improvements, and developer handoff, creating a scalable recruitment platform that balances business goals with recruiter efficiency.",
    ],
    year: "2026",
    status: "Live",
    links: [
      {
        label: "PTH Website",
        url: "https://employer.powertohire.com/login",
      },
      {
        label: "PTH Application",
        url: "https://apps.apple.com/us/app/powertohire/id6482851799",
      },
      {
        label: "Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/252051141/PTH-Website-Revamp",
      },
      {
        label: "App Showdown (Behance)",
        url: "https://www.behance.net/gallery/252048061/PTH-Candidate-App-Revamp",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "TANMAY (Dev)",
        url: "",
      },
    ],
  },

  {
    id: "myhub",
    title: "MY HUB PRODUCT",
    category: "END-TO-END PRODUCT DESIGN",
    tags: [
      "PRODUCT RESEARCH",
      "UX STRATEGY",
      "APPLICATION DESIGN",
      "WEBSITE DESIGN",
    ],
    imagePath: "/projects/My Hub Product.jpg",
    mainImage: "/projects/My Hub Product Image.jpg",
    quote: "A connected digital commerce ecosystem.",
    description: [
      "MyHub is an all-in-one digital commerce platform built to connect customers, retailers, drivers, and enterprises through a single intelligent ecosystem. Instead of relying on multiple disconnected applications for shopping, POS, rides, deliveries, and business management, MyHub brings everything together into one seamless platform.",
      "From live video shopping, AI-powered retail management, and smart POS operations to last-mile logistics, driver networks, rewards, and enterprise ERP, MyHub enables businesses to digitize their operations while delivering a modern, connected experience for every user.",
      "MyHub 360 ERP provides complete visibility across the entire supply chain—connecting manufacturers, distributors, wholesalers, retailers, and customers through one unified platform. Real-time inventory, product movement, sales performance, demand forecasting, and AI-driven insights help businesses reduce waste, improve decision-making, and accelerate growth.",
      "Retailers can manage inventory, billing, live product demonstrations, order proposals, customer engagement, staff operations, and hyperlocal marketing through MyHub Retail + AI POS. Drivers benefit from a zero-commission earning ecosystem with rides, parcel deliveries, referrals, and advertising income, while customers enjoy live shopping, travel services, parcel bookings, rewards, and a personal AI assistant—all within a single application.",
      "As a Supporting Product Designer, I played a key role in shaping the MyHub product experience across the customer application, MyHub Retail + AI POS, MyHub Ride Pilot, MyHub 360 ERP, and the corporate website. Working closely with product teams and developers, I contributed to product discovery, UX research, user flows, wireframing, interaction design, visual design, design systems, high-fidelity prototyping, iterative improvements, and developer handoff—helping build a scalable, user-centric digital ecosystem that connects customers, businesses, and enterprises through a unified experience.",
    ],
    year: "2025",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://myhub360.com",
      },
      {
        label: "MyHub Application",
        url: "https://play.google.com/store/apps/details?id=com.myhub.customer&pcampaignid=web_share",
      },
      {
        label: "MyHub POS",
        url: "https://pos.myhubs.in/",
      },
      {
        label: "MyHub Ad Streaming Website",
        url: "https://myhubadmedia.com/",
      },
      {
        label: "Assets",
        url: "https://www.behance.net/gallery/237341843/MyHub-Assets",
      },
      {
        label: "Landing Page (Behance)",
        url: "https://www.behance.net/gallery/237116965/AD-Stream-Landing-Page",
      },
      {
        label: "Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/241049503/MyHub-Product-Website-Design",
      },
    ],
    team: [
      {
        label: "CHAITANYA (Product Designer)",
        url: "",
      },
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
    ],
  },

  {
    id: "kisaan-parivar",
    title: "KISAAN PARIVAR",
    category: "FARMING ENTERPRISE WEBSITE REVAMP",
    tags: [
      "PRODUCT RESEARCH",
      "UX STRATEGY",
      "APPLICATION DESIGN",
      "WEBSITE DESIGN",
    ],
    imagePath: "/projects/Kisaan Parivar.jpg",
    mainImage: "/projects/Kisaan Parivar Image.jpg",
    quote: "A LEADING CORPORATE ORGANIC FARMING ECOSYSTEM",
    description: [
      "KISAAN PARIVAR IS ONE OF INDIA'S LEADING CORPORATE ORGANIC FARMING COMPANIES, COMMITTED TO BUILDING A SUSTAINABLE AGRICULTURAL ECOSYSTEM THAT CONNECTS FARMERS, INVESTORS, CONSUMERS, AND GLOBAL MARKETS. THROUGH SCIENTIFIC FARMING PRACTICES, MODERN INFRASTRUCTURE, AND ORGANIC CULTIVATION, THE COMPANY DELIVERS HIGH-QUALITY PRODUCE WHILE PROMOTING LONG-TERM ENVIRONMENTAL RESPONSIBILITY.",
      "FROM LARGE-SCALE LAND DEVELOPMENT AND ORGANIC CULTIVATION TO PROCESSING, STORAGE, RETAIL, AND EXPORT OPERATIONS, KISAAN PARIVAR CREATES A COMPLETE VALUE CHAIN THAT ENSURES QUALITY, TRACEABILITY, AND CONSISTENT AGRICULTURAL GROWTH. THE ORGANIZATION FOCUSES ON INNOVATION, TRANSPARENCY, AND SUSTAINABLE FARMING TO CREATE LASTING VALUE FOR EVERY STAKEHOLDER.",
      "THE DIGITAL EXPERIENCE WAS DESIGNED TO SHOWCASE THE COMPANY'S SCALE, VISION, AND FUTURE GROWTH WHILE MAKING COMPLEX AGRICULTURAL OPERATIONS EASY TO UNDERSTAND. THE WEBSITE HIGHLIGHTS CORPORATE FARMING, ORGANIC PRODUCTS, INVESTMENT OPPORTUNITIES, IMPORT & EXPORT, KP E-MART, AND THE COMPANY'S LONG-TERM MISSION TO BUILD A TRUSTED AGRICULTURAL BRAND.",
      "THE PROJECT INVOLVED END-TO-END PRODUCT DESIGN FROM STRATEGY TO EXECUTION, COVERING UX RESEARCH, INFORMATION ARCHITECTURE, USER FLOWS, WIREFRAMING, HIGH-FIDELITY UI DESIGN, RESPONSIVE DESIGN, DESIGN SYSTEM CREATION, CONTENT STRATEGY, PROTOTYPING, ITERATIVE IMPROVEMENTS, AND DEVELOPER HANDOFF—RESULTING IN A MODERN, SCALABLE DIGITAL EXPERIENCE THAT STRENGTHENS BRAND CREDIBILITY, BUILDS INVESTOR TRUST, AND SUPPORTS KISAAN PARIVAR'S LONG-TERM GROWTH AND IPO VISION.",
    ],
    year: "2025",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://www.kisaanparivar.com/",
      },
      {
        label: "Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/237143725/Kisaan-Parivar",
      },
      {
        label: "Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/237197541/Broadway-Agri-%28Kisaan-Parivar-Subsidiary%29",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "RAHUL (Dev)",
        url: "",
      },
    ],
  },

  {
    id: "laxmi-developers",
    title: "LAXMI DEVELOPERS",
    category: "REAL-ESTATE WEBSITE REVAMP",
    tags: ["WEBSITE REVAMP", "BUSINESS STRATEGY", "WEBSITE DESIGN"],
    imagePath: "/projects/Laxmi Developers.jpg",
    mainImage: "/projects/Laxmi Developers Image.jpg",
    quote: "A modern digital experience for a trusted real estate brand.",
    description: [
      "Laxmi Developers is a real estate company dedicated to developing premium residential and commercial spaces with a strong focus on quality, innovation, transparency, and customer satisfaction. With a vision to create sustainable communities and lasting value, the company delivers thoughtfully planned projects that meet the evolving needs of modern homebuyers and investors.",
      "The previous website lacked a modern visual identity, intuitive navigation, and a structured content hierarchy. Project information was difficult to discover, and the overall experience did not effectively communicate the company's credibility, expertise, or market presence, resulting in reduced user engagement and inquiry opportunities.",
      "The redesign was focused on showcasing the company's brand strength, project portfolio, and commitment to quality through a clean, user-centric experience. The website was restructured to improve information architecture, simplify navigation, strengthen trust through consistent visual storytelling, and optimize the journey from project discovery to lead generation.",
      "As the Product Designer, I was responsible for the complete website redesign from strategy to execution. My contributions included UX research, competitor analysis, information architecture, user journey mapping, wireframing, high-fidelity UI design, responsive design, design system creation, prototyping, and close collaboration with stakeholders and developers to deliver a scalable, conversion-focused digital experience.",
    ],
    year: "2025",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://www.laxmideveloper.com/",
      },
      {
        label: "Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/237220755/Laxmi-Developers-Real-Estate",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (UX & UI)",
        url: "",
      },
      {
        label: "VISHAL (Frontend)",
        url: "",
      },
      {
        label: "DHEERAJ (Backend)",
        url: "",
      },
    ],
  },

  {
    id: "sherpal-ai",
    title: "SHERPAL AI",
    category: "AI-POWERED SAT PREPARATION PLATFORM",
    tags: [
      "PRODUCT RESEARCH",
      "UX STRATEGY",
      "BUSINESS STRATEGY",
      "APPLICATION DESIGN",
    ],
    imagePath: "/projects/Sherpal AI.jpg",
    mainImage: "/projects/Sherpal AI Image.jpg",
    quote: "A modern AI-powered learning experience for SAT preparation.",
    description: [
      "Sherpal AI is an AI-powered EdTech platform built to help high school students prepare for the SAT through personalized learning, adaptive assessments, and intelligent AI coaching. The platform focuses on improving student performance, building confidence, and delivering a highly engaging digital learning experience.",
      "The existing experience required a more intuitive user journey, clearer learning paths, and a scalable design system to support personalized study plans, practice tests, performance analytics, and AI-driven insights. These gaps created friction in navigation, reduced engagement, and impacted the overall learning experience.",
      "The redesign was focused on creating a student-centric product that simplified onboarding, improved information architecture, enhanced learning flows, and introduced a modern, accessible interface. Every screen was designed to make studying more focused, motivating, and data-driven.",
      "As the Product Designer, I was responsible for the product design process from discovery to delivery. My contributions included user research, competitor analysis, information architecture, user journey mapping, wireframing, high-fidelity UI design, design system creation, prototyping, responsive design, and close collaboration with product managers and developers to deliver a scalable, user-centric learning platform.",
    ],
    year: "2024",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://sherpalai.com",
      },
      {
        label: "Product Showdown (Behance)",
        url: "https://www.behance.net/gallery/237198863/Sherpal-AI",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (UX & UI)",
        url: "",
      },
    ],
  },

  {
    id: "where2invest",
    title: "WHERE2INVEST",
    category: "FINTECH PLATFORM",
    tags: [
      "PRODUCT RESEARCH",
      "UX STRATEGY",
      "BUSINESS STRATEGY",
      "WEBSITE DESIGN",
    ],
    imagePath: "/projects/Where2Invest.jpg",
    mainImage: "/projects/Where2Invest Image.jpg",
    quote: "A modern investment platform built for smarter wealth creation.",
    description: [
      "Where2Invest is a fintech investment platform designed to help individuals and businesses make informed financial decisions. The platform offers a wide range of investment solutions, including mutual funds, portfolio management, retirement planning, bonds, insurance advisory, and alternative investments through a seamless digital experience.",
      "The existing website lacked a clear information hierarchy, making it difficult for users to understand services, build trust, and navigate their investment journey. Complex content, inconsistent user flows, and limited visual clarity created friction that impacted user engagement and conversion.",
      "The redesign focused on creating a modern, trustworthy, and user-centric experience that simplified financial information, improved navigation, established a stronger visual identity, and provided clear pathways for users to explore investment opportunities with confidence.",
      "As the Sole Product Designer, I was responsible for the complete website redesign from discovery to delivery. My contributions included user research, competitor analysis, information architecture, user journey mapping, wireframing, high-fidelity UI design, design system creation, responsive design, interactive prototyping, content structuring, and close collaboration with stakeholders and developers to deliver a scalable, high-converting digital experience.",
    ],
    year: "2024",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://www.where2invest.com",
      },
      {
        label: "Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/237176835/Where2Invest",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "RAHUL (Dev)",
        url: "",
      },
    ],
  },

  {
    id: "zuplon-website",
    title: "ZUPLON WEBSITE",
    category: "SAAS WEBSITE",
    tags: [
      "WEBSITE DESIGN",
      "CONTENT STRATEGY",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Zuplon Website.jpg",
    mainImage: "/projects/Zuplon Website Image.jpg",
    quote:
      "A modern technology company building scalable digital products and enterprise solutions.",
    description: [
      "Zuplon is a technology company specializing in software development, cloud transformation, AI implementation, DevOps, and enterprise SaaS solutions. As an AWS Partner and Spacelift Partner, the company helps businesses build secure, scalable, and future-ready digital products while driving innovation through custom engineering and intelligent automation.",
      "The existing website did not effectively represent Zuplon's evolving brand, technical capabilities, product ecosystem, or industry expertise. The challenge was to redefine the digital experience with modern information architecture, clear service communication, improved user flows, and a stronger visual identity that builds trust and supports business growth.",
      "Focused on creating a premium, user-centric digital experience that reflected Zuplon's vision, I designed a scalable website that effectively showcases its services, products, partnerships, and technology expertise while improving engagement, credibility, and conversion.",
      "As the Product Designer, I was responsible for the complete website redesign from product discovery to final delivery. My contributions included UX research, information architecture, user journey mapping, content strategy, wireframing, high-fidelity UI design, responsive design, design system creation, interaction design, prototyping, AI-assisted visual direction, and close collaboration with stakeholders and developers to deliver a scalable, modern, and high-performing digital experience.",
    ],
    year: "2024",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://zuplon.com",
      },
      {
        label: "Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/240511567/Zuplon-Website-Revamp",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "RAHUL (Dev)",
        url: "",
      },
    ],
  },

  {
    id: "shares-bazaar",
    title: "SHARES BAZAAR",
    category: "FINTECH PLATFORM",
    tags: [
      "PRODUCT RESEARCH",
      "UX STRATEGY",
      "BUSINESS STRATEGY",
      "WEBSITE DESIGN",
    ],
    imagePath: "/projects/Shares Bazaar.jpg",
    mainImage: "/projects/Shares Bazaar Image.jpg",
    quote:
      "A modern fintech platform designed to simplify investment research, market analysis, and digital wealth management through data-driven tools and intuitive user experiences.",
    description: [
      "The corporate website was designed to establish a strong digital presence, communicate the company's expertise, and create a trustworthy experience for potential customers, partners, and investors.",
      "The product ecosystem was built to help investors access powerful market insights, research tools, screening capabilities, strategy analysis, and digital subscription services with a focus on usability, performance, and trust.",
      "The previous website did not effectively reflect the organization's evolving brand, product offerings, and growth. The redesign introduced a modern information architecture, clear service communication, stronger visual storytelling, and a consistent design language to improve brand perception and user engagement.",
      "The website was crafted to balance business objectives with user needs, making it easier for visitors to discover products, explore services, understand key features, and take meaningful action through strategic calls to action and conversion-focused experiences.",
      "As the Sole Product Designer, I was responsible for the complete website redesign from product discovery to final delivery. My contributions included UX research, information architecture, content strategy, user flows, wireframing, high-fidelity UI design, responsive design, design system creation, visual direction, prototyping, and collaboration with stakeholders and developers to deliver a high-performing, user-centric digital experience.",
    ],
    year: "2024",
    status: "Live",
    links: [
      {
        label: "Company Website",
        url: "https://staging.sharesbazaar.com/home",
      },
      {
        label: "Backtest Platform",
        url: "https://backtest.sharesbazaar.com/home",
      },
      {
        label: "Algo Trade Platform",
        url: "https://aitrade.sharesbazaar.com/",
      },
      {
        label: "Company Website Showdown (Behance)",
        url: "https://www.behance.net/gallery/237337513/Shares-Bazaar-Website-Revamp",
      },
      {
        label: "Backtest Product Showdown (Behance)",
        url: "https://www.behance.net/gallery/237108781/Shares-Bazaar-Algo-Trading-Landing-Page",
      },
      {
        label: "Algo Trade Product Showdown (Behance)",
        url: "https://www.behance.net/gallery/237353513/Shares-Bazaar-Algo-Trade-Dashboard",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "RAHUL (Dev)",
        url: "",
      },
      {
        label: "PRATHYUSHA (Dev)",
        url: "",
      },
      {
        label: "PRADEEP (Dev)",
        url: "",
      },
    ],
  },

  {
    id: "roadbee",
    title: "ROADBEE",
    category: "PREMIUM BIKER WEBSITE DESIGN",
    tags: ["WEBSITE REVAMP", "BUSINESS STRATEGY", "WEBSITE DESIGN"],
    imagePath: "/projects/Roadbee.jpg",
    mainImage: "/projects/Roadbee Image.jpg",
    quote:
      "A modern motorcycle companion platform designed to help riders track their journeys, explore events, manage ownership costs, and connect with a growing biking community.",
    description: [
      "Roadbee is a rider-first digital platform that brings together ride tracking, real-time navigation, expense management, motorcycle events, community engagement, and performance insights into a single seamless experience.",
      "The existing platform required a modernized user experience with improved information architecture, better feature discoverability, clearer user flows, and a more engaging visual design to make complex riding data easy to understand and interact with.",
      "Focused on enhancing the complete rider experience, the redesign emphasized usability, intuitive navigation, data visualization, responsive interfaces, and a consistent design system that makes every feature accessible, engaging, and easy to use.",
      "As the Product Designer, I contributed to the end-to-end product redesign, including UX research, information architecture, user journey mapping, wireframing, high-fidelity UI design, dashboard and analytics design, design system creation, interactive prototyping, usability improvements, and close collaboration with stakeholders and developers to deliver a modern, scalable, and user-centric riding platform.",
    ],
    year: "2025",
    status: "Live",
    links: [
      {
        label: "Company Website",
        url: "https://roadbee.in",
      },
      {
        label: "Behance Showdown",
        url: "https://www.behance.net/gallery/237155721/Roadbee-Website-Revamp",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "CHAITANYA (Product Designer)",
        url: "",
      },
    ],
  },

  {
    id: "tariff-tracker",
    title: "TARIFF TRACKER",
    category: "APPLICATION DESIGN",
    tags: [
      "BUSINESS STRATEGY",
      "PRODUCT RESEARCH",
      "UX STRATEGY",
      "APPLICATION DESIGN",
    ],
    imagePath: "/projects/Tariff Tracker.jpg",
    mainImage: "/projects/Tariff Tracker Image.jpg",
    quote:
      "Tariff Tracker is a global trade intelligence platform designed to help businesses navigate international tariffs, discover verified trade partners, and streamline cross-border decision-making.",
    description: [
      "The platform brings tariff insights, product discovery, exporter networks, and shipping connections together in a single digital ecosystem for businesses involved in international trade.",
      "Built for importers, exporters, and shipping agencies, the experience simplifies complex trade workflows through role-based navigation, intuitive interfaces, and data-driven decision-making. Users can explore products, connect with verified businesses, compare tariff information, and manage international operations with confidence.",
      "The product was designed to reduce the complexity of global trade by organizing large volumes of information into clear, actionable experiences. Special attention was given to user trust, information hierarchy, search discovery, personalized dashboards, and scalable interactions that support future platform growth.",
      "As the Sole Product Designer, I led the complete product design process from strategy to execution. My work included UX research, competitor analysis, information architecture, role-based user flows, wireframing, high-fidelity UI design, interactive prototyping, design system development, usability improvements, and close collaboration with stakeholders and developers to deliver a scalable B2B SaaS platform.",
    ],
    year: "2025",
    status: "Live",
    links: [
      {
        label: "Visit Application",
        url: "https://play.google.com/store/apps/details?id=com.zuplon.tarifft&pcampaignid=web_share",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "TANMAY (Dev)",
        url: "",
      },
    ],
  },

  {
    id: "orion-stars",
    title: "ORION STARS",
    category: "ONLINE GAMING PLATFORM",
    tags: [
      "APPLICATION DESIGN",
      "CONTENT STRATEGY",
      "UX RESEARCH",
      "RESPONSIVE DESIGN",
    ],
    imagePath: "/projects/Orion Stars.jpg",
    mainImage: "/projects/Orion Stars Image.jpg",
    quote:
      "A modern online gaming platform built to deliver an engaging, rewarding, and seamless entertainment experience across desktop and mobile devices.",
    description: [
      "Orion Stars is an interactive gaming platform that brings together a wide collection of online games within a fast, visually immersive, and user-friendly ecosystem. The experience is designed to make discovering, accessing, and enjoying games effortless across every device.",
      "The platform focuses on accessibility, performance, and player engagement through streamlined onboarding, personalized game recommendations, secure account management, reward systems, and continuously updated content. Every interaction was optimized for speed, clarity, and ease of use.",
      "The redesign emphasized intuitive navigation, scalable information architecture, responsive layouts, and a modern visual language that improves discoverability while supporting long-term player retention. Features such as promotions, loyalty rewards, and account management were organized into a seamless digital experience.",
      "As the Product Designer, I was responsible for crafting the complete user experience, including UX research, information architecture, user flows, wireframing, high-fidelity UI design, responsive interfaces, content strategy, interactive prototyping, usability improvements, and design system creation to deliver a polished, engaging, and scalable gaming platform.",
    ],
    year: "2025",
    status: "Uncertain",
    links: [
      {
        label: "Design File",
        url: "https://www.figma.com/design/mZQNhzxRV3HgULGlbqDfgz/Orion-Stars-Project?m=auto&t=X975iYo5wOjum0ls-7",
      },
      {
        label: "Behance Showdown",
        url: "https://www.behance.net/gallery/237348699/Orian-Stars-Gaming",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
    ],
  },

  {
    id: "marv",
    title: "MARV",
    category: "WEBSITE DESIGN",
    tags: ["WEBSITE DESIGN", "UX RESEARCH", "RESPONSIVE DESIGN"],
    imagePath: "/projects/Marv.jpg",
    mainImage: "/projects/Marv Image.jpg",
    quote:
      "A next-generation Web3 platform built to connect creators, collectors, and digital communities through secure blockchain-powered experiences.",
    description: [
      "Marv is a next-generation NFT platform designed to simplify how users discover, collect, and interact with digital assets. Built with a Web3-first mindset, the platform delivers a seamless experience across desktop and mobile devices while making blockchain technology approachable for everyday users.",
      "The platform focuses on transparency, ownership, and accessibility, enabling secure wallet connectivity, asset discovery, NFT collections, and marketplace interactions. Every feature is designed to streamline digital ownership while maintaining high levels of trust, performance, and security.",
      "The redesign emphasized intuitive navigation, responsive layouts, optimized user journeys, and a modern visual language that makes complex blockchain interactions feel simple and engaging. The experience balances speed, usability, and community engagement to create a premium NFT marketplace.",
      "As the Product Designer, I was responsible for the complete website experience, including UX research, information architecture, user journey mapping, wireframing, high-fidelity UI design, responsive design, interactive prototyping, design system creation, and collaboration with developers to deliver a scalable Web3 product experience.",
    ],
    year: "2024",
    status: "LIVE",
    links: [
      {
        label: "Visit Website",
        url: "https://www.realmarv.vip/",
      },
      {
        label: "Behance Showdown",
        url: "https://www.behance.net/gallery/218478655/MARV-Project",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "https://www.linkedin.com/in/vinayreddysr",
      },
    ],
  },

  {
    id: "world-design",
    title: "WORLD DESIGN",
    category: "NFT COLLECTION CENTER",
    tags: ["WEBSITE DESIGN", "UX RESEARCH", "RESPONSIVE DESIGN"],
    imagePath: "/projects/World Design.jpg",
    mainImage: "/projects/World Design Image.jpg",
    quote:
      "A global NFT marketplace designed to connect creators, collectors, and digital communities through a seamless Web3 experience.",
    description: [
      "World Design is an NFT collection platform that enables users to discover, explore, buy, and showcase digital collectibles through a clean, intuitive, and modern marketplace experience. The platform simplifies NFT discovery while making Web3 interactions more approachable for both new and experienced users.",
      "Built around creators and collectors, the marketplace offers organized NFT collections, creator profiles, secure wallet integration, category-based browsing, and responsive user journeys. Every interaction was designed to improve discoverability, engagement, and confidence throughout the digital asset ecosystem.",
      "The redesign focused on creating a visually immersive marketplace with stronger information architecture, optimized search and filtering, responsive layouts, and a scalable design system. The goal was to deliver a premium browsing experience that balances aesthetics, usability, and marketplace performance.",
      "As the Product Designer, I led the complete product design process from discovery to delivery. My responsibilities included UX research, competitor analysis, information architecture, user flows, wireframing, high-fidelity UI design, interactive prototyping, design system creation, usability improvements, and close collaboration with developers to deliver a scalable Web3 marketplace.",
    ],
    year: "2023",
    status: "Live",
    links: [
      {
        label: "Visit Website",
        url: "https://worldmarket.digital/",
      },
      {
        label: "Behance Showdown",
        url: "https://www.behance.net/gallery/218281623/Design-Showcase-%28worldmarket%29",
      },
    ],
    team: [
      {
        label: "VINAY Sreeyapu (Product Designer)",
        url: "",
      },
      {
        label: "MANAMI (Dev)",
        url: "",
      },
    ],
  },

  // {
  //   id: "vital-space",
  //   title: "VITAL SPACE",
  //   category: "REAL-ESTATE WEBSITE",
  //   tags: ["WEBSITE DESIGN", "UX RESEARCH", "RESPONSIVE DESIGN"],
  //   imagePath: "/projects/Vital Space.jpg",

  //   // Opens directly in a new tab
  //   external: true,
  //   externalUrl: "https://vitalspace.in/",
  // }

  // {
  //   id: "desineeds",
  //   title: "DESINEEDS",
  //   category: "LOCAL MARKETPLACE APPLICATION",
  //   tags: ["APPLICATION DESIGN", "UX RESEARCH", "RESPONSIVE DESIGN"],
  //   imagePath: "/projects/DesiNeeds.jpg",

  //     // Opens directly in a new tab
  //   external: true,
  //   externalUrl: "https://www.behance.net/gallery/218352301/Desi-Bazaar-App-Design",
  // }

  // {
  //   id: "bitsnift",
  //   title: "BITSNIFT",
  //   category: "NFT COLLECTION CENTER",
  //   tags: [
  //     "WEBSITE DESIGN",
  //     "CONTENT STRATEGY",
  //     "UX RESEARCH",
  //     "RESPONSIVE DESIGN",
  //   ],

  //       // Opens directly in a new tab
  //   external: true,
  //   externalUrl: "https://www.behance.net/gallery/218561109/BITSI-NFT-Project",
  // }

  // {
  //   id: "deltahrms",
  //   title: "DELTA HRMS",
  //   category: "HR SOFTWARE PLATFORM",
  //   tags: [
  //     "WEBSITE DESIGN",
  //     "PRODUCT RESEARCH",
  //     "UX STRATEGY",
  //     "RESPONSIVE DESIGN",
  //   ],

  //         // Opens directly in a new tab
  //   external: true,
  //   externalUrl: "https://www.behance.net/gallery/218567881/Delta-HRMS-Dashboard-UI",
  // }

  // {
  //   id: "sharylytics",
  //   title: "SHARYLYTICS",
  //   category: "INVESTING WEBSITE DESIGN",
  //   tags: [
  //     "WEBSITE DESIGN",
  //     "UX RESEARCH",
  //     "RESPONSIVE DESIGN",
  //   ],

  //         // Opens directly in a new tab
  //   external: true,
  //   externalUrl: "https://www.behance.net/gallery/237249987/Sharyalytics-Halal-Investing",
  // }
];
