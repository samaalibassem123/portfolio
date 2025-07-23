"use client";
import { motion, Transition, Variants } from "motion/react";
import React, { ReactNode } from "react";

export default function TextHover({
  className = "",
  children,
  d = 0,
}: {
  children: ReactNode;
  d?: number;
  className?: string;
}) {
  const text = typeof children === "string" ? children : "";

  const Letters = text.split("");
  const TRansition: Transition = {
    duration: 0.8,
    delay: d,
    ease: [0, 0.71, 0.2, 1.01],
  };
  const boxVariants: Variants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
    },
    hover: {
      scaleY: 1.3,
      scale: 1.1, // Scale up on hover
      transition: {
        type: "spring",
        stiffness: 500,
      },
    },
  };
  console.log(className);
  return (
    <motion.div
      transition={TRansition}
      className={` flex whitespace-pre-wrap motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.75s]/blur ${className}`}
    >
      {Letters.map((letter, index) => (
        <motion.span
          variants={boxVariants}
          whileHover="hover"
          key={index}
          className={`${className}`}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
