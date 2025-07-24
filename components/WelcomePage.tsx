"use client";
import { motion } from "motion/react";
import React from "react";
import MaskedWelcomePage from "./MaskedWelcomePage";

export default function WelcomePage() {
  return (
    <motion.main
      exit={{
        x: 200,
        transition: {
          duration: 2,
        },
      }}
      className="flex flex-col xl:flex-row  justify-around items-center h-svh w-full cursor-none relative"
    >
      {/*THE Masked content*/}
      <MaskedWelcomePage />
      <div
        className={`-z-10 relative lg:text-8xl text-5xl group space-y-3 scale-x-110 transition-all font-bebas duration-150 `}
      >
        <p className="  motion-translate-x-in-[-14%] motion-translate-y-in-[3%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-ease-spring-smooth">
          Hi,
        </p>
        <p className="motion-translate-x-in-[-13%] motion-translate-y-in-[2%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[1000ms] motion-ease-spring-smooth">
          I'm Bassem Samaali,
        </p>
        <p className="relative text-shadow-md text-shadow-green-300 motion-translate-x-in-[-46%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-duration-[1002ms] motion-delay-[1ms] motion-duration-[1002ms]/translate motion-delay-[0ms]/translate motion-duration-[1002ms]/opacity motion-delay-[0ms]/opacity motion-duration-[1002ms]/blur motion-delay-[0ms]/blur motion-ease-spring-smooth">
          <span>Web Develloper</span>
          <span className=" absolute w-full  h-1/2 bg-green-200 -z-10 left-0 top-[70%] transition-all motion-translate-x-in-[-5%] motion-translate-y-in-[0%] motion-opacity-in-[0%] motion-blur-in-[5px] motion-delay-[3ms] motion-delay-[0ms]/translate motion-delay-[0ms]/opacity motion-delay-[0ms]/blur motion-ease-linear"></span>
        </p>
      </div>

      <button className=" motion-rotate-loop-[6deg] motion-loop-once motion-duration-[1000ms] motion-delay-[3ms] motion-delay-[0ms]/rotate motion-ease-spring-bounciest relative lg:text-6xl  inline-block font-bitcount group py-3 px-10  cursor-pointer text-3xl shadow-xl transition-all">
        <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform -translate-x-4 translate-y-4 bg-green-400/50 group-hover:-translate-x-0 group-hover:-translate-y-0 shadow-md group-focus:-translate-x-0 group-focus:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border border-black   transition-all"></span>
        <span className="relative group-hover:tracking-wide group-focus:tracking-wide transition-all ">
          Contact Me
        </span>
      </button>
    </motion.main>
  );
}
