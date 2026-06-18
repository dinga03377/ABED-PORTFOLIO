"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

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

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-10">
      {links.map((link, index) => {
        const isActive = pathname === link.path;

        return (
          <Link
            href={link.path}
            key={index}
            className="relative group "
          >
            <span
              className={`relative z-10 text-sm uppercase tracking-[0.08em] font-medium transition-colors duration-300 ${
                isActive
                  ? "text-white"
                  : "text-white/60 group-hover:text-white"
              }`}
            >
              {link.name}
            </span>

            {/* Active Indicator */}
            {isActive && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute left-0 -bottom-3 h-[3px] w-full rounded-full bg-accent"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 30,
                }}
              />
            )}

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-accent/10 rounded-full" />
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;