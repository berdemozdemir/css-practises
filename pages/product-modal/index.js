import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const ProductModal = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-slate-200 ">
      <Link
        href={"../"}
        className="absolute top-4 left-4 flex hover:bg-gray-400 p-2 rounded-xl"
      >
        <IconChevronLeft />
        back
      </Link>

      <div className="bg-white rounded-lg p-5 flex flex-col md:flex-row w-fit shadow-2xl gap-10 m-20">
        <img
          alt="headphone"
          src="/images/headphone.png"
          className="hover:scale-105 duration-200 mx-auto w-60 h-60"
        />

        <div className="flex flex-col px-4 items-center md:items-start gap-6">
          <p className="text-white bg-black rounded-2xl text-nowrap px-3 py-1 w-fit text-xl">
            Free shipping
          </p>

          <h2 className="text-2xl font-semibold text-center md:text-left">
            Razer Kraken Kittu Edt Gaming Headset Quartz
          </h2>

          <p className="font-medium line-through">$799</p>

          <h1 className="text-6xl font-bold">$599</h1>

          <p className="opacity-35">
            The offfer is valid until April 3 or as long as stockfasts!
          </p>

          <div className="group w-full">
            <button className="w-full duration-150 transition-all bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
              <div className="px-8 py-4 bg-blue-500 duration-150 rounded-lg group-hover:bg-blue-700">
                Add to cart
              </div>
            </button>
          </div>

          <div className="group flex items-center gap-3">
            <div className="h-3 w-3 bg-green-500 rounded-full group-hover:animate-ping" />

            <p className="text-sm"> 50+ pcs. in stock</p>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-4">
            <button className="flex items-center justify-center font-medium gap-2 border-2 border-gray-300 py-2 px-4 rounded-lg w-full hover:-translate-y-0.5 hover:shadow-lg duration-150 hover:bg-opacity-30">
              <img alt="weight" src="images/weight.png" className="w-8 h-8" />
              <span className="text-nowrap">Add to cart</span>
            </button>

            <button className="flex items-center justify-center font-medium gap-2 border-2 border-gray-300 py-2 px-4 rounded-lg w-full hover:-translate-y-0.5 hover:shadow-lg duration-150 hover:bg-opacity-30">
              <img alt="weight" src="images/heart.png" className="w-8 h-8" />
              <span className="text-nowrap">Add to wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
