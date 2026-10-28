import type { IconName } from "./lib/icons";

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
        github_sponsors: "https://github.com/sponsors/SafetImamovic",
        email: "mailto:safet.imamovic@unze.ba",
        ptf: "https://ptf.unze.ba",
        unze: "https://unze.ba",
};

export const SOCIALS: { name: string; href: string; icon: IconName; blurb: string }[] = [
        { name: "GitHub", href: LINKS.github, icon: "github", blurb: "Code for everything on this site" },
        { name: "GitHub Sponsors", href: LINKS.github_sponsors, icon: "github", blurb: "Become a GitHub Sponsor ❤" },
        { name: "LinkedIn", href: LINKS.linkedin, icon: "linkedin", blurb: "Experience and professional profile" },
        { name: "Modrinth", href: LINKS.modrinth, icon: "modrinth", blurb: "My Minecraft mods" },
        { name: "CurseForge", href: LINKS.curseforge, icon: "curseforge", blurb: "My Minecraft mods" },
        { name: "Ko-fi", href: LINKS.kofi, icon: "kofi", blurb: "Support my mods and tools" },
        { name: "Email", href: LINKS.email, icon: "email", blurb: "safet.imamovic@unze.ba" },
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

export const NAV: { name: string; href: string; icon: IconName }[] = [
        { name: "Projects", href: "/projects", icon: "grid" },
        { name: "Blog", href: "/blog", icon: "pen" },
        { name: "Publications", href: "/publications", icon: "paper" },
        { name: "CV", href: "/cv", icon: "idcard" },
        { name: "About", href: "/about", icon: "user" },
        { name: "Links", href: "/links", icon: "link" },
];
