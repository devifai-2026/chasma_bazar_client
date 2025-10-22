import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import heroImg1 from "../../assets/HomeHeroImg1.png"
import img from "../../assets/about/aboutimg.svg"
import chasma from "../../assets/about/409092678_aec94a19-84cb-46d3-b523-e4ead9a29e09 1.svg"
import tick from "../../assets/about/tick.svg"
import rimg from "../../assets/about/4006 1.svg"
import BestSellers from '../Home/BestSellers';

const About = () => {
    return (
        <div>
            <div className="flex justify-start w-[90%] mx-auto mt-4 pl-1 text-xl" data-aos="fade-up">
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
                <div className="pl-10 text-white font-serif" data-aos="fade-right" data-aos-delay="100">
                <h2 className="text-3xl font-semibold tracking-wide uppercase">About Us</h2>
                </div>
                <div className="hidden md:block absolute right-6 bottom-0" data-aos="fade-left" data-aos-delay="200">
                <img src={img} alt="" className="h-[285px] object-contain" />
                </div>
            </div>

            {/* About Content */}
            <div className='max-w-3xl mx-auto space-y-6 text-center mt-10'>
                <h2 className='text-4xl font-amiri uppercase' data-aos="fade-down" data-aos-delay="100">About Chashma Bazar</h2>
                <p className='text-[#666666] font-amiri text-2xl mb-10' data-aos="fade-down" data-aos-delay="200">See Better. Look Better. Feel Better.</p>
                <img 
                    className='h-[240px] mx-auto mt-12' 
                    src={chasma} 
                    alt="" 
                    data-aos="zoom-in" 
                    data-aos-delay="300"
                    data-aos-duration="800"
                />
                <p 
                    className='text-[#666666] font-inter' 
                    data-aos="fade-up" 
                    data-aos-delay="400"
                >
                    we believe that eyewear is more than just a necessity — it's a reflection of who you are. Our mission is to combine premium vision care with modern design, helping you see clearly and express your unique style confidently.
                </p>
                <p 
                    className='text-[#666666] font-inter' 
                    data-aos="fade-up" 
                    data-aos-delay="500"
                >
                    From everyday classics to bold fashion statements, every frame in our collection is crafted for comfort, clarity, and confidence. We source high-quality materials and work with skilled designers to ensure that each pair looks stunning and feels effortless to wear.
                </p>
                <p 
                    className='text-[#666666] font-inter' 
                    data-aos="fade-up" 
                    data-aos-delay="600"
                >
                    Whether you're updating your look, protecting your eyes, or finding your first pair of prescription glasses, we're here to make the process simple, stylish, and enjoyable.
                </p>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#FD7D68] mt-16" data-aos="fade-up" data-aos-delay="200">
                <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
                    {/* Left Content */}
                    <div className='text-white py-6 md:py-8 lg:py-20 lg:pl-20 px-6 lg:px-0 md:w-1/2 md:flex md:flex-col md:justify-center'>
                        <h2 
                            className='font-amiri text-5xl mb-5'
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            Why Choose Us
                        </h2>
                        <div className='space-y-3'>
                            <p 
                                className='flex items-start gap-3 font-inter text-sm md:text-base'
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                <img src={tick} alt="" className="mt-1 flex-shrink-0" />
                                <span><span className='font-bold'>Premium Quality Lenses</span> – Crystal-clear vision with durable, anti-glare coating.</span>
                            </p>
                            <p 
                                className='flex items-start gap-3 font-inter text-sm md:text-base'
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <img src={tick} alt="" className="mt-1 flex-shrink-0" />
                                <span><span className='font-bold'>Fashion-Forward Frames</span> – Trend-setting designs for every face and occasion.</span>
                            </p>
                            <p 
                                className='flex items-start gap-3 font-inter text-sm md:text-base'
                                data-aos="fade-right"
                                data-aos-delay="600"
                            >
                                <img src={tick} alt="" className="mt-1 flex-shrink-0" />
                                <span><span className='font-bold'>Comfort First</span> – Lightweight materials for all-day wearability.</span>
                            </p>
                            <p 
                                className='flex items-start gap-3 font-inter text-sm md:text-base'
                                data-aos="fade-right"
                                data-aos-delay="700"
                            >
                                <img src={tick} alt="" className="mt-1 flex-shrink-0" />
                                <span><span className='font-bold'>Virtual Try-On</span> – Try your favourite styles instantly online.</span>
                            </p>
                            <p 
                                className='flex items-start gap-3 font-inter text-sm md:text-base'
                                data-aos="fade-right"
                                data-aos-delay="800"
                            >
                                <img src={tick} alt="" className="mt-1 flex-shrink-0" />
                                <span><span className='font-bold'>Trusted Service</span> – Personalized support and easy returns.</span>
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div 
                        className='md:w-1/2 flex items-end justify-center md:justify-end'
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    >
                        <img 
                            src={rimg} 
                            alt="Why Choose Us" 
                            className="w-full max-w-md object-contain md:h-auto transform hover:scale-105 transition-transform duration-500" 
                        />
                    </div>
                </div>
            </div>

            {/* Best Sellers Section */}
            <div data-aos="fade-up" data-aos-delay="200">
                <BestSellers />
            </div>
        </div>
    );
};

export default About;