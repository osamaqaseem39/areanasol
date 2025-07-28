import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";

export function HeroHeader() {
  return (
    <section className="relative w-full flex flex-col" >
      {/* Background image behind the gradient */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <img
          src="/images/herobg.jpg"
          alt="Background"
          className="w-full h-full object-cover object-center opacity-80"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Overlay with rgba(25,24,37,0.35) above the image */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        style={{ background: 'rgba(25,24,37,0.35)' }}
      />
      {/* Top full-width gradient bar */}
       <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "30%",
          pointerEvents: "none",
          zIndex: 12,
          background:
            "linear-gradient( rgba(25,24,37,1) 0%, rgba(25,24,37,0.96) 10%, rgba(25,24,37,0.92) 20%, rgba(25,24,37,0.88) 30%, rgba(25,24,37,0.84) 40%, rgba(25,24,37,0.80) 50%, rgba(25,24,37,0.75) 60%, rgba(25,24,37,0.65) 70%, rgba(25,24,37,0.55) 80%, rgba(25,24,37,0.45) 90%, rgba(25,24,37,0) 100%)",
        }}
      />
       <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 12,
          background:
            "linear-gradient(to right, rgba(25,24,37,1) 0%, rgba(25,24,37,0.96) 10%, rgba(25,24,37,0.92) 20%, rgba(25,24,37,0.88) 30%, rgba(25,24,37,0.84) 40%, rgba(25,24,37,0.80) 50%, rgba(25,24,37,0.75) 60%, rgba(25,24,37,0.65) 70%, rgba(25,24,37,0.55) 80%, rgba(25,24,37,0.45) 90%, rgba(25,24,37,0.0) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "30%",
          pointerEvents: "none",
          zIndex: 12,
          background:
            "linear-gradient(to top, rgba(25,24,37,1) 0%, rgba(25,24,37,0.96) 10%, rgba(25,24,37,0.92) 20%, rgba(25,24,37,0.88) 30%, rgba(25,24,37,0.84) 40%, rgba(25,24,37,0.80) 50%, rgba(25,24,37,0.75) 60%, rgba(25,24,37,0.65) 70%, rgba(25,24,37,0.55) 80%, rgba(25,24,37,0.45) 90%, rgba(25,24,37,0.0) 100%)",
        }}
      />
      <div className="relative z-20">
        <Header />
        <HeroSection />
      </div>
    </section>
  );
} 