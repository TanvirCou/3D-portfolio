import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-red-600">Not Found</h2>
      <p className="text-md font-medium text-red-600">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="text-md mt-2 rounded-md bg-green-600 px-4 py-2 font-medium text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
