import type { IconType } from "react-icons";
import { FaBook, FaGlobe, FaUsers, FaGithub } from "react-icons/fa";

export interface Cards {
  title: string;
  description: string;
  icon: IconType;
}

export const cards: Cards[] = [
  {
    title: "Courses",
    description:
      "Browse all courses I have followed. You can find Frontend, Backend, and other sections.",
    icon: FaBook,
  },
  {
    title: "Languages",
    description:
      "Browse courses organized by language, e.g., English, Italian, and others.",
    icon: FaGlobe,
  },
  {
    title: "Community",
    description:
      "Suggest courses and share your favorite resources with others.",
    icon: FaUsers,
  },
  {
    title: "GitHub",
    description:
      "Report issues, give feedback, or explore the project repository.",
    icon: FaGithub,
  },
];
