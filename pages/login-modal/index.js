import { IconArrowRight } from "@tabler/icons-react";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const LoginModal = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-rose-50">
      <Link
        href={"../"}
        className="absolute top-4 left-4 flex hover:bg-gray-400 p-2 rounded-xl"
      >
        <IconChevronLeft />
        back
      </Link>
      <div className="relative flex flex-row h-full rounded-2xl shadow m-10 md:m-0">
        <div className="flex flex-col p-6 md:p-16 bg-white gap-8 rounded-l-2xl">
          <h1 className="font-bold text-3xl font-mono">Log In</h1>

          <p className="font-thin max-w-sm">
            Log in to your account to upload or download pictures, videos or
            music
          </p>

          <input
            className=" border border-gray-300 rounded-md px-6 py-5 placeholder:font-mono placeholder:font-thin"
            placeholder="Enter your email address"
          />

          <div className="flex justify-between flex-col md:flex-row items-center gap-8">
            <a
              href="#"
              className="text-[#0E7490] hover:text-opacity-70 hover:-translate-y-0.5 duration-150"
            >
              Forgot password
            </a>

            <button className="flex items-center justify-center text-white bg-[#0E7490] px-8 py-6 gap-3 rounded-md w-full md:w-fit hover:bg-opacity-70 hover:-translate-y-0.5 duration-150">
              Next
              <span>
                <IconArrowRight />
              </span>
            </button>
          </div>
          <div className="border mt-4"></div>

          <p className="text-gray-400 font-thin text-center text-sm">
            or log in with
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            <Link
              target="_blank"
              href="https://www.facebook.com"
              className="flex justify-center items-center border rounded-lg px-4 py-2 gap-4 w-full"
            >
              <img src="/images/facebook.png" alt="facebook" className="w-10" />
              <p>Facebook</p>
            </Link>

            <Link
              target="#"
              href="https://www.google.com"
              className="flex justify-center items-center border rounded-lg px-4 py-2 gap-4 w-full"
            >
              <img src="/images/google.png" alt="facebook" className="w-10" />
              <p>Google</p>
            </Link>
          </div>
        </div>

        <div>
          <img
            alt=""
            src="images/image.jpg"
            className="w-[430px] hidden md:block h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
