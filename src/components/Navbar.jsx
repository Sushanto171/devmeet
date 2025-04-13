"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import ThemeToggle from "./ThemeToggle";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const path = usePathname();
  const { data: session } = useSession();

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Service", path: "/service" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Community", path: "/community" },
    { name: "Job", path: "/job" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!pathname.includes("dashboard")) {
    return (
      <div
        className={`my-4 ${
          path === "/about" ? "fixed w-full z-20 top-0 " : "sticky top-4"
        }`}
      >
        <div
          className={`flex justify-between items-center max-w-[1100px] w-11/12 mx-auto ${
            path === "/about"
              ? "bg-white border-gray-200/35 shadow-m"
              : "bg-white border-gray-200"
          }  p-2.5 border rounded-full shadow-lg`}
        >
          <div className="lg:ml-5 flex items-center gap-2 relative">
            <RxHamburgerMenu
              onClick={() => setOpen(!open)}
              className="text-xl lg:hidden cursor-pointer"
            />
            {open && (
              <ul className="flex flex-col w-44 absolute border border-gray-200 bg-white p-3 top-16 rounded-2xl z-10">
                {routes.map((route) => (
                  <li
                    key={route.path}
                    className="text-sm hover:bg-gray-100 p-1.5 rounded-sm"
                  >
                    <Link href={route.path} className="text-gray-700">
                      {route.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <Link href="/">
              <h3 className="text-3xl font-semibold text-primary">
                Dev<span className="font-bold text-black">meet</span>
              </h3>
            </Link>
          </div>

          <ul className="lg:flex items-center gap-4 hidden">
            {routes.map((route) => (
              <li key={route.path}>
                <Link href={route.path} className="text-gray-800">
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-2 items-center">
            <ThemeToggle />
            {session ? (
              <>
                <span className="text-sm text-gray-700 hidden md:block">
                  {session.user?.email}
                </span>
                <button
                  onClick={() => signOut()}
                  className={`border py-1 px-3 font-semibold text-gray-800 rounded-full cursor-pointer ${
                    path === "/about"
                      ? "border-gray-200/35"
                      : "border-gray-200"
                  }`}
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={() => signIn()}
                className={`border py-1 px-3 font-semibold text-gray-800 rounded-full cursor-pointer ${
                  path === "/about"
                    ? "border-gray-200/35"
                    : "border-gray-200"
                }`}
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Navbar;
