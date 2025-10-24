import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import heroImg1 from "../../assets/HomeHeroImg1.png";
import img from "../../assets/about/aboutimg.svg";
import office from "../../assets/contact/office.svg";
import call from "../../assets/contact/call.svg";
import chat from "../../assets/contact/chat.svg";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div>
      <div
        className="flex justify-start w-[90%] mx-auto mt-4 pl-1 text-xl"
        data-aos="fade-up"
      >
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <div
        className="w-[90%] mx-auto mt-8 rounded-lg overflow-hidden relative h-[300px] flex items-center"
        style={{
          backgroundImage: `url(${heroImg1})`,
          backgroundPosition: "center",
          backgroundColor: "#0E798C",
        }}
        data-aos="fade-up"
      >
        <div
          className="pl-10 text-white font-serif"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h2 className="text-3xl font-semibold tracking-wide uppercase">Contact Us</h2>
        </div>
        <div
          className="hidden md:block absolute right-6 bottom-0"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src={img} alt="" className="h-[285px] object-contain" />
        </div>
      </div>

      <h2 className="font-amiri text-2xl md:text-3xl lg:text-5xl max-w-2xl mx-auto mt-16 uppercase text-center text-[#000000]">
        Need help? Contact our{" "}
      </h2>
      <h2 className="font-amiri text-2xl md:text-3xl lg:text-5xl max-w-2xl mx-auto uppercase text-center text-[#000000] mt-2">
        team for assistance.
      </h2>

      {/* cards */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[90%] mx-auto gap-8 mt-12">
        {/* 1 */}
        <div 
          className="relative"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          <div className="bg-[#EBF4F6] rounded-3xl p-6 w-52 lg:w-72 h-52 flex flex-col items-center justify-center mt-16 relative hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="font-amiri text-2xl text-center mb-3">
              Visit our office
            </h2>
            <p className="text-xs font-inter text-center leading-5 text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <img
            className="bg-[#FD7D68] rounded-full p-3 border-2 border-white absolute h-16 w-16 top-10 left-1/2 transform -translate-x-1/2 hover:rotate-12 transition-transform duration-300"
            src={office}
            alt=""
          />
        </div>
        {/* 2 */}
        <div 
          className="relative"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <div className="bg-[#EBF4F6] rounded-3xl p-6 w-52 lg:w-72 h-52 flex flex-col items-center justify-center mt-16 relative hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="font-amiri text-2xl text-center mb-3">
              Give us a call
            </h2>
            <p className="text-xs font-inter text-center leading-5 text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <img
            className="bg-[#FD7D68] rounded-full p-3 border-2 border-white absolute h-16 w-16 top-10 left-1/2 transform -translate-x-1/2 hover:rotate-12 transition-transform duration-300"
            src={call}
            alt=""
          />
        </div>
        {/* 3 */}
        <div 
          className="relative"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
        >
          <div className="bg-[#EBF4F6] rounded-3xl p-6 w-52 lg:w-72 h-52 flex flex-col items-center justify-center mt-16 relative hover:transform hover:scale-105 transition-all duration-300 ease-in-out">
            <h2 className="font-amiri text-2xl text-center mb-3">
              Chat with us
            </h2>
            <p className="text-xs font-inter text-center leading-5 text-[#666666]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>
          <img
            className="bg-[#FD7D68] rounded-full p-3 border-2 border-white absolute h-16 w-16 top-10 left-1/2 transform -translate-x-1/2 hover:rotate-12 transition-transform duration-300"
            src={chat}
            alt=""
          />
        </div>
      </div>

      {/* Form & Map Section */}
      <div className="max-w-[90%] mx-auto mt-20 mb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Contact Form */}
          <div 
            className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            <h2 className="font-amiri text-4xl mb-6">Get in touch</h2>
            <p className="text-[#666666] font-inter mb-8 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div 
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="600"
              >
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#0E798C] focus:border-transparent transition-all duration-300 hover:border-[#0E798C]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div 
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
              >
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#0E798C] focus:border-transparent transition-all duration-300 hover:border-[#0E798C]"
                  placeholder="yourmail@gmail.com"
                  required
                />
              </div>
              <div 
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="600"
              >
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#0E798C] focus:border-transparent transition-all duration-300 hover:border-[#0E798C]"
                  placeholder="Your phone number"
                />
              </div>
              <div 
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="600"
              >
                <textarea 
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#0E798C] focus:border-transparent resize-none transition-all duration-300 hover:border-[#0E798C]"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <div 
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-duration="600"
              >
                <button 
                  type="submit"
                  className="w-full bg-[#FD7D68] text-white py-3 px-6 rounded-3xl font-inter font-semibold hover:bg-[#e56a55] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Google Map with Contact Info */}
          <div 
            className="lg:w-1/2 space-y-6"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="800"
          >
            {/* Google Map Iframe */}
            <div className="w-full h-64 md:h-96 lg:h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14726.097481209598!2d88.345177!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a0b8e6f1ef%3A0xe23f80be5d9b2b3c!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1694599364142!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0 hover:scale-105 transition-transform duration-700"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;