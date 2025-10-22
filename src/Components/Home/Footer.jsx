import React from 'react';
import img1 from "../../assets/Footer/ChashmahBazar.svg";
import img2 from "../../assets/Footer/ChashmahBazartwo.svg";
import img3 from "../../assets/Footer/image 2.svg";


const Footer = () => {
    
    return (
        <div className='bg-black mt-16 pb-8 relative'>
            <div className='max-w-[90%] mx-auto'>
                {/* Top Section with Logos */}
                <div className='pt-16'>
                    <img src={img1} alt="ChashmahBazar" className="w-full max-w-xs sm:max-w-none" />
                    <img className='mt-4 w-full max-w-xs sm:max-w-none' src={img2} alt="ChashmahBazar" />
                </div>
                
                {/* AR Image - Absolute positioned */}
                <img 
                    className='absolute md:right-10 lg:right-16 bottom-[85px] h-[220px] md:h-[450px] lg:h-[540px] z-10 hidden sm:block' 
                    src={img3} 
                    alt="AR" 
                />
                
                {/* Main Content Section */}
                <div className='flex  sm:flex-row sm:justify-between items-start mt-12 max-w-full sm:max-w-[50%] gap-8 sm:gap-0'>
                    {/* Quick Links */}
                    <div className='text-white flex flex-col space-y-4 w-full sm:w-auto'>
                        <h2 className='text-2xl font-amiri mb-2'>Quick Links</h2>
                        <a href="#" className='font-inter text-gray-300 hover:text-white transition-colors'>Home</a>
                        <a href="#" className='font-inter text-gray-300 hover:text-white transition-colors'>About Us</a>
                        <a href="#" className='font-inter text-gray-300 hover:text-white transition-colors'>Contact Us</a>
                        <a href="#" className='font-inter text-gray-300 hover:text-white transition-colors'>Testimonial</a>
                    </div>
                    
                    {/* Others Links */}
                    <div className='text-white flex flex-col space-y-4 w-full sm:w-auto'>
                        <h2 className='text-2xl font-amiri mb-2'>Others Links</h2>
                        <a href="#" className='font-inter text-gray-300 hover:text-white transition-colors'>FAQs</a>
                        <a href="#" className='font-inter text-gray-300 hover:text-white transition-colors'>Privacy Policy</a>
                        <a href="#" className='font-inter text-gray-300 hover:text-white transition-colors'>Terms of Service</a>
                        <a href="#" className='font-inter text-gray-300 hover:text-white transition-colors'>Track Order</a>
                    </div>
                </div>
                
                {/* Copyright Section */}
                <div className='mt-16 pt-8 border-t border-gray-700'>
                    <p className='text-gray-400 text-center font-inter text-xs md:text-sm'>
                        COPYRIGHT 2025 COMPANY NAME, ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;