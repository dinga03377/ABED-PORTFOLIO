"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const [showNav, setShowNav] = useState(true);

  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // BACKGROUND
      if (currentScrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // HIDE / SHOW
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);

    return () =>
      window.removeEventListener(
        "scroll",
        controlNavbar
      );
  }, [lastScrollY]);

  return (
    <>
      {/* SPACER */}
      <div className="h-[110px] md:h-[130px]" />

      <header
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            showNav
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >
        <div className="container mx-auto px-4 pt-7 md:pt-8">
          <div
            className={`
              flex
              items-center
              justify-between
              rounded-[28px]
              border
              px-6
              py-5
              transition-all
              duration-500
              ${
                scrolled
                  ? `
                    border-white/10
                    bg-[#0a0a0f]/70
                    backdrop-blur-2xl
                    shadow-[0_10px_50px_rgba(0,0,0,0.35)]
                  `
                  : `
                    border-transparent
                    bg-transparent
                  `
              }
            `}
          >
            {/* LOGO */}
            <Link href="/">
              <h1 className="text-3xl font-bold tracking-tight">
                Dinga
                <span className="text-accent">.</span>
              </h1>
            </Link>

            {/* DESKTOP */}
            <div className="hidden xl:flex items-center gap-10">
              <Nav />

              <Link href="/contact">
                <Button
  className="
    relative
    overflow-hidden
    rounded-full
    border
    border-white/10
    bg-white/[0.04]
    backdrop-blur-xl
    px-7
    py-6
    text-white
    font-medium
    transition-all
    duration-300
    hover:border-accent/40
    hover:bg-accent
    hover:text-white
    hover:shadow-[0_0_40px_rgba(199,120,255,0.35)]
    active:scale-[0.98]
  "
>
  <span className="relative z-10">
    Let’s Talk
  </span>

  {/* Glow */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      transition-opacity
      duration-300
      hover:opacity-100
      bg-accent/20
    "
  />
</Button>
              </Link>
            </div>

            {/* MOBILE */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;