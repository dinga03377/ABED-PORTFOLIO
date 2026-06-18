"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
  slug: "syntra-ai",

  title: "Syntra AI",

  category: "AI SaaS Experience",

  image: "/assets/work/syntra ai.png",

  description:
    "A futuristic and scalable AI SaaS platform designed with immersive dashboards, premium UI systems, intelligent workflows, and modern interaction experiences.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Shadcn UI",
    "Lucide React",
  ],

  live: "https://syntra-ai-omega.vercel.app",

  github: "https://github.com/dinga03377/SYNTRA-AI.git",
},

  {
  slug: "devnotes",
  title: "DevNotes Full Stack App",
  category: "Full Stack Development",
  image: "/assets/work/project9.png",

  description:
    "A modern full stack notes application featuring rich text editing, drag-and-drop interactions, PDF exports, JWT authentication, Cloudinary uploads, and a fully responsive dashboard experience.",

  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "Framer Motion",
    "Cloudinary",
  ],

  live: "https://devnotes-frontend.vercel.app",
  github: "https://github.com/dinga03377/DEVNOTES-FRONTEND.git",
},

  {
  slug: "aether-studio",

  title: "Aether Studio",

  category: "Creative Agency Experience",

  image: "/assets/work/aether.png",

  description:
    "A cinematic digital agency experience focused on immersive storytelling, advanced motion design, and premium frontend interactions.",

  stack: [
    "Next.js",
    "TypeScript",
    "GSAP",
    "Framer Motion",
    "Lenis",
    "Tailwind CSS",
  ],

  live: "https://aether-studio-lovat.vercel.app",

  github: "https://github.com/dinga03377/AETHER-STUDIO.git",
},
];



const WorkPage = () => {
  return (
    <main className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-50" />
      <div className="absolute inset-0 grid-background opacity-30 -z-40" />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/10 blur-[180px] rounded-full -z-30" />

      {/* Hero */}
      <section className="pt-32 pb-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[850px]"
          >
            <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
              Selected Development Work
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-[-0.05em] mt-6 mb-8">
              Building Modern
              <br />
              Digital Products
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-[650px]">
              A curated collection of immersive web applications, scalable
              systems, and modern frontend experiences engineered with both
              performance and design in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-32">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} target="_blank" rel="noopener noreferrer" index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkPage;