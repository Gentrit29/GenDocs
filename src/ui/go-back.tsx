import Link from "@docusaurus/Link";
import { GoArrowLeft } from "react-icons/go";

export default function GoBack() {
  return (
    <div id="tw-scope" className="mb-3">
      <Link
        to="/docs/frontend/lg-en"
        className="inline-flex items-center rounded-full bg-neutral-800 px-2 py-1 text-lg text-gray-200 transition-colors duration-300 ease-in hover:bg-green-500 lg:px-3 lg:py-1.5"
      >
        <GoArrowLeft className="mr-2" />
        Go back
      </Link>
    </div>
  );
}
