import React from "react";
import { BsDot, BsChat, BsThreeDots } from "react-icons/bs";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";

const MainFeed = () => {
  return (
    <main
      className="
      flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-700"
    >
      <h1 className="text-2xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
        Home
      </h1>
      <div className="p-4 relative flex items-stretch space-x-2 border-t border-b border-gray-700">
        <div className="w-10 h-10 bg-slate-200 rounded-full flex-none"></div>
        <div className="flex flex-col w-full">
          <input
            type="text"
            placeholder="What's up?"
            className="w-full h-full bg-transparent p-4
                border-none outline-none border-b-[0.5px] border-gray-700
                text-xl text-gray-400"
          />
          <div className="w-full justify-between items-center flex">
            <div className=""></div>
            <div className="w-full max-w-[100px]">
              <button
                className="px-4 py-2 w-full rounded-full
                  text-center text-lg font-bold bg-primary
                  hover:bg-opacity-70 transition duration-200"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="border-b border-gray-700 flex space-x-4 p-4 pb-2"
          >
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
            </div>
            <div className="flex flex-col pr-12">
              <div className="flex items-center my-1 text-gray-500 justify-between">
                <div className="flex items-center space-x-1 ">
                  <div className="font-bold text-white">Name</div>
                  <div>@Username</div>
                  <div>
                    <BsDot />
                  </div>
                  <div>1 hour ago</div>
                </div>
                <div className="cursor-pointer text-white">
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-white text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                sequi eaque at sint rem dolorum sit possimus, cum facere.
                Voluptatem sapiente recusandae facere accusamus fugit, nisi in
                dignissimos alias accusantium? Nemo repellendus quia nulla modi
                dolor, officia hic officiis voluptatibus minima harum, enim
                distinctio. Id culpa sapiente unde quis reiciendis.
              </div>
              <div className="w-full h-96 rounded-xl aspect-square bg-slate-500 mt-2"></div>
              <div className="flex items-center justify-around w-full mt-2">
                <div className="rounded-full p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                  <BsChat />
                </div>
                <div className="rounded-full p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                  <AiOutlineHeart />
                </div>
                <div className="rounded-full p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                  <IoStatsChart />
                </div>
                <div className="rounded-full p-3 hover:bg-white/20 transition duration-200 cursor-pointer">
                  <IoShareOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainFeed;
