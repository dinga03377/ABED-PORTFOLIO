"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FeaturedWork = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[180px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[700px] mb-20"
        >
          <span className="text-accentSoft uppercase tracking-[0.2em] text-sm">
            Selected Work
          </span>

          <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.04em] mt-5 mb-6">
            Featured Projects
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            A selected collection of immersive digital experiences blending
            creative design with modern engineering.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Development Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/assets/work/aether.png"
                fill
                alt="Development Project"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/10 blur-3xl" />
            </div>

            <div className="p-8">
              <span className="text-sm uppercase tracking-[0.2em] text-accentSoft">
                Full Stack Development
              </span>

              <h3 className="text-3xl font-semibold mt-4 mb-4">
                Modern Web Experiences
              </h3>

              <p className="text-white/60 leading-relaxed mb-8">
                High-performance applications crafted with immersive UI,
                scalable architecture, and modern frontend engineering.
              </p>

              <Link
                href="/work"
                className="inline-flex items-center gap-3 text-white hover:text-accent transition-colors duration-300"
              >
                View Projects
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Design Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
          >
            <div className="relative h-[420px] overflow-hidden">
              <Image
                src="/assets/design/rest 1.jpg"
                fill
                alt="Design Project"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/10 blur-3xl" />
            </div>

            <div className="p-8">
              <span className="text-sm uppercase tracking-[0.2em] text-accentSoft">
                Graphic & Brand Design
              </span>

              <h3 className="text-3xl font-semibold mt-4 mb-4">
                Visual Identity Systems
              </h3>

              <p className="text-white/60 leading-relaxed mb-8">
                Bold visual storytelling through branding, typography,
                creative direction, and modern graphic design systems.
              </p>

              <Link
                href="/design"
                className="inline-flex items-center gap-3 text-white hover:text-accent transition-colors duration-300"
              >
                View Design Work
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;