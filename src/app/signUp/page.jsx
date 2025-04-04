import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiUpload } from "react-icons/fi";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-11/12 mx-auto max-w-[400px] bg-white p-6 rounded-2xl border">
        <div className="mb-4 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2  mb-4">
            <h3 className="text-2xl font-semibold text-violet-700  ">
              DevMeet
            </h3>
          </div>
          <p className="text-gray-700 text-center">
            Create an account and start .
          </p>
        </div>
        <form>
          <div className="mb-4">
            <Label htmlFor="name" className=" mb-2">
              Full name
            </Label>
            <Input
              type="text"
              className="rounded-full p-5"
              id="name"
              placeholder="Name"
            />
          </div>
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
          <div className="mb-4">
            <Label htmlFor="image" className="mb-2">
              Profile picture
            </Label>
            <label
              htmlFor="image"
              className="rounded-full border flex gap-2 items-center justify-center p-2 cursor-pointer"
            >
              <FiUpload />
              <p className="text-sm text-gray-600">Upload an image</p>
            </label>
            <Input
              type="file"
              className="hidden"
              id="image"
              accept="image/*"
              placeholder="Image"
            />
          </div>

          <Button className="w-full rounded-full py-5 bg-violet-700 hover:bg-violet-800 cursor-pointer">
            Create an Account
          </Button>
        </form>

        <p className="text-sm mt-5 text-center">
          {"Already have an account?"}
          <Link href="/signIn" className="text-violet-700">
            SignIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
