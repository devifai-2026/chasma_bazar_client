import React, { useEffect, useState } from 'react';
import signup from "../../../assets/Signup/smiley-friends-hugging-Photoroom 1.svg"
import arrow from "../../../assets/Signup/Frame (4).svg"
import { Link, useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {


                   const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };
      useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

    return (
      <div className='border-t mb-10 mt-10 max-w-[90%] mx-auto'>
          <div className='mt-12'>
           <div className='flex flex-col-reverse md:flex-row gap-0 md:gap-8 lg:gap-12 lg:min-h-[80vh]'>
            {/* form */}
            <div className='flex-1 shadow-md rounded-md p-4 flex items-center justify-center' data-aos="fade-right">
                <div className='w-full max-w-md'>
                    <div className='flex items-center p-4 mb-8'>
                        <img onClick={handleBackClick} src={arrow} alt="Back" className='w-6 h-6 cursor-pointer' />
                        <h2 className='text-2xl md:text-3xl font-amiri text-center flex-1'>Login To Your Account</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className='space-y-6'>
                  

                        {/* Email Field */}
                        <div data-aos="fade-up" data-aos-delay="100">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full p-3 border border-[#E5E5E5] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent font-inter'
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div data-aos="fade-up" data-aos-delay="200">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className='w-full p-3 border border-[#E5E5E5] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent font-inter'
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {/* Terms and Conditions */}
                        <div className='flex justify-end space-x-3' data-aos="fade-up"
                  data-aos-delay="300">
                        
                          <Link to='/passwordRecovery'>  <label htmlFor="terms" className='text-blue-600 text-sm font-inter '>
                               Forgot Password
                            </label></Link>
                        </div>

                        {/* Create Account Button */}
                    <div data-aos="zoom-in" data-aos-delay="400" >    <button
                            type="submit"
                            
                            className="w-full py-3 rounded-3xl font-inter font-semibold text-white transition-all duration-300 bg-[#FD7D68] hover:bg-[#e56b56] transform hover:scale-105 shadow-lg" 
                                  
                            
                        >
                           Login Now
                        </button></div>

                        <h2 className='text-center' data-aos="fade-up"
                  data-aos-delay="500">Or Login With <span className='text-blue-600'>GOOGLE</span></h2>

                        {/* Login Link */}
                        <div className='text-center mt-6'   data-aos="fade-up"
                  data-aos-delay="600">
                            <p className='text-[#666666] font-inter'>
                                Don't have An Account, <span className='text-blue-400 cursor-pointer '><Link to='/signup'>Create Account</Link></span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* img */}
            <div className='flex-1 flex items-center justify-center rounded-md' data-aos="fade-left">
               <img 
                 src={signup} 
                 alt="Signup illustration" 
                 className='w-full h-full object-cover max-h-[600px]'
               />
            </div>
           </div>
        </div>
      </div>
    );
};

export default Login;