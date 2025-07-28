"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import './StickyNavGradient.css';

const navLinks = [
  { label: "WHITEPAPER", href: "#whitepaper" },
  { label: "TOKENOMICS", href: "#tokenomics" },
  { label: "ROADMAP", href: "#roadmap" },
];

function StickyNav() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 150);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (show) {
      setVisible(true);
    } else {
      // Delay hiding for smooth transition
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-center z-[100] pointer-events-auto transition-all duration-300 mt-4 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${visible ? '' : 'hidden'}`}
      style={{ pointerEvents: 'auto' }}
    >
      <ul className="sticky-nav-gradient flex gap-2 px-8 py-2 rounded-full bg-[#191825] bg-opacity-80">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white font-medium tracking-wide px-4 py-1 hover:text-[#F4822F] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <>
      <header className="w-full flex items-center px-12 py-6 bg-transparent relative min-h-[96px]">
        {/* Logo */}
        <div className="flex items-center z-10">
          <Image src="/images/logo-icon.png" alt="Arenasol Logo" width={96} height={96} />
        </div>
        {/* Centered Navigation */}
        <div className="flex-1 flex justify-center">
          <nav className="sticky top-0 z-50">
            <ul className="flex gap-8 px-8 py-2 border-t border-b border-[#F4822F] rounded-full bg-[#191825] bg-opacity-80">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white font-medium tracking-wide px-4 py-1 hover:text-[#F4822F] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Buy Button */}
        <a
          href="#buy-arena"
          className="ml-8 px-6 py-2 border border-[#F4822F] rounded-full text-white font-medium hover:bg-[#F4822F] hover:text-[#191825] transition-colors z-10"
        >
          BUY $ARENA
        </a>
      </header>
      <StickyNav />
    </>
  );
} 