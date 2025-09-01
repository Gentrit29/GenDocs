import {
  HiOutlineInformationCircle,
  HiOutlineExclamationCircle,
  HiOutlineClock,
} from "react-icons/hi";

const styles = {
  note: {
    title: "Note",
    style: "bg-blue-100 text-blue-900 border-l-4 border-blue-500 p-4 mb-6",
    icon: <HiOutlineInformationCircle className="h-6 w-6" />,
  },
  disclaimer: {
    title: "Disclaimer",
    style: "bg-red-100 text-red-900 border-l-4 border-red-500 p-4 mb-6",
    icon: <HiOutlineExclamationCircle className="h-6 w-6" />,
  },
  wip: {
    title: "Work In Progress",
    style:
      "bg-yellow-100 text-yellow-900 border-l-4 border-yellow-500 p-4 mb-6",
    icon: <HiOutlineClock className="h-6 w-6" />,
  },
};

interface CalloutProps {
  type: keyof typeof styles;
  message: string;
}

export default function Callout({ type, message }: CalloutProps) {
  const { title, style, icon } = styles[type];
  return (
    <div id="tw-scope" className={style}>
      <div className="mb-2 flex items-center space-x-1">
        {icon}
        <strong>{title}</strong>
      </div>
      <div>{message}</div>
    </div>
  );
}
