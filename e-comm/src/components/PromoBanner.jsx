import React, { useState, useEffect } from 'react';

const banners = [
  {
    title: (
      <>
        Adidas Men Running
        <br />
        Sneakers
      </>
    ),
    description: 'Performance and design. Taken right to the edge.',
    image: 'https://i.pinimg.com/736x/28/03/54/2803547c1f80e0e88404340ab339f525.jpg',
    buttonText: 'SHOP NOW',
    gradient: 'from-sky-400 to-blue-500',
  },
 {
    title: (
      <>
        puma Men Running
        <br />
        Sneakers
      </>
    ),
    description: 'Performance and design. Taken right to the edge.',
    image: 'https://i.pinimg.com/736x/fc/6e/97/fc6e9748b48e2e082dea22418c8e26cb.jpg',
    buttonText: 'SHOP NOW',
    gradient: 'from-orange-400 to-rose-500',
  },
  {
    title: (
      <>
        Nike Men Running
        <br />
        Sneakers
      </>
    ),
    description: 'Performance and design. Taken right to the edge.',
    image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/a/d/b/-original-imah4kg787urysgy.jpeg?q=70',
    buttonText: 'SHOP NOW',
    gradient: 'from-yellow-400 to-orange-500',
  },
];

export default function PromoBanner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const currentBanner = banners[currentBannerIndex];

  return (
    <div
      className={`w-full bg-gradient-to-r ${currentBanner.gradient} text-white py-8 px-6 rounded-lg mb-6 transition-all duration-1000 ease-in-out`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {currentBanner.title}
          </h1>
          <p className="text-sm md:text-base mb-4 opacity-90">
            {currentBanner.description}
          </p>
          <button className={`bg-transparent border-2 border-white text-white px-4 py-1 rounded text-sm hover:bg-white hover:text-${currentBanner.hoverColor} transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-500 uppercase tracking-wider underline`}>
            {currentBanner.buttonText}
          </button>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <img
            key={currentBanner.image}
            src={currentBanner.image}
            alt={currentBanner.title}
            className="w-64 h-64 object-contain transform rotate-0 transition-all duration-1000 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
