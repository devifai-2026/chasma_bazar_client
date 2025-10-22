import React, { useEffect, useState } from 'react';
import signup from "../../../assets/Signup/smiley-friends-hugging-Photoroom 1.svg"
import arrow from "../../../assets/Signup/Frame (4).svg"
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signup = () => {
 
                       const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };


    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });
    const [agreeToTerms, setAgreeToTerms] = useState(false);

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
  AOS.init({
    duration: 800,       // animation duration
    easing: 'ease-out-cubic',
    once: true,          // animate only once
    offset: 100,         // trigger 100px before element enters viewport
  });
}, []);

    return (
      <div className='border-t mb-10 mt-10 max-w-[90%] mx-auto'>
          <div className='mt-12'>
           <div className='flex flex-col-reverse md:flex-row gap-0 md:gap-8 lg:gap-12 lg:min-h-[80vh]' data-aos="fade-right">
            {/* form */}
            <div className='flex-1 shadow-md rounded-md p-4 flex items-center justify-center' >
                <div className='w-full max-w-md'>
                    <div className='flex items-center p-4 mb-8'>
                        <img onClick={handleBackClick} src={arrow} alt="Back" className='w-6 h-6 cursor-pointer' />
                        <h2 className='text-3xl font-amiri text-center flex-1'>Create An Account</h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className='space-y-6'>
                        {/* Name Field */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full p-3 border border-[#E5E5E5] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent font-inter'
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Phone Field */}
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className='w-full p-3 border border-[#E5E5E5] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent font-inter'
                                placeholder="+91 Phone"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div>
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
                        <div>
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
                        <div className='flex items-start space-x-3'>
                            <input
                                type="checkbox"
                                id="terms"
                                checked={agreeToTerms}
                                onChange={(e) => setAgreeToTerms(e.target.checked)}
                                className='w-4 h-4 mt-1 text-[#FD7D68] bg-gray-100 border-gray-300 rounded focus:ring-[#FD7D68] focus:ring-2'
                            />
                            <label htmlFor="terms" className='text-[#666666] text-sm font-inter'>
                                I agree to the <span className='text-blue-600 cursor-pointer'>Terms & Conditions</span> and <span className='text-blue-600 cursor-pointer'>Privacy Policy</span>.
                            </label>
                        </div>

                        {/* Create Account Button */}
                        <button
                            type="submit"
                            disabled={!agreeToTerms}
                            className={`w-full py-3 rounded-3xl font-inter font-semibold text-white transition-all duration-300 ${
                                agreeToTerms 
                                    ? 'bg-[#FD7D68] hover:bg-[#e56b56] transform hover:scale-105 shadow-lg' 
                                    : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        >
                            Create An Account
                        </button>

                        {/* Login Link */}
                        <div className='text-center mt-6'>
                            <p className='text-[#666666] font-inter'>
                                Have An Account, <span className='text-blue-600 cursor-pointer font-semibold'><Link to='/login'>Login Now</Link></span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>

            {/* img */}
            <div className='flex-1 flex items-center justify-center rounded-md' data-aos="fade-left" 
     data-aos-delay="200">
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

export default Signup;