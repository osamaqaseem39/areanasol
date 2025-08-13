import React from 'react';

const ArenaVideoSection = () => {
  return (
    <section className="w-full flex justify-center items-center py-6 md:py-12 mt-8 md:mt-16 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center bg-[#a06c2b]/90 rounded-2xl gap-6 md:gap-8 lg:gap-16 max-w-5xl w-full shadow-2xl">
          {/* Text - Above video on mobile, beside video on desktop */}
          
          
          {/* Video or placeholder */}
          <div className="flex-shrink-0 border-4 border-black rounded-lg overflow-hidden bg-black order-2 md:order-1 w-full h-full" >
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
        </div>
    </section>
  );
};

export default ArenaVideoSection; 