 import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const WhyChooseUs = () => {
    const features = [
        {
            ours: "Advanced Anti Scratch Protection",
            others: "Basic scratch resistance"
        },
        {
            ours: "HD Crystal Clear Vision",
            others: "Standard clarity"
        },
        {
            ours: "Blue Light & UV Protection",
            others: "No blue light filter"
        },
        {
            ours: "Ultra Light & Durable",
            others: "Heavy & fragile"
        },
        {
            ours: "1 Year Warranty Included",
            others: "Limited warranty"
        }
    ];
    useEffect(() => {
  AOS.init({
    duration: 1000,        // animation duration in ms
    easing: "ease-out-cubic",
    once: false,           // false = animate every time on scroll
    mirror: true,          // true = animate again when scrolling back up
    offset: 200,           // start animation 200px before element enters view
  });
}, []);

    return (
       <div className='bg-[#F6F6F6]'>
         <div className="max-w-[90%] mx-auto mt-8 md:mt-16">
            <div className="bg-[] rounded-xl md:rounded-2xl p-4 md:p-8">
                <h1 className="text-lg md:text-xl lg:text-4xl font-amiri text-gray-800 text-center mb-6 md:mb-12" data-aos="fade-down">
                    WHY CHOOSE OUR LENSES?
                </h1>
                
                <div className="mb-8 md:mb-12 mx-auto">
                    {/* Headers */}
                    <div className="grid grid-cols-2 gap-4 md:gap-12 mb-4 md:mb-8" data-aos="fade-up">
                        <h2 className="text-base md:text-lg lg:text-3xl text-gray-800 font-amiri">Our Lenses</h2>
                        <div className="flex justify-center">
                            <div className="w-full max-w-xs text-left">
                                <h2 className="text-base md:text-lg lg:text-3xl font-semibold text-gray-400 font-amiri">Others</h2>
                            </div>
                        </div>
                    </div>
                    
                    {/* Feature Rows with Dotted Lines */}
                   <div className="space-y-0">
    {features.map((feature, index) => (
        <div key={index} data-aos="fade-up" data-aos-delay={200 + index * 100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 md:gap-12 py-3 md:py-6">
                {/* Our Lenses Side */}
                <div className="flex items-center justify-between text-left bg-[#EEEEEE] shadow-md rounded-lg px-3 md:px-4 py-2 md:py-3 order-1">
                    <div className="flex items-center space-x-2 md:space-x-3 w-full">
                        <div className="flex-shrink-0">
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-[#00DE59] rounded-full flex items-center justify-center">
                                <svg className="w-2 h-2 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-gray-800 text-xs md:text-sm font-inter flex-1">
                            {feature.ours}
                        </p>
                    </div>
                </div>
                
                {/* Others Side */}
                <div className="flex items-center justify-start sm:justify-center order-2 sm:order-3">
                    <div className="w-full text-left py-1 sm:py-2 md:py-3">
                        <p className="text-[#666666] font-inter text-xs md:text-sm">
                            {feature.others}
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Full Width Dotted Line Below Each Row */}
            {index < features.length - 1 && (
                <div className="w-full border-t-2 border-dotted border-gray-300"></div>
            )}
        </div>
    ))}
</div>
                </div>
                
                <div className="text-center" data-aos="zoom-in" data-aos-delay="300">

                    
                  <Link to='/UpgradeYourVision'>
                    <button className="bg-[#FD7D68] hover:bg-[#e56b56] text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg  ">
                        Upgrade Your Vision Today
                    </button></Link>
                </div>
            </div>
        </div>
       </div>
    );
};

export default WhyChooseUs;