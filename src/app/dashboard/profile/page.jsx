import { Button } from "@/components/ui/button";
import { FaCode } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import {
  FaUser,
  FaCheckCircle,
  FaGlobe,
  FaPhone,
  FaSkype,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineWork, MdLanguage, MdLocationOn } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const page = () => {
  return (
    <div className="p-5">
      <div className="bg-white  rounded-md lg:h-[400px] h-fit">
        <div className="md:h-[250px] h-[200px] bg-gradient-to-r from-purple-500 to-violet-500 rounded-t-md"></div>
        <div className="p-4 flex  md:flex-row flex-col items-center md:justify-between justify-center gap-1.5">
          <div className="flex md:flex-row flex-col items-center md:gap-5  ">
            <img
              className="w-28 h-28 rounded-md shadow-md border bg-white p-1.5 relative -top-10 "
              src={"https://i.ibb.co.com/JWDd73K0/image.png"}
              alt="profile"
            />
            <div>
              <h3 className="text-2xl font-semibold pb-2 md:text-start text-center">
                John Doe
              </h3>
              <div className="flex md:flex-row flex-wrap md:justify-start justify-center items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 text-md">
                  <FaCode /> Frontend developer
                </p>
                <p className="flex items-center gap-2 text-gray-600 text-md">
                  <SlLocationPin /> Cumilla,Bangladesh
                </p>
                <p className="flex items-center gap-2 text-gray-600 text-md">
                  <MdDateRange /> Joined june 2025
                </p>
              </div>
            </div>
          </div>
          <div>
            <Button>Connected</Button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-5">
        <div className="lg:col-span-1 bg-white shadow-md p-6 space-y-6 rounded-md border">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">About</h2>
            <div className="grid grid-cols-1 gap-y-3 text-gray-700">
              <p className="flex  items-center gap-2">
                <FaUser /> <span>Full Name:</span>{" "}
                <strong className="ml-auto">John Doe</strong>
              </p>

              <p className="flex items-center gap-2">
                <MdOutlineWork /> <span>Role:</span>{" "}
                <strong className="ml-auto">Developer</strong>
              </p>
              <p className="flex items-center gap-2">
                <MdLocationOn /> <span>Country:</span>{" "}
                <strong className="ml-auto">Bangladesh</strong>
              </p>
              <p className="flex items-center gap-2">
                <MdLanguage /> <span>Languages:</span>{" "}
                <strong className="ml-auto">English</strong>
              </p>
            </div>
          </div>

          {/* Contacts Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Contacts</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <FaPhone /> Contact:{" "}
                <span className="ml-auto font-medium">(123) 456-7890</span>
              </p>
              <p className="flex items-center gap-2">
                <FaSkype /> Skype:{" "}
                <span className="ml-auto font-medium">john.doe</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> Email:{" "}
                <span className="ml-auto font-medium">
                  john.doe@example.com
                </span>
              </p>
            </div>
          </div>

          {/* Teams Section */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800">Teams</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center gap-2">
                <FaUsers /> Backend Developer{" "}
                <span className="ml-auto text-sm text-gray-500">
                  (126 Members)
                </span>
              </p>
              <p className="flex items-center gap-2">
                <FaUsers /> React Developer{" "}
                <span className="ml-auto text-sm text-gray-500">
                  (98 Members)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 bg-white shadow-md p-6 space-y-6 rounded-md border">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Post List</h2>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead>Like</TableHead>
                <TableHead>Comment</TableHead>
                <TableHead>Views</TableHead>
                <TableHead className="text-right">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  What five Marvel characters do..
                </TableCell>
                <TableCell>20 ikes</TableCell>
                <TableCell>10 comment</TableCell>
                <TableCell>100 views+</TableCell>
                <TableCell className="text-right">1 fab 2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  What five Marvel characters do..
                </TableCell>
                <TableCell>20 ikes</TableCell>
                <TableCell>10 comment</TableCell>
                <TableCell>100 views+</TableCell>
                <TableCell className="text-right">1 fab 2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  What five Marvel characters do..
                </TableCell>
                <TableCell>20 ikes</TableCell>
                <TableCell>10 comment</TableCell>
                <TableCell>100 views+</TableCell>
                <TableCell className="text-right">1 fab 2025</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  What five Marvel characters do..
                </TableCell>
                <TableCell>20 ikes</TableCell>
                <TableCell>10 comment</TableCell>
                <TableCell>100 views+</TableCell>
                <TableCell className="text-right">1 fab 2025</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
