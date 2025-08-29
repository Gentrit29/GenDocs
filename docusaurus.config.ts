import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "GenDocs",
  tagline: "My Personal Courses Index.",
  favicon: "img/gendocs-logo.png",

  future: {
    v4: true,
  },
  url: "http://localhost:3000",
  baseUrl: "/",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/Gentrit29/GenDocs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: ["./src/plugins/tailwind-config.js"],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
    },
    image: "img/gendocs-logo.png",
    navbar: {
      title: "GenDocs",
      logo: {
        alt: "My Site Logo",
        src: "img/gendocs-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/Gentrit29/GenDocs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Made by <a href="https://github.com/Gentrit29" target="_blank" rel="noopener noreferrer">Gentrit</a>, built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
