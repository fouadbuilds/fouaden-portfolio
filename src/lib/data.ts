// ─────────────────────────────────────────────
//  SITE DATA — edit this file to update content
// ─────────────────────────────────────────────

import type { WritingItem } from "@/types";

export const siteConfig = {
  name: "fouaden",
  email: "adeniranfouado@gmail.com",
  github: "https://github.com/fouadbuilds",
  fiverr: "#",
};

export const projects = [
  {
    slug: "snipit",
    title: "snipit",
    description:
      "A CLI tool to save, search, and copy code snippets locally from your terminal. Published on npm.",
    github: "https://github.com/fouadbuilds/snipit",
    image: "/images/placeholder.svg",
  },
  {
    slug: "litebox",
    title: "LiteBox",
    description:
      "A lightweight self-hosted file storage app with a client-server architecture. Upload and manage files through a clean interface backed by a Node.js server.",
    github: "https://github.com/fouadbuilds/LiteBox",
    image: "/images/placeholder.svg",
  },
  {
    slug: "snipurl",
    title: "snipUrl",
    description:
      "A full-stack URL shortener with a custom backend that maps short codes to long URLs and handles redirects.",
    github: "https://github.com/fouadbuilds/snipUrl",
    image: "/images/placeholder.svg",
  },
  // Add more projects:
  // {
  //   slug: "my-project",
  //   title: "My Project",
  //   description: "What it does.",
  //   github: "https://github.com/fouadbuilds/...",
  //   image: "/images/my-project.jpg",
  // },
];

export const writing: WritingItem[] = [
  {
    title: "The Alchemist",
    type: "reading" as const,
    description: "",
    link: "",
  },
  // Add more:
  // { title: "My Post", type: "writing" as const, description: "...", link: "" },
];

export const highlightedLinks = {
  dalhousie: {
    href: "https://dal.ca",
    image: "/images/placeholder.svg",
  },
  film: {
    href: "https://drive.google.com/file/d/1t6_ylDUhzKhdyqtxeAfppI_cc_ZPUyFM/view?usp=sharing", // TODO: replace
    image: "/images/placeholder.svg",
  },
  graphicDesign: {
    href: "https://ca.pinterest.com/steepice0/",
    image: "/images/placeholder.svg",
  },
};
