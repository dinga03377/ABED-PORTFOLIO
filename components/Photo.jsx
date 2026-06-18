"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glow */}
      <div className="absolute w-[320px] h-[320px] xl:w-[520px] xl:h-[520px] bg-accent/20 blur-[120px] rounded-full" />

      {/* Rotating Ring */}
      <motion.svg
        className="w-[320px] h-[320px] xl:w-[520px] xl:h-[520px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle
          cx="253"
          cy="253"
          r="250"
          stroke="rgba(199,120,255,0.35)"
          strokeWidth="3"
          strokeDasharray="12 18"
        />
      </motion.svg>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", }}
        className="absolute w-[260px] h-[260px] xl:w-[430px] xl:h-[430px] rounded-full overflow-hidden border border-white/10 backdrop-blur-xl"
      >
        <Image
          src="/assets/profile.png"
          priority
          fill
          quality={100}
          alt="Dinga Robert"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Photo;