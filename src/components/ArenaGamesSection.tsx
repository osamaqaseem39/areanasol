'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import ArenaVideoSection from './ArenaVideoSection';
import ArenaPowerUpSection from './ArenaPowerUpSection';

const games = [
  {
    title: 'SOL SHOOTER',
    subtitle: 'Optimized for Mobile Only',
    image: '/images/solshooter.jpeg',
    comingSoon: false,
  },
  {
    title: 'CASINO',
    subtitle: 'Coming Soon',
    image: '/images/casino.jpeg',
    comingSoon: true,
  },
  {
    title: 'COMING SOON',
    subtitle: '',
    image: '/images/logo-icon.png',
    comingSoon: true,
  },
  {
    title: 'COMING SOON',
    subtitle: '',
    image: '/images/logo-icon.png',
    comingSoon: true,
  },
];

const ArenaGamesSection = () => {
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardCenters, setCardCenters] = useState<number[]>([]);
  const [containerLeft, setContainerLeft] = useState(0);
  const [animatedCards, setAnimatedCards] = useState<boolean[]>([]);

  useEffect(() => {
    function updatePositions() {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      setContainerLeft(containerRect.left);
      const centers = cardRefs.current.map(ref => {
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        return rect.left - containerRect.left + rect.width / 2;
      });
      setCardCenters(centers);
    }
    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  // Intersection Observer for card animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setAnimatedCards(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, observerOptions);

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-index', index.toString());
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const verticalHeight = 82; // px
  const horizontalY = verticalHeight; // px

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center pt-8 md:pt-16 relative overflow-hidden px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-[#191B23]/97 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="font-play text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white text-center mb-2 tracking-wide">
          ARE YOU READY FOR
        </h2>
        <h2 className="font-play text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-orange-500 text-center mb-6 md:mb-10 tracking-wide">
          ARENA GAMES
        </h2>
        
        {/* Mobile Grid Layout */}
        <div className="block md:hidden w-full mb-8">
          <div className="grid grid-cols-2 gap-4 w-full">
            {games.map((game, idx) => (
              <div
                key={idx}
                className={`relative w-full h-[12rem] border border-white/20 rounded-lg flex flex-col justify-end overflow-hidden shadow-lg hover:scale-105 transition-all duration-700 ease-out ${
                  animatedCards[idx] 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-16 opacity-0'
                }`}
                style={{
                  transitionDelay: `${idx * 200}ms`
                }}
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={game.image}
                    alt={game.title}
                    className={`absolute inset-0 w-full h-full ${game.title === 'COMING SOON' ? 'object-contain' : 'object-cover'} object-center transition-opacity duration-300`}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />
                </div>
                <div className="relative z-10 p-3 flex flex-col">
                  <span className="font-poppins text-sm font-bold text-white mb-1 tracking-wide">
                    {game.title}
                  </span>
                  {game.subtitle && (
                    <span className="font-poppins text-xs text-gray-300">{game.subtitle}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Show More Button */}
          <div className="w-full flex justify-center mt-6">
            <button className="px-6 py-2 bg-black border-2 border-orange-500 rounded-md text-orange-500 font-bold text-sm shadow-lg hover:bg-orange-500 hover:text-black transition-colors duration-200">
              SHOW MORE
            </button>
          </div>
        </div>
        
                 {/* Desktop Original Layout */}
         <div ref={containerRef} className="hidden md:flex flex-row gap-6 md:gap-14 justify-center mb-32 relative w-full mx-auto" style={{zIndex: 20}}>
          {games.map((game, idx) => (
            <div
              key={idx}
              ref={el => { cardRefs.current[idx] = el!; }}
              className={`relative flex-1 min-w-[14rem] max-w-[20rem] h-[24rem] md:h-[28rem] border border-white/20 rounded-lg flex flex-col justify-end overflow-hidden shadow-lg hover:scale-105 transition-all duration-700 ease-out ${
                animatedCards[idx] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-16 opacity-0'
              }`}
              style={{
                transitionDelay: `${idx * 300}ms`
              }}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={game.image}
                  alt={game.title}
                  className={`absolute inset-0 w-full h-full ${game.title === 'COMING SOON' ? 'object-contain' : 'object-cover'} object-center transition-opacity duration-300`}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/40 z-10" />
              </div>
              <div className="relative z-10 p-6 flex flex-col">
                <span className="font-poppins text-2xl font-bold text-white mb-1 tracking-wide">
                  {game.title}
                </span>
                {game.subtitle && (
                  <span className="font-poppins text-sm text-gray-300">{game.subtitle}</span>
                )}
              </div>
            </div>
          ))}
          {/* Pixel-perfect lines and dots overlay - Desktop Only */}
          <div className="pointer-events-none absolute left-0 right-0" style={{top: 'calc(100% + 32px)', height: '120px', zIndex: 30}}>
            <div style={{position: 'absolute', left: 0, right: 0, width: '100%', height: '120px'}}>
              {/* Vertical lines from each card */}
              {cardCenters.length === games.length && cardCenters.map((center, idx) => (
                <div key={idx} style={{position: 'absolute', left: center, top: 0, height: verticalHeight + 'px', width: '0'}}>
                  <div className="w-0.5 h-full bg-gray-300 mx-auto" />
                  {/* Dot at intersection, centered on horizontal line */}
                  <div className="w-2 h-2 rounded-full bg-orange-500 border border-gray-300 mx-auto" style={{position: 'absolute', top: (horizontalY - 4) + 'px', left: '50%', transform: 'translateX(-50%)'}} />
                </div>
              ))}
              {/* Horizontal line between first and last verticals */}
              {cardCenters.length === games.length && (
                <div style={{
                  position: 'absolute',
                  left: cardCenters[0],
                  width: cardCenters[cardCenters.length-1] - cardCenters[0],
                  top: horizontalY,
                  height: '2px',
                }}>
                  <div className="w-full h-0.5 bg-gray-300" />
                </div>
              )}
              {/* SHOW MORE button on the horizontal line */}
              {cardCenters.length === games.length && (
                <div
                  className="z-40"
                  style={{
                    position: 'absolute',
                    left: (cardCenters[0] + cardCenters[cardCenters.length-1]) / 2,
                    top: (horizontalY - 28),
                    transform: 'translateX(-50%)',
                    pointerEvents: 'auto',
                  }}
                >
                  <button className="px-8 py-2 bg-black border-2 border-orange-500 rounded-md text-orange-500 font-bold text-lg shadow-lg hover:bg-orange-500 hover:text-black transition-colors duration-200">
                    SHOW MORE
                  </button>
                  {/* Vertical line below the button (longer) */}
                  <div className="w-0.5 h-20 bg-gray-300 mx-auto" style={{marginTop: '8px'}} />
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Video section below the vertical line */}
        <ArenaVideoSection />
        <ArenaPowerUpSection />
      </div>
    </section>
  );
};

export default ArenaGamesSection; 