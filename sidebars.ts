import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docSidebar: [
    { type: "doc", id: "intro" },
    {
      type: "category",
      label: "Frontend",
      link: { type: "generated-index" },
      items: ["frontend/lg-en/index"],
    },
    {
      type: "category",
      label: "Backend",
      link: { type: "generated-index" },
      items: ["backend/lg-en/index"],
    },
  ],
};

export default sidebars;
