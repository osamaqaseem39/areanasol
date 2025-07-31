import React from 'react';
import { Header } from '../../components/Header';
import FooterCommunitySection from '../../components/FooterCommunitySection';

const TokenomicsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative">
      {/* Background image behind everything */}
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
      {/* Right gradient */}
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
      {/* Bottom gradient */}
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
      
      <div className="relative flex-1 w-full flex flex-col z-20">
        <Header />
        {/* Hero Section */}
        <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden" style={{ minHeight: '60vh' }}>
          {/* Content */}
          <div className="relative z-20 text-center px-4 w-full">
            <h1 className="text-6xl md:text-8xl font-bold text-orange-500 mb-6 font-play">
              TOKENOMICS
            </h1>
            <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-geist">
                Coming Soon
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 font-poppins">
                Detailed tokenomics information is being prepared. 
                Learn about $ARENA token distribution and economics soon!
              </p>
              <div className="flex justify-center">
                <a href="/" className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-8 rounded-[1.2rem] transition-colors duration-200 font-play text-xl">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer is now below the hero section, not inline */}
      <div className="relative z-20">
        <FooterCommunitySection />
      </div>
    </div>
  );
};

export default TokenomicsPage; 