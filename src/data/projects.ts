// src/data/projects.ts

export type Project = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imagePath: string;
};

export const projectsData: Project[] = [
  {
    id: "idntt",
    title: "IDNTT PRODUCT",
    category: "GENZ JEWELRY ECOMMERCE PRODUCT",
    tags: ["PRODUCT DISCOVERY", "UX STRATEGY", "WIREFRAMING", "UI UX"],
    imagePath: "/projects/idntt.svg", 
  },
  {
    id: "merascorp",
    title: "MERASCORP LLP",
    category: "REAL-ESTATE WEBSITE REVAMP",
    tags: ["WEBSITE REVAMP", "BUSINESS STRATEGY", "WEBSITE DESIGN"],
    imagePath: "/projects/merascorp.svg",
  },
  {
    id: "novus",
    title: "NOVUS PRODUCT",
    category: "SMART RING APPLICATION",
    tags: ["APPLICATION DESIGN", "PRODUCT RESEARCH", "UX STRATEGY", "IA"],
    imagePath: "/projects/novus.svg",
  },
];