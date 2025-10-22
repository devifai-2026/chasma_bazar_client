import React, { useState, useRef, useEffect } from 'react';
import signup from "../../../assets/Signup/smiley-friends-hugging-Photoroom 1.svg";
import arrow from "../../../assets/Signup/Frame (4).svg";
import { Link, useNavigate } from "react-router-dom";

const VerifyOTP = () => {


           const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };


  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  // Focus on first input on component mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, value) => {
    // Allow only numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        // Move to previous input if current is empty
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const pastedNumbers = pastedData.replace(/\D/g, '').slice(0, 6); // Get only numbers, max 6 digits
    
    if (pastedNumbers.length > 0) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedNumbers.length && i < 6; i++) {
        newOtp[i] = pastedNumbers[i];
      }
      setOtp(newOtp);
      
      // Focus on the next empty input or last input
      const nextIndex = Math.min(pastedNumbers.length, 5);
      inputRefs.current[nextIndex].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === 6) {
      console.log('OTP Submitted:', otpString);
      // Handle OTP verification logic here
    } else {
      alert('Please enter complete 6-digit OTP');
    }
  };

  const isOtpComplete = otp.join('').length === 6;

  return (
    <div className="border-t mb-10 mt-10 max-w-[90%] mx-auto">
      <div className="mt-12">
        <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-8 lg:gap-12 lg:min-h-[80vh]">
          {/* form */}
          <div className="flex-1 shadow-md rounded-md p-4 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="flex items-center p-4 mb-8">
                <img
                  src={arrow}
                  alt="Back"
                  className="w-6 h-6 cursor-pointer"
                   onClick={handleBackClick}
                />
                <h2 className="text-3xl font-amiri text-center flex-1">
                  Verify OTP
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* OTP Fields */}
                <div className="flex justify-between gap-2 mb-8">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#E5E5E5] text-center text-xl font-semibold focus:outline-none focus:border-[#FD7D68] focus:ring-2 focus:ring-[#FD7D68] transition-all duration-200"
                    />
                  ))}
                </div>

                {/* Verify OTP Button */}
               <Link to='/resetPassword'>
                   <button
                  type="submit"
                  disabled={!isOtpComplete}
                  className={`w-full py-3 rounded-3xl font-inter font-semibold text-white transition-all duration-300 ${
                    isOtpComplete
                      ? 'bg-[#FD7D68] hover:bg-[#e56b56] transform hover:scale-105 shadow-lg'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Verify OTP
                </button> 
               </Link>

                {/* Resend Link */}
                <div className="text-end mt-6">
                  <p className="text-[#666666] font-inter">
                    Didn't receive?{" "}
                    <span className="text-blue-500 cursor-pointer hover:text-blue-600 ">
                      <Link to="/login">Resend</Link>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* img */}
          <div className="flex-1 flex items-center justify-center rounded-md">
            <img
              src={signup}
              alt="Signup illustration"
              className="w-full h-full object-cover max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;