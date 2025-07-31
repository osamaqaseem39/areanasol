import React from 'react';
import FooterCommunitySection from './FooterCommunitySection';

const ArenaPowerUpSection = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-8 md:pt-12 lg:pt-20 ">
      <div className="flex flex-col md:flex-row w-full items-center justify-center bg-[#FFFFFF]/30 rounded-[2.5rem]  py-6 md:py-8 lg:py-14 gap-6 md:gap-8 lg:gap-12 max-w-7xl shadow-2xl">
        {/* Left: Icon, text, button */}
        <div className="flex flex-col items-center flex-1 min-w-[280px] sm:min-w-[320px] max-w-md text-center">
          <img src="/images/logo-icon.png" alt="Arena Icon" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-2 mx-auto" />
          <h3 className="font-play text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[2.7rem] font-bold text-orange-500 mb-2 text-center leading-none">Power up</h3>
          <p className="text-white text-center mb-6 md:mb-8 opacity-90 text-sm sm:text-base md:text-lg leading-snug font-poppins" style={{letterSpacing: 0.2}}>
            Bet $500 worth of <span className="text-yellow-400">$ARENA</span>.<br />
            Step into the arena and fight for 1v1 Match
          </p>
          <div className="w-full flex flex-col items-center group relative">
            <button className="bg-black rounded-[1.2rem] px-6 sm:px-8 py-2 md:py-3 text-lg sm:text-xl md:text-2xl font-bold text-orange-500 shadow-lg hover:bg-orange-500 hover:text-black transition-colors duration-200 font-play w-auto min-w-[200px] sm:min-w-[220px] text-center mb-2 relative z-10">
              Buy Now
            </button>
            <span className="text-[#d1d5db] text-base sm:text-lg font-poppins text-center w-full block transition-all duration-300 ease-out absolute opacity-0 group-hover:opacity-100 group-hover:translate-y-20" style={{top: '0', left: '50%', transform: 'translateX(-50%)'}}>DexScreener</span>
          </div>
        </div>
        {/* Right: Characters image group on brown bg */}
        <div className="flex-1 flex items-center justify-center min-w-[280px] sm:min-w-[320px]">
          <div
            className="relative rounded-[2rem] overflow-hidden bg-[#000000]/50 w-full h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center p-2"
            style={{
              backgroundImage: "url('/images/herobg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 1,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />
            {/* Faded background image */}
            {/* Optionally, add a faded background image here */}
            <img src="/images/allcharactershalf.png" alt="Character 1" className="relative z-10 w-full h-full object-contain" />
          </div>
        </div>
      </div>
      
      <FooterCommunitySection/>
    </section>
  );
};

export default ArenaPowerUpSection; 