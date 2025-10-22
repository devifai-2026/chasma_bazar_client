import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bnrImg from "../../assets/Accessories/accessoriesbnr.svg";
import img1 from "../../assets/Accessories/Rectangle 6.svg";
import star from "../../assets/BestSellers/star.svg";
import wl from "../../assets/Accessories/wl.svg";
import whiteStar from "../../assets/BestSellers/whiteStar.svg";
import img2 from "../../assets/Accessories/Rectangle 31.svg";
import Breadcrumbs from "../Breadcrumbs";

const Accessories = () => {
  const [activeButton, setActiveButton] = useState("Eyeglasses");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate(); // Add useNavigate hook

  // Mock product data - extended to show 10 pages
  const productsData = Array.from({ length: 60 }, (_, index) => ({
    id: index + 1,
    image: index % 2 === 0 ? img1 : img2,
    price: 1999,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 199,
    title: "Tempus leo eu aenean sed diam",
    description: "Ad litora torquent per conubia"
  }));

  // Handle card click
  const handleCardClick = (productId) => {
    navigate(`/productDetails/${productId}`);
  };

  const totalPages = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = productsData.slice(startIndex, startIndex + itemsPerPage);

  const getVisiblePages = () => {
    if (currentPage <= 4) {
      return [1, 2, 3, 4, "...", 10];
    } else if (currentPage >= 7) {
      return [1, "...", 7, 8, 9, 10];
    } else {
      return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", 10];
    }
  };

  const visiblePages = getVisiblePages();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage % totalPages) + 1);
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="max-w-[90%] mx-auto border-t mt-8 mb-8">
      {/* BreadCrumbs */}
      <Breadcrumbs className=""/>
      
      {/* Banner */}
      <div className="bg-[#BEFCFF] mt-6 rounded-md">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex items-center justify-center md:justify-start ml-8 space-y-4 py-6">
            <h2 className="text-3xl md:text-5xl font-amiri uppercase text-center lg:text-left">
              Accessories
            </h2>
          </div>
          <div className="flex justify-center">
            <img src={bnrImg} alt="" />
          </div>
        </div>
      </div>

      {/* Best Sellers */}
      <div className="mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <h2 className="uppercase text-xl md:text-3xl lg:text-5xl font-amiri">
            Best Sellers
          </h2>
          <div className="flex items-center gap-3">
            <button
              className={`border border-[#222222] rounded-3xl py-2 px-4 md:px-5 text-sm md:text-base transition-all duration-300 font-inter ${
                activeButton === "Eyeglasses"
                  ? "bg-[#FD7D68] text-white border-[#FD7D68]"
                  : "bg-white text-[#222222] hover:bg-gray-50"
              }`}
              onClick={() => setActiveButton("Eyeglasses")}
            >
              Eyeglasses
            </button>
            <button
              className={`border border-[#222222] rounded-3xl py-2 px-4 md:px-5 text-sm md:text-base transition-all duration-300 font-inter ${
                activeButton === "Sunglasses"
                  ? "bg-[#FD7D68] text-white border-[#FD7D68]"
                  : "bg-white text-[#222222] hover:bg-gray-50"
              }`}
              onClick={() => setActiveButton("Sunglasses")}
            >
              Sunglasses
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
          {currentProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-[#FFFFFF] space-y-2 p-2 rounded-md shadow-md h-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleCardClick(product.id)} // Add click handler here
            >
              <div className="bg-[#2222220A] p-4 rounded-md relative">
                <div className="flex items-center justify-center lg:h-[250px]">
                  <img src={product.image} alt="Sunglasses" />
                </div>
                <img
                  className="absolute top-4 right-5 md:top-6 md:right-6"
                  src={wl}
                  alt="Wishlist"
                />
                <p className="bg-[#FD7D68] py-1 px-1 md:px-3 rounded-3xl flex items-center gap-1 absolute top-6 left-5 md:top-6 md:left-6 text-white font-inter text-xs">
                  <img src={whiteStar} alt="Star" />
                  Top Rated
                </p>
              </div>
              <div className="flex items-center justify-between flex-col md:flex-row">
                <p className="text-lg font-semibold font-amiri">
                  ₹{product.price} <span className="line-through text-red-500">₹{product.originalPrice}</span>
                </p>
                <p className="flex items-center gap-1 font-inter text-sm">
                  <img src={star} alt="Rating" />
                  {product.rating}({product.reviews})
                </p>
              </div>
              <p className="text-[#222222] text-sm font-inter">
                {product.title}
              </p>
              <p className="text-[#666666] text-xs font-inter">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-12 space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-8 h-8 rounded-full border border-[#222222] transition-all duration-300 ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#FD7D68] hover:border-[#FD7D68] hover:text-white"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          {visiblePages.map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              disabled={page === "..."}
              className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 font-inter text-sm ${
                page === currentPage
                  ? "bg-[#FD7D68] border-[#FD7D68] text-white"
                  : page === "..."
                  ? "border-transparent cursor-default"
                  : "border-[#222222] hover:bg-[#FD7D68] hover:border-[#FD7D68] hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-8 h-8 rounded-full border border-[#222222] transition-all duration-300 ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#FD7D68] hover:border-[#FD7D68] hover:text-white"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accessories;