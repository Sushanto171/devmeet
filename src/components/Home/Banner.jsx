"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";
import toast from "react-hot-toast";

const TiptapEditor = dynamic(() => import("@/components/ui/tiptapEditor"), {
  ssr: false,
});

const image_hosting_key = process.env.NEXT_PUBLIC_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Banner = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !category.trim() || !content.trim()) {
      toast.error("❌ Required fields missing!");
      return;
    }

    const imageFile = { image: image };

    try {
      const res = await axios.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const postData = {
        title,
        category,
        tags,
        content,
        image: res.data.data.display_url,
      };

      console.log("Post Data:", postData);
      await axios.post("/api/post", postData);
      toast.success("✅ Post successfully submitted!");
      setOpen(false);
      setTitle("");
      setCategory("");
      setTags([]);
      setImage(null);
      setContent("");
    } catch (error) {
      toast.error("❌ Something went wrong!");
    }
  };
  return (
    <div className="bg-gradient-to-r from-secondary to-primary p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold">Welcome To DevMeet</h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Ask questions and get real answers from real people. Whether you&apos;re
        looking for crossword answers, practical advice or you&apos;ve just come
        for a chat, get answers to your questions. To get started all you need
        to do is register.
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-4">
            Create Post
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="sr-only">Create Post</DialogTitle>
              <div className="flex gap-2 items-center mb-1.5">
                <img
                  src="https://i.ibb.co/JWDd73K0/image.png"
                  className="w-12 h-12 rounded-full"
                  alt="profile"
                />
                <div>
                  <h3 className="text-xl font-semibold">Jhone Doie</h3>
                  <p className="text-sm text-gray-600">Create Your Post</p>
                </div>
              </div>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3.5">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="space-y-3.5">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={setCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="javascript">JavaScript</SelectItem>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="frontend">Front-End</SelectItem>
                      <SelectItem value="career">Career Tips</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3.5">
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    placeholder="e.g. react, performance, hooks"
                    value={tags.join(", ")}
                    onChange={(e) =>
                      setTags(
                        e.target.value.split(",").map((tag) => tag.trim())
                      )
                    }
                  />
                </div>

                <div className="space-y-3.5">
                  <Label htmlFor="image">Image (optional)</Label>
                  <Input
                    id="image"
                    type="file"
                    onChange={(e) =>
                      setImage(e.target.files ? e.target.files[0] : null)
                    }
                  />
                </div>
              </div>

              <div className="space-y-3.5">
                <Label htmlFor="content">Content</Label>
                <TiptapEditor
                  className="h-[200px]"
                  content={content}
                  onChange={setContent}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" className="cursor-pointer">
                Publish Post
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Banner;
