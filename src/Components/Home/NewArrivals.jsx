import React from "react";
import ProductSlider from "./ProductSlider";

// ✅ Imported from BestSellers (same images)
import eyeglassBlue from '../../assets/BestSellers/glassimg2blue-removebg-preview.png';
import eyeglassOrange from '../../assets/BestSellers/glassimg2orange-removebg-preview.png';
import eyeglassRed from '../../assets/BestSellers/glassimg2red-removebg-preview.png';
import eyeglassRoseDusty from '../../assets/BestSellers/roseDustyglassImg2-removebg-preview-removebg-preview.png';
import eyeglassGreen from '../../assets/BestSellers/glassImgreen2-removebg-preview.png';

import eyeglassBlueHover from '../../assets/BestSellers/glassimg1Blue1-removebg-preview.png';
import eyeglassOrangeHover from '../../assets/BestSellers/glassimg1orange-removebg-preview.png';
import eyeglassRedHover from '../../assets/BestSellers/glassimg1red-removebg-preview.png';
import eyeglassRoseDustyHover from '../../assets/BestSellers/roseDustyglassImg1-removebg-preview.png';
import eyeglassGreenHover from '../../assets/BestSellers/glassImgreen-removebg-preview.png';

import roundYellow from '../../assets/BestSellers/card2Img2yellow-removebg-preview.png';
import roundDarkGreen from '../../assets/BestSellers/card2Img2darkgreen-removebg-preview.png';
import roundChoco from '../../assets/BestSellers/card2Img2choco-removebg-preview.png';
import roundViolet from '../../assets/BestSellers/card2Img1voliet-removebg-preview.png';
import roundBlue from '../../assets/BestSellers/card2Img2blue-removebg-preview.png';

import roundYellowHover from '../../assets/BestSellers/card2Img1yellow-removebg-preview.png';
import roundDarkGreenHover from '../../assets/BestSellers/card2Img1darkgreen-removebg-preview.png';
import roundChocoHover from '../../assets/BestSellers/card2Img1choco-removebg-preview.png';
import roundVioletHover from '../../assets/BestSellers/card2Img2voliet-removebg-preview.png';
import roundBlueHover from '../../assets/BestSellers/card2Img1blue-removebg-preview.png';

import transparentMain from '../../assets/BestSellers/card3img1.1.png';
import transparentBlack from '../../assets/BestSellers/card3img2black-removebg-preview.png';
import transparentBlue from '../../assets/BestSellers/card3img2blue-removebg-preview.png';
import transparentClear from '../../assets/BestSellers/card3img2trasperent-removebg-preview.png';

import transparentBlueHover from '../../assets/BestSellers/card3img1blue-removebg-preview.png';
import transparentBlackHover from '../../assets/BestSellers/card3img1black-removebg-preview.png';
import transparentClearHover from '../../assets/BestSellers/card3imgtrasperent1-removebg-preview.png';
import transparentBlackHoverAlt from '../../assets/BestSellers/card3img1black-removebg-preview.png';

import thickMain from '../../assets/BestSellers/card4imgmain1.png';
import thickBrown from '../../assets/BestSellers/card4img2-removebg-preview.png';
import thickGray from '../../assets/BestSellers/card4img3-removebg-preview.png';
import thickDark from '../../assets/BestSellers/card4img4-removebg-preview.png';
import thickBlack from '../../assets/BestSellers/card4img5_-removebg-preview.png';

import thickMainHover from '../../assets/BestSellers/card4imghover1.png';
import thickBrownHover from '../../assets/BestSellers/card4img2hover-removebg-preview.png';
import thickGrayHover from '../../assets/BestSellers/card4hoverimg3-removebg-preview.png';
import thickDarkHover from '../../assets/BestSellers/card4hoverimg4.webp-removebg-preview.png';
import thickBlackHover from '../../assets/BestSellers/card4hoverimg5_-removebg-preview.png';

import minimalBlack from '../../assets/BestSellers/card5img1-removebg-preview.png';
import minimalGray from '../../assets/BestSellers/card5img2-removebg-preview.png';
import minimalSilver from '../../assets/BestSellers/card5img3-removebg-preview.png';

