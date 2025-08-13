import React from 'react';
import { Header } from '../../components/Header';
import FooterCommunitySection from '../../components/FooterCommunitySection';

const ComingSoonPage = () => {
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
              WHITEPAPER
            </h1>
            <div className="bg-[#FFFFFF]/10 backdrop-blur-sm rounded-[2rem] p-8 md:p-12 max-w-4xl mx-auto">
           
              
                             {/* Whitepaper Information */}
               <div className="text-left mb-8">
                 <div className="space-y-8">
                   {/* Overview Section */}
                   <div>
                     <h3 className="text-2xl font-bold text-[#F4822F] mb-4 font-geist">Overview</h3>
                     <div className="space-y-4 text-gray-300 font-poppins">
                       <p>
                         Arena Studio is the next-generation of the Play-to-Earn (P2E) gaming ecology powered 
                         by the Solana blockchain and is developed to transform the dynamics between the players, 
                         digital assets and game rewards. Arena Studio offers players the power they never had in 
                         traditional games, which are controlled and monetized by a few central authorities, giving the 
                         players the opportunity to earn real value through their skill, strategy and community 
                         interaction.
                       </p>
                       <p>
                         On a more basic level, Arena Studio employs the ideology of decentralized finance 
                         (DeFi) to make in-game economies clear and sustainable. Each match, win, and asset have 
                         real value, as it is facilitated by its indigenous $ARENA token that is used in transaction, 
                         rewards, and staking within the platform.
                       </p>
                       <p>
                         We are not only visualizing gameplay, though; Arena Studio will be the home of the 
                         competition, innovation, and development of the community. Through the high-speed and 
                         low-cost blockchain infrastructure provided by Solana, we can guarantee smooth gaming 
                         with features that allow scalability and equitability.
                       </p>
                     </div>
                   </div>

                   {/* Market Analysis Section */}
                   <div>
                     <h3 className="text-2xl font-bold text-[#F4822F] mb-4 font-geist">Market Analysis</h3>
                     <div className="space-y-4 text-gray-300 font-poppins">
                       <p>
                         With over three billion people now identifying as gamers worldwide, the gaming 
                         industry continues to show breakthrough growth, estimated to reach $467B in annual revenue 
                         by 2027 with a CAGR of 8.74%. Given this growth trajectory, it's imperative to delve deeper 
                         into the specific segments driving this momentum, particularly in the realm of mobile gaming 
                         and its intersection with popular sports verticals and the innovative world of Web3.
                       </p>
                       
                       <div className="bg-[#191825]/50 rounded-xl p-6">
                         <h4 className="text-xl font-bold text-[#F4822F] mb-3 font-geist">Mobile Gaming</h4>
                         <p className="mb-3">
                           Mobile gaming is the fastest-growing segment of the gaming industry. In 2022, the 
                           global mobile gaming market was worth $184.4 billion, and it is expected to grow to $775.69 
                           billion by 2032. This growth is being driven by the increasing popularity of smartphones and 
                           tablets, as well as the growing availability of high-speed internet.
                         </p>
                         <p>
                           From a financial perspective, the mobile gaming market offers notable opportunities. 
                           The average annual expenditure of a paying mobile gamer on in-app purchases is around 
                           $100, illustrating the industry's revenue potential.
                         </p>
                       </div>
                     </div>
                   </div>

                   {/* Solana Technology Section */}
                   <div>
                     <h3 className="text-2xl font-bold text-[#F4822F] mb-4 font-geist">Why Solana? The Technical Backbone</h3>
                     <div className="space-y-4 text-gray-300 font-poppins">
                       <p>
                         Solana is becoming one of the best platforms to develop rapid and responsive 
                         blockchain games. With its capacity to process more than 65,000 transactions through 
                         fractional cents per transaction, it is particularly suitable to deal with the high-speed gaming 
                         requirements.
                       </p>
                       
                       <div className="bg-[#191825]/50 rounded-xl p-6">
                         <h4 className="text-xl font-bold text-[#F4822F] mb-3 font-geist">Key Advantages</h4>
                         <ul className="space-y-2">
                           <li className="flex items-start">
                             <span className="text-[#F4822F] mr-2">•</span>
                             <span><strong>Improved Scalability:</strong> Solana's infrastructure works by combining Proof-of-History 
                             (PoH) and Proof-of-Stake (PoS) that allows the network to focus on high volume of 
                             users and transactions.</span>
                           </li>
                           <li className="flex items-start">
                             <span className="text-[#F4822F] mr-2">•</span>
                             <span><strong>Real-time immediate finality:</strong> Games can update the state of a match, team action 
                             and in-game assets in real time as transactions are confirmed in less than a second.</span>
                           </li>
                           <li className="flex items-start">
                             <span className="text-[#F4822F] mr-2">•</span>
                             <span><strong>Easy transitions including games and apps:</strong> Game designers can produce apps that 
                             integrate easily with other apps and exchange digital resources to develop a more 
                             dynamic and open gaming environment.</span>
                           </li>
                         </ul>
                       </div>
                     </div>
                   </div>

                   {/* Arena Studio Model Section */}
                   <div>
                     <h3 className="text-2xl font-bold text-[#F4822F] mb-4 font-geist">Arena Studio in Web3 Gaming</h3>
                     <div className="space-y-4 text-gray-300 font-poppins">
                       <p>
                         Web3 gaming on Solana features the massively scalable metaverse games (e.g. Star 
                         Atlas, Genopets) and more organic wagering-based games (e.g. SOL Arena). But these 
                         projects all have messy ownership of NFTs, opulent entry barriers, or long lock ups.
                       </p>
                       
                       <div className="bg-[#191825]/50 rounded-xl p-6">
                         <h4 className="text-xl font-bold text-[#F4822F] mb-3 font-geist">Our Pure P2E Model</h4>
                         <ul className="space-y-2">
                           <li className="flex items-start">
                             <span className="text-[#F4822F] mr-2">•</span>
                             Users can bet using $ARENA tokens to get into live tournaments
                           </li>
                           <li className="flex items-start">
                             <span className="text-[#F4822F] mr-2">•</span>
                             The prize pot is won immediately by the winners
                           </li>
                           <li className="flex items-start">
                             <span className="text-[#F4822F] mr-2">•</span>
                             A fixed number of tokens are destroyed with each game - this puts deflationary 
                             pressure and value in the long-term
                           </li>
                         </ul>
                       </div>
                       
                       <p>
                         In comparison to SOL Arena that has secured funding of 8.7M and has a more 
                         stratified approach, Arena Studio removes entry obstacles. The players are not required to pay the cost of 
                         NFTs, store huge files, or deal with complicated in-game economies. That strategically 
                         makes Arena Studio a hyper-accessible and scalable competitor.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
              
              {/* Download Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/images/ARENASOL WHITEPAPER.pdf" 
                  download="Arena_SOL_Whitepaper.pdf"
                  className="bg-[#F4822F] hover:bg-[#E6731A] text-black font-bold py-4 px-8 rounded-[1.2rem] transition-all duration-200 font-play text-xl flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Whitepaper
                </a>
                <a 
                  href="/" 
                  className="bg-transparent border-2 border-[#F4822F] text-[#F4822F] hover:bg-[#F4822F] hover:text-black font-bold py-4 px-8 rounded-[1.2rem] transition-all duration-200 font-play text-xl"
                >
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

export default ComingSoonPage; 