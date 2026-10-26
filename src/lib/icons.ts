import { siCurseforge, siGithub, siKofi, siModrinth } from "simple-icons";

// Brand marks from Simple Icons (CC0), drawn with the nonzero fill rule.
export const BRAND_ICONS = { github: siGithub, modrinth: siModrinth, curseforge: siCurseforge, kofi: siKofi };

// LinkedIn left Simple Icons on request, so it and the generic icons are plain hand-drawn
// shapes on a 24x24 grid, drawn with the evenodd fill rule (inner shapes cut holes).
export const GENERIC_ICONS = {
  linkedin:
    "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2.5 7v7.5H9V10H6.5Zm1.25-4a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8ZM11 10v7.5h2.5v-4c0-1 .6-1.6 1.4-1.6.8 0 1.1.6 1.1 1.6v4h2.5v-4.6c0-2.2-1.2-3.1-2.8-3.1-1.1 0-1.8.5-2.2 1.1V10H11Z",
  email: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm1 2.4V17h16V7.4l-8 5.3-8-5.3ZM5.6 7 12 11.2 18.4 7H5.6Z",
  docs: "M6 2h9l5 5v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm1 2v16h11V8h-4V4H7Zm2 8h7v2H9v-2Zm0 4h7v2H9v-2Z",
  live: "M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H6v11h11v-5h2v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
  paper: "M5 2h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm1 2v16h12V4H6Zm2 3h8v2H8V7Zm0 4h8v2H8v-2Zm0 4h5v2H8v-2Z",
  grid: "M3 3h8v8H3V3Zm2 2v4h4V5H5Zm8-2h8v8h-8V3Zm2 2v4h4V5h-4ZM3 13h8v8H3v-8Zm2 2v4h4v-4H5Zm8-2h8v8h-8v-8Zm2 2v4h4v-4h-4Z",
  pen: "M15 3l6 6L9 21H3v-6L15 3Zm0 2.8L5 15.8V19h3.2l10-10L15 5.8Z",
  idcard: "M2 5h20v14H2V5Zm2 2v10h16V7H4Zm2 2h5v6H6V9Zm7 1h5v1.5h-5V10Zm0 3h4v1.5h-4V13Z",
  user: "M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM4 20c0-4 3.6-6 8-6s8 2 8 6v1H4v-1Zm2.2-1h11.6c-.5-2-2.8-3-5.8-3s-5.3 1-5.8 3Z",
  link: "M8 7h3v2H8a3 3 0 0 0 0 6h3v2H8A5 5 0 0 1 8 7Zm5 0h3a5 5 0 0 1 0 10h-3v-2h3a3 3 0 0 0 0-6h-3V7ZM8 11h8v2H8v-2Z",
  rss: "M4 4a16 16 0 0 1 16 16h-2.5A13.5 13.5 0 0 0 4 6.5V4Zm0 5a11 11 0 0 1 11 11h-2.5A8.5 8.5 0 0 0 4 11.5V9Zm2 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",
};

export type IconName = keyof typeof BRAND_ICONS | keyof typeof GENERIC_ICONS;
