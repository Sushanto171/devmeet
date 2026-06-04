import { BsPatchQuestionFill } from "react-icons/bs";
import { IoStatsChartSharp } from "react-icons/io5";
import { PiMedalFill, PiUsersFill } from "react-icons/pi";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { getUsers } from "./../../app/page";

const Statistics = async () => {
  const users = await getUsers();
  return (
    <div className="bg-secondary p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold flex items-baseline gap-2">
        <IoStatsChartSharp />
        Our Statistics
      </h2>
      <hr className="my-4 border-gray-300" />
      <div className="mt-2 space-y-2">
        <div className="bg-blue-500 text-white font-semibold p-3 rounded flex justify-between">
          <span className="flex items-center gap-2">
            <BsPatchQuestionFill />
            Questions
          </span>
          <span>27</span>
        </div>
        <div className="bg-red-500 text-white font-semibold p-3 rounded flex justify-between">
          <span className="flex items-center gap-2">
            <RiQuestionAnswerFill /> Answers
          </span>
          <span>30</span>
        </div>
        <div className="bg-green-500 text-white font-semibold p-3 rounded flex justify-between">
          <span className="flex items-center gap-2">
            <PiMedalFill />
            Best Answers
          </span>
          <span>5</span>
        </div>
        <div className="bg-yellow-500 text-white font-semibold p-3 rounded flex justify-between">
          <span className="flex items-center gap-2">
            <PiUsersFill />
            Users
          </span>
          <span>{users?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
