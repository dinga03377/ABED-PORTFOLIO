"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-accent/10 blur-[180px]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20 grid-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03]
            backdrop-blur-2xl px-8 py-20 md:px-16 text-center"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,120,255,0.12),transparent_50%)]" />

          {/* Small Tag */}
          <span className="relative inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-2 bg-white/5 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />

            <span className="text-sm text-white/70 tracking-[0.2em] uppercase">
              Let’s Create Something Exceptional
            </span>
          </span>

          {/* Heading */}
          <h2 className="relative text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[1.1] mb-8">
            Ready To Build
            <br />
            <span className="text-accent">Your Next Experience?</span>
          </h2>

          {/* Description */}
          <p className="relative max-w-[700px] mx-auto text-white/60 text-lg leading-relaxed mb-12">
            I help brands, startups, and businesses create immersive digital
            products that combine modern design, scalable engineering, and
            exceptional user experience.
          </p>

          {/* CTA Buttons */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-5 text-black
                font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(199,120,255,0.45)]"
            >
              Start A Project
              <ArrowUpRight size={20} />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5
                backdrop-blur-xl px-8 py-5 text-white transition-all duration-300
                hover:border-accent hover:text-accent "
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;