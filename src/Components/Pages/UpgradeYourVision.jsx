import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Breadcrumbs from '../Breadcrumbs'
import heroImg1 from "../../assets/HomeHeroImg1.png"; 
import heroImg2 from "../../assets/UpgradeImg1.png";
// Card 1 (Eyeglasses - Color Variants)
import eyeglassBlue from '../../assets/BestSellers/glassimg2blue-removebg-preview.png';
import eyeglassOrange from '../../assets/BestSellers/glassimg2orange-removebg-preview.png';
import eyeglassRed from '../../assets/BestSellers/glassimg2red-removebg-preview.png';
import eyeglassRoseDusty from '../../assets/BestSellers/roseDustyglassImg2-removebg-preview-removebg-preview.png';
import eyeglassGreen from '../../assets/BestSellers/glassImgreen2-removebg-preview.png';

// Card 1 Hover Images
import eyeglassBlueHover from '../../assets/BestSellers/glassimg1Blue1-removebg-preview.png';
import eyeglassOrangeHover from '../../assets/BestSellers/glassimg1orange-removebg-preview.png';
import eyeglassRedHover from '../../assets/BestSellers/glassimg1red-removebg-preview.png';
import eyeglassRoseDustyHover from '../../assets/BestSellers/roseDustyglassImg1-removebg-preview.png';
import eyeglassGreenHover from '../../assets/BestSellers/glassImgreen-removebg-preview.png';

// Card 2 (Round Frame Glasses)
import roundYellow from '../../assets/BestSellers/card2Img2yellow-removebg-preview.png';
import roundDarkGreen from '../../assets/BestSellers/card2Img2darkgreen-removebg-preview.png';
import roundChoco from '../../assets/BestSellers/card2Img2choco-removebg-preview.png';
import roundViolet from '../../assets/BestSellers/card2Img1voliet-removebg-preview.png';
import roundBlue from '../../assets/BestSellers/card2Img2blue-removebg-preview.png';

// Card 2 Hover
import roundYellowHover from '../../assets/BestSellers/card2Img1yellow-removebg-preview.png';
import roundDarkGreenHover from '../../assets/BestSellers/card2Img1darkgreen-removebg-preview.png';
import roundChocoHover from '../../assets/BestSellers/card2Img1choco-removebg-preview.png';
import roundVioletHover from '../../assets/BestSellers/card2Img2voliet-removebg-preview.png';
import roundBlueHover from '../../assets/BestSellers/card2Img1blue-removebg-preview.png';

// Card 3 (Transparent Glasses)
import transparentMain from '../../assets/BestSellers/card3img1.1.png';
import transparentBlack from '../../assets/BestSellers/card3img2black-removebg-preview.png';
import transparentBlue from '../../assets/BestSellers/card3img2blue-removebg-preview.png';
import transparentClear from '../../assets/BestSellers/card3img2trasperent-removebg-preview.png';

// Card 3 Hover
import transparentBlueHover from '../../assets/BestSellers/card3img1blue-removebg-preview.png';
import transparentBlackHover from '../../assets/BestSellers/card3img1black-removebg-preview.png';
import transparentClearHover from '../../assets/BestSellers/card3imgtrasperent1-removebg-preview.png';
import transparentBlackHoverAlt from '../../assets/BestSellers/card3img1black-removebg-preview.png';

// Card 4 (Thick Frame Glasses)
import thickMain from '../../assets/BestSellers/card4imgmain1.png';
import thickBrown from '../../assets/BestSellers/card4img2-removebg-preview.png';
import thickGray from '../../assets/BestSellers/card4img3-removebg-preview.png';
import thickDark from '../../assets/BestSellers/card4img4-removebg-preview.png';
import thickBlack from '../../assets/BestSellers/card4img5_-removebg-preview.png';

// Card 4 Hover
import thickMainHover from '../../assets/BestSellers/card4imghover1.png';
import thickBrownHover from '../../assets/BestSellers/card4img2hover-removebg-preview.png';
import thickGrayHover from '../../assets/BestSellers/card4hoverimg3-removebg-preview.png';
import thickDarkHover from '../../assets/BestSellers/card4hoverimg4.webp-removebg-preview.png';
import thickBlackHover from '../../assets/BestSellers/card4hoverimg5_-removebg-preview.png';

// Card 5 (Minimal Glasses)
import minimalBlack from '../../assets/BestSellers/card5img1-removebg-preview.png';
import minimalGray from '../../assets/BestSellers/card5img2-removebg-preview.png';
import minimalSilver from '../../assets/BestSellers/card5img3-removebg-preview.png';

// Card 5 Hover
import minimalBlackHover from '../../assets/BestSellers/card5hoverimg1-removebg-preview.png';
import minimalGrayHover from '../../assets/BestSellers/card5imghover2-removebg-preview.png';
import minimalSilverHover from '../../assets/BestSellers/card5img3hover-removebg-preview.png';

// Card 6 (Premium Glasses)
import premiumMain from '../../assets/BestSellers/card6img1-removebg-preview.png';
import premiumHover from '../../assets/BestSellers/card6hoverimg1-removebg-preview.png';
import VisionProductSlider from './VisionProductSlider';


