"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

import {
  Github,
  Instagram,
  Facebook,
} from "lucide-react";

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
    icon: Github,
    href: "https://github.com/dinga03377",
  },

  {
    icon: Facebook,
    href: "https://www.facebook.com/share/18h5sZeLK6",
  },

  {
    icon: Instagram,
    href: "https://www.instagram.com/dinga.robert?igsh=ODhiOGM5a292b3o2",
  },
];

const MobileNav = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* MENU BUTTON */}
      <SheetTrigger
        className="
          flex
          items-center
          justify-center
          w-12
          h-12
          rounded-xl
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
      >
        <CiMenuFries className="text-[28px] text-accent" />
      </SheetTrigger>

      {/* SIDEBAR */}
      <SheetContent
        side="right"
        className="
          border-l
          border-white/10
          bg-[#0a0a0f]/95
          backdrop-blur-2xl
          flex
          flex-col
          justify-between
          px-8
          py-10
        "
      >
        {/* TOP */}
        <div>
          {/* LOGO */}
          <div className="mb-20">
            <Link href="/" onClick={handleLinkClick}>
              <h1 className="text-4xl font-bold tracking-tight">
                Dinga
                <span className="text-accent">.</span>
              </h1>
            </Link>
          </div>

          {/* NAV */}
          <nav className="flex flex-col gap-6">
            {links.map((link, index) => {
              const active = pathname === link.path;

              return (
                <Link
                  href={link.path}
                  key={index}
                  onClick={handleLinkClick}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    px-5
                    py-4
                    text-lg
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-white/5 bg-white/[0.02] text-white/70 hover:border-white/15 hover:text-white"
                    }
                  `}
                >
                  <span className="relative z-10">
                    {link.name}
                  </span>

                  {/* Hover Glow */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      bg-accent/5
                    "
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* BOTTOM */}
        <div>
          {/* SOCIALS */}
          <div className="flex items-center gap-4 mb-8">
            {socials.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    flex
                    items-center
                    justify-center
                    text-white/60
                    transition-all
                    duration-300
                    hover:border-accent
                    hover:bg-accent
                    hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          {/* STATUS */}
          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-5
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-sm text-white/50 uppercase tracking-[0.15em]">
                Available
              </span>
            </div>

            <p className="text-white/70 leading-relaxed text-sm">
              Currently available for freelance
              projects and creative collaborations.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;