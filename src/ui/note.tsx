export default function Note({ message }: { message: string }) {
  return (
    <div
      id="tw-scope"
      className="my-4 border-l-4 border-green-500 bg-neutral-800 p-3"
    >
      <p className="text-gray-200">{message}</p>
    </div>
  );
}