const UpgradeYourVision = () => {
    // Static color arrays
  const staticColors = ["#5C99CD", "#FEAA00", "#EE3431", "#BE9298", "#B5F306"];
  const staticColorsCard2 = ["#3C3B5B", "#4A4A42", "#F4F4F4", "#535246"];
  const staticColorsCard3 = ["#435A4D", "#E08504", "#443972", "#865938", "#B1AEAB"];
  const staticColorsCard4 = ["#2B282A", "#B4A394", "#141211"];
  const staticColorsCard5 = ["#1F1F1F"];
  const staticColorsCard6 = ["#F4EDC9", "#3D554F", "#F9A584", "#9F78C0", "#2B77C6"];

  // Product Data
  const products = [
    {
      id: 1,
      price: "1999",
      originalPrice: "2999",
      rating: "4.9(1999)",
      title: "Glass Royal1",
      description: "Ad litora torquent per conubia",
      image: [eyeglassBlue, eyeglassOrange, eyeglassRed, eyeglassRoseDusty, eyeglassGreen],
      hoverImages: [eyeglassBlueHover, eyeglassOrangeHover, eyeglassRedHover, eyeglassRoseDustyHover, eyeglassGreenHover],
      colors: staticColors
    },
    {
      id: 2,
      price: "1799",
      originalPrice: "2599",
      rating: "4.8(1500)",
      title: "Royal Glass two",
      description: "Ad litora torquent per conubia",
      image: [transparentMain, transparentBlack, transparentClear],
      hoverImages: [transparentBlueHover, transparentBlackHover, transparentClearHover, transparentBlackHoverAlt],
      colors: staticColorsCard2
    },
    {
      id: 3,
      price: "2199",
      originalPrice: "3199",
      rating: "4.7(1200)",
      title: "Tempus leo eu aenean sed diam",
      description: "Ad litora torquent per conubia",
      image: [thickMain, thickBrown, thickGray, thickDark, thickBlack],
      hoverImages: [thickMainHover, thickBrownHover, thickGrayHover, thickDarkHover, thickBlackHover],
      colors: staticColorsCard3
    },
    {
      id: 4,
      price: "1899",
      originalPrice: "2799",
      rating: "4.9(1800)",
      title: "Tempus leo eu aenean sed diam",
      description: "Ad litora torquent per conubia",
      image: [minimalBlack, minimalGray, minimalSilver],
      hoverImages: [minimalBlackHover, minimalGrayHover, minimalSilverHover],
      colors: staticColorsCard4
    },
    {
      id: 5,
      price: "2099",
      originalPrice: "3099",
      rating: "4.6(1100)",
      title: "Tempus leo eu aenean sed diam",
      description: "Ad litora torquent per conubia",
      image: [premiumMain],
      hoverImages: [premiumHover],
      colors: staticColorsCard5
    },
    {
      id: 6,
      price: "1999",
      originalPrice: "2999",
      rating: "4.9(1999)",
      title: "Tempus leo eu aenean sed diam",
      description: "Ad litora torquent per conubia",
      image: [roundYellow, roundDarkGreen, roundChoco, roundViolet, roundBlue],
      hoverImages: [roundYellowHover, roundDarkGreenHover, roundChocoHover, roundVioletHover, roundBlueHover],
      colors: staticColorsCard6
    }
  ];

    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, []);
    
  return (
    <div>
           <div className="flex justify-start w-[90%] mx-auto mt-4 pl-1 text-xl" data-aos="fade-down">
        <Breadcrumbs />
      </div>


        <div
        className="w-[90%] mx-auto mt-8 rounded-lg overflow-hidden relative h-[300px] flex items-center"
        style={{ backgroundImage: `url(${heroImg1})`, backgroundPosition: "center", backgroundColor: "#0E798C" }}
         data-aos="fade-up"
      >
        <div className="pl-12 md:pl-16 text-white font-serif" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-amiri tracking-wide">Upgrade Your </h2>
          <h2 className="text-4xl md:text-5xl font-amiri tracking-wide pt-2">Vision Today</h2>
        </div>
        <div className="hidden md:block absolute right-6 bottom-0" data-aos="fade-left">
          <img src={heroImg2} alt="" className="h-[285px] object-contain" />
        </div>
      </div>

        <div className="space-y-16 w-[90%] mx-auto">
      {/* First Slider - Left to Right (default) */}
      <VisionProductSlider
      data-aos="fade-up" data-aos-delay="100"
        title="Men's Eyeglasses Collection"
        products={products}
        direction="left-to-right"
      />

      {/* Second Slider - Right to Left */}
      <VisionProductSlider
      data-aos="fade-up" data-aos-delay="200"
        title="Women’s Eyeglasses Collection"
        products={products}
        
        direction="right-to-left"
      />

      {/* Third Slider - Left to Right */}
      <VisionProductSlider 
      data-aos="fade-up" data-aos-delay="300"
        title="Kid's Eyeglasses Collection"
        products={products}
        direction="left-to-right"
      />
    </div>
        
         </div>
  )
}

export default UpgradeYourVision