import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaTrash } from "react-icons/fa6";

const page = () => {
  return (
    <div className="p-5 ">
      <div className="p-5 bg-white shadow-md rounded-md border">
        <div className="flex md:flex-row flex-col justify-between items-center gap-5 mb-3">
          <h3 className="text-2xl font-semibold ">All Users</h3>
          <Input
            type="search"
            className="max-w-[300px] rounded-sm"
            placeholder="Search by user name"
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>join Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex  items-center gap-2">
                  <img
                    className="w-12 h-12 rounded-full border"
                    src={"https://i.ibb.co.com/JWDd73K0/image.png"}
                    alt="profile"
                  />
                  <div>
                    <h3 className="text-lg">Rakib Hossen</h3>

                    <p className="text-sm text-gray-600">
                      hellorakibhossen@gmail.com
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>2 April 2025</TableCell>
              <TableCell className="text-right">
                <FaTrash></FaTrash>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex  items-center gap-2">
                  <img
                    className="w-12 h-12 rounded-full border"
                    src={"https://i.ibb.co.com/JWDd73K0/image.png"}
                    alt="profile"
                  />
                  <div>
                    <h3 className="text-lg">Rakib Hossen</h3>

                    <p className="text-sm text-gray-600">
                      hellorakibhossen@gmail.com
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>2 April 2025</TableCell>
              <TableCell className="text-right">
                <FaTrash></FaTrash>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex  items-center gap-2">
                  <img
                    className="w-12 h-12 rounded-full border"
                    src={"https://i.ibb.co.com/JWDd73K0/image.png"}
                    alt="profile"
                  />
                  <div>
                    <h3 className="text-lg">Rakib Hossen</h3>

                    <p className="text-sm text-gray-600">
                      hellorakibhossen@gmail.com
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>2 April 2025</TableCell>
              <TableCell className="text-right">
                <FaTrash></FaTrash>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex  items-center gap-2">
                  <img
                    className="w-12 h-12 rounded-full border"
                    src={"https://i.ibb.co.com/JWDd73K0/image.png"}
                    alt="profile"
                  />
                  <div>
                    <h3 className="text-lg">Rakib Hossen</h3>

                    <p className="text-sm text-gray-600">
                      hellorakibhossen@gmail.com
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>2 April 2025</TableCell>
              <TableCell className="text-right">
                <FaTrash></FaTrash>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex  items-center gap-2">
                  <img
                    className="w-12 h-12 rounded-full border"
                    src={"https://i.ibb.co.com/JWDd73K0/image.png"}
                    alt="profile"
                  />
                  <div>
                    <h3 className="text-lg">Rakib Hossen</h3>

                    <p className="text-sm text-gray-600">
                      hellorakibhossen@gmail.com
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>Admin</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>2 April 2025</TableCell>
              <TableCell className="text-right">
                <FaTrash></FaTrash>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
