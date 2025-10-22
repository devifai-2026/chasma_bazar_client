import React, { useState, useEffect } from 'react';
import Breadcrumbs from "../../Breadcrumbs";
import heroImg1 from "../../../assets/HomeHeroImg1.png";
import img from "../../../assets/Eyeglasses/keg.svg";
import filter from "../../../assets/Eyeglasses/filter.svg";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import star from "../../../assets/BestSellers/star.svg";
import whiteStar from "../../../assets/BestSellers/whiteStar.svg";

// Import the same images as NewArrivals
import eyeglassBlue from '../../../assets/BestSellers/glassimg2blue-removebg-preview.png';
import eyeglassOrange from '../../../assets/BestSellers/glassimg2orange-removebg-preview.png';
import eyeglassRed from '../../../assets/BestSellers/glassimg2red-removebg-preview.png';
import eyeglassRoseDusty from '../../../assets/BestSellers/roseDustyglassImg2-removebg-preview-removebg-preview.png';
import eyeglassGreen from '../../../assets/BestSellers/glassImgreen2-removebg-preview.png';

import eyeglassBlueHover from '../../../assets/BestSellers/glassimg1Blue1-removebg-preview.png';
import eyeglassOrangeHover from '../../../assets/BestSellers/glassimg1orange-removebg-preview.png';
import eyeglassRedHover from '../../../assets/BestSellers/glassimg1red-removebg-preview.png';
import eyeglassRoseDustyHover from '../../../assets/BestSellers/roseDustyglassImg1-removebg-preview.png';
import eyeglassGreenHover from '../../../assets/BestSellers/glassImgreen-removebg-preview.png';

import roundYellow from '../../../assets/BestSellers/card2Img2yellow-removebg-preview.png';
import roundDarkGreen from '../../../assets/BestSellers/card2Img2darkgreen-removebg-preview.png';
import roundChoco from '../../../assets/BestSellers/card2Img2choco-removebg-preview.png';
import roundViolet from '../../../assets/BestSellers/card2Img1voliet-removebg-preview.png';
import roundBlue from '../../../assets/BestSellers/card2Img2blue-removebg-preview.png';

import roundYellowHover from '../../../assets/BestSellers/card2Img1yellow-removebg-preview.png';
import roundDarkGreenHover from '../../../assets/BestSellers/card2Img1darkgreen-removebg-preview.png';
import roundChocoHover from '../../../assets/BestSellers/card2Img1choco-removebg-preview.png';
import roundVioletHover from '../../../assets/BestSellers/card2Img2voliet-removebg-preview.png';
import roundBlueHover from '../../../assets/BestSellers/card2Img1blue-removebg-preview.png';

import transparentMain from '../../../assets/BestSellers/card3img1.1.png';
import transparentBlack from '../../../assets/BestSellers/card3img2black-removebg-preview.png';
import transparentBlue from '../../../assets/BestSellers/card3img2blue-removebg-preview.png';
import transparentClear from '../../../assets/BestSellers/card3img2trasperent-removebg-preview.png';

import transparentBlueHover from '../../../assets/BestSellers/card3img1blue-removebg-preview.png';
import transparentBlackHover from '../../../assets/BestSellers/card3img1black-removebg-preview.png';
import transparentClearHover from '../../../assets/BestSellers/card3imgtrasperent1-removebg-preview.png';
// import transparentBlackHoverAlt from '../../../assets/BestSellers/card3img1black-removebg-preview.png';

import thickMain from '../../../assets/BestSellers/card4imgmain1.png';
import thickBrown from '../../../assets/BestSellers/card4img2-removebg-preview.png';
import thickGray from '../../../assets/BestSellers/card4img3-removebg-preview.png';
import thickDark from '../../../assets/BestSellers/card4img4-removebg-preview.png';
import thickBlack from '../../../assets/BestSellers/card4img5_-removebg-preview.png';

