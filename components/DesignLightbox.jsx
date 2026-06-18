"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const DesignLightbox = ({selectedDesign, setSelectedDesign, }) => {
  return (
    <AnimatePresence>
      {selectedDesign && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed
            inset-0
            overflow-y-auto
            z-999
            bg-black/90
            backdrop-blur-xl
            flex
            items-center
            justify-center
            p-6
          "
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedDesign(null)}
            className="
              absolute
              top-6
              right-6
              w-12
              h-12
              rounded-full
              border
              border-white/10
              bg-white/5
              flex
              items-center
              justify-center
              hover:border-accent
              transition-all
              duration-300
            "
          >
            <X size={20} />
          </button>

          {/* CONTENT */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-6xl w-full"
          >
            {/* IMAGE */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 ">
              <Image
                src={selectedDesign.image}
                width={1800}
                height={2200}
                alt={selectedDesign.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* INFO */}
            <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span className="uppercase tracking-[0.2em] text-sm text-white/50">
                  {selectedDesign.category}
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-3">
                  {selectedDesign.title}
                </h2>
              </div>

          <div className="max-w-[550px]">
            <p className="text-white/60 leading-relaxed mb-6">
              {selectedDesign.description}
            </p>
            
            {/* Direction */}
            <div className="mb-5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                   Creative Direction
                 </span>

                <p className="mt-2 text-white/75">
                  {selectedDesign.direction}
                </p>
            </div>
            
            {/* Tools */}
            <div>
                 <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Tools Used
                </span>

                <div className="flex flex-wrap gap-3 mt-3">
                 {selectedDesign.tools.map((tool, i) => (
                  <span
                       key={i}
                      className="
                       px-4
                      py-2
                      rounded-full
                         border
                      border-white/10
                      bg-white/[0.03]
                      text-sm
                      text-white/70
                     "
                     >
                       {tool}
                  </span>
                  ))}
                </div>
             </div>
            </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesignLightbox;