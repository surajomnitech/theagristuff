'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/sri lanka cinnamon slide 1.jpg',
      title: 'Welcome to The Agristuff',
      description: 'Established in 2001, The Agristuff Pvt Ltd is your go-to source for high-quality agricultural exports.',
    },
    {
      image: '/sri lanka farmer slide 2.jpg',
      title: 'Our Commitment',
      description: 'We work closely with Fair Trade certified farmers to promote sustainable farming.',
    },
    {
      image: '/sri lanka farmer slide 3.png',
      title: 'Discover the Vibrant Flavors of Organico',
      description: 'Experience Organico, our premium brand, known for its quality across the EU, Middle East, and Maldives.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[450px] md:h-[500px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{slide.title}</h2>
              <p className="text-lg md:text-xl text-center max-w-3xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;