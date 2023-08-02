import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSideBar = () => {
  return (
    <section className="w-[23%] sticky top-0 xl:flex flex-col items-stretch h-screen hidden">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <a
            className="text-2xl rounded-3xl py-2 px-6 space-x-4 flex items-center justify-start w-fit
        hover:bg-white/20 transition duration-200"
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </a>
        ))}
        <button className="rounded-full bg-primary p-4 m-6 text-center text-2xl hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>

      <button className="rounded-full flex items-center space-x-2 bg-transparent w-full justify-between p-4 text-center hover:bg-white/20 transition duration-200">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10 "></div>
          <div className="text-left text-xs">
            <div className="font-semibold">ProfileName</div>
            <div>@UserName</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSideBar;
