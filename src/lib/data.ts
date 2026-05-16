// ─────────────────────────────────────────────
//  SITE DATA — edit this file to update content
// ─────────────────────────────────────────────

export const siteConfig = {
  name: "fouaden",
  email: "adeniranfouado@gmail.com",
  github: "https://github.com/fouadbuilds",
};

export const projects = [
  {
    slug: "Google Classroom Search",
    title: "Google Classroom Search",
    description:
      "Personal project that searches through assignments, materials and announcements in Google Classroom",
    github: "https://github.com/fouadbuilds/google-classroom-search",
    image: "/images/project-img/classroom-search-screenshot.png",
  },
  {
    slug: "snipit",
    title: "snipit",
    description:
      "A CLI tool to save, search, and copy code snippets locally from your terminal. Published on npm.",
    github: "https://www.npmjs.com/package/@fouaden/snipit",
    image: "/images/project-img/snipit.png",
    showOnHome: true,
  },
  {
    slug: "litebox",
    title: "LiteBox",
    description:
      "A lightweight self-hosted file storage app with a client-server architecture. Upload and manage files through a clean interface backed by a Node.js server.",
    github: "https://github.com/fouadbuilds/LiteBox",
    image: "/images/project-img/file-storage.jpg",
    showOnHome: false,
  },
  {
    slug: "snipurl",
    title: "snipUrl",
    description:
      "A full-stack URL shortener with a custom backend that maps short codes to long URLs and handles redirects.",
    github: "https://github.com/fouadbuilds/snipUrl",
    image: "/images/project-img/snipurl.png",
    showOnHome: true,
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

export const highlightedLinks = {
  dalhousie: {
    href: "https://dal.ca",
    image: "/images/dalhousie.jpg",
  },
  film: {
    href: "https://drive.google.com/file/d/1t6_ylDUhzKhdyqtxeAfppI_cc_ZPUyFM/view?usp=sharing", // TODO: replace
    image: "/images/film.png",
  },
  graphicDesign: {
    href: "https://ca.pinterest.com/steepice0/",
    image: "/images/gph-design.png",
  },
};
