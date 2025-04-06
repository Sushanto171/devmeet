import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-11/12 mx-auto max-w-[400px] bg-white p-6 rounded-2xl border">
        <div className="mb-4 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2  mb-3">
            <h3 className="text-3xl font-semibold text-primary">
              Dev<span className="font-bold text-black">Meet</span>
            </h3>
          </div>
          <p className="text-gray-700">Welcome back to DevMeet!</p>
        </div>
        <div className="rounded-full border flex gap-2 items-center justify-center p-2 cursor-pointer mb-3">
          <FcGoogle /> Google
        </div>
        <div className="rounded-full border flex gap-2 items-center justify-center p-2 cursor-pointer mb-2">
          <FaGithub className="text-gray-900" /> Github
        </div>
        <div className="flex items-center gap-4">
          <hr className="flex-grow border-t border-gray-300" />
          <p className="text-gray-500">OR</p>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <form>
          <div className="mb-4">
            <Label htmlFor="email" className=" mb-2">
              Email
            </Label>
            <Input
              type="email"
              className="rounded-full p-5"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" className=" mb-2">
              Password
            </Label>
            <Input
              type="password"
              className="rounded-full p-5"
              id="email"
              placeholder="Password"
            />
          </div>

          <Button className="w-full rounded-full py-5 bg-primary hover:bg-black cursor-pointer">
            Sign In
          </Button>
        </form>

        <p className="text-sm mt-5 text-center">
          {"Don't have an account?"}
          <Link href="/signUp" className="text-primary">
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
