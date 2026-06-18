"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaBehance,
  FaXTwitter,
} from "react-icons/fa6";

const links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Projects",
    path: "/work",
  },

  {
    name: "Design",
    path: "/design",
  },

  {
    name: "About",
    path: "/resume",
  },

  {
    name: "Contact",
    path: "/contact",
  },
];

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/dinga03377",
  },

  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/share/18h5sZeLK6",
  },

  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/dinga.robert?igsh=ODhiOGM5a292b3o2",
  },

  {
    icon: <FaBehance />,
    path: "https://behance.net/",
  },

  {
    icon: <FaXTwitter />,
    path: "https://x.com/Dinga0337",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 mt-32">
      {/* Background */}
      <div className="absolute inset-0 bg-background -z-50" />

      {/* Grid */}
      <div className="absolute inset-0 grid-background opacity-20 -z-40" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-accent/10 blur-[140px] -z-30" />

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* LEFT */}
          <div>
            <Link href="/">
              <h2 className="text-4xl font-bold tracking-tight mb-5">
                Dinga
                <span className="text-accent">.</span>
              </h2>
            </Link>

            <p className="text-white/60 leading-relaxed max-w-[320px]">
              Creative Full Stack Developer & Graphic Designer crafting
              immersive digital experiences with modern design systems and
              scalable engineering.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <span className="uppercase tracking-[0.2em] text-sm text-white/40">
              Navigation
            </span>

            <div className="flex flex-col gap-5 mt-8">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.path}
                    className="text-white/60 hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <span className="uppercase tracking-[0.2em] text-sm text-white/40">
              Connect
            </span>

            <div className="flex flex-wrap gap-5 mt-8">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.path}
                  target="_blank"
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.25 }}
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    flex
                    items-center
                    justify-center
                    text-xl
                    text-white/70
                    hover:text-white
                    hover:bg-accent
                    hover:border-accent
                    transition-all
                    duration-300
                  "
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <p className="text-white/40 text-sm leading-relaxed mt-8 max-w-[300px]">
              Available for freelance, collaborations, and creative projects
              worldwide.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-sm text-white/40">
            © 2026 Dinga Robert. All rights reserved.
          </p>

          <p className="text-sm text-white/40">
            Crafted with Next.js, Tailwind & creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;