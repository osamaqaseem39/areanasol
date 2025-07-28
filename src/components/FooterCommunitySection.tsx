import React from 'react';

const FooterCommunitySection = () => {
  return (
    <footer className="w-full pt-12 pb-24 flex flex-col items-center bg-[#23232c]   relative z-10"  style={{ boxShadow: '0 -8px 20px -10px #F4822F' }}>
      <div className="max-w-7xl w-full mx-auto bg-[#23232c] rounded-t-[50rem]  mt-[-9rem] flex flex-col items-center pb-25 " style={{ boxShadow: '0 -8px 20px -10px #F4822F'}}>
       </div> {/* Back to top */}
        <div className="flex flex-col items-center mb-6">
           <div className="w-8 h-8 flex items-center justify-center mb-1">
            <img src="/images/" alt="Back to top" className="w-6 h-6 mx-auto" />
          </div>
          <span className="text-xs text-gray-300">Back to top</span>
        </div>
      
        {/* Join the Community */}
        <div className="flex flex-col items-center w-full max-w-xl">
          <div className="w-full flex justify-center mb-2">
            <div className="border-t border-dotted border-gray-400 w-56" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4 font-geist">Join the Community</h2>
          {/* Social icons */}
          <div className="flex flex-row gap-10 items-center justify-center mb-2">
            <a href="#" aria-label="X" className="hover:opacity-80">
              <img src="/images/x.png" alt="X" className="w-14 h-14" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <img src="/images/instagram.png" alt="Instagram" className="w-14 h-14" />
            </a>
            <a href="#" aria-label="Telegram" className="hover:opacity-80">
              <img src="/images/telegram.png" alt="Telegram" className="w-14 h-14 rounded-full " />
            </a>
          </div>
          <div className="w-full flex justify-center mt-2">
            <div className="border-t border-dotted border-gray-400 w-56" />
          </div>
        </div>
      
    </footer>
  );
};

export default FooterCommunitySection; 