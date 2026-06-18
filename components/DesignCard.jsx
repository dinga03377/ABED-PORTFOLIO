"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Expand } from "lucide-react";

const DesignCard = ({ design, setSelectedDesign,}) => {
  const CardContent = (
    <motion.div
      layout
      whileHover={{ y: -10 }}     transition={{ duration: 0.4 }}
      className="
        group
        relative
        hover:border-accent/40
        transition-all
        duration-500
        overflow-hidden
        rounded-[24px] md:rounded-[32px]
        border
        mb-6
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        break-inside-avoid
        cursor-pointer
      "
      // onClick={() => setSelectedDesign(design)}
    >
      {/* IMAGE */}
      <div
        className={`
          relative
          overflow-hidden
          ${
           design.size === "portrait"
             ? "h-[420px] sm:h-[550px] md:h-[700px]"
             : design.size === "medium"
             ? "h-[320px] sm:h-[450px] md:h-[570px]"
             : "h-[360px] sm:h-[500px] md:h-[620px]"
         }
        `}
      >
        <Image
          src={design.image}
          fill
          alt={design.title}
          className="
             object-cover
             transition-transform
             duration-700
             group-hover:scale-[1.03]
             bg-[#0f0f14]
           "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />

        {/* HOVER GLOW */}
        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            bg-accent/10
            blur-3xl
          "
        />
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-5 md:p-8">
        <span className="uppercase tracking-[0.2em] text-xs text-accentSoft">
          {design.category}
        </span>

        <div className="flex items-center justify-between gap-5 mt-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
            {design.title}
          </h3>

          {/* ONLY SHOW ARROW IF DETAIL PAGE EXISTS */}
          <div
              className={`
                w-12
                h-12
                md:w-14
                md:h-14
                rounded-full
                border
                border-white/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
                transition-all
                duration-300
            
                ${
                  design.slug
                    ? "bg-accent text-black group-hover:scale-110"
                    : "bg-white/10 text-white/70 group-hover:bg-white/20"
                }
              `}
            >
              <ArrowUpRight size={20} />
            </div>
        </div>
      </div>
    </motion.div>
  );

  // IF PROJECT HAS SLUG → LINK TO DETAIL PAGE
  if (design.slug) {
    return (
      <Link href={`/design/${design.slug}`}>
        {CardContent}
      </Link>
    );
  }

  // OTHERWISE JUST OPEN LIGHTBOX
  return (
  <div onClick={() => setSelectedDesign(design)}>
    {CardContent}
  </div>
);
};

export default DesignCard;