import React, { useState } from "react";
import mg from "../../assets/Navbar/mg.svg";
import wishlist from "../../assets/Navbar/wishlist.svg";
import cart from "../../assets/Navbar/cart.svg";
import profile from "../../assets/Navbar/profile.svg";
import mensEyeGlasses from "../../assets/Navbar/mens.svg";
import womensEyeGlasses from "../../assets/Navbar/womens.svg";
import kidsEyeGlasses from "../../assets/Navbar/kids.svg";
import mensSunglass from "../../assets/Navbar/menSunglass.svg"
import womensSunglass from "../../assets/Navbar/womenSunglass.svg"
import kidsSunglass from "../../assets/Navbar/kidsSunglass.svg"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEyeglassesOpen, setIsEyeglassesOpen] = useState(false);
  const [isSunglassesOpen, setIsSunglassesOpen] = useState(false);
  const [isTopFramesOpen, setIsTopFramesOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  // Function to handle navigation and close modal
  const handleNavigation = (path) => {
    // Close the modal first
    setIsEyeglassesOpen(false);
    // Navigation will be handled by the Link component
  };

  return (
    <div className="max-w-[90%] mx-auto">
      {/* Main Navbar */}
      <div className="flex justify-between items-center mt-5">
        <div>
         <Link to='/'> <h2 className="text-3xl font-amiri">Logo</h2></Link>
        </div>
        
        {/* Desktop Menu - Hidden on mobile and md */}
        <div className="hidden lg:flex justify-between items-center gap-6">
          <button 
            onClick={() => setIsEyeglassesOpen(true)}
            className={`text-[#222222] text-base hover:text-[#FD7D68] transition-colors`}
          >
            Eyeglasses
          </button>
          <button 
            onClick={() => setIsSunglassesOpen(true)}
            className="text-[#222222] text-base hover:text-[#FD7D68] transition-colors"
          >
            Sunglasses
          </button>
          <button 
            onClick={() => setIsTopFramesOpen(true)}
            className="text-[#222222] text-base hover:text-[#FD7D68] transition-colors"
          >
            Top Frames
          </button>
          {/* <Link to='/accessories'><p className="text-[#222222] text-base py-2 hover:text-[#FD7D68]">Accessories</p></Link> */}
          <Link to='/contactUs'><p className="text-[#222222] text-base hover:text-[#FD7D68]">Contact</p></Link>
          <Link to='/aboutUs'><p className="text-[#222222] text-base hover:text-[#FD7D68]">About Us</p></Link>
        </div>

        {/* Desktop Icons - Hidden on mobile and md */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          <button onClick={() => setIsSearchOpen(true)}>
            <img src={mg} alt="Search" className="w-6 h-6" />
          </button>
          <Link to='/wishlist'><img src={wishlist} alt="Wishlist" className="w-6 h-6" /></Link>
          <Link to='/cart'><img src={cart} alt="Cart" className="w-6 h-6" /></Link>
          <Link to='/signup'><img src={profile} alt="Profile" className="w-6 h-6" /></Link>
        </div>

        {/* Hamburger Menu Button - Visible on both sm and md devices */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSearchOpen(true)}>
              <img src={mg} alt="Search" className="w-6 h-6" />
            </button>
            <Link to='/wishlist'><img src={wishlist} alt="Wishlist" className="w-6 h-6" /></Link>
            <Link to='/cart'><img src={cart} alt="Cart" className="w-5 h-5" /></Link>
           <Link to='/signup'> <img src={profile} alt="Profile" className="w-5 h-5" /></Link>
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-6 h-6"
          >
            <span className={`bg-[#222222] h-0.5 w-6 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`bg-[#222222] h-0.5 w-6 rounded my-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bg-[#222222] h-0.5 w-6 rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slides down when open (for both sm and md) */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white py-4 space-y-4 mt-4 border-t">
          <button 
            onClick={() => setIsEyeglassesOpen(true)}
            className="text-[#222222] text-base py-2 border-b w-full text-left hover:text-[#FD7D68]"
          >
            Eyeglasses
          </button>
          <button 
            onClick={() => setIsSunglassesOpen(true)}
            className="text-[#222222] text-base py-2 border-b w-full text-left hover:text-[#FD7D68]"
          >
            Sunglasses
          </button>
          <button 
            onClick={() => setIsTopFramesOpen(true)}
            className="text-[#222222] text-base py-2 border-b w-full text-left hover:text-[#FD7D68]"
          >
            Top Frames
          </button>
          <Link to='/accessories'><p className="text-[#222222] text-base py-2 hover:text-[#FD7D68]">Accessories</p></Link>
          <Link to='/contactUs'><p className="text-[#222222] text-base py-2 border-b hover:text-[#FD7D68]">Contact</p></Link>
         <Link to='/aboutUs'> <p className="text-[#222222] text-base py-2 border-b hover:text-[#FD7D68]">About Us</p></Link>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-end pt-20 md:pr-8 lg:pr-12">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 animate-scaleIn">
            <div className="flex justify-end items-center">
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold mr-2"
              >
                ×
              </button>
            </div>
            <div className="py-5 pb-8 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 pr-16 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD7D68] text-lg rounded-full"
                  autoFocus
                />
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#FD7D68] p-3 rounded-full hover:bg-[#e56b56] transition-colors">
                  <img src={mg} alt="Search" className="w-6 h-6 filter invert" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Eyeglasses Modal - WITH CLICKABLE LINKS */}
      {isEyeglassesOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-center pt-32 md:pr-8 lg:pr-12">
          <div className="relative w-full max-w-4xl mx-4">
            {/* 👇 Curved Pointer Add-on (safe, outside the card) */}
            <div className="hidden md:block absolute -top-3 left-60">
              <div className="w-10 h-10 bg-white rotate-45 rounded-xl"></div>
            </div>

            {/* 👇 Your untouched original card code */}
            <div className="bg-white rounded-lg shadow-xl w-full animate-scaleIn max-h-[80vh] overflow-hidden flex flex-col">
              <div className="flex justify-end items-center p-4 flex-shrink-0">
                <button
                  onClick={() => setIsEyeglassesOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold p-1"
                >
                  ×
                </button>
              </div>

              <div className="px-6 pb-6 overflow-y-auto">
                {/* Categories Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
                  {/* Men's Eyewear - Clickable Link */}
                  <Link 
                    to="/mensEyeGlasses" 
                    className="text-center group cursor-pointer"
                    onClick={() => handleNavigation("/mensEyeGlasses")}
                  >
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        className="h-48 w-48 md:h-64 md:w-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                        src={mensEyeGlasses} 
                        alt="Men's Eyewear" 
                      />
                    </div>
                    <p className="text-center font-amiri text-[#222222] text-xl md:text-2xl mt-2 group-hover:text-[#FD7D68] transition-colors">
                      Men's Eyewear
                    </p>
                  </Link>

                  {/* Women's Eyewear - Clickable Link */}
                  <Link 
                    to="/WomensEyeGlasses" 
                    className="text-center group cursor-pointer"
                    onClick={() => handleNavigation("/WomensEyeGlasses")}
                  >
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        className="h-48 w-48 md:h-64 md:w-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                        src={womensEyeGlasses} 
                        alt="Women's Eyewear" 
                      />
                    </div>
                    <p className="text-center font-amiri text-[#222222] text-xl md:text-2xl mt-2 group-hover:text-[#FD7D68] transition-colors">
                      Women's Eyewear
                    </p>
                  </Link>

                  {/* Kid's Eyewear - Clickable Link */}
                  <Link 
                    to="/KidsEyeGlasses" 
                    className="text-center group cursor-pointer"
                    onClick={() => handleNavigation("/KidsEyeGlasses")}
                  >
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        className="h-48 w-48 md:h-64 md:w-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                        src={kidsEyeGlasses} 
                        alt="Kid's Eyewear" 
                      />
                    </div>
                    <p className="text-center font-amiri text-[#222222] text-xl md:text-2xl mt-2 group-hover:text-[#FD7D68] transition-colors">
                      Kid's Eyewear
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sunglasses Modal - WITHOUT CLICKABLE LINKS (ORIGINAL VERSION) */}
      {isSunglassesOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-start justify-center pt-32 md:pr-8 lg:pr-12">
          <div className="relative w-full max-w-4xl mx-4">
            {/* 👇 Curved Pointer Add-on (safe, outside the card) */}
            <div className="hidden md:block absolute -top-3 left-80">
              <div className="w-10 h-10 bg-white rotate-45 rounded-lg"></div>
            </div>

            {/* 👇 Your original card code */}
            <div className="bg-white rounded-lg shadow-xl w-full animate-scaleIn max-h-[80vh] overflow-hidden flex flex-col">
              <div className="flex justify-end items-center p-4">
                <button 
                  onClick={() => setIsSunglassesOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="px-6 pb-6 overflow-y-auto">
                {/* Categories Section */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <img className="h-64 w-64" src={mensSunglass} alt="" />
                    <p className="text-center font-amiri text-[#222222] text-2xl">Men</p>
                  </div>
                  <div>
                    <img className="h-64 w-64" src={womensSunglass} alt="" />
                    <p className="text-center font-amiri text-[#222222] text-2xl">Women</p>
                  </div>
                  <div>
                    <img className="h-64 w-64" src={kidsSunglass} alt="" />
                    <p className="text-center font-amiri text-[#222222] text-2xl">Kids</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Frames Modal */}
      {isTopFramesOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-start justify-center pt-32 md:pr-8 lg:pr-12">
          <div className="relative w-full max-w-4xl mx-4">
            {/* 👇 Curved Pointer Add-on (safe, outside the card) */}
            <div className="hidden md:block absolute -top-3 left-[48%]">
              <div className="w-10 h-10 bg-white rotate-45 rounded-lg"></div>
            </div>

            {/* 👇 Your original Top Frames card */}
            <div className="bg-white rounded-lg shadow-xl w-full animate-scaleIn max-h-[80vh] overflow-hidden flex flex-col">
              <div className="flex justify-end items-center p-4 flex-shrink-0">
                <button 
                  onClick={() => setIsTopFramesOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold p-1"
                >
                  ×
                </button>
              </div>
              
              <div className="px-6 pb-6 overflow-y-auto">
                {/* Top Frames Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column - Classics */}
                  <div>
                    <h3 className="font-amiri text-2xl text-[#222222] mb-4 border-b pb-2">Classics</h3>
                    <ul className="space-y-3">
                      <li className="text-[#666666] hover:text-[#FD7D68] cursor-pointer transition-colors">All Tops</li>
                      <li className="text-[#666666] hover:text-[#FD7D68] cursor-pointer transition-colors">New Arrivals</li>
                      <li className="text-[#666666] hover:text-[#FD7D68] cursor-pointer transition-colors">Best Sellers</li>
                      <li className="text-[#666666] hover:text-[#FD7D68] cursor-pointer transition-colors">Sun Tops</li>
                    </ul>
                  </div>

                  {/* Right Column - Limited Edition */}
                  <div>
                    <h3 className="font-amiri text-2xl text-[#222222] mb-4 border-b pb-2">Limited Edition</h3>
                    <ul className="space-y-3">
                      <li className="text-[#666666] hover:text-[#FD7D68] cursor-pointer transition-colors">Gourdgeous</li>
                      <li className="text-[#666666] hover:text-[#FD7D68] cursor-pointer transition-colors">Spooky Nights</li>
                      <li className="text-[#666666] hover:text-[#FD7D68] cursor-pointer transition-colors">Summer Medley</li>
                      <li className="text-[#666666] hover:text-[#FD7D68] cursor-pointer transition-colors">Seasonal Solids</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Navbar;