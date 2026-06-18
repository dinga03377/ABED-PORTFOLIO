"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
{
  year: "2025-present",
    role: "Full Stack Developer & Graphic Designer",
    company: "ARPTechnology Training Institute",
  },
  {
    year: "2024-2025",
    role: "Full Stack Developer",
    company: "Freelance & Personal Projects",
  },

  {
    year: "2023-2024",
    role: "Frontend Developer",
    company: "Freelance & Personal Projects",
  },

  {
    year: "2021-2023",
    role: "Graphic Designer",
    company: "Freelance & Personal Projects",
  },
];

const skillCategories = [
  {
    title: "Frontend",

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Responsive Design",
      "UI Development",
      "Performance Optimization",
    ],
  },

  {
    title: "Backend",

    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Authentication",
      "Database Design",
    ],
  },

  {
    title: "Design",

    skills: [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Affinity Designer",
      "Brand Identity",
      "UI/UX Design",
      "Visual Systems",
      "Creative Direction",
    ],
  },

  {
    title: "Motion",

    skills: [
      "Framer Motion",
      "GSAP",
      "Micro Interactions",
      "Creative Animations",
      "Smooth Scrolling",
      "Scroll-Based Experiences",
    ],
  },
];

const proficiencies = [
  {
    title: "Frontend Development",
    level: "Expert",
    width: "w-full",
  },

  {
    title: "UI/UX Design",
    level: "Advanced",
    width: "w-[90%]",
  },

  {
    title: "Motion Design",
    level: "Advanced",
    width: "w-[85%]",
  },

  {
    title: "Backend Systems",
    level: "Intermediate",
    width: "w-[70%]",
  },

  {
    title: "Brand Identity",
    level: "Expert",
    width: "w-full",
  },
];

const principles = [
  {
    title: "Design With Purpose",

    description:
      "I believe visual design should communicate meaning, clarity, and emotion — not just aesthetics.",
  },

  {
    title: "Interaction Matters",

    description:
      "Motion and interaction create memorable experiences that make digital products feel alive and intuitive.",
  },

  {
    title: "Build Beyond Trends",

    description:
      "I focus on creating timeless digital systems that remain functional, scalable, and visually refined.",
  },

  {
    title: "Details Create Quality",

    description:
      "Typography, spacing, rhythm, and micro interactions are often what separate average products from exceptional experiences.",
  },
];

