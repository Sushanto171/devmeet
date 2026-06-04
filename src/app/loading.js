import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="animate-spin">
        <Loader />
      </span>
    </div>
  );
};

Loading.displayName = "Loading";

export default Loading;