import minimalBlackHover from '../../assets/BestSellers/card5hoverimg1-removebg-preview.png';
import minimalGrayHover from '../../assets/BestSellers/card5imghover2-removebg-preview.png';
import minimalSilverHover from '../../assets/BestSellers/card5img3hover-removebg-preview.png';

import premiumMain from '../../assets/BestSellers/card6img1-removebg-preview.png';
import premiumHover from '../../assets/BestSellers/card6hoverimg1-removebg-preview.png';

// ✅ Color palettes (same as BestSellers)
const staticColors = ["#5C99CD", "#FEAA00", "#EE3431", "#BE9298", "#B5F306"];
const staticColorsCard2 = ["#3C3B5B", "#4A4A42", "#F4F4F4", "#535246"];
const staticColorsCard3 = ["#435A4D", "#E08504", "#443972", "#865938", "#B1AEAB"];
const staticColorsCard4 = ["#2B282A", "#B4A394", "#141211"];
const staticColorsCard5 = ["#1F1F1F"];
const staticColorsCard6 = ["#F4EDC9", "#3D554F", "#F9A584", "#9F78C0", "#2B77C6"];

const NewArrivals = () => {
  const products = [
    {
      id: 206,
      price: "2199",
      originalPrice: "3199",
      rating: "4.6(900)",
      title: "Luxury Premium Collection",
      description: "High-quality finish & comfort",
image: [minimalBlack, minimalGray, minimalSilver],
      hoverImages: [minimalBlackHover, minimalGrayHover, minimalSilverHover],
      colors: staticColorsCard4

      
    },
    {
      id: 205,
      price: "2899",
      originalPrice: "3899",
      rating: "4.8(1020)",
      title: "Premium Classics",
      description: "Elegant frames with soft finish",
      image: [eyeglassBlue, eyeglassOrange, eyeglassRed, eyeglassRoseDusty, eyeglassGreen],
      hoverImages: [eyeglassBlueHover, eyeglassOrangeHover, eyeglassRedHover, eyeglassRoseDustyHover, eyeglassGreenHover],
      colors: staticColors
    },
    {
      id: 204,
      price: "2599",
      originalPrice: "3599",
      rating: "4.9(1100)",
      title: "Minimal Edition",
      description: "Sleek & modern eyewear",
      image: [premiumMain],
      hoverImages: [premiumHover],
      colors: staticColorsCard5
    },
    {
      id: 203,
      price: "2699",
      originalPrice: "3699",
      rating: "4.7(870)",
      title: "Thick Frame Collection",
      description: "Bold look, comfortable fit",
      image: [thickMain, thickBrown, thickGray, thickDark, thickBlack],
      hoverImages: [thickMainHover, thickBrownHover, thickGrayHover, thickDarkHover, thickBlackHover],
      colors: staticColorsCard3
    },
    {
      id: 202,
      price: "2399",
      originalPrice: "3399",
      rating: "4.8(999)",
      title: "Transparent Clear Vision",
      description: "Ultra light & minimal design",
      image: [transparentMain, transparentBlack, transparentBlue, transparentClear],
      hoverImages: [transparentBlueHover, transparentBlackHover, transparentClearHover, transparentBlackHoverAlt],
      colors: staticColorsCard2
    },
    {
      id: 201,
      price: "2499",
      originalPrice: "3499",
      rating: "4.9(1200)",
      title: "Premium Round Frames",
      description: "Stylish, elegant new collection",
      image: [roundYellow, roundDarkGreen, roundChoco, roundViolet, roundBlue],
      hoverImages: [roundYellowHover, roundDarkGreenHover, roundChocoHover, roundVioletHover, roundBlueHover],
      colors: staticColorsCard6
    }
  ].reverse(); // ✅ Reverse order for New Arrivals display

  return (
    <ProductSlider 
      title="New Arrivals"
      products={products}
      showFilterButtons={true}
      defaultFilter="Eyeglasses"
    />
  );
};

export default NewArrivals;
