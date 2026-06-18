"use client";

import { motion } from "framer-motion";
import DesignCard from "@/components/DesignCard";
import { useState } from "react";
import DesignLightbox from "@/components/DesignLightbox";


const designs = [
  {
    slug: "gericht-restaurant",
    title: "Gericht Restaurant Visual Identity",
    category: "Brand Identity",
    image: "/assets/design/rest 1.png",

    description:
  "A refined visual identity developed for Gericht Restaurant, capturing the essence of fine dining through elegant typography, sophisticated design elements, and a cohesive brand system. The identity was created to elevate the restaurant's presence while communicating quality, exclusivity, and memorable culinary experiences.",

    direction: "Elegant / Premium / Fine Dining",

    tools: [
      "Photoshop",
      "Illustrator",
    ],

    size: "large"
  },

  {
    slug: "techzenith",
    title: "TechZenith Visual Identity",
    category: "Brand Identity",
    image: "/assets/design/z7.png",

    description:
        "A modern brand identity crafted for TechZenith, a technology-driven company at the intersection of innovation, AI, and digital solutions. The visual system was designed to communicate reliability, progress, and technological excellence while maintaining a clean and adaptable aesthetic for future growth.",

     direction: "Innovative / Digital / Contemporary",

    tools: [
      "Photoshop",
      "Illustrator",
    ],

    size: "large"
  },
  

  {
    title: "Monday Motivation Campaign",
    category: "Poster Design",
    image: "/assets/design/motivation 1.png",

    description:
      "A visually engaging motivational poster created to promote a positive mindset and inspire action. Through bold typography, thoughtful composition, and uplifting messaging, the design encourages viewers to embrace new opportunities, maintain focus, and approach the week with determination and confidence.",

     direction: "Motivational / Contemporary / Editorial",

    tools: [
      "Photoshop",
    ],

   size: "portrait"
  },
  {
    title: "ARP Technology Training Advertisement",
    category: "Poster Design",
    image: "/assets/design/flayer 222.png",

    description:
    "A high-impact advertising poster created for ARP Technology Training Institute to promote its technology education programs. The design was strategically developed to capture attention, communicate value, and inspire prospective students to pursue careers in software development, cybersecurity, data analytics, and other in-demand technology fields.",

     direction: "Marketing / Technology / Educational",

    tools: [
      "Photoshop",
    ],

   size: "portrait"
  },

  {
    title: "AfriTales Visual Identity",
    category: "Logo Design",
    image: "/assets/design/afritales.png",

    description:
   "A bold and memorable brand identity developed for AfriTales, a YouTube documentary channel uncovering Africa's forgotten histories, mysteries, legends, and remarkable true stories. The design balances cultural authenticity with contemporary storytelling to create a timeless and engaging visual presence.",

    direction: "Cultural / Storytelling / Cinematic",

    tools: [
      "Photoshop",
      "Illustrator",
    ],

   size: "large",
  },
  {
    title: "Biggy Empire Records",
    category: "Logo Design",
    image: "/assets/design/logo2.png",

    description:
   "A modern brand identity designed for Biggy Empire Records, capturing the spirit of creativity, talent development, and musical excellence. The visual system was crafted to deliver a powerful, recognizable presence across digital platforms, promotional materials, and artist branding.",

    direction: "Music / Urban / Professional",

    tools: [
      "Photoshop",
      "Illustrator",
    ],

   size: "large",
  },
  {
    title: "Jos Potato Logo Design",
    category: "Logo Design",
    image: "/assets/design/joss.png",

    description:
  "A modern agricultural logo designed to represent Jos Potato, inspired by the scenic Plateau landscapes, thriving farmlands, and the rich farming heritage of Plateau State. The identity reflects authenticity, growth, sustainability, and regional pride.",

     direction: "Agricultural / Heritage / Cultural",

    tools: [
      "Photoshop",
      "Illustrator",
    ],

   size: "large",
  },

  {
    title: "Imaginative Creation Co. Logo",
    category: "Logo Design",
    image: "/assets/design/b5.png",

    description:
   "A bold and expressive visual identity logo crafted for Imaginative Creation Co., a modern creative studio where imagination meets innovation. The design captures the fusion of artistic thinking and forward-looking technology, representing limitless creativity, originality, and modern brand storytelling.", 


     direction: "Creative / Innovative / Minimal",

    tools: [
      "Photoshop",
      "Illustrator",
    ],

   size: "large",
  },
   {
    title: "Tech with Dinga",
    category: "Logo Design",
    image: "/assets/design/dings.png",

    description:
        "A complete brand identity logo created for Tech with Dinga, blending technology, coding, and innovation through a clean visual system designed to inspire learning, creativity, and digital growth.",

    direction: "Modern / Professional / Technology",

    tools: [
      "Photoshop",
      "Illustrator",
    ],

   size: "large",
  },
];


const filters = [
  "All",
  "Brand Identity",
  "Poster Design",
  "Logo Design",
];

const DesignPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedDesign, setSelectedDesign] = useState(null);

  const filteredDesigns =
    activeFilter === "All"
      ? designs
      : designs.filter(
          (item) => item.category === activeFilter
        );

  return (
    
    <main className="relative overflow-hidden pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-50" />
      <div className="absolute inset-0 grid-background opacity-20 -z-40" />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 blur-[180px] rounded-full -z-30" />

      {/* HERO */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[850px]"
          >
            <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
              Selected Design Work
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-[-0.05em] mt-6 mb-8">
              Visual Systems
              <br />
              & Creative Direction
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-[650px]">
              A curated collection of branding systems, visual identities,
              social campaigns, and immersive design explorations crafted
              with a strong focus on storytelling and aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`
                  px-6
                  py-3
                  rounded-full
                  border
                  transition-all
                  duration-300
                  text-sm
                  tracking-wide
                  ${
                    activeFilter === filter
                      ? "bg-accent text-black border-accent"
                      : "border-white/10 bg-white/[0.03] text-white/70 hover:border-accent hover:bg-accent/10 hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
     <section className="pt-4">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="columns-1 md:columns-2 xl:columns-3 gap-6 [column-fill:_balance]"
          >
            {filteredDesigns.map((design, index) => (
              <DesignCard
                key={index}
                design={design}
                setSelectedDesign={setSelectedDesign}
              />
            ))}
          </motion.div>
        </div>
      </section>
      {selectedDesign && (
         <DesignLightbox
         selectedDesign={selectedDesign}
        setSelectedDesign={setSelectedDesign}
         />
        )}
    </main>
  );
};
export default DesignPage;