import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto border-t border-gray-200 pt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  lg:grid-cols-4 mb-4">
        <div className="">
          <h3 className="text-3xl font-semibold text-violet-700 mb-3 ">
            Devmeet
          </h3>
          <p className="text-sm text-gray-700">
            DevMeet is a platform where developers can share knowledge through
            articles, discussions, and comments. It’s a community-driven
            platform aimed at fostering collaboration and learning.
          </p>
        </div>
        <div>
          <h4 className="text-black mb-3 text-lg ">Company</h4>
          <div className="flex  flex-col gap-2">
            <Link href="/" className="text-sm text-gray-700">
              About
            </Link>
            <Link href="/" className="text-sm text-gray-700">
              Service
            </Link>
            <Link href="/" className="text-sm text-gray-700">
              Job
            </Link>
            <Link href="/" className="text-sm text-gray-700">
              Contact Our story
            </Link>
            <Link href="/" className="text-sm text-gray-700">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-black mb-3 text-lg ">Connect</h4>
          <div className="flex  flex-col gap-2">
            <Link href="/" className="text-sm text-gray-700">
              Linkedin
            </Link>
            <Link href="/" className="text-sm text-gray-700">
              Facebook
            </Link>
            <Link href="/" className="text-sm text-gray-700">
              Twitter(X)
            </Link>
            <Link href="/" className="text-sm text-gray-700">
              Instagram
            </Link>
            <Link href="/" className="text-sm text-gray-700">
              Discord
            </Link>
          </div>
        </div>
        <div className="w-full">
          <h4 className="text-black mb-3 text-lg ">
            Subscribe to our newsletter
          </h4>
          <p className="text-sm text-gray-700">
            Get the latest news, insights, and resources for developers,
            designers, and creators—weekly in your inbox.
          </p>
          <div className="flex items-end gap-2 mt-4">
            <Input type="email" className="rounded-none" placeholder="Email" />
            <Button className="text-sm rounded-none">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 py-3">
        <p>© 2025 DevMeet Pty. Ltd.</p>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm">
            Privacy Policy
          </Link>
          <Link href="/" className="text-sm">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
