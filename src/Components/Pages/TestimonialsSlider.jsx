import React, { useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsSlider = ({ testimonials, direction = "ltr" }) => {
  // Duplicate testimonials for seamless scrolling
  const testimonialsLoop = [...testimonials, ...testimonials];
    useEffect(() => {
    AOS.refresh(); // ensures animations trigger properly for dynamically rendered items
  }, []);

  return (
    <div className="overflow-hidden w-full" data-aos="fade-up">
      <div className={`flex ${direction === "ltr" ? "animate-scroll" : "animate-scroll-reverse"}`}>
        {testimonialsLoop.map((testimonial, index) => (
          <div
            key={index}
            className="
              flex-shrink-0 
              w-[300px] h-[270px]       /* mobile default */
              md:w-[400px] md:h-[300px] /* tablet */
              lg:w-[564px] lg:h-[321px] /* desktop */
              mx-4 bg-white rounded-xl p-6 shadow-md text-center 
              flex flex-col items-center justify-center mb-2 border border-gray-200
            "
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="
                w-40 h-40 
                md:w-32 md:h-32 
                lg:w-56 lg:h-56 
                rounded-full 
              "
            />
            <h3 className="text-base md:text-lg lg:text-lg font-semibold ">{testimonial.name}</h3>
                <div className="flex justify-center text-[#FF9000] mb-2 pt-0 md:pt-1 lg:pt-2">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <AiFillStar key={i} className="w-5 h-5 md:w-6 md:h-6 lg:w-4 lg:h-4" />
              ))}
            </div>
            <p className="text-gray-600 text-sm sm:text-base mb-2 md:mb-5">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;
