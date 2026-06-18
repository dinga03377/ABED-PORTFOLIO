"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const projects = {
 "syntra-ai": {
  title: "Syntra AI",

  category: "AI SaaS Experience",

  image: "/assets/work/syntra ai.png",

  overview:
    "A futuristic and scalable AI SaaS platform focused on immersive dashboards, intelligent workflows, and premium user experiences for modern digital products.",

  challenge:
    "Most AI platforms feel overly technical, visually outdated, and fail to create intuitive user experiences for modern teams.",

  solution:
    "Designed and developed a cinematic AI dashboard experience combining modern SaaS UI systems, smooth interactions, responsive layouts, and premium visual storytelling.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Shadcn UI",
    "Lucide React",
  ],

  features: [
    "AI Workspace Interface",
    "Premium SaaS Dashboard",
    "Responsive Layout System",
    "Modern Navigation Experience",
    "Interactive UI Components",
    "Dark Mode Design",
  ],

  live: "https://syntra-ai-omega.vercel.app",

  github: "https://github.com/dinga03377/SYNTRA-AI.git",
},

  "devnotes": {
  title: "DevNotes Full Stack App",

  category: "Full Stack Development",

  image: "/assets/work/project9.png",

  overview:
    "DevNotes is a modern full stack notes application built to deliver a premium writing and productivity experience with rich text editing, animations, drag-and-drop functionality, PDF exports, authentication systems, and responsive UI design.",

  challenge:
    "Traditional notes applications often feel outdated, lack responsive user experiences, and do not provide advanced productivity features like rich text formatting, drag-and-drop organization, cloud uploads, and modern dashboard interactions.",

  solution:
    "Designed and developed a premium full stack productivity platform combining secure authentication, rich note management, cloud image uploads, PDF exporting, responsive layouts, dark mode support, and smooth animated interactions.",

  stack: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Framer Motion",
    "Cloudinary",
    "JWT",
  ],

  features: [
    "JWT Authentication",
    "Rich Text Notes",
    "Drag & Drop Notes",
    "PDF Export",
    "Cloudinary Uploads",
    "Responsive Dashboard",
    "Dark Mode",
    "Pin Notes",
    "Categories & Search",
    "Password Reset System",
  ],

  live: "https://devnotes-frontend.vercel.app",

  github: "https://github.com/dinga03377/DEVNOTES-FRONTEND.git",
},

 "aether-studio": {
  title: "Aether Studio",

  category: "Creative Agency Experience",

  image: "/assets/work/aether.png",

  overview:
    "A cinematic digital agency website crafted to showcase immersive storytelling, modern interaction design, and premium frontend experiences.",

  challenge:
    "Most agency websites feel generic, static, and fail to create memorable emotional engagement for modern audiences.",

  solution:
    "Designed and developed a visually immersive agency experience focused on cinematic layouts, smooth motion systems, interactive storytelling, and elite UI/UX polish.",

  stack: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Lenis",
  ],

  features: [
    "Cinematic Hero Section",
    "Interactive Project Showcase",
    "Dynamic Case Study Pages",
    "Smooth Scrolling Experience",
    "Advanced Motion Design",
    "Fully Responsive Layout",
  ],

  live: "https://aether-studio-lovat.vercel.app",

  github: "https://github.com/dinga03377/AETHER-STUDIO.git",
},
};

const projectSlugs = Object.keys(projects);

