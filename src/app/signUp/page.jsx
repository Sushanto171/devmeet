'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiUpload } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');

      const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });

      response.status === 201 && router.push('/signIn');
      

    } catch (e) {
      console.error(e.message)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-11/12 mx-auto max-w-[400px] bg-white p-6 rounded-2xl border">
        <div className="mb-4 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2  mb-4">
            <h3 className="text-3xl font-semibold text-primary">
              Dev<span className="font-bold text-black">Meet</span>
            </h3>
          </div>
          <p className="text-gray-700 text-center">
            Create your free account and start sharing knowledge.
          </p>
        </div>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="name" className=" mb-2">
              Full name
            </Label>
            <Input
              type="text"
              name="name"
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
              name="email"
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
              name="password"
              className="rounded-full p-5"
              id="password"
              placeholder="Password"
            />
          </div>

          {/*
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
              name="image"
              accept="image/*"
              placeholder="Image"
            />
          </div>
          */}

          {/* <Button className="w-full rounded-full py-5 bg-primary hover:bg-black cursor-pointer">
            Create an Account
          </Button> */}



          <button
                    type="submit"
                    className="w-full rounded-full py-5 bg-primary hover:bg-black cursor-pointer text-white"
                >
                    Register
                </button>
        </form>

        <p className="text-sm mt-5 text-center">
          {"Already have an account?"}
          <Link href="/signIn" className="text-primary">
            Sign-In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
