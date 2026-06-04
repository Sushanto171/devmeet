import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Activity, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import { MdChatBubble } from "react-icons/md";
import { getUsers } from "../page";
import Chart from "./components/Chart";
const page = async () => {
  const users = await getUsers();
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-0 gap-5">
        <div className="bg-white p-6  border ">
          <div className="flex justify-between">
            <div className="space-y-2">
              <p className="text-sm">Total Posts</p>

              <h3 className="text-xl font-bold">300</h3>
              <p className="text-sm text-gray-600 hover:underline">
                <Link href="/">View all posts</Link>
              </p>
            </div>
            <div className="bg-violet-700 flex flex-col justify-center items-center h-10 w-10 rounded-full">
              <BookOpen className="text-white"></BookOpen>
            </div>
          </div>
        </div>
        <div className="bg-white p-6  border ">
          <div className="flex justify-between">
            <div className="space-y-2">
              <p className="text-sm">Total Users</p>

              <h3 className="text-xl font-bold">{users.length}</h3>
              <p className="text-sm text-gray-600 hover:underline">
                <Link href="/">View all user</Link>
              </p>
            </div>
            <div className="bg-orange-500 flex flex-col justify-center items-center h-10 w-10 rounded-full">
              <Users className="text-white"></Users>
            </div>
          </div>
        </div>
        <div className="bg-white p-6  border ">
          <div className="flex justify-between">
            <div className="space-y-2">
              <p className="text-sm">Active Users</p>

              <h3 className="text-xl font-bold">40</h3>
              <p className="text-sm text-gray-600 hover:underline">
                <Link href="/">View active users</Link>
              </p>
            </div>
            <div className="bg-green-600 flex flex-col justify-center items-center h-10 w-10 rounded-full">
              <Activity className="text-white"></Activity>
            </div>
          </div>
        </div>
        <div className="bg-white p-6  border ">
          <div className="flex justify-between">
            <div className="space-y-2">
              <p className="text-sm">Total Comments</p>

              <h3 className="text-xl font-bold">500</h3>
              <p className="text-sm text-gray-600 hover:underline">
                <Link href="/">View all comments</Link>
              </p>
            </div>
            <div className="bg-fuchsia-600 flex flex-col justify-center items-center h-10 w-10 rounded-full">
              <MdChatBubble className="text-white"></MdChatBubble>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
        <div className="border bg-white rounded-md p-5">
          <Chart></Chart>
        </div>
        <div className=" border bg-white rounded-md p-5">
          <h3 className="text-xl font-semibold">Recent Users</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">User</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Join Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                users.map((user)=>(

              <TableRow>
                <TableCell className="font-medium">{user.name} </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="text-right">{user.role}</TableCell>
                <TableCell>20 Feb 2025</TableCell>
              </TableRow>


                ))

              }
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="mt-5 rounded-md border p-5 bg-white">
        <h3 className="text-xl font-semibold mb-4">Pending Posts</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>User Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Accept</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <img
                  src="https://i.ibb.co.com/27nnnDKz/8.jpg"
                  className="h-12 w-12 rounded-md"
                  alt=""
                />
              </TableCell>
              <TableCell> What five Marvel characters do....</TableCell>
              <TableCell>Jhone Doie</TableCell>
              <TableCell>Posted 20 june</TableCell>
              <TableCell>
                <button className="bg-green-500 text-green-100 text-sm px-4 py-1 rounded-full">
                  Accept
                </button>
              </TableCell>
              <TableCell className="text-right">
                <button className="bg-red-500 text-red-100 text-sm px-4 py-1 rounded-full">
                  Delete
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <img
                  src="https://i.ibb.co.com/27nnnDKz/8.jpg"
                  className="h-12 w-12 rounded-md"
                  alt=""
                />
              </TableCell>
              <TableCell> What five Marvel characters do....</TableCell>
              <TableCell>Jhone Doie</TableCell>
              <TableCell>Posted 20 june</TableCell>
              <TableCell>
                <button className="bg-green-500 text-green-100 text-sm px-4 py-1 rounded-full">
                  Accept
                </button>
              </TableCell>
              <TableCell className="text-right">
                <button className="bg-red-500 text-red-100 text-sm px-4 py-1 rounded-full">
                  Delete
                </button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <img
                  src="https://i.ibb.co.com/27nnnDKz/8.jpg"
                  className="h-12 w-12 rounded-md"
                  alt=""
                />
              </TableCell>
              <TableCell> What five Marvel characters do....</TableCell>
              <TableCell>Jhone Doie</TableCell>
              <TableCell>Posted 20 june</TableCell>
              <TableCell>
                <button className="bg-green-500 text-green-100 text-sm px-4 py-1 rounded-full">
                  Accept
                </button>
              </TableCell>
              <TableCell className="text-right">
                <button className="bg-red-500 text-red-100 text-sm px-4 py-1 rounded-full">
                  Delete
                </button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
