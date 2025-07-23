"use client";
import { motion, Variants } from "motion/react";
import React from "react";

export default function TextHover({ text }: { text: string }) {
  const Letters = text.split("");
  const boxVariants: Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
    hover: {
      scaleY: 1.2,
      scale: 1.1, // Scale up on hover
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };
  console.log(Letters);
  return (
    <div className="flex">
      {Letters.map((letter, index) => (
        <motion.p variants={boxVariants} whileHover="hover" key={index}>
          {letter}
        </motion.p>
      ))}
    </div>
  );
}