import thickMainHover from '../../../assets/BestSellers/card4imghover1.png';
import thickBrownHover from '../../../assets/BestSellers/card4img2hover-removebg-preview.png';
import thickGrayHover from '../../../assets/BestSellers/card4hoverimg3-removebg-preview.png';
import thickDarkHover from '../../../assets/BestSellers/card4hoverimg4.webp-removebg-preview.png';
import thickBlackHover from '../../../assets/BestSellers/card4hoverimg5_-removebg-preview.png';

import minimalBlack from '../../../assets/BestSellers/card5img1-removebg-preview.png';
import minimalGray from '../../../assets/BestSellers/card5img2-removebg-preview.png';
import minimalSilver from '../../../assets/BestSellers/card5img3-removebg-preview.png';

import minimalBlackHover from '../../../assets/BestSellers/card5hoverimg1-removebg-preview.png';
import minimalGrayHover from '../../../assets/BestSellers/card5imghover2-removebg-preview.png';
import minimalSilverHover from '../../../assets/BestSellers/card5img3hover-removebg-preview.png';

import premiumMain from '../../../assets/BestSellers/card6img1-removebg-preview.png';
import premiumHover from '../../../assets/BestSellers/card6hoverimg1-removebg-preview.png';

// // Color palettes (same as NewArrivals)
// const staticColors = ["#5C99CD", "#FEAA00", "#EE3431", "#BE9298", "#B5F306"];
// const staticColorsCard2 = ["#3C3B5B", "#4A4A42", "#F4F4F4", "#535246"];
// const staticColorsCard3 = ["#435A4D", "#E08504", "#443972", "#865938", "#B1AEAB"];
// const staticColorsCard4 = ["#2B282A", "#B4A394", "#141211"];
// const staticColorsCard5 = ["#1F1F1F"];
// const staticColorsCard6 = ["#F4EDC9", "#3D554F", "#F9A584", "#9F78C0", "#2B77C6"];

