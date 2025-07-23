"use client";
import TextHover from "@/components/animation/TextHover";
import { motion } from "motion/react";
export default function Home() {
  return (
    <main className="flex items-center h-svh w-full">
      <div className="p-10">
        <h1 className="text-6xl space-y-2 flex flex-col cursor-pointer">
          <TextHover text="I'm" />
          <motion.span
            whileHover={{
              scale: 1.1,
            }}
          >
            Hi,
          </motion.span>
          <motion.span
            whileHover={{
              scale: 1.1,
            }}
          >
            I'm Bassem Samaali,
          </motion.span>
          <motion.span
            whileHover={{
              scale: 1.1,
            }}
          >
            Web developer
          </motion.span>
        </h1>
      </div>
    </main>
  );
}
