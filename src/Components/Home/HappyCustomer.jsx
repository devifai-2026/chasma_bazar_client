import React, { useState, useEffect } from 'react';
import men from "../../assets/HappyCustomer/men.svg";
import women from "../../assets/HappyCustomer/women.svg";
import leftArrow from "../../assets/BestSellers/leftArrow.svg";
import rightArrow from "../../assets/BestSellers/rightArrow.svg";
import { IoStar, IoStarHalfSharp } from "react-icons/io5"
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const HappyCustomer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const customers = [
    {
      id: 1,
      name: "Priya Das",
      testimonial:
        "The virtual try-on helped me pick the perfect frame. Super comfortable and stylish!",
      image: "men",
    },
    {
      id: 2,
      name: "Sayan Pal",
      testimonial:
        "The virtual try-on helped me pick the perfect frame. Super comfortable and stylish!",
      image: "women",
    },
    {
      id: 3,
      name: "Rahul Sharma",
      testimonial:
        "Amazing quality lenses! The blue light protection really helps during long work hours.",
      image: "men",
    },
    {
      id: 4,
      name: "Anita Roy",
      testimonial:
        "Love my new glasses! The prescription is perfect and they look fantastic.",
      image: "women",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= customers.length - 2 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [customers.length]);

    useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: false, // replay when scroll up
      mirror: true,
      offset: 150,
    });
  }, []);
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? customers.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= customers.length - 2 ? 0 : prevIndex + 1
    );
  };

  const visibleCustomers = customers.slice(currentIndex, currentIndex + 2);
  if (visibleCustomers.length < 2) {
    visibleCustomers.push(...customers.slice(0, 2 - visibleCustomers.length));
  }

  return (
    <div className="max-w-[90%] mx-auto mt-12"
      data-aos="fade-up"
      data-aos-delay="200">
      <div className="flex justify-between items-center"   data-aos="fade-down"
      data-aos-delay="300">
        <h2 className="font-amiri font-bold text-2xl md:text-4xl lg:text-5xl uppercase">
          Happy Customers
        </h2>
        <div className="flex items-center gap-3">
          <img
            src={leftArrow}
            alt="Previous"
            className="cursor-pointer hover:opacity-70 transition-opacity h-10 w-10"
            onClick={handlePrevious}
          />
          <img
            src={rightArrow}
            alt="Next"
            className="cursor-pointer hover:opacity-70 transition-opacity h-10 w-10"
            onClick={handleNext}
          />
        </div>
      </div>

      <div className="flex items-center flex-col md:flex-row justify-between gap- mt-8">
        {visibleCustomers.map((customer, index) => (
          <div
            key={`${customer.id}-${index}`}
              data-aos="zoom-in-up"
            data-aos-delay={`${index * 200 + 400}`}
            className="shadow-xl space-y-3 rounded-md flex flex-col items-center p-8 w-full md:w-[48%] h-[350px] md:h-[350px]"
          >
            <img
              className="w-40 h-40 object-cover"
              src={customer.image === "men" ? men : women}
              alt={customer.name}
            />
            <p className="font-amiri text-xl font-bold text-center">{customer.name}</p>
                 <div className="flex items-center gap-1 text-yellow-500">
        <IoStar size={20} />
        <IoStar size={20} />
        <IoStar size={20} />
        <IoStar size={20} />
        <IoStarHalfSharp size={20} />
      </div>
            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              <p className="font-inter text-sm  text-center px-2">
                "{customer.testimonial}"
              </p>
              
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12"   data-aos="fade-up"
        data-aos-delay="600">
      <Link to='/Testimonials'>
        <button className="bg-[#FD7D68] rounded-3xl text-white py-2 px-4">
          View All
        </button>
      </Link>
      </div>
    </div>
  );
};

export default HappyCustomer;
