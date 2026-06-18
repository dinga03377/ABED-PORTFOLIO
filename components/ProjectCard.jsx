"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Magnetic from "@/components/Magnetic";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center  ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* IMAGE */}
<Link href={`/work/${project.slug}`}>
  <motion.div
    whileHover={{ y: -8 }}
    className="
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:border-accent/40
      hover:shadow-[0_0_60px_rgba(199,120,255,0.15)]
    "
  >
    <div className="relative h-[500px] overflow-hidden">
      <Image
        src={project.image}
        fill
        alt={project.title}
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* DARK OVERLAY */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/30
          to-transparent
        "
      />

      {/* ACCENT GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-accent/0
          group-hover:bg-accent/5
          transition-all
          duration-700
        "
      />

      {/* BLUR GLOW */}
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

      {/* FLOATING BUTTON */}
      <div
        className="
          absolute
          top-6
          right-6
          w-14
          h-14
          rounded-full
          border
          border-white/10
          bg-white/10
          backdrop-blur-xl
          flex
          items-center
          justify-center
          text-white
          opacity-0
          scale-75
          group-hover:opacity-100
          group-hover:scale-100
          transition-all
          duration-500
          group-hover:bg-accent
          group-hover:text-black
        "
      >
        <ArrowUpRight size={22} />
      </div>

      {/* BOTTOM CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-8">
        <span className="uppercase tracking-[0.2em] text-xs text-accentSoft">
          {project.category}
        </span>

        <h3 className="text-3xl md:text-4xl font-bold mt-4 leading-tight">
          {project.title}
        </h3>
      </div>
    </div>
  </motion.div>
</Link>

      {/* CONTENT */}
      <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8 }}
       viewport={{ once: true }}
      >
        <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
          {project.category}
        </span>

        <Link href={`/work/${project.slug}`}>
        <h2 className="text-5xl md:text-6xl font-bold leading-[1] tracking-[-0.04em] mt-5 mb-8">
          {project.title}
        </h2>
        </Link>

        <p className="text-white/60 text-lg leading-relaxed mb-10">
          {project.description}
        </p>

        {/* STACK */}
        <div className="flex flex-wrap gap-4 mb-10">
          {project.stack.map((tech, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center gap-6">
          <Magnetic>
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-black
              font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(199,120,255,0.45)]"
          >
            Live Preview
            <ArrowUpRight size={20} />
          </Link>
          </Magnetic>

          <Magnetic>
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5
              px-7 py-4 text-white transition-all duration-300 hover:border-accent hover:text-accent"
          >
            GitHub
            <Github size={20} />
          </Link>
          </Magnetic>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;