// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Oliver Zhang",
  description: "Senior front-end software engineer with three years of extensive development experience and an active contributor to the Eclipse open-source project. Proficient in modern front-end technology stacks, including React, TypeScript, JavaScript (ES6+), CSS3, and Tailwind frameworks, with rich engineering development experience.",
  siteUrl: "",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop modern web applications",
  "I build full-stack solutions",
  "I contribute to Eclipse open source",
  "I create high-performance systems",
  "I implement AI features"
];

export const EMAIL = "zsq734135404@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/oliver-zhang-cs",
  github: "https://github.com/OliverinMelb",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "3D Lamborghini Configurator",
    image: "/projects/lamborghini-config.png",
    blurImage: "/projects/blur/lamborghini-config-blur.jpg",
    description: "Interactive 3D car configurator with real-time customization and photorealistic rendering",
    gradient: ["#161616", "#3B3B3B"],
    url: "https://automotive-configurator-main.vercel.app/",
    tech: ["threejs", "react", "webgl", "typescript"]
  },
  {
    name: "3D Chair Configurator",
    image: "/projects/chair-config.jpg",
    blurImage: "/projects/blur/chair-config-blur.jpg",
    description: "Customizable 3D furniture viewer with material and color options for interactive design",
    gradient: ["#1F2937", "#374151"],
    url: "https://chair-3d-configurator-pt1w.vercel.app/",
    tech: ["vite", "react", "threejs"]
  },
  {
    name: "Fully Responsive Car Website",
    image: "/projects/car-website.jpg",
    blurImage: "/projects/blur/car-website-blur.jpg",
    description: "This is a responsive website built with HTML and CSS, featuring modern design and intuitive navigation for a simple shopping experience",
    gradient: ["#1E3A8A", "#3B82F6"],
    url: "https://fully-responsive-car-website-yxmv.vercel.app/",
    tech: ["html", "css", "javascript"]
  },
  {
    name: "Full-stack Data Table",
    image: "/projects/data-table.jpeg",
    blurImage: "/projects/blur/data-table-blur.jpeg",
    description: "Next.js 14 powered data table with virtual scrolling, supporting 50k+ rows, featuring infinite loading, column sorting, filtering, and dark mode",
    gradient: ["#0F172A", "#334155"],
    url: "https://data-table-alpha.vercel.app/",
    tech: ["typescript", "next", "tailwind", "supabase"]
  }
];

export const SKILLS = {
  frontend: [
    "javascript",
    "typescript",
    "react",
    "next",
    "threejs",
    "tailwind",
    "webpack",
    "html",
    "css"
  ],
  backend: [
    "nodejs",
    "springboot",
    "mybatis",
    "java"
  ],
  database: [
    "mysql",
    "postgresql",
    "redis"
  ],
  other: [
    "git",
    "linux",
    "docker",
    "ai"
  ]
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const GTAG = "UA-163844688-1";
