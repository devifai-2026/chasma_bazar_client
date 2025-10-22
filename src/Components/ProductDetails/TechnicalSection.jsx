import React, { useEffect } from 'react'
import MenCard1 from '../../assets/ProductDetails/ProductDetailsMen1.png'
import MenCard2 from '../../assets/ProductDetails/ProductDetailsMen2.png'
import MenCard3 from '../../assets/ProductDetails/ProductDetailsMen3.png'

import NewMenCardImg1  from '../../assets/ProductDetails/NewProductDetailImg1.png'
import NewMenCardImg2  from '../../assets/ProductDetails/NewProductDetailImg2.png'
import NewMenCardImg3  from '../../assets/ProductDetails/NewProductDetailImg3.png'
import NewMenCardImg4  from '../../assets/ProductDetails/NewProductDetailImg4.png'
import NewMenCardImg5  from '../../assets/ProductDetails/NewProductDetailImg5.png'
import NewMenCardImg6  from '../../assets/ProductDetails/NewProductDetailImg6.png'
import glassImg from '../../assets/ProductDetails/glassReview1img.png'

import { FaStar } from 'react-icons/fa'
import { FaGlasses } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnicalSection = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    easing: "ease-out-cubic",
    once: true, // animate only once
    offset: 100, // trigger animation 100px before element enters viewport
  });
}, []);

  
      const reviews = [
    {
      id: 1,
      name: "Sunil Hansdah",
      date: "7 May 2025",
      text: "In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer",
    },
    {
      id: 2,
      name: "Sunil Hansdah",
      date: "7 May 2025",
      text: "In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer",
    },
  ];
  return (
    <div>

        {/* Technical Information Section */}

      <div className="max-w-[90%] mx-auto pt-5" data-aos="fade-up">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 w-full">
        
        {/* Image Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[660px] mx-auto" data-aos="fade-left" data-aos-delay="150">
          <img
            src={NewMenCardImg1}
            alt="Product"
            className="w-full h-auto max-h-[320px] object-cover rounded-xl shadow-sm"
          />
           <img
            src={NewMenCardImg2}
            alt="Product"
            className="w-full h-auto max-h-[320px] object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* Technical Information Section */}
        <div className="flex-1 text-gray-800" data-aos="fade-right" data-aos-delay="100">
          <h2 className="text-2xl font-semibold mb-6 md:mb-8">
            Technical Information:
          </h2>

          <div className="space-y-4 text-[15px] md:text-base">
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>Select Your Frame:</span>
              <span className="font-medium">156200</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>Model Number:</span>
              <span className="font-medium">HM156200</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>Frame Size:</span>
              <span className="font-medium">Medium</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>Frame Width:</span>
              <span className="font-medium">135 MM</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>Frame Dimensions:</span>
              <span className="font-medium">51-17-135</span>
            </div>
            <div className="flex justify-between border-b border-gray-100 pb-1">
              <span>Frame Colour:</span>
              <span className="font-medium">Black</span>
            </div>
          </div>
        </div>

      </div>
    </div>
            
{/* View All Informations */}

        <div className="max-w-[90%] mx-auto pt-5"  data-aos="fade-up">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-9 w-full">
        
        {/* Left - Product Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[660px] mx-auto" data-aos="fade-left" data-aos-delay="250">
          <img
            src={NewMenCardImg3}
            alt="Product"
            className="w-full h-auto max-h-[320px] object-cover rounded-xl shadow-sm"
          />
           <img
            src={NewMenCardImg4}
            alt="Product"
            className="w-full h-auto max-h-[320px] object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* Right - Ratings + Reviews */}
        <div className="flex-1 text-gray-800" data-aos="fade-right" data-aos-delay="200">
          {/* Link */}
          <p className="text-sm text-[#FD7D68] underline cursor-pointer mb-4 hover:text-[#ff6e57]">
            View All Informations
          </p>

          {/* Ratings Section */}
          <h2 className="text-xl font-semibold mb-2">Ratings:</h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Left Side - Rating Value */}
            <div className="flex flex-row gap-4 items-center">
              <div className="text-4xl font-semibold">4.4</div>
              <FaStar className="text-yellow-400 text-xl mt-1" />
            </div>

            {/* Divider */}
            <div className="hidden md:block h-[80px] w-px bg-gray-300"></div>

            {/* Right Side - Rating Bars */}
            <div className="w-full md:w-[300px] space-y-1.5 text-sm">
              {[5, 4, 3, 2, 1].map((star, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-3 text-right">{star}</span>
                  <FaStar className="text-gray-500 text-xs" />
                  <div className="flex-1 h-[6px] bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${
                        star === 5
                          ? "w-[95%]"
                          : star === 4
                          ? "w-[87%]"
                          : star === 3
                          ? "w-[65%]"
                          : star === 2
                          ? "w-[50%]"
                          : "w-[20%]"
                      } bg-gray-400`}
                    ></div>
                  </div>
                  <span className="text-gray-600 text-xs w-10 text-right">
                    {star === 5
                      ? "9999"
                      : star === 4
                      ? "1999"
                      : star === 3
                      ? "599"
                      : star === 2
                      ? "199"
                      : "19"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Reviews */}
          <h2 className="text-4xl  font-amiri mt-8">Customer Reviews:</h2>
         
        </div>
      </div>
    </div>


{/* Customer Reviews: */}
       <div className="flex flex-col md:flex-row w-[90%] mx-auto my-5"  data-aos="fade-up"> 
  {/* Left Image Section */}
  <div className="flex-shrink-0 w-full md:w-[660px]"  data-aos="fade-left" data-aos-delay="450">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <img
        src={NewMenCardImg5}
        alt="Reviewer"
        className="w-full h-auto max-h-[320px] object-fill rounded-xl shadow-sm"
      />
      <img
        src={NewMenCardImg6}
        alt="Reviewer 2"
        className="w-full h-auto max-h-[320px] object-fill rounded-xl shadow-sm"
      />
    </div>
  </div>

  {/* Right Review Section */}
  <div className="md:w-1/2 mt-6 md:mt-0 md:pl-10 flex flex-col justify-center"  data-aos="fade-right" data-aos-delay="450">
    {reviews.map((review) => (
      <div key={review.id} className="pb-6 mb-6 border-b border-gray-200">
        <div className="flex items-start space-x-4">
          {/* Reviewer Avatar */}
          <div className="w-64 h-16 bg-gray-100 flex justify-center items-center rounded">
            <img
              src={glassImg}
              alt="Glasses"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Review Text */}
          <div>
            <p className="text-gray-700 leading-relaxed text-[15px] mb-3">
              {review.text}
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-2">
              <span>{review.name}</span>
              <span>|</span>
              <span>{review.date}</span>
            </div>
          </div>
        </div>
      </div>
    ))}

    {/* View All Reviews Link */}
    <div className="text-start mt-2">
      <button className="text-[#FF5B2E] hover:underline text-sm font-medium">
        View All Reviews
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default TechnicalSection
