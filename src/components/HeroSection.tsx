import React from "react";
import { Character3DViewer } from "./Character3DViewer";

export function HeroSection() {
  return (
    <section className="relative w-full flex items-center justify-center" style={{ zIndex: 1 }}>
      {/* Desktop Version */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-between w-full max-w-[120rem] mx-auto gap-8 px-8" style={{ marginLeft: '100px', marginRight: '100px' }}>
        {/* Left: Text in dark box */}
        <div className="flex-1 max-w-2xl text-left relative rounded-2xl pt-4 pb-8 px-8">
          <h1 className="font-play text-[120px] font-bold text-[#F4822F] leading-tight mb-4">Arena SOL</h1>
          <div
            className="font-poppins font-extralight"
            style={{
              opacity: 0.7,
              fontSize: '20px',
              lineHeight: '28px',
              letterSpacing: 0,
              fontWeight: 275,
            }}
          >
            {/* Optional extra text here */}
          </div>
          <p className="mb-4 text-[#F4822F]">
            <span className="text-[#F4822F] font-semibold">Arena SOL</span>
            <span className="poppins-extralight-15 text-white font-normal" style={{ opacity: 0.7, fontSize: '20px', lineHeight: '28px' }}> is a groundbreaking play-to-earn game on the Solana blockchain, where your skill decides your rewards.</span>
          </p>
          <p className="poppins-extralight-15 mb-2 text-white" style={{ opacity: 0.7, fontSize: '20px', lineHeight: '28px' }}>
            In every match, players enter a real-time multiplayer arena and stake a set amount of $ARENA tokens into the prize pot.<br />
            It&apos;s simple — <span className="text-[#F4822F]">winner takes all</span>.
          </p>
          <p className="poppins-extralight-15 mb-2 text-white" style={{ opacity: 0.7, fontSize: '20px', lineHeight: '28px' }}>
            But there&apos;s a twist: a small fee from each match is sent directly to a <span className="text-[#F4822F] underline cursor-pointer">burn wallet</span>, reducing token supply and fueling long-term value.
          </p>
          <p className="poppins-extralight-15 mb-8 text-white" style={{ opacity: 0.7, fontSize: '20px', lineHeight: '28px' }}>
            Compete, dominate, and extract your winnings — this is where Web3 gaming meets real competition.
          </p>
          <div className="flex gap-8 mt-8">
            <button className="bg-[#191825] border border-[#F4822F] text-white font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-[#F4822F] hover:text-[#191825] transition-all focus:outline-none focus:ring-2 focus:ring-[#F4822F]">
              Play Now
            </button>
            <button className="bg-transparent border border-[#F4822F] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#F4822F] hover:text-[#191825] transition-all focus:outline-none focus:ring-2 focus:ring-[#F4822F]">
              Learn More
            </button>
          </div>
        </div>
        {/* Right: Characters */}
        <div className="flex-1 flex items-end justify-center relative min-h-[600px]" style={{ border: "none", outline: "none" }}>
          <Character3DViewer modelPath="/images/3dcharaters/character1/Pbr/base_basic_pbr.glb" />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex flex-col items-center justify-center w-full px-4 py-8">
        {/* Mobile Header */}
        <div className="w-full text-center mb-6">
          <h1 className="font-play text-4xl sm:text-6xl font-bold text-[#F4822F] leading-tight mb-4">Arena SOL</h1>
          <p className="text-white text-sm sm:text-base opacity-90 mb-4">
            A groundbreaking play-to-earn game on the Solana blockchain
          </p>
        </div>

        {/* Mobile Image */}
        <div className="w-full flex justify-center mb-6">
          <img
            src="/images/allcharactershalf.png"
            alt="Arena SOL Characters"
            className="w-full max-w-sm h-auto object-contain"
          />
        </div>

        {/* Mobile Content */}
        <div className="w-full text-center space-y-4">
          <p className="text-white text-sm opacity-90">
            In every match, players enter a real-time multiplayer arena and stake $ARENA tokens into the prize pot.
            <br />
            It&apos;s simple — <span className="text-[#F4822F] font-semibold">winner takes all</span>.
          </p>
          
          <p className="text-white text-sm opacity-90">
            A small fee from each match is sent to a <span className="text-[#F4822F] underline">burn wallet</span>, 
            reducing token supply and fueling long-term value.
          </p>

          <p className="text-white text-sm opacity-90">
            Compete, dominate, and extract your winnings — this is where Web3 gaming meets real competition.
          </p>

          {/* Mobile Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-[#191825] border border-[#F4822F] text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-[#F4822F] hover:text-[#191825] transition-all focus:outline-none focus:ring-2 focus:ring-[#F4822F]">
              Play Now
            </button>
            <button className="bg-transparent border border-[#F4822F] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#F4822F] hover:text-[#191825] transition-all focus:outline-none focus:ring-2 focus:ring-[#F4822F]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 