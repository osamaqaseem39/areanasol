"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import './StickyNavGradient.css';

const navLinks = [
  { label: "WHITEPAPER", href: "/whitepaper" },
  { label: "TOKENOMICS", href: "/tokenomics" },
  { label: "ROADMAP", href: "/roadmap" },
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
      <ul className="sticky-nav-gradient flex gap-2 px-4 sm:px-8 py-2 rounded-full bg-[#191825] bg-opacity-80">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-white font-medium tracking-wide px-2 sm:px-4 py-1 hover:text-[#F4822F] transition-colors text-sm sm:text-base"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full flex items-center px-4 sm:px-8 md:px-12 py-4 md:py-6 bg-transparent relative min-h-[80px] md:min-h-[96px]">
        {/* Logo */}
        <div className="flex items-center z-10">
          <a href="/">
            <Image 
              src="/images/logo.png" 
              alt="Arenasol Logo" 
              width={120} 
              height={120} 
              className="w-24 h-24 md:w-[150px] md:h-[150px]"
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <nav className="sticky top-0 z-50">
            <ul className="flex gap-4 md:gap-8 px-4 md:px-8 py-2 border-t border-b border-[#F4822F] rounded-full bg-[#191825] bg-opacity-80">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white font-medium tracking-wide px-2 md:px-4 py-1 hover:text-[#F4822F] transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Desktop Buy Button */}
        <div className="hidden lg:block">
          <a
            href="#buy-arena"
            className="ml-8 px-6 py-2 border border-[#F4822F] rounded-full text-white font-medium hover:bg-[#F4822F] hover:text-[#191825] transition-colors z-10"
          >
            BUY $ARENA
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 hover:text-[#F4822F] transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-[#191825] bg-opacity-95 z-[200] pt-20">
          <div className="flex flex-col items-center justify-start h-full pt-8">
            <nav className="w-full">
              <ul className="flex flex-col items-center space-y-6">
                {navLinks.map((link) => (
                  <li key={link.label} className="w-full text-center">
                    <a
                      href={link.href}
                      className="text-white font-medium tracking-wide text-xl hover:text-[#F4822F] transition-colors block py-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="w-full text-center mt-8">
                  <a
                    href="#buy-arena"
                    className="inline-block px-8 py-3 border border-[#F4822F] rounded-full text-white font-medium hover:bg-[#F4822F] hover:text-[#191825] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    BUY $ARENA
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
      
      <StickyNav />
    </>
  );
} 