const KidsEyeGlasses = () => {
    const [wishlist, setWishlist] = useState([]);
    const [selectedColors, setSelectedColors] = useState({});
    const [hoverStates, setHoverStates] = useState({});

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
            if (isHovered) return product.hoverImages[selectedColorIndex] || product.hoverImages[0];
            return product.image[selectedColorIndex] || product.image[0];
        }
        if (isHovered && product.hoverImage) return product.hoverImage;
        return Array.isArray(product.image) ? product.image[0] : product.image;
    };

    // Products data (12 cards total) - Kid's specific products
    const products = [
        {
            id: 301,
            price: "1899",
            originalPrice: "2899",
            rating: "4.8(950)",
            title: "Kids Colorful Round",
            description: "Fun and colorful frames for kids",
            image: [roundYellow, roundBlue, roundViolet],
            hoverImages: [roundYellowHover, roundBlueHover, roundVioletHover],
            colors: ["#F4EDC9", "#2B77C6", "#9F78C0"]
        },
        {
            id: 302,
            price: "1799",
            originalPrice: "2799",
            rating: "4.7(820)",
            title: "Kids Transparent Magic",
            description: "Lightweight and durable",
            image: [transparentMain, transparentBlue, transparentClear],
            hoverImages: [transparentBlueHover, transparentClearHover, transparentBlackHover],
            colors: ["#3C3B5B", "#5C99CD", "#F4F4F4"]
        },
        {
            id: 303,
            price: "1999",
            originalPrice: "2999",
            rating: "4.9(1100)",
            title: "Kids Adventure Frames",
            description: "Perfect for active kids",
            image: [thickMain, thickBrown, thickGray],
            hoverImages: [thickMainHover, thickBrownHover, thickGrayHover],
            colors: ["#435A4D", "#E08504", "#B1AEAB"]
        },
        {
            id: 304,
            price: "1699",
            originalPrice: "2699",
            rating: "4.6(780)",
            title: "Kids Mini Classics",
            description: "Small frames for little faces",
            image: [minimalBlack, minimalGray],
            hoverImages: [minimalBlackHover, minimalGrayHover],
            colors: ["#2B282A", "#B4A394"]
        },
        {
            id: 305,
            price: "2099",
            originalPrice: "3099",
            rating: "4.8(890)",
            title: "Kids Premium Collection",
            description: "High-quality kids eyewear",
            image: [eyeglassBlue, eyeglassOrange, eyeglassGreen],
            hoverImages: [eyeglassBlueHover, eyeglassOrangeHover, eyeglassGreenHover],
            colors: ["#5C99CD", "#FEAA00", "#B5F306"]
        },
        {
            id: 306,
            price: "1599",
            originalPrice: "2599",
            rating: "4.5(720)",
            title: "Kids Fun Frames",
            description: "Colorful and playful designs",
            image: [premiumMain],
            hoverImages: [premiumHover],
            colors: ["#F9A584", "#9F78C0", "#2B77C6"]
        },
        {
            id: 307,
            price: "2199",
            originalPrice: "3199",
            rating: "4.7(850)",
            title: "Kids Sports Edition",
            description: "Flexible and shockproof",
            image: [roundDarkGreen, roundChoco],
            hoverImages: [roundDarkGreenHover, roundChocoHover],
            colors: ["#3D554F", "#865938"]
        },
        {
            id: 308,
            price: "1899",
            originalPrice: "2899",
            rating: "4.6(800)",
            title: "Kids School Glasses",
            description: "Comfortable for all-day wear",
            image: [minimalSilver, minimalBlack],
            hoverImages: [minimalSilverHover, minimalBlackHover],
            colors: ["#B1AEAB", "#2B282A"]
        },
        {
            id: 309,
            price: "1999",
            originalPrice: "2999",
            rating: "4.8(920)",
            title: "Kids Designer Series",
            description: "Trendy designs for fashion",
            image: [eyeglassRed, eyeglassRoseDusty],
            hoverImages: [eyeglassRedHover, eyeglassRoseDustyHover],
            colors: ["#EE3431", "#BE9298"]
        },
        {
            id: 310,
            price: "1799",
            originalPrice: "2799",
            rating: "4.5(750)",
            title: "Kids Lightweight Frames",
            description: "Ultra light for comfort",
            image: [transparentBlack, transparentClear],
            hoverImages: [transparentBlackHover, transparentClearHover],
            colors: ["#4A4A42", "#F4F4F4"]
        },
        {
            id: 311,
            price: "2099",
            originalPrice: "3099",
            rating: "4.7(880)",
            title: "Kids Durable Collection",
            description: "Built to last through play",
            image: [thickDark, thickBlack],
            hoverImages: [thickDarkHover, thickBlackHover],
            colors: ["#443972", "#141211"]
        },
        {
            id: 312,
            price: "2299",
            originalPrice: "3299",
            rating: "4.9(1050)",
            title: "Kids Premium Plus",
            description: "Top quality with fun colors",
            image: [premiumMain],
            hoverImages: [premiumHover],
            colors: ["#F4EDC9", "#3D554F", "#F9A584"]
        }
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
                        Kids EyeGlasses
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
            <div className="flex items-center justify-between max-w-[90%] mx-auto mt-10">
                <h2 className="font-amiri text-base md:text-2xl lg:text-4xl uppercase">
                    Kid's Eyeglasses Collection
                </h2>
                <p className="border border-[#FD7D68] text-[#FD7D68] rounded-3xl flex items-center gap-3 py-1 px-3 cursor-pointer   transition-colors">
                    <img src={filter} alt="" /> Filter
                </p>
            </div>

            {/* Cards Grid - 3 cards per row */}
            <div className="max-w-[90%] mx-auto mt-10 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        onClick={(e) => { e.stopPropagation(); toggleWishlist(card.id, card.title); }}
                                        className={`absolute top-4 right-3 text-2xl cursor-pointer transition-colors duration-300 ${isInWishlist ? "text-[#FD7D68]" : "text-[#c2c2c2] hover:text-red-600"}`}
                                    />
                                    <p className="bg-[#FD7D68] py-1 px-3 rounded-3xl flex items-center gap-1 absolute top-4 left-3 text-white font-inter text-xs">
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default KidsEyeGlasses;