import React, { useEffect, useState } from "react";
import { FaCaretUp, FaCaretDown, FaTimes } from "react-icons/fa";
import Breadcrumbs from "../Breadcrumbs";
import heroImg1 from "../../assets/HomeHeroImg1.png";
import heroImg2 from "../../assets/HeroMen.png";
import glassImg1 from "../../assets/BestSellers/Sunglass.svg";
import img from "../../assets/Wishlist/Frame (4).svg"
import AOS from "aos";
import "aos/dist/aos.css";

const AddToCart = () => {
  const [CardData, setCardData] = useState([
  {
    id: 1,
    img: glassImg1,
    description: "Tempus leo eu aenean sed diam",
    price: 2099,
  },
]);



const handleRemove =(index)=>{
   const newData = [...CardData];
   newData.splice(index,1)
   setCardData(newData)

   const newQuantities = [...quantities];
   newQuantities.slice(index,1);
   setQuantities(newQuantities)
}

  const [quantities, setQuantities] = useState(CardData.map(() => 1));

  const handleQuantityChange = (index, type) => {
    const newQuantities = [...quantities];
    if (type === "increase") newQuantities[index] += 1;
    else if (type === "decrease" && newQuantities[index] > 1)
      newQuantities[index] -= 1;
    setQuantities(newQuantities);
  };

  const totalPrice = CardData.reduce(
    (acc, item, i) => acc + item.price * quantities[i],
    0
  );
  const discount = 400;
  const payable = totalPrice - discount;

  useEffect(() => {
  AOS.init({
    duration: 800, // animation duration in ms
    easing: "ease-out-cubic",
    once: true,   // animate only once
    offset: 100,  // trigger 100px before element enters viewport
  });
}, []);


  return (
    <div>
      {/* Breadcrumbs */}
      <div className="flex justify-start w-[90%] mx-auto mt-4 pl-1 text-xl"   data-aos="fade-up">
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
        <div className="pl-10 text-white font-serif" data-aos="fade-right" data-aos-delay="100">
          <h2 className="text-3xl font-semibold tracking-wide">YOUR WISHLIST</h2>
        </div>
        <div className="hidden md:block absolute right-6 bottom-0" data-aos="fade-left" data-aos-delay="200">
          <img src={heroImg2} alt="" className="h-[285px] object-contain" />
        </div>
      </div>
<div className="flex justify-start w-[95%] md:w-[90%] lg:w-[85%] mx-auto mt-10 pl-5 md:pl-0" data-aos="fade-up" data-aos-delay="100">
  <h2 className="text-2xl md:text-xl lg:text-2xl font-amiri">
    Cart ({CardData.length})
  </h2>
</div>

      {/* Table Section */}
      <div className="w-[95%] md:w-[90%] lg:w-[90%] mx-auto bg-white rounded-xl shadow-xl overflow-hidden mt-8 p-4 mdp-6">
  {/* Responsive Scroll Wrapper */}
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse table-fixed">
      <thead className="hidden md:table-header-group">
        <tr className="border-b-2 border-gray-300 text-gray-800">
          <th className="w-[12%] py-3 px-2 text-center font-semibold"></th>
          <th className="w-[38%] py-3 px-2 text-center font-semibold text-lg">
            Product
          </th>
          <th className="w-[15%] py-3 px-2 text-center font-semibold text-lg">
            Price
          </th>
          <th className="w-[20%] py-3 px-2 text-center font-semibold text-lg">
            Quantity
          </th>
          <th className="w-[15%] py-3 px-2 text-center font-semibold text-lg">
            Total
          </th>
        </tr>
      </thead>

      <tbody>
  {CardData.length === 0 ? (
    <tr>
      <td colSpan={5}>
        <div className="flex flex-col items-center justify-center py-12" data-aos="zoom-in">
          <img 
            src={img} 
            alt="Empty cart" 
            className="w-64 h-64 object-contain mb-6"
          />
          <h3 className="text-2xl font-semibold text-[#666666] mb-2">
            Your cart is empty!
          </h3>
        </div>
      </td>
    </tr>
  ) : (
    CardData.map((item, index) => (
      <tr
        key={item.id}
        className="border-b border-gray-200 hover:bg-gray-50 transition md:table-row flex flex-col md:flex-row md:items-center md:justify-between w-full md:w-auto"
        data-aos="fade-up" data-aos-delay={200}
      >
        {/* Image + Cross */}
        <td className="py-4 px-2 text-center align-middle">
          <div className="flex items-center justify-center gap-3">
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 shadow-sm hover:bg-gray-300 hover:text-gray-800 transition-all duration-200"
              title="Remove Item"
              onClick={() => handleRemove(index)}
            >
              <FaTimes size={13} />
            </button>

            <div className="rounded-xl p-2 transition-all duration-200">
              <img
                src={item.img}
                alt={item.description}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
          </div>
        </td>

        {/* Product Name */}
        <td className="py-4 px-4 md:px-8 text-gray-700 text-base md:text-lg text-center md:text-center">
          <span className="block md:hidden font-semibold text-gray-600">
            Product:
          </span>
          {item.description}
        </td>

        {/* Price */}
        <td className="py-2 px-4 text-gray-900 font-semibold text-center">
          <span className="block md:hidden font-semibold text-gray-600">
            Price:
          </span>
          ₹{item.price}
        </td>

        {/* Quantity */}
        <td className="py-4 px-2 text-center align-middle">
          <span className="block md:hidden font-semibold text-gray-600 mb-1">
            Quantity:
          </span>
          <div className="flex items-center justify-center border rounded-lg w-20 mx-auto">
            <input
              type="text"
              readOnly
              value={quantities[index]}
              className="w-10 text-center text-gray-800 font-semibold focus:outline-none"
            />
            <div className="flex flex-col border-l border-gray-300">
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
        </td>

        {/* Total */}
        <td className="py-2 px-4 text-gray-900 font-semibold text-center">
          <span className="block md:hidden font-semibold text-gray-600">
            Total:
          </span>
          ₹{item.price * quantities[index]}
        </td>
      </tr>
    ))
  )}
</tbody>

    </table>
  </div>

  {/* Totals Section */}
  {CardData.length > 0 && (
  <div className="mt-6 text-center md:text-right text-gray-800 space-y-5 pr-5" data-aos="fade-up" data-aos-delay={200}>
    <p className="text-lg flex flex-wrap md:flex-nowrap gap-5 justify-center md:justify-end pr-0 md:pr-10">
      <span>Total Price:</span> <span>₹{totalPrice}</span>
    </p>
    <p className="text-lg flex flex-wrap md:flex-nowrap gap-5 justify-center md:justify-end pr-0 md:pr-10">
      <span className="font-semibold text-[#00EA90]">Discount:</span>
      <span className="text-[#00EA90]">-₹{discount}</span>
    </p>
    <p className="text-lg font-semibold flex flex-wrap md:flex-nowrap gap-5 justify-center md:justify-end pt-2 pr-0 md:pr-10">
      <span>Total Payable:</span>
      <span>₹{payable}</span>
    </p>

    <div className="flex justify-center md:justify-end pr-0 md:pr-6"  data-aos="fade-up" data-aos-delay={300}>
      <button className="mt-4 bg-[#FD7D68] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#fc6b54] transition">
        Proceed To Checkout
      </button>
    </div>
  </div>
)}

</div>

    </div>
  );
};

export default AddToCart;
