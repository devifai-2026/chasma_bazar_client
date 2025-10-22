import men from "../../assets/EveryOne/men.svg"
import women from "../../assets/EveryOne/women.svg"
import kid from "../../assets/EveryOne/kid.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ForEveryOne = () => {
      useEffect(() => {
    AOS.init({
      duration: 1000,       // smooth animation duration
      easing: "ease-out-cubic",
      once: false,          // allow reanimation when scrolling up
      mirror: true,         // animate again on scroll back
      offset: 150,          // start animation 150px before visible
    });
  }, []);
    return (
        <div className="bg-[#F6F6F6] mt-12 py-10">
            <h2 data-aos="fade-down" className="font-amiri text-center text-2xl md:text-4xl lg:text-5xl uppercase mb-8">For Everyone</h2>
            <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#FFFFFF] p-3 space-y-3 rounded-md"  data-aos="fade-left"
          data-aos-delay="200">
                    <img src={men} alt="" />
                    <p className="text-[#222222] font-amiri font-bold text-xl text-center">Men's Wear</p>
                </div>
                <div data-aos="fade-up"
          data-aos-delay="200" className="bg-[#FFFFFF]  p-3 space-y-3 rounded-md">
                    <img src={women} alt="" />
                    <p className="text-[#222222] font-amiri font-bold text-xl text-center"> Women’s Wear</p>
                </div>
                <div className="bg-[#FFFFFF] p-3 rounded-md space-y-3" data-aos="fade-right"
          data-aos-delay="400">
                    <img src={kid} alt="" />
                    <p className="text-[#222222] font-amiri font-bold text-xl text-center">Kids’ Wear</p>
                </div>
            </div>
            
        </div>
    );
};

export default ForEveryOne;