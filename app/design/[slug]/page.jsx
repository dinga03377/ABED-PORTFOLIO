"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";


const designProjects = {
  "gericht-restaurant": {
    title: "Gericht Restaurant Brand Identity",

    category: "Brand Identity",

    hero: "/assets/design/rest 1.jpg",

    overview:
         "A refined brand identity developed for Gericht Restaurant, a modern fine-dining destination focused on delivering exceptional culinary experiences. The visual system was designed to communicate elegance, sophistication, and premium hospitality while creating a memorable presence across both digital and physical touchpoints.",

    challenge:
      "The challenge was to create a distinctive restaurant identity that balanced luxury and approachability while maintaining consistency across menus, signage, packaging, social media, and promotional materials.",

    solution:
     "The solution centered on elegant typography, a sophisticated color palette, and a timelevisual language that reflects the restaurant's commitment to quality, craftsmanship, aexceptional dining experiences. The resulting identity enhances brand recognition areinforces the restaurant's premium positioning.",

    direction:
       "Elegant / Premium / Fine Dining",

    typography: [
    "Cormorant Garamond",
    "Montserrat"
    ],

    colors: [
      "#C778FF",
      "#0F0F14",
      "#FFFFFF",
    ],

    tools: [
      "Illustrator",
      "Photoshop",
    ],

    gallery: [
      "/assets/design/rest4.jpg",
      "/assets/design/rest5.jpg",
      "/assets/design/rest7.jpg",
      "/assets/design/rest8.jpg",
      "/assets/design/RESTMOC5.jpg",
      "/assets/design/RESTMOC6.jpg",
    ],
  },
   "techzenith": {
    title: "TechZenith Brand Identity",

    category: "Brand Identity",

    hero: "/assets/design/z7.jpg",

    overview:
     "A modern visual identity developed for TechZenith, a technology-focused brand dedicated to innovation, digital transformation, and intelligent solutions. The branding system was designed to communicate trust, progress, and technological excellence while maintaining a clean and adaptable visual presence.",

    challenge:
     "The challenge was to create a distinctive technology brand that felt innovative and forward-thinking without relying on overused tech clichés. The identity needed to remain professional, scalable, and effective across websites, mobile platforms, marketing materials, and digital products.",

    solution:
     "The solution centered on a minimal yet impactful visual language built around geometric forms, modern typography, and a refined color palette. The system establishes a strong digital presence while reinforcing TechZenith's commitment to innovation, reliability, and future-focused technology.",

    direction:
       "Technology / Modern / Innovative",

    typography: [
      "Space Grotesk",
      "Inter",
    ],

    colors: [
      "#C778FF",
      "#0F0F14",
      "#FFFFFF",
    ],

    tools: [
      "Illustrator",
      "Photoshop",
    ],

    gallery: [
      "/assets/design/d8.jpg",
      "/assets/design/z4.jpg",
      "/assets/design/z10.jpg",
      "/assets/design/z3.jpg",
      "/assets/design/d22.jpg",
      "/assets/design/d21.jpg",
      "/assets/design/d18.jpg",

    ],
  },
};

const DesignDetailsPage = ({ params }) => {
    const { slug } = React.use(params);
  const project = designProjects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Project Not Found
      </div>
    );
  }

  return (
    <main className="relative overflow-hidden pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-50" />
      <div className="absolute inset-0 grid-background opacity-20 -z-40" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/10 blur-[180px] rounded-full -z-30" />

      {/* HERO */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Link
            href="/design"
            className="
              inline-flex
              items-center
              gap-3
              text-white/60
              hover:text-accent
              transition-all
              duration-300
              mb-10
            "
          >
            <ArrowLeft size={18} />
            Back to Design
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
              {project.category}
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-[-0.05em] mt-6 mb-8">
              {project.title}
            </h1>

            <p className="max-w-[750px] text-lg text-white/60 leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10">
            <div className="relative h-[280px] sm:h-[450px] md:h-[600px] xl:h-[750px] bg-[#0f0f14]">
              <Image
                src={project.hero}
                fill
                alt={project.title}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20">
            {/* LEFT */}
            <div>
              {/* Challenge */}
              <div className="mb-20">
                <h2 className="text-4xl font-bold mb-6">
                  The Challenge
                </h2>

                <p className="text-white/60 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  The Solution
                </h2>

                <p className="text-white/60 text-lg leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              {/* Direction */}
              <div className="mb-16">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Creative Direction
                </span>

                <p className="mt-4 text-xl text-white/80">
                  {project.direction}
                </p>
              </div>

              {/* Typography */}
              <div className="mb-16">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Typography
                </span>

                <div className="flex flex-wrap gap-4 mt-5">
                  {project.typography.map((font, i) => (
                    <span
                      key={i}
                      className="
                        px-5
                        py-3
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                      "
                    >
                      {font}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="mb-16">
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Tools Used
                </span>

                <div className="flex flex-wrap gap-4 mt-5">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="
                        px-5
                        py-3
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                      "
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Brand Palette
                </span>

                <div className="flex flex-wrap gap-5 mt-5">
                  {project.colors.map((color, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="w-20 h-20 rounded-2xl border border-white/10"
                        style={{ background: color }}
                      />

                      <p className="text-xs text-white/50 mt-3">
                        {color}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pt-28">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {project.gallery.map((image, i) => (
              <div
                key={i}
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                "
              >
                <div className="relative h-[260px] sm:h-[420px] md:h-[580px] xl:h-[700px] bg-[#0f0f14]">
                  <Image
                    src={image}
                    fill
                    alt={project.title}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesignDetailsPage;