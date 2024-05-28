"use client";
import React, { useEffect, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="relative block md:inline-block px-4 py-2 font-semibold text-white transition duration-300 ease-in-out hover-1"
    >
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0  hover:bg-transparent transition duration-300 ease-in-out"></div>
    </a>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClasses = `container relative px-10 mx-auto w-full flex items-center justify-between ${
    isOpen ? "h-16" : "h-full"
  } `;

  const menuClasses = `md:flex transition-all duration-300 gap-5 hidden`;

  return (
    <header
      className={`fixed top-0 z-50 w-full  text-white font-semibold transition-all duration-300 ${
        isScroll && "backdrop-filter backdrop-blur-xl bg-[#406F92]/30 shadow-xl"
      } ${isOpen ? "h-fit" : "h-16"}`}
    >
      <nav className={navClasses}>
        <a href="/" className="text-xl">
          FullCoding .
        </a>

        <div className={menuClasses}>
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/about">A propos</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/team">Equipes</NavLink>
        </div>

        <div className="md:hidden">
          <button className="mobile-menu-button" onClick={toggleMenu}>
            <LiaBarsSolid />
          </button>
        </div>
      </nav>
      <div className={isOpen ? "flex flex-col gap-3 p-5 md:hidden" : "hidden "}>
        <NavLink href="/">Accueil</NavLink>
        <NavLink href="/about">A propos</NavLink>
        <NavLink href="/services">Services</NavLink>
        <NavLink href="/team">Equipes</NavLink>
      </div>
    </header>
  );
}

export default Navbar;
