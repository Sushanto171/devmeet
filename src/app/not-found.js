"use client";

import Image from "next/image";
import Link from "next/link";
import errorImage from "./error.png";

export default function Error() {
  return (
    <div className="h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="flex gap-8 sm:gap-12 items-center scale-75 sm:scale-100">
        <Image src={errorImage} width={100} height={100} alt="Error image" />
        <div className="w-1 bg-black h-36"></div>
        <div>
          <h4 className="text-2xl font-semibold">Something went wrong!</h4>
          <p className="text-gray-500 mt-2">{"Unknown error occurred."}</p>
          <Link href={"/"}>
            <button className="mt-4 bg-primary cursor-pointer text-white px-4 py-2 rounded">
              Go Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
