import React from 'react';
import ProductSlider from '../Home/ProductSlider';
import sunglass from "../../assets/BestSellers/Sunglass.svg";

const YouMayAlsoLike = () => {

    const products = [
        {
          id: 101,
          price: "2499",
          originalPrice: "3499",
          rating: "4.8(899)",
          title: "Latest Designer Frame",
          description: "Brand new collection 2024",
          image: sunglass
        },
        {
          id: 102,
          price: "2299",
          originalPrice: "3299",
          rating: "4.7(750)",
          title: "Modern Aviator Style",
          description: "Fresh contemporary design",
          image: sunglass
        },
        {
          id: 103,
          price: "2699",
          originalPrice: "3699",
          rating: "4.9(1200)",
          title: "Premium Wayfarer",
          description: "New premium material",
          image: sunglass
        },
        {
          id: 104,
          price: "2199",
          originalPrice: "3199",
          rating: "4.6(600)",
          title: "Sport Edition",
          description: "Latest sports collection",
          image: sunglass
        },
        {
          id: 105,
          price: "2799",
          originalPrice: "3799",
          rating: "4.8(950)",
          title: "Luxury Collection",
          description: "New luxury line",
          image: sunglass
        },
        {
          id: 106,
          price: "2399",
          originalPrice: "3399",
          rating: "4.7(800)",
          title: "Classic Renewed",
          description: "Updated classic design",
          image: sunglass
        }
      ];
    

    return (
         <ProductSlider 
             title="You May Also Like"
             products={products}
             showFilterButtons={true}
             defaultFilter="Eyeglasses"
           />
    );
};

export default YouMayAlsoLike;