const ProjectPage = ({ params }) => {
    const { slug } = React.use(params);
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const currentIndex = projectSlugs.indexOf(slug);

  const prevProject =
    currentIndex > 0
      ? projectSlugs[currentIndex - 1]
      : null;

  const nextProject =
    currentIndex < projectSlugs.length - 1
      ? projectSlugs[currentIndex + 1]
      : null;

  return (
    <main className="relative overflow-hidden pb-32">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-background -z-50" />

      <div className="absolute inset-0 grid-background opacity-30 -z-40" />

      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          bg-accent/10
          blur-[180px]
          rounded-full
          -z-30
        "
      />

      {/* HERO */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* BACK BUTTON */}
          <div className="mb-14">
            <Link
              href="/work"
              className="
                inline-flex
                items-center
                gap-4
                group
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:border-accent
                  group-hover:bg-accent
                  group-hover:text-black
                "
              >
                <ArrowLeft size={18} />
              </div>

              <span
                className="
                  text-sm
                  uppercase
                  tracking-[0.12em]
                  text-white/60
                  group-hover:text-white
                  transition-colors
                  duration-300
                "
              >
                Back to Projects
              </span>
            </Link>
          </div>

          {/* CATEGORY */}
          <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
            {project.category}
          </span>

          {/* TITLE */}
          <h1
            className="
              text-5xl
              md:text-7xl
              xl:text-8xl
              font-bold
              leading-[0.95]
              tracking-[-0.05em]
              mt-6
              mb-8
              max-w-[1000px]
            "
          >
            {project.title}
          </h1>

          {/* OVERVIEW */}
          <p className="max-w-[760px] text-lg text-white/60 leading-relaxed">
            {project.overview}
          </p>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="pb-28">
        <div className="container mx-auto px-4">
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
            "
          >
            <div className="relative h-[280px] sm:h-[450px] md:h-[600px] xl:h-[750px]">
              <Image
                src={project.image}
                fill
                alt={project.title}
                className="object-cover"
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent
                "
              />

              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  bg-accent/5
                  opacity-50
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20">
            {/* LEFT SIDE */}
            <div>
              {/* CHALLENGE */}
              <div className="mb-20">
                <div className="mb-6">
                  <span className="text-sm uppercase tracking-[0.18em] text-accentSoft">
                    Problem
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  The Challenge
                </h2>

                <p className="text-white/60 leading-relaxed text-lg">
                  {project.challenge}
                </p>
              </div>

              {/* SOLUTION */}
              <div className="mb-20">
                <div className="mb-6">
                  <span className="text-sm uppercase tracking-[0.18em] text-accentSoft">
                    Solution
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  The Solution
                </h2>

                <p className="text-white/60 leading-relaxed text-lg">
                  {project.solution}
                </p>
              </div>

              {/* PROCESS */}
              <div>
                <div className="mb-6">
                  <span className="text-sm uppercase tracking-[0.18em] text-accentSoft">
                    Approach
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Design & Development Process
                </h2>

                <p className="text-white/60 leading-relaxed text-lg">
                  The project was carefully structured with scalability,
                  performance, and immersive interaction design in mind.
                  Every interface component was engineered to balance visual
                  aesthetics with usability, ensuring both technical
                  efficiency and emotional engagement.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              {/* STACK */}
              <div
                className="
                  mb-16
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                "
              >
                <h3 className="text-2xl font-semibold mb-8">
                  Technology Stack
                </h3>

                <div className="flex flex-wrap gap-4">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-5
                        py-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        text-sm
                        text-white/70
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div
                className="
                  mb-16
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                "
              >
                <h3 className="text-2xl font-semibold mb-8">
                  Core Features
                </h3>

                <div className="flex flex-col gap-4">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="
                        border
                        border-white/10
                        rounded-2xl
                        px-5
                        py-4
                        bg-white/[0.03]
                        text-white/70
                      "
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* LINKS */}
              <div className="flex flex-wrap gap-5">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-accent
                    px-7
                    py-4
                    text-black
                    font-medium
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-[0_0_35px_rgba(199,120,255,0.45)]
                  "
                >
                  Live Preview

                  <ArrowUpRight size={20} />
                </Link>

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    px-7
                    py-4
                    text-white
                    transition-all
                    duration-300
                    hover:border-accent
                    hover:text-accent
                  "
                >
                  GitHub

                  <Github size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT / PREVIOUS */}
      <section className="mt-32">
        <div className="container mx-auto px-4">
          <div
            className="
              grid
              md:grid-cols-2
              gap-6
            "
          >
            {/* PREVIOUS */}
            {prevProject ? (
              <Link
                href={`/work/${prevProject}`}
                className="
                  group
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-300
                  hover:border-accent
                "
              >
                <div className="flex items-center gap-3 text-white/50 mb-5">
                  <ChevronLeft size={18} />

                  <span className="uppercase tracking-[0.12em] text-sm">
                    Previous Project
                  </span>
                </div>

                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                  {projects[prevProject].title}
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {/* NEXT */}
            {nextProject && (
              <Link
                href={`/work/${nextProject}`}
                className="
                  group
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  text-right
                  transition-all
                  duration-300
                  hover:border-accent
                "
              >
                <div className="flex items-center justify-end gap-3 text-white/50 mb-5">
                  <span className="uppercase tracking-[0.12em] text-sm">
                    Next Project
                  </span>

                  <ChevronRight size={18} />
                </div>

                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                  {projects[nextProject].title}
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;