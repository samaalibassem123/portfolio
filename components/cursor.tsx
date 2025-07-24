import { useContext, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { CursorContext } from "./CursorContext";

const Cursor = () => {
  const { variant } = useContext(CursorContext);

  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Add spring effect for smooth movement
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  // Update mouse position on move
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Define cursor variants for different states
  const variants = {
    default: {
      scale: 1,
      backgroundColor: "#000000",
    },
    hover: {
      scale: 2,
      backgroundColor: "#ff0000",
    },
    click: {
      scale: 0.8,
    },
  };

  return (
    <motion.div
      className="fixed w-4 h-4 rounded-full pointer-events-none z-50"
      style={{ x: springX, y: springY }}
      variants={variants}
      animate={variant}
      transition={{ duration: 0.2 }}
    />
  );
};

export default Cursor;
