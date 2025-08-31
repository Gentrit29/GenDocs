import Link from "@docusaurus/Link";
import { GoArrowLeft } from "react-icons/go";

export default function GoBack({ path }: { path: string }) {
  return (
    <div id="tw-scope" className="mb-3">
      <Link
        to={path}
        className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-2 py-1 text-lg text-black transition-colors duration-300 ease-in hover:bg-green-500 lg:px-3 lg:py-1.5 dark:bg-neutral-800 dark:text-gray-200"
      >
        <GoArrowLeft />
        Go back
      </Link>
    </div>
  );
}
