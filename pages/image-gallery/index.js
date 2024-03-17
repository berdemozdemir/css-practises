import { IconBookmark, IconChevronLeft, IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const ImageGallery = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cyan-100">
      <div className="relative flex flex-col p-4 md:p-40 space-y-10 rounded-3xl m-6 bg-white ">
        <Link
          href={"../"}
          className="absolute top-4 left-4 flex hover:bg-gray-400 p-2 rounded-xl"
        >
          <IconChevronLeft />
          back
        </Link>
        <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center justify-center md:justify-end mb-10">
          <Link href="" className="group">
            <div className="group-hover:border-b-2 duration-150 border-black p-2">
              Vector
            </div>
          </Link>

          <Link href="" className="group">
            <div className="group-hover:border-b-2 duration-150 border-black p-2">
              Illustranstions
            </div>
          </Link>

          <Link href="" className="group">
            <div className="group-hover:border-b-2 duration-150 border-black p-2">
              Images
            </div>
          </Link>

          <Link href="" className="group">
            <div className="group-hover:border-b-2 duration-150 border-black p-2">
              Icons
            </div>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex items-center border-b-2">
            <input
              className="border-none px-4 py-2 placeholder:font-thin w-full focus:outline-none"
              placeholder="search"
            />
            <IconSearch className="opacity-30" />
          </div>

          <button className="bg-black px-8 py-3 rounded-md text-white shadow-2xl duration-200 hover:bg-white hover:text-black border-black border">
            Upload
          </button>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative group">
            <img className="w-full" alt="" src="/images/image1.jpg" />

            <div className="absolute right-0 left-0 bottom-0 flex justify-between items-center text-white bg-black py-1 px-3 duration-200 opacity-0 group-hover:opacity-50">
              <div className="flex flex-col">
                <p className="text-xs text-left">Abstract Painting</p>

                <p className="text-xs text-left">245 likes - 35 Shares</p>
              </div>

              <IconBookmark />
            </div>
          </div>

          <div className="relative group">
            <img className="w-full" alt="" src="/images/image2.jpg" />

            <div className="absolute right-0 left-0 bottom-0 flex justify-between items-center text-white bg-black py-1 px-3 duration-200 opacity-0 group-hover:opacity-50">
              <div className="flex flex-col">
                <p className="text-xs text-left">Abstract Painting</p>

                <p className="text-xs text-left">245 likes - 35 Shares</p>
              </div>

              <IconBookmark />
            </div>
          </div>

          <div className="relative group">
            <img className="w-full" alt="" src="/images/image3.jpg" />

            <div className="absolute right-0 left-0 bottom-0 flex justify-between items-center text-white bg-black py-1 px-3 duration-200 opacity-0 group-hover:opacity-50">
              <div className="flex flex-col">
                <p className="text-xs text-left">Abstract Painting</p>

                <p className="text-xs text-left">245 likes - 35 Shares</p>
              </div>

              <IconBookmark />
            </div>
          </div>

          <div className="relative group">
            <img className="w-full" alt="" src="/images/image4.jpg" />

            <div className="absolute right-0 left-0 bottom-0 flex justify-between items-center text-white bg-black py-1 px-3 duration-200 opacity-0 group-hover:opacity-50">
              <div className="flex flex-col">
                <p className="text-xs text-left">Abstract Painting</p>

                <p className="text-xs text-left">245 likes - 35 Shares</p>
              </div>

              <IconBookmark />
            </div>
          </div>

          <div className="relative group">
            <img className="w-full" alt="" src="/images/image6.jpg" />

            <div className="absolute right-0 left-0 bottom-0 flex justify-between items-center text-white bg-black py-1 px-3 duration-200 opacity-0 group-hover:opacity-50">
              <div className="flex flex-col">
                <p className="text-xs text-left">Abstract Painting</p>

                <p className="text-xs text-left">245 likes - 35 Shares</p>
              </div>

              <IconBookmark />
            </div>
          </div>

          <div className="relative group">
            <img className="w-full" alt="" src="/images/image5.jpg" />

            <div className="absolute right-0 left-0 bottom-0 flex justify-between items-center text-white bg-black py-1 px-3 duration-200 opacity-0 group-hover:opacity-50">
              <div className="flex flex-col">
                <p className="text-xs text-left">Abstract Painting</p>

                <p className="text-xs text-left">245 likes - 35 Shares</p>
              </div>

              <IconBookmark />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
