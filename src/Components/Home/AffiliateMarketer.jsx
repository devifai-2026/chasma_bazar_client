import React from "react";
import img from "../../assets/affiliate/smart-confident-woman-offering-perfect-product-knowing-what-talking-about-standing-like-professional-Photoroom 1.svg";
import { Link } from "react-router-dom";

const AffiliateMarketer = () => {
  return (
    <div className="bg-[#FD7D68] mt-16 mb-16">
      <div className="max-w-[90%] mx-auto flex items-center justify-between flex-col lg:flex-row gap-6">
        {/* Text Content */}
        <div className="py-8 flex-1 text-center lg:text-left">
          <h2 
            className="font-amiri text-xl md:text-4xl lg:text-5xl text-white mb-5 uppercase"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Join as an Affiliate Marketer
          </h2>
          <p 
            className="font-inter text-white text-xs md:text-sm"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Love eyewear? Turn your passion into income!
          </p>
          <p 
            className="font-inter text-white text-xs md:text-sm"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            Join our affiliate program and earn commissions for every eyeglass or sunglass purchase made through your referral.
          </p>
         <Link to='/affiliate'>
             <button 
            className="bg-white text-black rounded-3xl py-2 px-4 font-amiri mt-5 hover:bg-gray-100 transition-colors duration-300"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            Join as an Affiliate
          </button>
         </Link>
        </div>
        
        {/* Image */}
        <div 
          className="flex-1"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <img 
            src={img} 
            alt="Confident woman offering perfect product" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AffiliateMarketer;