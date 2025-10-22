import React, { useState, useEffect, useRef } from "react"; 
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa"; // 
import { toast } from "react-toastify"; // ✅
import "react-toastify/dist/ReactToastify.css";

import star from "../../assets/BestSellers/star.svg";
import whiteStar from "../../assets/BestSellers/whiteStar.svg";
import rightArrow from "../../assets/BestSellers/rightArrow.svg";
import leftArrow from "../../assets/BestSellers/leftArrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductSlider = ({ 
  title = "Best Sellers", 
  products = [],
  showFilterButtons = true,
  defaultFilter = "Eyeglasses"
}) => {
  const [activeButton, setActiveButton] = useState(defaultFilter);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedColors, setSelectedColors] = useState({});
  const [hoverStates, setHoverStates] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const autoPlayRef = useRef(true);

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

  // Auto-slide (unchanged)
  useEffect(() => {
    if (products.length <= slidesToShow) return;
    const interval = setInterval(() => {
      if (autoPlayRef.current) nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length, slidesToShow]);

  const nextSlide = () => {
    if (isTransitioning || products.length <= slidesToShow) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev >= products.length - slidesToShow ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning || products.length <= slidesToShow) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev <= 0 ? products.length - slidesToShow : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleMouseEnter = () => (autoPlayRef.current = false);
  const handleMouseLeave = () => (autoPlayRef.current = true);
  const getSliderTransform = () => `translateX(-${currentSlide * (100 / slidesToShow)}%)`;
    useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      mirror: true
    });
  }, []);

  return (
       <div
      className="max-w-[90%] mx-auto mt-12 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <h2 className="uppercase text-xl md:text-3xl lg:text-5xl font-amiri" data-aos="fade-down">{title}</h2>
        {showFilterButtons && (
          <div className="flex items-center gap-3">
            {["Eyeglasses", "Sunglasses"].map((type) => (
              <button
                key={type}
                className={`border border-[#222222] rounded-3xl py-2 px-4 md:px-5 text-sm md:text-base transition-all duration-300 font-inter ${
                  activeButton === type
                    ? "bg-[#FD7D68] text-white border-[#FD7D68]"
                    : "bg-white text-[#222222] hover:bg-gray-50"
                }`}
                onClick={() => setActiveButton(type)}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="relative mt-10">
        {products.length > slidesToShow && (
          <>
            <button
              onClick={prevSlide}
              className="hidden md:block absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all border border-gray-200"
              disabled={isTransitioning}
            >
              <img src={leftArrow} alt="Previous" className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="hidden md:block absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all border border-gray-200"
              disabled={isTransitioning}
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
            {products.map((card, idx) => {
              const isInWishlist = wishlist.includes(card.id);
              return (
                <div
                  key={card.id}
                  className="flex-shrink-0 p-2"
                  style={{ width: `${100 / slidesToShow}%` }}
                  data-aos={idx % 2 === 0 ? "fade-up" : "fade-down"}
                  data-aos-delay={idx * 100}
                >
                  <div
                    className="bg-white space-y-2 p-2 rounded-md shadow-md h-full cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_6px_rgba(128,128,128,0.5)]"
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
                      <FaHeart
                        onClick={(e) => { e.stopPropagation(); toggleWishlist(card.id, card.title); }}
                        className={`absolute top-2 right-0 md:top-4 md:right-3 text-2xl cursor-pointer transition-colors duration-300 ${isInWishlist ? "text-[#FD7D68]" : "text-[#c2c2c2] hover:text-red-600"}`}
                      />
                      <p className="bg-[#FD7D68] py-1 px-3 rounded-3xl flex items-center gap-1 absolute top-2 left-1 md:top-4 md:left-3 text-white font-inter text-xs">
                        <img src={whiteStar} alt="Star" />
                        Top Rated
                      </p>
                    </div>
                    <div className="flex items-center justify-between flex-col md:flex-row">
                      <p className="text-lg font-semibold font-amiri">₹{card.price} <span className="line-through text-red-500">₹{card.originalPrice}</span></p>
                      <p className="flex items-center gap-1 font-inter text-sm"><img src={star} alt="Rating" />{card.rating}</p>
                    </div>
                    <p className="text-[#222222] text-sm font-inter">{card.title}</p>
                    <p className="text-[#666666] text-xs font-inter">{card.description}</p>
                    <div className="flex items-center flex-wrap gap-3 pb-4">
                      {card.colors && card.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded-full h-8 w-8 cursor-pointer border-2 ${selectedColors[card.id] === index ? "border-[#222222]" : "border-transparent"}`}
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

      <div className="flex justify-center mt-8">
        <button className="bg-[#FD7D68] text-white py-2 px-6 rounded-3xl font-inter hover:bg-[#FD6D58] transition-colors">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
