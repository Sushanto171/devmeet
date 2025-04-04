"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname()
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Job", path: "/job" },
    { name: "Service", path: "/service" },
    { name: "Community", path: "/community" },
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
  // console.log({path});
  return (
    <div className={`my-4 ${path === "/about" ? "fixed w-full z-20 top-0" : ""}`}>
      <div className={`flex justify-between items-center max-w-[1100px] w-11/12 mx-auto ${path === "/about" ? "backdrop-blur-xl border-gray-200/35" : "bg-white border-gray-200"}  p-2.5  border  rounded-full shadow-lg`}>
        <div className="lg:ml-5 flex items-center gap-2 relative">
          <RxHamburgerMenu
            onClick={() => setOpen(!open)}
            className="text-xl lg:hidden cursor-pointer"
          />
          {open && (
            <ul className="flex flex-col  w-44 absolute border border-gray-200 bg-white p-3 top-16 rounded-2xl">
              {routes.map((route) => (
                <li
                  key={route.path}
                  className="text-sm hover:bg-gray-100 p-1.5 rounded-sm "
                >
                  <Link href={route.path} className="text-gray-700">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <h3 className="text-3xl font-semibold text-violet-700  ">Devmeet</h3>
        </div>
        <ul className="lg:flex items-center gap-4 hidden ">
          {routes.map((route) => (
            <li key={route.path}>
              <Link href={route.path} className="">
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="signIn">
          <button className={`border py-1 px-3 font-semibold rounded-full cursor-pointer ${path === "/about" ? "border-gray-200/35" : "border-gray-200"}  `}>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