const ResumePage = () => {
  return (
    <main className="relative overflow-hidden pb-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-50" />
      <div className="absolute inset-0 grid-background opacity-20 -z-40" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/10 blur-[180px] rounded-full -z-30" />

      {/* HERO */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[950px]"
          >
            <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
              About Me
            </span>

            <h1 className="text-6xl md:text-8xl font-bold leading-[0.95] tracking-[-0.05em] mt-6 mb-10">
              Creative Developer
              <br />
              Building Digital
              <br />
              Experiences
            </h1>

            <p className="max-w-[700px] text-lg text-white/60 leading-relaxed">
              I’m Dinga Robert a full stack developer and visual designer passionate about
              creating immersive digital experiences that combine aesthetics,
              interaction, and scalable engineering. My work focuses on
              building products that feel both visually refined and technically
              powerful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PERSONAL SHOWCASE */}
<section className="pb-28">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
      
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative overflow-hidden rounded-[36px] border border-white/10">
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />

          <div className="relative h-[650px]">
            <Image
              src="/assets/profile.png"
              fill
              alt="Dinga Robert"
              className="object-cover"
            />
          </div>
        </div>

        {/* STATUS CARD */}
        <div
          className="
            absolute
            bottom-6
            left-6
            z-20
            rounded-2xl
            border
            border-white/10
            bg-black/40
            backdrop-blur-xl
            px-5
            py-4
          "
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-sm text-white/80">
              Available for freelance projects
            </span>
          </div>
        </div>
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
          Creative Engineer
        </span>

        <h2 className="text-5xl md:text-6xl font-bold leading-[1] mt-6 mb-8">
          Designing Experiences
          <br />
          Beyond Interfaces
        </h2>

        <p className="text-white/60 text-lg leading-relaxed mb-10">
          My approach combines design systems, interaction design,
          motion, and scalable engineering to craft immersive
          digital experiences that feel modern, intentional,
          and emotionally engaging.
        </p>

        {/* METRICS */}
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-4xl font-bold text-accent">
              12+
            </h3>

            <p className="text-white/50 mt-3">
              Projects Completed
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-4xl font-bold text-accent">
              5+
            </h3>

            <p className="text-white/50 mt-3">
              Years Experience
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-4xl font-bold text-accent">
              10+
            </h3>

            <p className="text-white/50 mt-3">
              Technologies Used
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-4xl font-bold text-accent">
              100%
            </h3>

            <p className="text-white/50 mt-3">
              Passion Driven
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* STORY */}
      <section className="pb-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-20">
            <div>
              <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
                My Story
              </span>

              <h2 className="text-4xl font-bold mt-6 mb-8">
                Blending Design
                <br />
                With Engineering
              </h2>
            </div>

            <div className="space-y-8 text-white/60 leading-relaxed text-lg">
              <p>
                My journey started with visual design — experimenting with
                branding, posters, and digital aesthetics before transitioning
                into frontend development and full stack engineering.
              </p>

              <p>
                Over time, I realized the strongest digital products are built
                when visual storytelling and technical execution work together.
                That mindset now shapes every project I create.
              </p>

              <p>
                I enjoy building immersive interfaces, scalable systems, and
                polished user experiences that feel intentional from both a
                design and engineering perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="pb-28">
        <div className="container mx-auto px-4">
          <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
            Experience
          </span>

          <div className="mt-12 space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-5
                  border
                  border-white/10
                  rounded-[28px]
                  p-8
                  bg-white/[0.03]
                "
              >
                <div>
                  <h3 className="text-2xl font-semibold">
                    {item.role}
                  </h3>

                  <p className="text-white/50 mt-2">
                    {item.company}
                  </p>
                </div>

                <span className="text-accent font-medium">
                  {item.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
<section className="pb-28">
  <div className="container mx-auto px-4">
    <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
      Expertise
    </span>

    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          "
        >
          {/* Title */}
          <h3 className="text-3xl font-bold mb-8">
            {category.title}
          </h3>

          {/* Skills */}
          <div className="flex flex-wrap gap-4">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className="
                  px-5
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-black/20
                  text-white/70
                  text-sm
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* PROFICIENCY */}
<section className="pb-28">
  <div className="container mx-auto px-4">
    <div className="max-w-[900px]">
      
      <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
        Proficiency
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-14 leading-tight">
        Building Products
        <br />
        With Design Precision
      </h2>

      <div className="space-y-10">
        {proficiencies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">
                {item.title}
              </h3>

              <span className="text-sm text-white/50">
                {item.level}
              </span>
            </div>

            {/* LINE */}
            <div className="h-[6px] rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`
                  h-full
                  rounded-full
                  bg-accent
                  ${item.width}
                `}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

{/* PRINCIPLES */}
<section className="pb-28">
  <div className="container mx-auto px-4">

    <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
      Creative Principles
    </span>

    <div className="grid md:grid-cols-2 gap-8 mt-14">
      {principles.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          "
        >
          {/* Number */}
          <span className="text-accent text-sm tracking-[0.2em] uppercase">
            0{index + 1}
          </span>

          {/* Title */}
          <h3 className="text-3xl font-bold mt-5 mb-6 leading-tight">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 leading-relaxed text-lg">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* PHILOSOPHY */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-[900px]">
            <span className="uppercase tracking-[0.2em] text-sm text-accentSoft">
              Philosophy
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-6 mb-10">
              I believe the best digital experiences are created when
              technology, motion, and visual storytelling work together
              seamlessly.
            </h2>

            <p className="text-lg text-white/60 leading-relaxed">
              My goal is to build interfaces and products that not only function
              efficiently, but also create emotion, clarity, and memorable
              interaction experiences for users.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResumePage;