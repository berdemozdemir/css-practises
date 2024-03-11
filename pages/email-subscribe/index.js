import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

const EmailSubscribe = () => {
  return (
    <div className="flex min-h-screen bg-[#3F3F46] justify-center items-center ">
      <Link
        href={"../"}
        className="absolute top-4 left-4 flex hover:bg-gray-400 p-2 rounded-xl"
      >
        <IconChevronLeft />
        back
      </Link>
      <div className="flex flex-col md:flex-row h-fit justify-around bg-[#27272A] rounded-xl px-2 py-1">
        <img
          alt="email-subscribe"
          src="/images/email-subscribe.jpg"
          className="object-cover rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        <div className="flex flex-col items-start h-full justify-center text-white gap-4 p-7">
          <h1>Get diet and fitness tips in your inbox</h1>

          <p className="text-xs text-wrap max-w-fit">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter
          </p>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-2 bg-[#27272A] border border-[#48484F] rounded placeholder:text-xs w-full"
            />

            <button className="bg-[#84CC15] text-[#48484F] transition-colors text-xs rounded-md py-2 px-3 hover:text-white hover:bg-lime-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
