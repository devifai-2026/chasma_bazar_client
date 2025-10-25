import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../Breadcrumbs";
import heroImg1 from "../../../assets/HomeHeroImg1.png";
import img from "../../../assets/about/aboutimg.svg";
import filter from "../../../assets/Eyeglasses/filter.svg";
import { FaHeart, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import star from "../../../assets/BestSellers/star.svg";
import whiteStar from "../../../assets/BestSellers/whiteStar.svg";

// Import frame type images
import fullRimIcon from "../../../assets/Eyeglasses/fullrim.svg";
import halfRimIcon from "../../../assets/Eyeglasses/halfrim.svg";
import rimlessIcon from "../../../assets/Eyeglasses/rimless.svg";

// import frame shape
import rectangle from "../../../assets/Eyeglasses/rectangle.svg";
import square from "../../../assets/Eyeglasses/square.svg";
import cateye from "../../../assets/Eyeglasses/catseye.svg";
import geometric from "../../../assets/Eyeglasses/geometric.svg";
import round from "../../../assets/Eyeglasses/round.svg";
import aviator from "../../../assets/Eyeglasses/avaitor.svg";
import clubmaster from "../../../assets/Eyeglasses/clubmaster.svg";

// Import the same images as NewArrivals
import eyeglassBlue from "../../../assets/BestSellers/glassimg2blue-removebg-preview.png";
import eyeglassOrange from "../../../assets/BestSellers/glassimg2orange-removebg-preview.png";
import eyeglassRed from "../../../assets/BestSellers/glassimg2red-removebg-preview.png";
import eyeglassRoseDusty from "../../../assets/BestSellers/roseDustyglassImg2-removebg-preview-removebg-preview.png";
import eyeglassGreen from "../../../assets/BestSellers/glassImgreen2-removebg-preview.png";

import eyeglassBlueHover from "../../../assets/BestSellers/glassimg1Blue1-removebg-preview.png";
import eyeglassOrangeHover from "../../../assets/BestSellers/glassimg1orange-removebg-preview.png";
import eyeglassRedHover from "../../../assets/BestSellers/glassimg1red-removebg-preview.png";
import eyeglassRoseDustyHover from "../../../assets/BestSellers/roseDustyglassImg1-removebg-preview.png";
import eyeglassGreenHover from "../../../assets/BestSellers/glassImgreen-removebg-preview.png";

import roundYellow from "../../../assets/BestSellers/card2Img2yellow-removebg-preview.png";
import roundDarkGreen from "../../../assets/BestSellers/card2Img2darkgreen-removebg-preview.png";
import roundChoco from "../../../assets/BestSellers/card2Img2choco-removebg-preview.png";
import roundViolet from "../../../assets/BestSellers/card2Img1voliet-removebg-preview.png";
import roundBlue from "../../../assets/BestSellers/card2Img2blue-removebg-preview.png";

import roundYellowHover from "../../../assets/BestSellers/card2Img1yellow-removebg-preview.png";
import roundDarkGreenHover from "../../../assets/BestSellers/card2Img1darkgreen-removebg-preview.png";
import roundChocoHover from "../../../assets/BestSellers/card2Img1choco-removebg-preview.png";
import roundVioletHover from "../../../assets/BestSellers/card2Img2voliet-removebg-preview.png";
import roundBlueHover from "../../../assets/BestSellers/card2Img1blue-removebg-preview.png";

import transparentMain from "../../../assets/BestSellers/card3img1.1.png";
import transparentBlack from "../../../assets/BestSellers/card3img2black-removebg-preview.png";
import transparentBlue from "../../../assets/BestSellers/card3img2blue-removebg-preview.png";
import transparentClear from "../../../assets/BestSellers/card3img2trasperent-removebg-preview.png";

import transparentBlueHover from "../../../assets/BestSellers/card3img1blue-removebg-preview.png";
import transparentBlackHover from "../../../assets/BestSellers/card3img1black-removebg-preview.png";
import transparentClearHover from "../../../assets/BestSellers/card3imgtrasperent1-removebg-preview.png";

import thickMain from "../../../assets/BestSellers/card4imgmain1.png";
import thickBrown from "../../../assets/BestSellers/card4img2-removebg-preview.png";
import thickGray from "../../../assets/BestSellers/card4img3-removebg-preview.png";
import thickDark from "../../../assets/BestSellers/card4img4-removebg-preview.png";
import thickBlack from "../../../assets/BestSellers/card4img5_-removebg-preview.png";

import thickMainHover from "../../../assets/BestSellers/card4imghover1.png";
import thickBrownHover from "../../../assets/BestSellers/card4img2hover-removebg-preview.png";
import thickGrayHover from "../../../assets/BestSellers/card4hoverimg3-removebg-preview.png";
import thickDarkHover from "../../../assets/BestSellers/card4hoverimg4.webp-removebg-preview.png";
import thickBlackHover from "../../../assets/BestSellers/card4hoverimg5_-removebg-preview.png";

import minimalBlack from "../../../assets/BestSellers/card5img1-removebg-preview.png";
import minimalGray from "../../../assets/BestSellers/card5img2-removebg-preview.png";
import minimalSilver from "../../../assets/BestSellers/card5img3-removebg-preview.png";

import minimalBlackHover from "../../../assets/BestSellers/card5hoverimg1-removebg-preview.png";
import minimalGrayHover from "../../../assets/BestSellers/card5imghover2-removebg-preview.png";
import minimalSilverHover from "../../../assets/BestSellers/card5img3hover-removebg-preview.png";

import premiumMain from "../../../assets/BestSellers/card6img1-removebg-preview.png";
import premiumHover from "../../../assets/BestSellers/card6hoverimg1-removebg-preview.png";

import tryon from "../../../assets/Eyeglasses/graytryon.svg";

const WomensEyeGlasses = () => {
  const [wishlist, setWishlist] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [hoverStates, setHoverStates] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    frameType: [],
    frameShape: [],
    frameColor: [],
    brands: [],
    frameSize: [],
    price: [],
    gender: [],
    material: [],
    prescriptionType: [],
    supportedPowers: [],
    productType: [],
  });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sortBy, setSortBy] = useState("recommended"); // Add separate state for sorting

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
      if (isHovered)
        return (
          product.hoverImages[selectedColorIndex] || product.hoverImages[0]
        );
      return product.image[selectedColorIndex] || product.image[0];
    }
    if (isHovered && product.hoverImage) return product.hoverImage;
    return Array.isArray(product.image) ? product.image[0] : product.image;
  };

  // Filter options data with actual images
  const filterOptions = {
    frameType: [
      { id: "full", name: "Full frame", icon: fullRimIcon },
      { id: "half", name: "Half frame", icon: halfRimIcon },
      { id: "rimless", name: "Rimless", icon: rimlessIcon },
    ],
    frameShape: [
      { id: "rectangle", name: "Rectangle", icon: rectangle },
      { id: "square", name: "Square", icon: square },
      { id: "cat-eye", name: "Cat Eye", icon: cateye },
      { id: "geometric", name: "Geometric", icon: geometric },
      { id: "round", name: "Round", icon: round },
      { id: "aviator", name: "Aviator", icon: aviator },
      { id: "clubmaster", name: "Clubmaster", icon: clubmaster },
    ],
    frameColor: [
      { id: "black", name: "Black", count: 8 },
      { id: "blue", name: "Blue", count: 3 },
      { id: "brown", name: "Brown", count: 2 },
      { id: "pink", name: "Pink", count: 4 },
      { id: "gold", name: "Gold", count: 2 },
      { id: "silver", name: "Silver", count: 3 },
    ],
    brands: [
      { id: "rayban", name: "Ray-Ban" },
      { id: "oakley", name: "Oakley" },
      { id: "gucci", name: "Gucci" },
      { id: "prada", name: "Prada" },
      { id: "versace", name: "Versace" },
    ],
    frameSize: [
      { id: "small", name: "Small (130-135mm)" },
      { id: "medium", name: "Medium (135-140mm)" },
      { id: "large", name: "Large (140-145mm)" },
      { id: "xlarge", name: "Extra Large (145mm+)" },
    ],
    price: [
      { id: "under2000", name: "Under ₹2000" },
      { id: "2000-3000", name: "₹2000 - ₹3000" },
      { id: "3000-4000", name: "₹3000 - ₹4000" },
      { id: "4000-5000", name: "₹4000 - ₹5000" },
      { id: "over5000", name: "Over ₹5000" },
    ],
    gender: [
      { id: "women", name: "Women" },
      { id: "unisex", name: "Unisex" },
    ],
    material: [
      { id: "acetate", name: "Acetate" },
      { id: "metal", name: "Metal" },
      { id: "titanium", name: "Titanium" },
      { id: "plastic", name: "Plastic" },
      { id: "wood", name: "Wood" },
    ],
    prescriptionType: [
      { id: "single", name: "Single Vision" },
      { id: "bifocal", name: "Bifocal" },
      { id: "progressive", name: "Progressive" },
      { id: "computer", name: "Computer Glasses" },
    ],
    supportedPowers: [
      { id: "low", name: "Low Power (0 to -2.00)" },
      { id: "medium", name: "Medium Power (-2.25 to -4.00)" },
      { id: "high", name: "High Power (-4.25 to -6.00)" },
      { id: "veryhigh", name: "Very High Power (-6.25+)" },
    ],
    productType: [
      { id: "regular", name: "Regular" },
      { id: "premium", name: "Premium" },
      { id: "designer", name: "Designer" },
      { id: "fashion", name: "Fashion" },
    ],
  };

  const toggleFilter = (category, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({
      frameType: [],
      frameShape: [],
      frameColor: [],
      brands: [],
      frameSize: [],
      price: [],
      gender: [],
      material: [],
      prescriptionType: [],
      supportedPowers: [],
      productType: [],
    });
    setSortBy("recommended"); // Also reset sorting
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  // Handle sort selection separately
  const handleSortSelect = (sortValue) => {
    setSortBy(sortValue);
    setOpenDropdown(null); // Close dropdown after selection
  };

  // Custom Dropdown Component
  const CustomDropdown = ({ title, options, filterKey, isOpen, onToggle }) => {
    return (
      <div className="relative">
        <div
          className="w-full p-3 rounded-lg cursor-pointer bg-white flex justify-between items-center hover:bg-gray-50 transition-colors"
          onClick={() => onToggle(filterKey)}
        >
          <span className="text-sm font-medium">{title}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {options.map((option) => (
              <div
                key={option.id}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => {
                  if (filterKey === "sortBy") {
                    handleSortSelect(option.id);
                  } else {
                    toggleFilter(filterKey, option.id);
                  }
                }}
              >
                <div
                  className={`w-5 h-5 border-2 rounded flex items-center justify-center ${
                    filterKey === "sortBy"
                      ? sortBy === option.id
                        ? "bg-[#FD7D68] border-[#FD7D68]"
                        : "border-gray-300"
                      : activeFilters[filterKey]?.includes(option.id)
                      ? "bg-[#FD7D68] border-[#FD7D68]"
                      : "border-gray-300"
                  }`}
                >
                  {(filterKey === "sortBy"
                    ? sortBy === option.id
                    : activeFilters[filterKey]?.includes(option.id)) && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700">{option.name}</span>
                {option.count && (
                  <span className="text-xs text-gray-500 ml-auto">
                    ({option.count})
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Filter Sidebar Component
  const FilterSidebar = () => (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-6 h-fit">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Filters</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={clearAllFilters}
            className="text-[#FD7D68] hover:text-[#e56a55] text-sm font-medium"
          >
            Clear All
          </button>
          {/* Close button for mobile/tablet */}
          <button
            onClick={() => setShowFilter(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* FRAME TYPE - Fixed layout */}
        <div>
          <h4 className="font-semibold text-lg mb-3">FRAME TYPE</h4>
          <div className="grid grid-cols-3 gap-3">
            {filterOptions.frameType.map((type) => (
              <div
                key={type.id}
                className={`flex flex-col items-center p-1 rounded-lg cursor-pointer transition-all  ${
                  activeFilters.frameType.includes(type.id)
                    ? "bg-[#FD7D68] bg-opacity-10 border-[#FD7D68]"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => toggleFilter("frameType", type.id)}
              >
                <div className="w-16 h-16 flex items-center justify-center  rounded-lg mb-2">
                  <img
                    src={type.icon}
                    alt={type.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <span
                  className={`text-xs font-medium text-center ${
                    activeFilters.frameType.includes(type.id)
                      ? "text-[#FD7D68]"
                      : "text-gray-700"
                  }`}
                >
                  {type.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FRAME SHAPE - Updated with actual images */}
        <div>
          <h4 className="font-semibold text-lg mb-3">FRAME SHAPE</h4>
          <div className="grid grid-cols-3 gap-3">
            {filterOptions.frameShape.map((shape) => (
              <div
                key={shape.id}
                className={`flex flex-col items-center p-1 rounded-lg cursor-pointer transition-all ${
                  activeFilters.frameShape.includes(shape.id)
                    ? "bg-[#FD7D68] bg-opacity-10 border-[#FD7D68]"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => toggleFilter("frameShape", shape.id)}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-lg mb-2">
                  <img
                    src={shape.icon}
                    alt={shape.name}
                    className="w-16 h-16 object-contain bg-gray-100 rounded-md"
                  />
                </div>
                <span
                  className={`text-xs font-medium text-center ${
                    activeFilters.frameShape.includes(shape.id)
                      ? "text-[#FD7D68]"
                      : "text-gray-700"
                  }`}
                >
                  {shape.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Dropdown Filters */}
        <div className="space-y-4">
          <CustomDropdown
            title="FRAME COLOR"
            options={filterOptions.frameColor}
            filterKey="frameColor"
            isOpen={openDropdown === "frameColor"}
            onToggle={toggleDropdown}
          />

          <CustomDropdown
            title="BRANDS"
            options={filterOptions.brands}
            filterKey="brands"
            isOpen={openDropdown === "brands"}
            onToggle={toggleDropdown}
          />

          <CustomDropdown
            title="FRAME SIZE"
            options={filterOptions.frameSize}
            filterKey="frameSize"
            isOpen={openDropdown === "frameSize"}
            onToggle={toggleDropdown}
          />

          <CustomDropdown
            title="PRICE"
            options={filterOptions.price}
            filterKey="price"
            isOpen={openDropdown === "price"}
            onToggle={toggleDropdown}
          />

          <CustomDropdown
            title="GENDER"
            options={filterOptions.gender}
            filterKey="gender"
            isOpen={openDropdown === "gender"}
            onToggle={toggleDropdown}
          />

          <CustomDropdown
            title="MATERIAL"
            options={filterOptions.material}
            filterKey="material"
            isOpen={openDropdown === "material"}
            onToggle={toggleDropdown}
          />

          <CustomDropdown
            title="PRESCRIPTION TYPE"
            options={filterOptions.prescriptionType}
            filterKey="prescriptionType"
            isOpen={openDropdown === "prescriptionType"}
            onToggle={toggleDropdown}
          />

          <CustomDropdown
            title="SUPPORTED POWERS"
            options={filterOptions.supportedPowers}
            filterKey="supportedPowers"
            isOpen={openDropdown === "supportedPowers"}
            onToggle={toggleDropdown}
          />

          <CustomDropdown
            title="PRODUCT TYPE"
            options={filterOptions.productType}
            filterKey="productType"
            isOpen={openDropdown === "productType"}
            onToggle={toggleDropdown}
          />

          {/* Sort By Dropdown - Fixed */}
          <CustomDropdown
            title="SORT BY"
            options={[
              { id: "recommended", name: "Recommended" },
              { id: "price-low", name: "Price: Low to High" },
              { id: "price-high", name: "Price: High to Low" },
              { id: "newest", name: "Newest First" },
              { id: "popular", name: "Most Popular" },
              { id: "rating", name: "Highest Rated" },
            ]}
            filterKey="sortBy"
            isOpen={openDropdown === "sortBy"}
            onToggle={toggleDropdown}
          />
        </div>
      </div>
    </div>
  );

  // Products data (12 cards total) - Women's specific products
  const products = [
    {
      id: 401,
      price: "2699",
      originalPrice: "3699",
      rating: "4.9(1250)",
      title: "Women's Elegant Round",
      description: "Sophisticated round frames",
      image: [roundYellow, roundViolet, roundBlue],
      hoverImages: [roundYellowHover, roundVioletHover, roundBlueHover],
      colors: ["#F4EDC9", "#9F78C0", "#2B77C6"],
    },
    {
      id: 402,
      price: "2599",
      originalPrice: "3599",
      rating: "4.8(1100)",
      title: "Women's Transparent Chic",
      description: "Lightweight and stylish",
      image: [transparentMain, transparentBlue, transparentClear],
      hoverImages: [
        transparentBlueHover,
        transparentClearHover,
        transparentBlackHover,
      ],
      colors: ["#3C3B5B", "#5C99CD", "#F4F4F4"],
    },
    {
      id: 403,
      price: "2799",
      originalPrice: "3799",
      rating: "4.7(980)",
      title: "Women's Bold Frames",
      description: "Confident and fashionable",
      image: [thickMain, thickBrown, thickGray],
      hoverImages: [thickMainHover, thickBrownHover, thickGrayHover],
      colors: ["#435A4D", "#E08504", "#B1AEAB"],
    },
    {
      id: 404,
      price: "2499",
      originalPrice: "3499",
      rating: "4.9(1150)",
      title: "Women's Minimalist",
      description: "Sleek and modern design",
      image: [minimalBlack, minimalGray, minimalSilver],
      hoverImages: [minimalBlackHover, minimalGrayHover, minimalSilverHover],
      colors: ["#2B282A", "#B4A394", "#B1AEAB"],
    },
    {
      id: 405,
      price: "2999",
      originalPrice: "3999",
      rating: "4.8(1050)",
      title: "Women's Premium Collection",
      description: "Luxurious frames for women",
      image: [eyeglassBlue, eyeglassRoseDusty, eyeglassGreen],
      hoverImages: [
        eyeglassBlueHover,
        eyeglassRoseDustyHover,
        eyeglassGreenHover,
      ],
      colors: ["#5C99CD", "#BE9298", "#B5F306"],
    },
    {
      id: 406,
      price: "2399",
      originalPrice: "3399",
      rating: "4.6(920)",
      title: "Women's Fashion Frames",
      description: "Trendy and versatile",
      image: [premiumMain],
      hoverImages: [premiumHover],
      colors: ["#F9A584", "#9F78C0", "#2B77C6"],
    },
    {
      id: 407,
      price: "2899",
      originalPrice: "3899",
      rating: "4.7(950)",
      title: "Women's Cat Eye",
      description: "Classic feminine style",
      image: [roundDarkGreen, roundChoco],
      hoverImages: [roundDarkGreenHover, roundChocoHover],
      colors: ["#3D554F", "#865938"],
    },
    {
      id: 408,
      price: "2699",
      originalPrice: "3699",
      rating: "4.8(1000)",
      title: "Women's Office Elegance",
      description: "Professional and chic",
      image: [minimalSilver, minimalBlack],
      hoverImages: [minimalSilverHover, minimalBlackHover],
      colors: ["#B1AEAB", "#2B282A"],
    },
    {
      id: 409,
      price: "2799",
      originalPrice: "3799",
      rating: "4.9(1200)",
      title: "Women's Designer Series",
      description: "Exclusive women's collection",
      image: [eyeglassRed, eyeglassOrange],
      hoverImages: [eyeglassRedHover, eyeglassOrangeHover],
      colors: ["#EE3431", "#FEAA00"],
    },
    {
      id: 410,
      price: "2599",
      originalPrice: "3599",
      rating: "4.7(890)",
      title: "Women's Lightweight",
      description: "Comfortable all-day wear",
      image: [transparentBlack, transparentClear],
      hoverImages: [transparentBlackHover, transparentClearHover],
      colors: ["#4A4A42", "#F4F4F4"],
    },
    {
      id: 411,
      price: "3099",
      originalPrice: "4099",
      rating: "4.8(1100)",
      title: "Women's Luxury Collection",
      description: "Premium quality frames",
      image: [thickDark, thickBlack],
      hoverImages: [thickDarkHover, thickBlackHover],
      colors: ["#443972", "#141211"],
    },
    {
      id: 412,
      price: "3199",
      originalPrice: "4199",
      rating: "4.9(1300)",
      title: "Women's Signature Series",
      description: "Elegant and sophisticated",
      image: [premiumMain],
      hoverImages: [premiumHover],
      colors: ["#F4EDC9", "#3D554F", "#F9A584"],
    },
  ];

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
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide uppercase">
            Womens EyeGlasses
          </h2>
        </div>
        <div
          className="hidden md:block absolute right-6 bottom-0"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src={img} alt="" className="h-[285px] object-contain" />
        </div>
      </div>

      {/* Header with Filter */}
      <div className="flex items-center justify-between flex-col md:flex-row max-w-[90%] mx-auto mt-10 space-y-3">
        <h2 className="font-amiri text-base md:text-2xl lg:text-4xl uppercase">
          Women's Eyeglasses Collection
        </h2>
        <div className="flex items-center flex-col md:flex-row gap-3 ">
          <p className="border border-gray-400 text-[#999999] flex items-center justify-center py-1 px-4 rounded-3xl gap-2 font-amiri">
            <img src={tryon} alt="" className="h-5 w-5" />
            3D TRY ON
          </p>
          <p
            className="border border-[#FD7D68] text-[#FD7D68] rounded-3xl flex items-center gap-3 py-1 px-3 cursor-pointer transition-colors hover:bg-[#FD7D68] hover:text-white"
            onClick={() => setShowFilter(!showFilter)}
          >
            <img src={filter} alt="Filter" /> Filter
          </p>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-[90%] mx-auto mt-6 text-gray-600">
        <p>
          Showing {products.length} of {products.length} Results
        </p>
      </div>

      {/* Main Content with Filter Sidebar */}
      <div className="max-w-[90%] mx-auto mt-10 mb-16 flex gap-8 relative">
        {/* Mobile/Tablet Filter Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            showFilter ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setShowFilter(false)}
        ></div>

        {/* Mobile/Tablet Filter Drawer */}
        <div
          className={`lg:hidden fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            showFilter ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full overflow-y-auto">
            <FilterSidebar />
          </div>
        </div>

        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block">{showFilter && <FilterSidebar />}</div>

        {/* Cards Grid - Dynamic columns based on filter state */}
        <div className={`w-full ${showFilter ? "lg:flex-1" : ""}`}>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              showFilter ? "lg:grid-cols-2" : "lg:grid-cols-3"
            } gap-6`}
          >
            {products.map((card, idx) => {
              const isInWishlist = wishlist.includes(card.id);
              return (
                <div
                  key={card.id}
                  className="bg-white space-y-2 p-4 rounded-md shadow-md cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_6px_rgba(128,128,128,0.5)]"
                  onMouseEnter={() => handleImageHover(card.id, true)}
                  onMouseLeave={() => handleImageHover(card.id, false)}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(card.id, card.title);
                      }}
                      className={`absolute top-4 right-3 text-2xl cursor-pointer transition-colors duration-300 ${
                        isInWishlist
                          ? "text-[#FD7D68]"
                          : "text-[#c2c2c2] hover:text-red-600"
                      }`}
                    />
                    <p className="bg-[#FD7D68] py-1 px-3 rounded-3xl flex items-center gap-1 absolute top-4 left-3 text-white font-inter text-xs">
                      <img src={whiteStar} alt="Star" />
                      Top Rated
                    </p>
                  </div>
                  <div className="flex items-center justify-between flex-col md:flex-row">
                    <p className="text-lg font-semibold font-amiri">
                      ₹{card.price}{" "}
                      <span className="line-through text-red-500">
                        ₹{card.originalPrice}
                      </span>
                    </p>
                    <p className="flex items-center gap-1 font-inter text-sm">
                      <img src={star} alt="Rating" />
                      {card.rating}
                    </p>
                  </div>
                  <p className="text-[#222222] text-sm font-inter">
                    {card.title}
                  </p>
                  <p className="text-[#666666] text-xs font-inter">
                    {card.description}
                  </p>
                  <div className="flex items-center flex-wrap gap-3 pb-4">
                    {card.colors &&
                      card.colors.map((color, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded-full h-8 w-8 cursor-pointer border-2 ${
                            selectedColors[card.id] === index
                              ? "border-[#222222]"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color }}
                          onClick={(e) => handleColorSelect(card.id, index, e)}
                          title={`Color ${index + 1}`}
                        />
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensEyeGlasses;
