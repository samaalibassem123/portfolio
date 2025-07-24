"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-center lg:pt-5 p-2 motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[1000ms]">
      <div className=" transition-all group  p-3 lg:px-10 flex items-center justify-between w-[500px] font-bitcount  border-b">
        <Link
          href={"/"}
          className="group-hover:text-gray-400 group-hover:scale-95 hover:scale-110 hover:text-black transition-all ease-in-out  cursor-pointer"
        >
          Home
        </Link>
        <Link
          href={"/skills"}
          className="group-hover:text-gray-400 group-hover:scale-95 hover:scale-110 hover:text-black transition-all ease-in-out  cursor-pointer"
        >
          Skills
        </Link>
        <Link
          href={"/projects"}
          className="group-hover:text-gray-400 group-hover:scale-95 hover:scale-110 hover:text-black transition-all ease-in-out  cursor-pointer"
        >
          Projects
        </Link>
      </div>
    </header>
  );
}
