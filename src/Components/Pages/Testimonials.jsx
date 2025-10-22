import React, { useEffect } from 'react';
import Breadcrumbs from '../Breadcrumbs';
import heroImg1 from "../../assets/HomeHeroImg1.png"; 
import heroImg2 from "../../assets/Testimonials.png";
import img1 from "../../assets/UserTest1.png";
import TestimonialsSlider from './TestimonialsSlider';
import BestSellers from '../Home/BestSellers';
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {

    useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);
  const testimonialsData1 = [
    {
      image: img1,
      name: "Priya Das",
      rating: 5,
      description: "“The virtual try-on helped me pick the perfect frame. Super comfortable and stylish!”",
    },
    {
      image: img1,
      name: "Sayan Pal",
      rating: 4,
      description: "“Fast delivery, premium quality lenses at such a good price.”",
    },
    {
      image: img1,
      name: "Priya Pal",
      rating: 5,
      description: "Fantastic experience, will buy again!",
    },
    {
      image: img1,
      name: "Rahul Sharma",
      rating: 5,
      description: "Excellent customer service and high-quality products!",
    },
  ];

  const testimonialsData2 = [
    {
      image: img1,
      name: "Anita Roy",
      rating: 5,
      description: "T“The virtual try-on helped me pick the perfect frame. Super comfortable and stylish!”!",
    },
    {
      image: img1,
      name: "Mike Johnson",
      rating: 4,
      description: "“Fast delivery, premium quality lenses at such a good price.”",
    },
    {
      image: img1,
      name: "Sarah Wilson",
      rating: 5,
      description: "Best online shopping experience for eyewear!",
    },
    {
      image: img1,
      name: "David Brown",
      rating: 5,
      description: "Quick delivery and exactly what I was looking for.",
    },
  ];

  return (
    <div data-aos="fade-up">
      <div className="flex justify-start w-[90%] mx-auto mt-4 pl-1 text-xl" data-aos="fade-down">
        <Breadcrumbs />
      </div>
      
      <div
        className="w-[90%] mx-auto mt-8 rounded-lg overflow-hidden relative h-[300px] flex items-center"
        style={{ backgroundImage: `url(${heroImg1})`, backgroundPosition: "center", backgroundColor: "#0E798C" }}
        data-aos="zoom-in"
      >
        <div className="pl-14 text-white font-serif">
          <h2 className="text-5xl md:text-5xl lg:text-7xl font-amiri tracking-wide" data-aos="fade-right">Testimonials</h2>
        </div>
        <div className="hidden md:block absolute right-6 bottom-0">
          <img src={heroImg2} alt="" className="h-[285px] object-contain" />
        </div>
      </div>

      {/* Sliders Section */}
      <div className="w-full mx-auto py-12 space-y-8">
        {/* First Slider - Left to Right */}
        <div data-aos="fade-up">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-amiri text-center text-gray-800 mb-3" data-aos="fade-down">
            Happy Customers
          </h3>
          <TestimonialsSlider 
            testimonials={testimonialsData1} 
            direction="ltr"
          />
        </div>

        {/* Second Slider - Right to Left */}
        <div data-aos="fade-up">
          <TestimonialsSlider 
            testimonials={testimonialsData2} 
            direction="rtl"
          />
        </div>
      </div>
      <div >
        <BestSellers />
      </div>
    </div>
  );
};

export default Testimonials;
