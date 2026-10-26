import type { IconName } from "./components/Icon.astro";

export const SITE = {
  title: "Safet Imamović",
  description:
    "Software engineer and teaching assistant at the University of Zenica. I build EngineCV, Minecraft mods, render engines, and developer tools.",
  author: "Safet Imamović",
  url: "https://safet.click",
};

export const LINKS = {
  github: "https://github.com/SafetImamovic",
  linkedin: "https://www.linkedin.com/in/safeti/",
  modrinth: "https://modrinth.com/user/SafetImamovic",
  curseforge: "https://www.curseforge.com/members/safet/projects",
  kofi: "https://ko-fi.com/safetimamovic",
  email: "mailto:safet.imamovic@unze.ba",
  ptf: "https://ptf.unze.ba",
  unze: "https://unze.ba",
};

export const SOCIALS: { name: string; href: string; icon: IconName }[] = [
  { name: "GitHub", href: LINKS.github, icon: "github" },
  { name: "LinkedIn", href: LINKS.linkedin, icon: "linkedin" },
  { name: "Modrinth", href: LINKS.modrinth, icon: "modrinth" },
  { name: "CurseForge", href: LINKS.curseforge, icon: "curseforge" },
  { name: "Ko-fi", href: LINKS.kofi, icon: "kofi" },
  { name: "Email", href: LINKS.email, icon: "email" },
];

// Picks an icon for a project link button from its label.
export function iconFor(label: string): IconName {
  const key = label.toLowerCase().replace(/[^a-z]/g, "");
  const known: Record<string, IconName> = {
    github: "github",
    source: "github",
    modrinth: "modrinth",
    curseforge: "curseforge",
    kofi: "kofi",
    paper: "paper",
    docs: "docs",
  };
  return known[key] ?? "live";
}

export const NAV = [
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Publications", href: "/publications" },
  { name: "CV", href: "/cv" },
  { name: "About", href: "/about" },
];
