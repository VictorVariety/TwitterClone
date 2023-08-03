import MainFeed from "./components/MainFeed";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSideBar />
        <MainFeed />
        <RightSideBar />
      </div>
    </div>
  );
};

export default page;
