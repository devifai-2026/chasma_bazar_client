import React, { useState, useEffect, useRef } from "react"; 
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import star from "../../assets/BestSellers/star.svg";
import whiteStar from "../../assets/BestSellers/whiteStar.svg";
import rightArrow from "../../assets/BestSellers/rightArrow.svg";
import leftArrow from "../../assets/BestSellers/leftArrow.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisionProductSlider = ({ 
  title = "Featured Products", 
  products = [],
  direction = "left-to-right"
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedColors, setSelectedColors] = useState({});
  const [hoverStates, setHoverStates] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const autoPlayRef = useRef(true);

    useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);
  // ✅ Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // ✅ Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ✅ Toggle wishlist for a specific product
  const toggleWishlist = (productId, title) => {
    setWishlist((prev) => {
      const updated = prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];

      // Notification
      if (updated.includes(productId)) {
        toast.success(`❤️ ${title} added to wishlist`, {
          position: "top-right",
          autoClose: 1500,
        });
      } else {
        toast.info(`💔 ${title} removed from wishlist`, {
          position: "top-right",
          autoClose: 1500,
        });
      }
      return updated;
    });
  };
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Existing functions (unchanged)
  const handleCardClick = (productId) => navigate(`/productDetails/${productId}`);
  const handleColorSelect = (productId, colorIndex, event) => {
    event.stopPropagation();
    setSelectedColors((prev) => ({ ...prev, [productId]: colorIndex }));
  };
  const handleImageHover = (productId, isHovering) => {
    setHoverStates((prev) => ({ ...prev, [productId]: isHovering }));
  };
  const getCurrentImage = (product) => {
    const selectedColorIndex = selectedColors[product.id] || 0;
    const isHovered = hoverStates[product.id];
    if (Array.isArray(product.image) && product.hoverImages) {
      if (isHovered) return product.hoverImages[selectedColorIndex] || product.hoverImages[0];
      return product.image[selectedColorIndex] || product.image[0];
    }
    if (isHovered && product.hoverImage) return product.hoverImage;
    return Array.isArray(product.image) ? product.image[0] : product.image;
  };

  // Responsive behavior (unchanged)
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // SIMPLIFIED Auto-slide logic
  useEffect(() => {
    if (products.length <= slidesToShow) return;
    
    const interval = setInterval(() => {
      if (autoPlayRef.current && !isTransitioning) {
        if (direction === "right-to-left") {
          // Right to Left: Move backwards
          setCurrentSlide(prev => prev <= 0 ? products.length - slidesToShow : prev - 1);
        } else {
          // Left to Right: Move forwards (default)
          setCurrentSlide(prev => prev >= products.length - slidesToShow ? 0 : prev + 1);
        }
      }
    }, 2000); // Normal 3 second interval
    
    return () => clearInterval(interval);
  }, [products.length, slidesToShow, direction, isTransitioning]);

  // Manual next slide (for arrow click)
  const nextSlide = () => {
    if (isTransitioning || products.length <= slidesToShow) return;
    setIsTransitioning(true);
    
    if (direction === "right-to-left") {
      // For RTL: "next" means go to previous slide
      setCurrentSlide((prev) => (prev <= 0 ? products.length - slidesToShow : prev - 1));
    } else {
      // For LTR: "next" means go to next slide
      setCurrentSlide((prev) => (prev >= products.length - slidesToShow ? 0 : prev + 1));
    }
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Manual previous slide (for arrow click)
  const prevSlide = () => {
    if (isTransitioning || products.length <= slidesToShow) return;
    setIsTransitioning(true);
    
    if (direction === "right-to-left") {
      // For RTL: "previous" means go to next slide
      setCurrentSlide((prev) => (prev >= products.length - slidesToShow ? 0 : prev + 1));
    } else {
      // For LTR: "previous" means go to previous slide
      setCurrentSlide((prev) => (prev <= 0 ? products.length - slidesToShow : prev - 1));
    }
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleMouseEnter = () => (autoPlayRef.current = false);
  const handleMouseLeave = () => (autoPlayRef.current = true);
  const getSliderTransform = () => `translateX(-${currentSlide * (100 / slidesToShow)}%)`;

  // DON'T swap arrow icons - keep them consistent
  // Left arrow always shows left arrow icon, right arrow always shows right arrow icon
  // But their functionality changes based on direction

  return (
    <div
      className="max-w-full mx-auto mt-12 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
        data-aos="fade-up"
    >
      {/* Toast Container */}
      <div>
        <style>{`.Toastify__toast { font-family: 'Inter', sans-serif; }`}</style>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-8"  data-aos="fade-down">
        <h2 className="uppercase text-xl md:text-3xl lg:text-5xl font-amiri text-center md:text-left">{title}</h2>

        {/* See All Button - Replaces Filter Buttons */}
        <button  data-aos="zoom-in" className="bg-[#FD7D68] text-white py-2 px-3 rounded-3xl font-inter hover:bg-[#333333] transition-colors duration-300 font-semibold text-sm md:text-base">
          View All
        </button>
      </div>

      {/* Slider */}
      <div className="relative"  data-aos="fade-left">
        {/* Arrows - Keep icons consistent, functionality changes */}
        {products.length > slidesToShow && (
          <>
            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all border border-gray-200"
              disabled={isTransitioning}
              data-aos="fade-right"
            >
              <img src={leftArrow} alt="Previous" className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all border border-gray-200"
              disabled={isTransitioning}
              data-aos="fade-left"
            >
              <img src={rightArrow} alt="Next" className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: getSliderTransform() }}
          >
            {products.map((card) => {
              const isInWishlist = wishlist.includes(card.id);
              return (
                <div data-aos="zoom-in-up" key={card.id} className="flex-shrink-0 p-2" style={{ width: `${100 / slidesToShow}%` }}>
                  <div
                    className="bg-white space-y-2 p-2 rounded-lg shadow-md h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                    onClick={() => handleCardClick(card.id)}
                    onMouseEnter={() => handleImageHover(card.id, true)}
                    onMouseLeave={() => handleImageHover(card.id, false)}
                  >
                    <div className="bg-[#2222220A] p-6 rounded-md relative">
                      <div className="flex items-center justify-center h-[200px]">
                        <img
                          src={getCurrentImage(card)}
                          alt="Product"
                          className="max-h-full max-w-full transition-opacity duration-300"
                        />
                      </div>

                      {/* Wishlist Icon */}
                      <FaHeart
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(card.id, card.title);
                        }}
                        className={`absolute top-4 right-4 text-2xl cursor-pointer transition-colors duration-300 ${
                          isInWishlist ? "text-[#FD7D68]" : "text-[#c2c2c2] hover:text-red-600"
                        }`}
                      />

                      <p className="bg-[#FD7D68] py-1 px-3 rounded-3xl flex items-center gap-1 absolute top-4 left-4 text-white font-inter text-xs">
                        <img src={whiteStar} alt="Star" />
                        Top Rated
                      </p>
                    </div>

                    <div className="flex items-center justify-between flex-col md:flex-row mt-4">
                      <p className="text-lg font-semibold font-amiri">
                        ₹{card.price}{" "}
                        <span className="line-through text-red-500 text-sm">₹{card.originalPrice}</span>
                      </p>
                      <p className="flex items-center gap-1 font-inter text-sm">
                        <img src={star} alt="Rating" />
                        {card.rating}
                      </p>
                    </div>

                    <p className="text-[#222222] text-sm font-inter font-medium mt-2">{card.title}</p>
                    <p className="text-[#666666] text-xs font-inter">{card.description}</p>

                    <div className="flex items-center flex-wrap gap-3 pb-4 mt-3">
                      {card.colors &&
                        card.colors.map((color, index) => (
                          <div
                            key={index}
                            className={`p-2 rounded-full h-8 w-8 cursor-pointer border-2 ${
                              selectedColors[card.id] === index ? "border-[#222222]" : "border-transparent"
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={(e) => handleColorSelect(card.id, index, e)}
                            title={`Color ${index + 1}`}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* View All Button at Bottom */}
    
    </div>
  );
};

export default VisionProductSlider;