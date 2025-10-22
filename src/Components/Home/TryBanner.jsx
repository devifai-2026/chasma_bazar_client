import tryBanner from "../../assets/TryBanner/tryBanner.svg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const TryBanner = () => {
    useEffect(() => {
    AOS.init({
      duration: 1000,        // animation duration
      easing: "ease-out-cubic",
      once: false,           // allow re-animation on scroll
      mirror: true,          // animate on scroll up too
      offset: 200,           // trigger point
    });
  }, []);
    return (
         <div className="bg-[#BEFCFF] max-w-[90%] mx-auto mt-12 rounded-md">
                  <div className="flex justify-between flex-col lg:flex-row">
                     <div 
                     data-aos='fade-right'
                         data-aos-delay="200"
                         data-aos-offset="250"
                     className="flex flex-col items-center lg:items-start  justify-center space-y-4 mx-auto py-6">
                       <h2     data-aos='fade-right'
                         data-aos-delay="300"
                          className="text-3xl md:text-5xl font-bold font-amiri uppercase text-center lg:text-left">Try Before You Buy</h2>
                       <p 
                        data-aos='fade-right'
                         data-aos-delay="500"
                       className="text-[#666666] font-inter text-center lg:text-left text-sm">Use our Virtual Try On tool to see how frames look on <br /> your face in real time</p>
                         <div className="flex justify-start">
                            <button   data-aos='zoom-in'
                         data-aos-delay="700" className="bg-[#FD7D68] rounded-3xl py-2 px-4 text-white font-amiri text-xl">Try It Now</button>
                         </div>
                   </div>
                   <div data-aos="fade-left"
          data-aos-delay="400"
          data-aos-offset="250" className="flex justify-center p-3">
                    <img src={tryBanner} alt="" />
                   </div>
                  </div>
                </div>
    );
};

export default TryBanner;