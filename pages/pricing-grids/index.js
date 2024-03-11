import { IconCheck, IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

const PricingGrids = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen justify-center items-center gap-10 p-10 bg-slate-800">
      <Link
        href={"../"}
        className="absolute top-4 left-4 flex hover:bg-gray-400 p-2 rounded-xl"
      >
        <IconChevronLeft />
        back
      </Link>

      <div className="rounded-xl bg-slate-700">
        <div className="rounded-xl bg-slate-800 mx-3 my-3 justify-between py-7 items-center flex flex-col h-[450px] w-[250px] text-white">
          <h3>BASIC</h3>

          <section className="flex flex-col text-center gap-3">
            <h1 className="text-5xl font-serif">100GB</h1>

            <p>$1.93/Month</p>

            <button className="border-violet-600 border rounded-lg py-2 hover:bg-violet-600 duration-200">
              Purchase
            </button>
          </section>

          <div className="w-full border-t border-slate-700 flex items-center flex-col gap-2">
            <p className="flex gap-2 text-xs mt-8">
              <IconCheck size={20} className="my-auto" />
              100 GB of Storage
            </p>

            <p className="flex gap-2 text-xs">
              <IconCheck size={20} className="my-auto" />
              Option to Add members
            </p>
            <p className="flex gap-2 text-xs">
              <IconCheck size={20} className="my-auto" />
              Extra member benefits
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-violet-600">
        <div className="rounded-xl bg-slate-800 mx-3 my-3 justify-between py-7 items-center flex flex-col h-[450px] w-[250px] text-white">
          <h3>STANDART</h3>

          <section className="flex flex-col text-center gap-3">
            <h1 className="text-5xl font-serif">200GB</h1>

            <p>$3.99/Month</p>

            <button className="border-violet-600 border rounded-lg bg-violet-600 py-2 hover:bg-violet-700 duration-200">
              Purchase
            </button>
          </section>

          <div className="w-full border-t border-slate-700 flex items-center flex-col gap-2">
            <p className="flex gap-2 text-xs mt-8">
              <IconCheck size={20} className="my-auto" />
              200 GB of Storage
            </p>

            <p className="flex gap-2 text-xs">
              <IconCheck size={20} className="my-auto" />
              Option to Add members
            </p>

            <p className="flex gap-2 text-xs">
              <IconCheck size={20} className="my-auto" />
              Extra member benefits
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-slate-700">
        <div className="rounded-xl bg-slate-800 mx-3 my-3 justify-between py-7 items-center flex flex-col h-[450px] w-[250px] text-white">
          <h3>PREMIUM</h3>

          <section className="flex flex-col text-center gap-3">
            <h1 className="text-5xl font-serif">2 TB</h1>

            <p>$8.99/Month</p>

            <button className="border-violet-600 border px-10 rounded-lg py-2 hover:bg-violet-600 duration-200">
              Purchase
            </button>
          </section>

          <div className="w-full border-t border-slate-700 flex items-center flex-col gap-2">
            <p className="flex gap-2 text-xs mt-8">
              <IconCheck size={20} className="my-auto" />2 TB of Storage
            </p>

            <p className="flex gap-2 text-xs">
              <IconCheck size={20} className="my-auto" />
              Option to Add members
            </p>
            <p className="flex gap-2 text-xs">
              <IconCheck size={20} className="my-auto" />
              Extra member benefits
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingGrids;
