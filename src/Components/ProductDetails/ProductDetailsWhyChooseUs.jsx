import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const ProductDetailsWhyChooseUs = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    easing: "ease-out-cubic",
    once: true, // animate only once
    offset: 100, // trigger animation 100px before element enters viewport
  });
}, []);

  const features = [
    { ours: "Advanced Anti Scratch Protection", others: "Basic scratch resistance" },
    { ours: "HD Crystal Clear Vision", others: "Standard clarity" },
    { ours: "Blue Light & UV Protection", others: "No blue light filter" },
    { ours: "Ultra Light & Durable", others: "Heavy & fragile" },
    { ours: "1 Year Warranty Included", others: "Limited warranty" },
  ];

  return (
    <div className="bg-[#F6F6F6] py-16" >
      <div className="max-w-6xl mx-auto text-center px-4 md:px-6" data-aos="fade-up">

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-amiri font-semibold text-[#1A1A1A] mb-10" data-aos="fade-down" data-aos-delay="100">
          WHY CHOOSE OUR EYEGLASSES?
        </h1>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-start">

          {/* Left Highlighted Box */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 lg:p-10" data-aos="fade-left" data-aos-delay="150">
            <h2 className="text-lg sm:text-xl md:text-xl font-semibold text-[#1A1A1A] font-amiri mb-6">
              Our Lenses
            </h2>

            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-center py-3 sm:py-4 space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-[#00DE59] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-2.5 h-2.5 md:w-4 md:h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-800 text-sm sm:text-base font-inter">
                    {feature.ours}
                  </p>
                </div>

                {index < features.length - 1 && (
                  <div className="border-t border-dotted border-gray-300"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right Non-Highlighted Column */}
          <div className="text-left mt-8 md:mt-8 mx-5 md:mx-0 lg:mx-0"  data-aos="fade-right" data-aos-delay="150">
            <h2 className="text-lg md:text-xl lg:text-xl font-semibold text-gray-400 font-amiri mb-6">
              Others
            </h2>

            {features.map((feature, index) => (
              <div key={index}>
                <div className="py-3 sm:py-4">
                  <p className="text-[#666666] text-sm md:text-base font-inter">
                    {feature.others}
                  </p>
                </div>

                {index < features.length - 1 && (
                  <div className="border-t border-dotted border-gray-300"></div>
                )}
              </div>
            ))}
          </div>

        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center" data-aos="fade-down" data-aos-delay="100">
          <Link to="/UpgradeYourVision">
            <button className="bg-[#FD7D68] hover:bg-[#e56b56] text-white font-semibold px-6 sm:px-8 md:px-10 py-3 rounded-full text-sm sm:text-base md:text-base transition-all duration-300 shadow-md hover:shadow-lg">
              Upgrade Your Vision Today
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsWhyChooseUs;
