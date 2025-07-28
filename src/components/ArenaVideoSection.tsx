import React from 'react';

const ArenaVideoSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-16 mt-32">
        <div className="flex flex-col md:flex-row items-center justify-center bg-[#a06c2b]/90 rounded-2xl px-8 py-8 md:py-12 md:px-20 gap-8 md:gap-16 max-w-5xl w-full shadow-2xl">
          {/* Video or placeholder */}
          <div className="flex-shrink-0 border-4 border-black rounded-lg overflow-hidden bg-black" style={{width: 260, height: 460}}>
            {/* Replace with <video> if you have a video source */}
            <video
              src="/images/Arena SOL.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{ background: 'black' }}
            />
          </div>
          {/* Text */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <div className="text-3xl md:text-4xl font-bold text-white text-center md:text-left leading-tight">
              <span className="[text-shadow:_2px_2px_0_#000,2px_2px_0_#000]">WAGER </span>
              <span className="text-yellow-400 [text-shadow:_2px_2px_0_#000,2px_2px_0_#000]">$ARENA</span>
              <span className="[text-shadow:_2px_2px_0_#000,2px_2px_0_#000]"> <br className="md:hidden"/>BEFORE THE MATCH.</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ArenaVideoSection; 