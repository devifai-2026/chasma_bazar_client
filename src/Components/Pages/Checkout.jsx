import React from "react";
import { Link, useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { totalPrice = 0, discount = 0, payable = 0 } = location.state || {};

  return (
    <div>
      {/* Custom Breadcrumbs for Checkout */}
      <div className="flex justify-start w-[90%] mx-auto mt-4 pl-1 text-xl" data-aos="fade-up">
        <nav className="flex items-center space-x-2 text-sm font-inter py-4">
          <Link 
            to="/" 
            className="text-[#666666] hover:text-[#FD7D68] transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-[#666666]">›</span>
          <Link 
            to="/cart"
            className="text-[#666666] hover:text-[#FD7D68] transition-colors duration-300"
          >
            Cart
          </Link>
          <span className="text-[#666666]">›</span>
          <span className="text-[#222222] font-medium">Checkout</span>
        </nav>
      </div>

      <div className="mt-8 md:mt-16 max-w-[90%] mx-auto">
        <h2 className="text-3xl md:text-5xl font-amiri text-center mb-8 md:mb-12">CHECKOUT</h2>

        <div className="flex items-start justify-between flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side - Address Form */}
          <div className="w-full lg:flex-1" data-aos="fade-right" data-aos-duration="800">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full">
              <h3 className="text-xl md:text-2xl font-amiri text-center mb-6 md:mb-8">Address</h3>

              <form className="space-y-4 md:space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    placeholder="yourmail@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  />
                </div>

                {/* Pin Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Pin"
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  />
                </div>

                {/* Address Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  />
                </div>

                {/* Address 2 (Optional) Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Address 2 (Optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  />
                </div>

                {/* Landmark Field */}
                <div>
                  <input
                    type="text"
                    placeholder="Landmark"
                    className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Dynamic Price Summary */}
          <div
            className="w-full lg:flex-1"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full">
              {/* Price Details */}
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg">Total Price:</span>
                  <span className="text-base md:text-lg font-semibold">₹{totalPrice}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-base md:text-lg text-[#00EA90]">Discount</span>
                  <span className="text-base md:text-lg text-[#00EA90]">-₹{discount}</span>
                </div>

                <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-300">
                  <span className="text-lg md:text-xl font-semibold">Total Payable:</span>
                  <span className="text-lg md:text-xl font-semibold">₹{payable}</span>
                </div>
              </div>

              {/* Submit Button */}
              <Link
                to="/payment"
                state={{
                  totalPrice: totalPrice,
                  discount: discount,
                  payable: payable,
                }}
              >
                <button className="w-full bg-[#FD7D68] text-white py-3 px-6 rounded-3xl font-amiri text-base md:text-lg hover:bg-[#e56a55] transition-colors duration-300 shadow-md hover:shadow-lg">
                  Save Address & Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;