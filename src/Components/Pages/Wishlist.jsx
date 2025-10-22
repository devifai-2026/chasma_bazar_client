import React, { useEffect, useState } from "react"; 
import heroImg1 from "../../assets/HomeHeroImg1.png"; 
import heroImg2 from "../../assets/HeroMen.png";
import Breadcrumbs from "../Breadcrumbs";
import glassImg1 from "../../assets/BestSellers/Sunglass.svg";
import { FaTimes, FaCaretUp, FaCaretDown } from "react-icons/fa";
import img from "../../assets/Wishlist/Frame (4).svg"
import AOS from "aos";
import "aos/dist/aos.css";

const Wishlist = () => {
  const CardDataInit = [
    { id: 1, img: glassImg1, description: "Tempus leo eu aenean sed diam", price: 2099 },
    { id: 2, img: glassImg1, description: "Another product description", price: 1599 },
  ];

  const [CardData, setCardData] = useState(CardDataInit);
  const [quantities, setQuantities] = useState(CardDataInit.map(() => 1));

  const handleRemove = (index) => {
    const newData = [...CardData];
    newData.splice(index, 1);
    setCardData(newData);

    const newQuantities = [...quantities];
    newQuantities.splice(index, 1);
    setQuantities(newQuantities);
  };

  const handleQuantityChange = (index, type) => {
    const newQuantities = [...quantities];
    if (type === "increase") newQuantities[index] += 1;
    else if (type === "decrease" && newQuantities[index] > 1) newQuantities[index] -= 1;
    setQuantities(newQuantities);
  };

  const totalPrice = CardData.reduce((acc, item, i) => acc + item.price * quantities[i], 0);
  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    easing: "ease-out-cubic",
    once: true, // animate only once
    offset: 100, // trigger animation 100px before element enters viewport
  });
}, []);


  return (
    <div>
      {/* Breadcrumbs */}
      <div className="flex justify-start w-[90%] mx-auto mt-4 pl-1 text-xl" data-aos="fade-up">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <div
        className="w-[90%] mx-auto mt-8 rounded-lg overflow-hidden relative h-[300px] flex items-center"
        data-aos="fade-up"
        style={{ backgroundImage: `url(${heroImg1})`, backgroundPosition: "center", backgroundColor: "#0E798C" }}
      >
        <div className="pl-10 text-white font-serif" data-aos="fade-right" data-aos-delay="100">
          <h2 className="text-3xl font-semibold tracking-wide">YOUR WISHLIST</h2>
        </div>
        <div className="hidden md:block absolute right-6 bottom-0" data-aos="fade-left" data-aos-delay="200">
          <img src={heroImg2} alt="" className="h-[285px] object-contain" />
        </div>
      </div>

      {/* Wishlist Heading */}
      <div className="w-[90%] mx-auto p-1 mt-8">
        <div className="text-2xl font-amiri text-gray-800 flex justify-start pl-1" data-aos="fade-left" data-aos-delay="300">
          <h1>Wishlist ({CardData.length})</h1>
        </div>

        {/* Empty Wishlist State */}
        {CardData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12" data-aos="zoom-in">
            <img 
              src={img} 
              alt="Empty wishlist" 
              className="w-64 h-64 object-contain mb-6"
              
            />
            <h3 className="text-2xl font-semibold text-[#666666] mb-2">
             There are no products on the Wishlist!
            </h3>
           
          </div>
        ) : (
          /* Table/Grid */
          <div className="w-[95%] md:w-[90%] lg:w-[100%] mx-auto bg-white rounded-xl shadow-xl overflow-hidden mt-6">
            {/* Headings */}
            <div className="hidden md:grid grid-cols-[50px_2fr_1fr_120px_120px] gap-4 border-b border-gray-300 p-6 font-semibold text-gray-800 text-center">
              <div></div>
              <div className="">Product</div>
              <div className="mr-0 md:mr-24">Price</div>
              <div className="mr-0 md:mr-8">Quantity</div>
              <div></div>
            </div>

            {/* Rows */}
            {CardData.map((item, index) => (
              <div
                key={item.id}
                className={`grid md:grid-cols-[50px_2fr_1fr_120px_120px] items-center gap-4 p-4 md:p-6 ${
                  index !== CardData.length - 1 ? "border-b border-gray-200" : ""
                }`}
                 data-aos="fade-up"
    data-aos-delay={index * 100}
              >
                {/* Remove Icon */}
                <div className=" justify-center hidden md:flex">
                  <button
                    onClick={() => handleRemove(index)}
                    className="bg-gray-200 text-black rounded-full p-1 hover:bg-red-300 transition"
                    title="Remove Item"
                  >
                    <FaTimes size={14} />
                  </button>
                </div>

                {/* Product: Image + Description */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <img
                    src={item.img}
                    alt={item.description}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg"
                  />
                  <p className="text-gray-700 text-sm md:text-base ml-0 md:ml-24 text-cente">{item.description}</p>
                </div>

                {/* Price */}
                <div className="flex justify-center md:justify-center items-center text-gray-900 font-semibold mr-0 md:mr-28">
                  ₹{item.price *quantities[index]}
                </div>

                {/* Quantity */}
                <div className="hidden md:flex items-center justify-center border rounded-lg w-full max-w-[100px] mx-auto mr-0 md:mr-44 ">
                  <input
                    type="text"
                    readOnly
                    value={quantities[index]}
                    className="w-12 text-center text-gray-800 font-semibold focus:outline-none"
                  />
                  <div className="flex flex-col border-l border-gray-300 ">
                    <button
                      onClick={() => handleQuantityChange(index, "increase")}
                      className="px-2 py-1 hover:text-[#FD7D68]"
                    >
                      <FaCaretUp className="text-lg" />
                    </button>
                    <button
                      onClick={() => handleQuantityChange(index, "decrease")}
                      className="px-2 py-1 hover:text-[#FD7D68]"
                    >
                      <FaCaretDown className="text-lg" />
                    </button>
                  </div>
                </div>

                {/* Add To Cart Button */}
                <div className="flex justify-center md:justify-center col-span-1 mt-2 md:mt-0">
                  <button className="bg-[#FD7D68] text-white px-4 py-2 rounded-full text-sm md:text-base font-medium hover:bg-[#fc6b54] transition">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;