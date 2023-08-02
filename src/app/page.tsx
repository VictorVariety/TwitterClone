import { BsSearch, BsThreeDots } from "react-icons/bs";
import MainFeed from "./components/MainFeed";
import LeftSideBar from "./components/LeftSideBar";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-[70vw] w-full h-full flex relative">
        <LeftSideBar />
        <MainFeed />

        <section className="w-[45%] sticky top-4 flex flex-col items-stretch h-screen px-6 overflow-scroll no-scrollbar  ">
          <div>
            <div className="relative w-full h-full group">
              <input
                className="w-full h-full rounded-xl p-4 outline-none peer focus:border focus:border-primary bg-neutral-900/90 py-4 px-8"
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
              />
              <label
                className="absolute top-0 left-0 h-full flex items-center justify-center pl-2
                text-gray-600 peer-focus:text-primary"
                htmlFor="searchBox"
              >
                <BsSearch className="w-5 h-5" />
              </label>
            </div>
          </div>

          <div className="flex flex-col bg-neutral-900 rounded-xl mt-4">
            <div className="text-xl font-semibold my-4 px-4">
              What's Happening
            </div>
            <div>
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="hover:bg-white/10 pl-4 py-3 last:rounded-b-xl transition duration-200 flex flex-col relative"
                >
                  <div className="font-semibold text-lg">#Trending {i + 1}</div>
                  <div className="text-sm text-neutral-400">23.7k</div>
                  <div className="absolute right-0 p-2 text-neutral-400">
                    <BsThreeDots />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col bg-neutral-900 rounded-xl mt-4">
            <div className="text-xl font-semibold my-4 px-4">Who to follow</div>
            <div>
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="
                   p-4 items-center flex justify-between
                   hover:bg-white/10 last:rounded-b-xl transition duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-neutral-200 rounded-full"></div>
                    <div className="flex flex-col">
                      <div className="text-lg font-semibold">RandomUser</div>
                      <div className="text-sm text-neutral-400">
                        @RandomUserX
                      </div>
                    </div>
                  </div>

                  <button className="rounded-full px-6 py-2 bg-white text-neutral-900">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
