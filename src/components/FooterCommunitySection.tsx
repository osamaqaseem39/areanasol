"use client";

import React from 'react';

const FooterCommunitySection = () => {
  return (
    <div className="w-full py-32 mt-32 flex flex-col items-center  relative z-10 overflow-visible " style={{ backgroundImage: 'url(/images/footerbg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="max-w-7xl w-full mx-auto flex flex-col items-center ">
          {/* Back to top */}
          <div className="flex flex-col items-center mb-6 relative z-10">
             <div className="w-8 h-8 flex items-center justify-center mb-1 relative" style={{ filter: 'drop-shadow(0 0 20px #FF8C00)' }}>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className="focus:outline-none"
                style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
              >
                <img src="/images/backtotop.png" alt="Back to top" className="w-6 h-6 mx-auto" />
              </button>
            </div>
            <span className="text-xs text-gray-300">Back to top</span>
          </div>
        
          {/* Join the Community */}
          <div className="flex flex-col items-center w-full max-w-xl relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4 font-geist">Join the Community</h2>
            {/* Social icons */}
            <div className="flex flex-row gap-10 items-center justify-center mb-2">
              <a href="#" aria-label="X" className="hover:opacity-80 transition-opacity">
                <img src="/images/x.png" alt="X" className="w-14 h-14" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                <img src="/images/instagram.png" alt="Instagram" className="w-14 h-14" />
              </a>
              <a href="#" aria-label="Telegram" className="hover:opacity-80 transition-opacity">
                <img src="/images/telegram.png" alt="Telegram" className="w-14 h-14 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default FooterCommunitySection; 