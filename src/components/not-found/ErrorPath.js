"use client"

import { usePathname } from "next/navigation";

const ErrorPath = () => {
  const pathname = usePathname()
  return (
    <p className="text-gray-500 mt-2">
    The path &quot;<span className="text-red-500">{pathname || "abc"}</span>
    &quot; does not exist.
  </p>
  );
};

export default ErrorPath;