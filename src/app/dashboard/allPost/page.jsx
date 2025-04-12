import { FaTrash } from "react-icons/fa6";

const page = () => {
  return (
    <div className="p-5">
      <div className="bg-white rounded-md shadow-md border">
        <div className="flex justify-between items-center p-5">
          <h3 className="text-xl font-semibold">All Post</h3>
          <button className="bg-primary py-1 px-3 text-sm rounded-sm text-orange-100">
            20 Posts
          </button>
        </div>
        <div className="flex justify-between items-center border-t p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/27nnnDKz/8.jpg"
              className="h-20 w-20 rounded-md"
              alt=""
            />
            <div>
              <h4 className="text-lg">Sushanto kumar</h4>
              <p className="text-gray-500">
                What five Marvel characters do....
              </p>
              <p className="text-sm text-gray-500">20 September 2024</p>
            </div>
          </div>
          <div>
            <FaTrash></FaTrash>
          </div>
        </div>
        <div className="flex justify-between items-center border-t p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/27nnnDKz/8.jpg"
              className="h-20 w-20 rounded-md"
              alt=""
            />
            <div>
              <h4 className="text-lg">Sushanto kumar</h4>
              <p className="text-gray-500">
                What five Marvel characters do....
              </p>
              <p className="text-sm text-gray-500">20 September 2024</p>
            </div>
          </div>
          <div>
            <FaTrash></FaTrash>
          </div>
        </div>
        <div className="flex justify-between items-center border-t p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/27nnnDKz/8.jpg"
              className="h-20 w-20 rounded-md"
              alt=""
            />
            <div>
              <h4 className="text-lg">Sushanto kumar</h4>
              <p className="text-gray-500">
                What five Marvel characters do....
              </p>
              <p className="text-sm text-gray-500">20 September 2024</p>
            </div>
          </div>
          <div>
            <FaTrash></FaTrash>
          </div>
        </div>
        <div className="flex justify-between items-center border-t p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co.com/27nnnDKz/8.jpg"
              className="h-20 w-20 rounded-md"
              alt=""
            />
            <div>
              <h4 className="text-lg">Sushanto kumar</h4>
              <p className="text-gray-500">
                What five Marvel characters do....
              </p>
              <p className="text-sm text-gray-500">20 September 2024</p>
            </div>
          </div>
          <div>
            <FaTrash></FaTrash>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default page;
