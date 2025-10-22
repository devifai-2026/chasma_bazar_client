import React, { useEffect } from "react";
import bannerImg from "../../assets/Banner/bannerImg.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,          // animation duration
      easing: "ease-out-cubic", // easing function
      once: false,             // false => animations occur on scroll in and out
      mirror: true,            // mirror animations on scroll up
    });
  }, []);

  return (
    <div className="bg-[#BEFCFF] max-w-[90%] mx-auto mt-12 rounded-md overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-center">

        {/* Left Content */}
        <div
          className="flex flex-col items-center lg:items-start justify-center space-y-4 mx-auto py-4"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-offset="100"
        >
          <h2
            className="text-3xl md:text-5xl font-bold font-amiri uppercase text-center lg:text-left"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            See the World <br /> in Style
          </h2>
          <p
            className="text-[#666666] font-inter text-center lg:text-left"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            Discover premium eyeglasses, sunglasses,<br /> and lenses designed for every face.
          </p>
          <div className="flex justify-start">
            <button
              className="bg-[#FD7D68] rounded-3xl py-2 px-4 text-white font-amiri text-xl"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="flex justify-center"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img src={bannerImg} alt="Banner" className="w-full max-w-md" />
        </div>

      </div>
    </div>
  );
};

export default Banner;
