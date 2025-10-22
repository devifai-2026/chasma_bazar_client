import React, { useEffect, useRef, useState } from "react";

import Breadcrumbs from "../Breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

import bigImg from "../../assets/ProductDetails/pngwing.com 2.svg";
import cart from "../../assets/ProductDetails/CartImgFinal.png";
import one from "../../assets/ProductDetails/one.svg";
import two from "../../assets/ProductDetails/two.svg";
import three from "../../assets/ProductDetails/three.svg";
import four from "../../assets/ProductDetails/four.svg";
import five from "../../assets/ProductDetails/five.svg";
import WhyChooseUs from "../Home/WhyChooseUs";
import YouMayAlsoLike from "./YouMayAlsoLike";
import tryon from "../../assets/ProductDetails/tryon.svg";
import modalImg from "../../assets/ProductDetails/modalImg.svg";
import wishlist from "../../assets/ProductDetails/wishlist.svg";
import Webcam from "react-webcam";
import { RxCrossCircled } from "react-icons/rx";
import { Md360 } from "react-icons/md";
import image1 from "../../assets/360/Image2.png";
import image2 from "../../assets/360/Image1.png";
import glass1 from "../../assets/360/360GlassImg1.jpeg";
import glass2 from "../../assets/360/360GlassImg2.jpeg";
import glass3 from "../../assets/360/360GlassImg3.jpeg";
import glass4 from "../../assets/360/360GlassImg4.jpeg";
import glass5 from "../../assets/360/360GlassImg5.jpeg";
import glass6 from "../../assets/360/360GlassImg6.jpeg";
import glass7 from "../../assets/360/360GlassImg7.jpeg";
import TechnicalSection from "./TechnicalSection";
import ProductDetailsWhyChooseUs from "./ProductDetailsWhyChooseUs";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState(bigImg);
  const [isTryOnModalOpen, setIsTryOnModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(bigImg);
  const [isHovering, setIsHovering] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [showCamera, setShowCamera] = useState(false);
  const imgRef = useRef(null);
  const webcamRef = useRef(null);

  const [is360Open, setIs360Open] = useState(false);

  // 360° State
  const images360 = [glass1, glass2, glass3, glass4, glass5, glass6, glass7];
  const totalFrames = images360.length;
  const [frame, setFrame] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  // const [autoRotate, setAutoRotate] = useState(false);

  const handle360MouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handle360MouseUp = () => {
    setIsDragging(false);
  };

  const handle360MouseMove = (e) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    if (Math.abs(diff) > 5) {
      // adjust sensitivity
      if (diff > 0) {
        setFrame((prev) => (prev - 1 + totalFrames) % totalFrames);
      } else {
        setFrame((prev) => (prev + 1) % totalFrames);
      }
      setStartX(e.clientX);
    }
  };

  // // Auto rotation after manual drag
  // useEffect(() => {
  //   let interval;
  //   if (is360Open && autoRotate) {
  //     interval = setInterval(() => {
  //       setFrame((prev) => (prev + 1) % totalFrames);
  //     }, 1000); // slow auto-rotation
  //   }
  //   return () => clearInterval(interval);
  // }, [is360Open, autoRotate]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  const colors = [
    { id: 1, code: "#5E1295", name: "Purple" },
    { id: 2, code: "#435ED9", name: "Blue" },
    { id: 3, code: "#F84500", name: "Orange" },
    { id: 4, code: "#FFD62E", name: "Yellow" },
  ];

  const handleTryOnClick = () => {
    setIsTryOnModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsTryOnModalOpen(false);
  };

  const handleAgree = () => {
    setShowCamera(true);
  };
  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    localStorage.setItem("trialPhoto", imageSrc);
    alert("Photo saved for trial!");
    setShowCamera(false);
  };

  useEffect(() => {
  AOS.init({
    duration: 1000, // default animation duration
    easing: "ease-out-cubic",
    once: true, // animate only once on scroll
    offset: 100, // when to trigger the animation
  });
}, []);


  // Try On Modal Component within the same file
  const TryOnModal = () => {
    if (!isTryOnModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 shadow-xl relative">
          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 transition-colors duration-200"
          >
            <RxCrossCircled
              size={28} // icon size
              className="text-gray-800 hover:text-red-500" // default & hover color
            />
          </button>

          {/* Header */}
          {!showCamera && (
            <>
              <div className="flex items-center justify-center mb-3">
                <img src={modalImg} alt="Virtual Try-On" />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-amiri text-gray-800 font-bold mb-3">
                  Enjoy a safe, privacy-friendly virtual try-on experience,
                  brought to you by ChashmahBazar
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-xs md:text-sm text-center text-[#666666]">
                  Please read our privacy policy before accessing the service
                </p>
              </div>

              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleAgree}
                  className="flex-1 bg-[#FD7D68] text-white py-2 px-1 rounded-3xl font-semibold hover:bg-[#e56b56] transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  I agree
                </button>
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 px-1 rounded-3xl font-semibold hover:bg-gray-300 transition-all duration-300 border border-gray-300"
                >
                  I disagree
                </button>
              </div>
            </>
          )}

          {/* Camera View */}
          {showCamera && (
            <div className="flex flex-col items-center justify-center">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="rounded-xl"
              />
              <button
                onClick={capturePhoto}
                className="mt-4 bg-[#FD7D68] text-white py-2 px-4 rounded-3xl font-semibold hover:bg-[#e56b56] transition-all duration-300 shadow-md"
              >
                Capture Photo
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
  const Product360Modal = () => {
    if (!is360Open) return null;
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-2 md:p-4">
        <div className="relative bg-white rounded-2xl p-3 md:p-6 shadow-xl flex flex-col items-center w-full max-w-[95%] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px]">
          {/* Close Button */}
          <button
            onClick={() => setIs360Open(false)}
            className="absolute top-2 right-2 md:top-3 sm:right-3 text-gray-700 hover:text-red-500 transition-all duration-200"
          >
            <RxCrossCircled size={28} />
          </button>

          {/* Product Image */}
          <img
            src={images360[frame]}
            alt="360 product view"
            className="w-full max-h-[70vh] object-contain select-none cursor-grab rounded-lg"
            onMouseDown={handle360MouseDown}
            onMouseUp={handle360MouseUp}
            onMouseLeave={handle360MouseUp}
            onMouseMove={handle360MouseMove}
          />

          {/* Info Text */}
          <p className="text-xs sm:text-sm text-gray-500 mt-3 text-center px-2">
            Drag to rotate or watch auto-rotation
          </p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-[90%] mx-auto mt-8">
        <Breadcrumbs></Breadcrumbs>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Product Images */}
            <div className="bg-[#FFFFFF] shadow-md rounded-lg p-4 md:p-6 flex flex-col">
              {/* Rating and Try On Button */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-orange-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <div className="flex items-center gap-1 ml-2">
                    <span className="text-gray-800 font-semibold">4.9</span>
                    <span className="text-gray-500 text-sm">(1999)</span>
                  </div>
                </div>

                <button
                  onClick={handleTryOnClick}
                  className="bg-[#FD7D68] flex items-center gap-2 py-2 px-4 rounded-3xl text-white text-sm md:text-base hover:bg-[#e56b56] transition-colors"
                >
                  <img
                    src={tryon}
                    alt="Try On"
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  Try On
                </button>
              </div>

              {/* Main Product Image */}
              <div
                className="flex items-center justify-center mx-auto mb-6 h-[150px] md:max-h-[300px] w-auto md:w-full relative group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onMouseMove={handleMouseMove}
                  data-aos="fade-up"
  data-aos-delay="200"
              >
                <button
                  onClick={() => setIs360Open(true)}
                  className="absolute left-1 -bottom-5 md:left-1 md:bottom-1 bg-[#FD7D68] text-white 
                           rounded-full shadow-md hover:bg-[#e56b56] transition-all duration-300 
                           flex flex-col items-center justify-center 
                           w-12 h-12 md:w-14 md:h-14 z-20"
                  title="View 360°"
                >
                  <Md360 className="w-5 h-5 md:w-6 md:h-6 text-white mb-[1px]" />
                  <span className="text-[10px] md:text-xs font-semibold leading-none">
                    360
                  </span>
                </button>

                {/* Main Product Image */}
                <img
                  ref={imgRef}
                  src={selectedImg}
                  alt="Main Product"
                    data-aos="fade-left"
  data-aos-delay="300"
                  className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105 cursor-crosshair"
                />

                {/* Blue mesh overlay (desktop only) */}
                {isHovering && (
                  <div
                    className="hidden md:block absolute pointer-events-none border border-blue-500 rounded-sm"
                    style={{
                      width: "150px",
                      height: "150px",
                      left: `calc(${zoomPos.x}% - 50px)`,
                      top: `calc(${zoomPos.y}% - 50px)`,
                      backgroundImage: `
          linear-gradient(to right, rgba(59,130,246,0.3) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(59,130,246,0.3) 1px, transparent 1px)
        `,
                      backgroundSize: "8px 8px",
                      backgroundColor: "rgba(59,130,246,0.1)",
                      boxShadow: "0 0 8px rgba(59,130,246,0.4)",
                      zIndex: 10,
                    }}
                  ></div>
                )}

                {/* Zoomed Image (desktop only) */}
                {isHovering && (
                  <div className="hidden md:block absolute top-1/2 left-[105%] -translate-y-1/2 w-[610px] h-[470px] border border-gray-200 overflow-hidden z-10 bg-white shadow-lg rounded-md">
                    <img
                      src={selectedImg}
                      alt="Zoomed"
                      className="absolute object-contain transition-transform duration-100 pt-14"
                      style={{
                        transform: `translate(-${zoomPos.x}%, -${zoomPos.y}%) scale(2.4)`,
                        transformOrigin: "top left",
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              <div className="bg-[#2222220A] rounded-lg p-3 md:p-4"   data-aos="fade-right"
  data-aos-delay="300">
                <div className="flex items-center justify-between gap-2 md:gap-4 overflow-x-auto">
                  {[one, two, three, four, five].map((img, idx) => (
                    <img
                      key={idx}
                      onClick={() => setSelectedImg(img)}
                      className="bg-white p-2 rounded-md flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow"
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Product Details */}
            {!isHovering && (
              <div className="hidden md:block space-y-5 md:space-y-6"   data-aos="fade-up"
  data-aos-delay="300">
                <h2 className="text-2xl md:text-4xl font-amiri uppercase leading-tight">
                  Tempus leo eu aenean sed diam
                </h2>
                <p className="text-lg md:text-xl font-semibold font-amiri">
                  ₹1999{" "}
                  <span className="line-through text-red-500 ml-2">₹2999</span>
                </p>

                {/* Frame Selection */}
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="font-inter text-[#222222] text-sm md:text-base">
                    Select Your Frame:
                  </p>
                  <div className="relative">
                    <select className="appearance-none border border-[#222222] rounded-3xl py-2 pl-4 pr-10 font-inter text-xs md:text-base bg-white cursor-pointer transition-all duration-300 hover:border-[#FD7D68] focus:outline-none focus:border-[#FD7D68]">
                      <option value="frame1">Classic Aviator</option>
                      <option value="frame2">Vintage Round</option>
                      <option value="frame3">Wayfarer</option>
                      <option value="frame4">Cat Eye</option>
                      <option value="frame5">Rectangle</option>
                      <option value="frame6">Sports Wrap</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg
                        className="w-4 h-4 text-[#222222]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Color Selection */}
                <div className="flex items-center gap-3 flex-wrap ">
                  <p className="font-inter text-[#222222] text-sm md:text-base">
                    Select Your Colour:
                  </p>
                  <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className="relative rounded-full transition-all duration-300 hover:scale-110"
                        style={{
                          border:
                            selectedColor === color.id
                              ? `2px solid ${color.code}`
                              : "2px solid transparent",
                          padding: "2px",
                        }}
                      >
                        <div
                          className="rounded-full w-5 h-5 md:w-8 md:h-8"
                          style={{ backgroundColor: color.code }}
                        ></div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div>
                  <div className="flex flex-col md:flex-row items-center gap-4 w-full pt-0 md:pt-2 lg:pt-4">
                    <button className="bg-[#FD7D68] text-white font-amiri text-lg sm:text-xl px-6 md:px-10 py-3 rounded-3xl w-full md:w-auto flex items-center justify-center gap-2 shadow-lg transform transition-all duration-300 hover:bg-[#e56b56] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:ring-opacity-50">
                      Buy Now
                    </button>

                    <button className="bg-white text-[#FD7D68] font-amiri text-lg md:text-xl px-4 md:px-12 py-3 rounded-3xl w-full md:w-auto flex items-center justify-center gap-2 border border-[#FD7D68] shadow-lg transform transition-all duration-300 hover:bg-[#FD7D68] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:ring-opacity-50">
                      <img
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        src={cart}
                        alt="Cart"
                      />
                      Add To Cart
                    </button>

                    <img
                      className="h-10 sm:h-12 w-10 sm:w-12 cursor-pointer hover:scale-110 transition-transform duration-300"
                      src={wishlist}
                      alt="Wishlist"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className=" block md:hidden lg:hidden space-y-5 md:space-y-6"   data-aos="fade-left"
  data-aos-delay="300">
              <h2 className="text-2xl md:text-4xl font-amiri uppercase leading-tight">
                Tempus leo eu aenean sed diam
              </h2>
              <p className="text-lg md:text-xl font-semibold font-amiri">
                ₹1999{" "}
                <span className="line-through text-red-500 ml-2">₹2999</span>
              </p>

              {/* Frame Selection */}
              <div className="flex items-center gap-3 flex-wrap">
                <p className="font-inter text-[#222222] text-sm md:text-base">
                  Select Your Frame:
                </p>
                <div className="relative">
                  <select className="appearance-none border border-[#222222] rounded-3xl py-2 pl-4 pr-10 font-inter text-xs md:text-base bg-white cursor-pointer transition-all duration-300 hover:border-[#FD7D68] focus:outline-none focus:border-[#FD7D68]">
                    <option value="frame1">Classic Aviator</option>
                    <option value="frame2">Vintage Round</option>
                    <option value="frame3">Wayfarer</option>
                    <option value="frame4">Cat Eye</option>
                    <option value="frame5">Rectangle</option>
                    <option value="frame6">Sports Wrap</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-4 h-4 text-[#222222]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Color Selection */}
              <div className="flex items-center gap-3 flex-wrap ">
                <p className="font-inter text-[#222222] text-sm md:text-base">
                  Select Your Colour:
                </p>
                <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                  {colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className="relative rounded-full transition-all duration-300 hover:scale-110"
                      style={{
                        border:
                          selectedColor === color.id
                            ? `2px solid ${color.code}`
                            : "2px solid transparent",
                        padding: "2px",
                      }}
                    >
                      <div
                        className="rounded-full w-5 h-5 md:w-8 md:h-8"
                        style={{ backgroundColor: color.code }}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div>
                <div data-aos="fade-right" data-aos-delay="400" className="flex flex-col md:flex-row items-center gap-4 w-full pt-0 md:pt-2 lg:pt-4">
                  <button className="bg-[#FD7D68] text-white font-amiri text-lg sm:text-xl px-6 md:px-10 py-3 rounded-3xl w-full md:w-auto flex items-center justify-center gap-2 shadow-lg transform transition-all duration-300 hover:bg-[#e56b56] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:ring-opacity-50">
                    Buy Now
                  </button>

                  <button className="bg-white text-[#FD7D68] font-amiri text-lg md:text-xl px-4 md:px-12 py-3 rounded-3xl w-full md:w-auto flex items-center justify-center gap-2 border border-[#FD7D68] shadow-lg transform transition-all duration-300 hover:bg-[#FD7D68] hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:ring-opacity-50">
                    <img
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      src={cart}
                      alt="Cart"
                    />
                    Add To Cart
                  </button>

                  <img
                    className="h-10 sm:h-12 w-10 sm:w-12 cursor-pointer hover:scale-110 transition-transform duration-300"
                    src={wishlist}
                    alt="Wishlist"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechnicalSection />

      {/* Try On Modal - Rendered here */}
      <TryOnModal />
      <Product360Modal />
      <ProductDetailsWhyChooseUs />
      <YouMayAlsoLike></YouMayAlsoLike>
    </div>
  );
};

export default ProductDetails;
