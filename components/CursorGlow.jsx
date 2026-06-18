"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorGlow = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    damping: 25,
    stiffness: 150,
  });

  const springY = useSpring(mouseY, {
    damping: 25,
    stiffness: 150,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[1]
        h-[400px]
        w-[400px]
        rounded-full
        bg-accent/10
        blur-[120px]
      "
      style={{
        x: springX,
        y: springY,
      }}
    />
  );
};

export default CursorGlow;