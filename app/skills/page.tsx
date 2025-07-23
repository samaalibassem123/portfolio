"use client";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

export default function page() {
  return (
    <AnimatePresence>
      <motion.div
        animate={{
          y: 200,
        }}
      >
        page
      </motion.div>
    </AnimatePresence>
  );
}
