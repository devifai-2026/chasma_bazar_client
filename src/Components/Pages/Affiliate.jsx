import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import img from "../../assets/affiliate/Group 272.svg";

const Affiliate = () => {
    return (
        <div className='border-t max-w-[90%] mx-auto mt-6 md:mt-10'>
            <div
                className="flex justify-start w-full mx-auto mt-4 pl-1 text-xl"
                data-aos="fade-up"
            >
                <Breadcrumbs />
            </div>
            
            <div className='mt-8 md:mt-16 max-w-[90%] mx-auto'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-amiri text-center mb-8 md:mb-12'>Join as an Affiliate Marketer</h2>
                
                {/* Form Section */}
                <div className='flex items-center justify-between gap-8 md:gap-16 flex-col lg:flex-row'>
                    {/* Left Form */}
                    <div className='w-full lg:flex-1' data-aos="fade-right" data-aos-duration="800">
                        <div className='bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full'>
                            <h3 className='text-xl md:text-2xl font-amiri text-center mb-4 md:mb-2'>Join Now</h3>
                            
                            <form className='space-y-4 md:space-y-6'>
                                {/* Name Field */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base'
                                    />
                                </div>
                                
                                {/* Email Field */}
                                <div>
                                    <input
                                        type="email"
                                        placeholder="yourmail@gmail.com"
                                        className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base'
                                    />
                                </div>
                                
                                {/* Phone Field */}
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 text-sm md:text-base'
                                    />
                                </div>
                                
                                {/* Message Field */}
                                <div>
                                    <textarea
                                        placeholder="Message"
                                        rows="3"
                                        className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300 resize-none text-sm md:text-base'
                                    ></textarea>
                                </div>
                                
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className='w-full bg-[#FD7D68] text-white py-3 px-6 rounded-3xl font-amiri text-base md:text-lg hover:bg-[#e56a55] transition-colors duration-300 shadow-md hover:shadow-lg'
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Image Right */}
                    <div className='w-full lg:flex-1 flex justify-center' data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <img 
                            src={img} 
                            alt="Affiliate marketer illustration" 
                            className='w-[250px] sm:w-[280px] md:w-[300px] h-auto' 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Affiliate;