import Link from "@docusaurus/Link";
import { GoArrowLeft } from "react-icons/go";

export default function GoBack({ path }: { path: string }) {
  return (
    <div id="tw-scope" className="mb-3">
      <Link
        to={path}
        className="inline-flex items-center gap-2 rounded-3xl border border-gray-300 p-3 text-lg text-black transition-colors duration-300 ease-in hover:border-gray-400 dark:border-gray-500 dark:bg-neutral-800 dark:text-gray-300 dark:hover:border-gray-300"
      >
        <GoArrowLeft />
        Go back
      </Link>
    </div>
  );
}
