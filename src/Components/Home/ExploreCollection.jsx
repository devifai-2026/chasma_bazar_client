import React, { useState, useEffect } from "react";
import first from "../../assets/Explore/first.svg";
import second from "../../assets/Explore/second.svg";
import third from "../../assets/Explore/third.svg";
import fourth from "../../assets/Explore/fourth.svg";
import rightArrow from "../../assets/BestSellers/rightArrow.svg";
import leftArrow from "../../assets/BestSellers/leftArrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const ExploreCollection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // Show 4 images at a time

  // Duplicate the images to have 8 total for sliding
  const images = [first, second, third, fourth, first, second, third, fourth];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(2); // Show 2 on mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3); // Show 3 on tablet
      } else {
        setSlidesToShow(4); // Show 4 on desktop
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= images.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? images.length - slidesToShow : prev - 1
    );
  };

  const visibleImages = images.slice(currentSlide, currentSlide + slidesToShow);

  useEffect(() => {
  AOS.init({
    duration: 1000,           // animation duration
    easing: "ease-out-cubic", // easing style
    once: false,              // animate every time you scroll in/out
  });
}, []);

  return (
     <div className="bg-[#F6F6F6] mt-12 max-w-[90%] mx-auto py-8">
      <div className="flex justify-between items-center mb-8 px-4 md:px-14">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-amiri font-bold">
          Explore Our Collections
        </h2>
        <div className="flex items-center gap-3">
          <button onClick={prevSlide} className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all border border-gray-200">
            <img src={leftArrow} alt="Previous" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button onClick={nextSlide} className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all border border-gray-200">
            <img src={rightArrow} alt="Next" className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      <div className={`grid gap-4 justify-center ${
        slidesToShow === 2 ? 'grid-cols-2' : slidesToShow === 3 ? 'grid-cols-3' : 'grid-cols-4'
      }`}>
        {visibleImages.map((image, index) => (
          <img
            key={index}
            className="w-full max-w-60 h-60 md:max-w-72 md:h-72 object-cover"
            src={image}
            alt={`Collection ${index + 1}`}
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="800"
            data-aos-delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreCollection;