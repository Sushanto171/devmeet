import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-11/12 mx-auto max-w-[400px] bg-white p-6 rounded-2xl border">
        <div className="mb-4 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2  mb-4">
            <h3 className="text-2xl font-semibold text-violet-700  ">
              DevMeet
            </h3>
          </div>
          <p className="text-gray-700">Sign in to chat with our AI.</p>
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

          <Button className="w-full rounded-full py-5 bg-violet-700 hover:bg-violet-800 cursor-pointer">
            Sign In
          </Button>
        </form>

        <p className="text-sm mt-5 text-center">
          {"Don't have an account?"}
          <Link href="/signUp" className="text-violet-700">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
