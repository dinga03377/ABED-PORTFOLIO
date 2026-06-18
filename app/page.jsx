"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import MagneticButton from "@/components/MagneticButton";
import FeaturedWork from "@/components/FeaturedWork";
import CTASection from "@/components/CTASection";
import dynamic from "next/dynamic";

const Typewriter = dynamic(
  () => import("typewriter-effect"),
  { ssr: false }
);

const Home = () => {
  return (
    <>
    <section className="relative isolate min-h-[calc(100vh-90px)] overflow-hidden">

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
       <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[160px]" />
      </div>

      {/* Base Background */}
      <div className="absolute inset-0 bg-background -z-50" />

      {/* Grid Layer */}
      <div className="absolute inset-0 -z-40 opacity-40 grid-background" />

      {/* Ambient Glow Top Right */}
       <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-accent/20 blur-[180px]     rounded-full opacity-40 -z-30" />

      {/* Ambient Glow Bottom Left */}
       <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[180px] rounded-full opacity-30 -z-30" />

      {/* Radial Overlay */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,120,255,0.08),transparent_40%)] -z-20" />

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between min-h-[calc(100vh-90px)]
         gap-12 xl:gap-0 pt-10 sm:pt-14 xl:pt-0"
        >
          {/* LEFT CONTENT */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-[720px] text-center xl:text-left order-2 xl:order-none"
          >
            {/* Small Intro */}
            <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6 }} 
            className="mb-6 mt-6 inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-2 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />

              <span className="text-sm text-white/70 tracking-[0.2em] uppercase">
                Creative Full Stack Developer
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.7 }} 
            className="text-[52px] leading-[1] md:text-[74px] xl:text-[96px] font-bold tracking-[-0.04em] mb-6">
              I Design
              <br />
              <span className="text-accent">& Build</span>
              <br />
              Digital Experiences
            </motion.h1>

            {/* Typewriter */}
            <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.8 }} 
            className="h-[32px] text-lg md:text-xl text-accentSoft mb-6 font-medium flex items-center">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Graphic Designer",
                    "Creative Engineer",
                    "UI/UX Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 35,
                }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.9 }} 
            className="max-w-[580px] text-white/65 text-lg leading-relaxed mb-10 mx-auto xl:mx-0">
              I create immersive, modern, and performance-driven digital products
              that combine strong visual design with scalable engineering.
            </motion.p>

            {/* CTA */}
            <motion.div
            variants={fadeInUp}
            transition={{ duration: 1 }} 
            className="flex flex-col sm:flex-row items-center gap-6 mb-12">
              <MagneticButton>
              <a href="/assets/Dinga_Tech_CV.pdf" download>
                <Button className="bg-accent hover:bg-accentSoft text-black rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(199,120,255,0.45)] hover:text-black flex items-center gap-2">
                  Download Resume
                  <FiDownload className="text-lg" />
                </Button>
              </a>
              </MagneticButton>

              <Social
                containerStyles="flex gap-5"
                iconStyles="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl
                 flex justify-center items-center text-white/70 hover:text-white hover:bg-accent
                 hover:border-accent hover:-translate-y-1 transition-all duration-300"
              />
            </motion.div>

            {/* Stats */}
            <motion.div
            variants={fadeInUp}
            transition={{ duration: 1.1 }} 
            className="flex flex-wrap mb-10 justify-center xl:justify-start gap-10">
              <div>
                <h3 className="text-3xl font-bold text-accent">5+</h3>
                <p className="text-sm text-white/50 uppercase tracking-[0.15em]">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-accent">12+</h3>
                <p className="text-sm text-white/50 uppercase tracking-[0.15em]">
                  Projects Built
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-accent">10+</h3>
                <p className="text-sm text-white/50 uppercase tracking-[0.15em]">
                  Technologies
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 xl:order-none relative"
          >
            <Photo />
          </motion.div>
        </div>
      </div>
    </section>
     <FeaturedWork />
     <CTASection />
    </>
  );
};

export default Home;