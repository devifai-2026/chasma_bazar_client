import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const { totalPrice = 0, discount = 0, payable = 0 } = location.state || {};
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleMethodSelect = (method) => {
        setSelectedMethod(method);
    };

    return (
        <div>
            {/* Custom Breadcrumbs for Payment */}
            <div className="flex justify-start w-[90%] mx-auto mt-4 pl-1 text-xl" data-aos="fade-up">
                <nav className="flex items-center space-x-2 text-sm font-inter py-4">
                    <Link 
                        to="/" 
                        className="text-[#666666] hover:text-[#FD7D68] transition-colors duration-300"
                    >
                        Home
                    </Link>
                    <span className="text-[#666666]">›</span>
                    <Link 
                        to="/cart"
                        className="text-[#666666] hover:text-[#FD7D68] transition-colors duration-300"
                    >
                        Cart
                    </Link>
                    <span className="text-[#666666]">›</span>
                    <Link 
                        to="/checkout"
                        className="text-[#666666] hover:text-[#FD7D68] transition-colors duration-300"
                    >
                        Checkout
                    </Link>
                    <span className="text-[#666666]">›</span>
                    <span className="text-[#222222] font-medium">Payment</span>
                </nav>
            </div>

            <div className='mt-16 max-w-[90%] mx-auto'>
                <h2 className='text-5xl font-amiri text-center mb-12'>PAYMENT</h2>
                
                <div className='flex items-start justify-between flex-col lg:flex-row gap-8 lg:gap-16'>
                    {/* Left Side - Payment Methods */}
                    <div className='w-full lg:flex-1' data-aos="fade-right" data-aos-duration="800">
                        <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg w-full'>
                            {/* UPI Section */}
                            <div className='mb-8'>
                                <div 
                                    className='flex items-center justify-between mb-6 cursor-pointer'
                                    onClick={() => handleMethodSelect('upi')}
                                >
                                    <h3 className='text-xl lg:text-2xl font-amiri'>UPI</h3>
                                    <div className="relative">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="upi"
                                            checked={selectedMethod === 'upi'}
                                            onChange={(e) => setSelectedMethod(e.target.value)}
                                            className="sr-only"
                                        />
                                        <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            selectedMethod === 'upi' 
                                                ? 'border-[#FD7D68] bg-[#FD7D68]' 
                                                : 'border-gray-300 bg-white'
                                        }`}>
                                            {selectedMethod === 'upi' && (
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    <input
                                        type="text"
                                        placeholder="Your UPI ID"
                                        className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300'
                                    />
                                </div>
                            </div>

                            {/* Card Section */}
                            <div>
                                <div 
                                    className='flex items-center justify-between mb-6 cursor-pointer'
                                    onClick={() => handleMethodSelect('card')}
                                >
                                    <h3 className='text-xl lg:text-2xl font-amiri'>Card <span className='text-sm lg:text-base'>(ATM, Credit, Debit Card)</span></h3>
                                    <div className="relative">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="card"
                                            checked={selectedMethod === 'card'}
                                            onChange={(e) => setSelectedMethod(e.target.value)}
                                            className="sr-only"
                                        />
                                        <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                                            selectedMethod === 'card' 
                                                ? 'border-[#FD7D68] bg-[#FD7D68]' 
                                                : 'border-gray-300 bg-white'
                                        }`}>
                                            {selectedMethod === 'card' && (
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='space-y-6'>
                                    {/* Card Number */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Card Number"
                                            className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300'
                                        />
                                    </div>
                                    
                                    {/* MM and YY in same row */}
                                    <div className='flex gap-4'>
                                        <div className='flex-1'>
                                            <input
                                                type="text"
                                                placeholder="MM"
                                                className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300'
                                            />
                                        </div>
                                       
                                        <div className='flex-1'>
                                            <input
                                                type="text"
                                                placeholder="YY"
                                                className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300'
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* CVV and Full Name */}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300'
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className='w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent transition-all duration-300'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Side - Price Summary */}
                    <div className='w-full lg:flex-1' data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <div className='bg-white p-6 lg:p-8 rounded-2xl shadow-lg w-full'>
                            {/* Price Details */}
                            <div className='space-y-6 mb-8'>
                                <div className='flex justify-between items-center'>
                                    <span className='text-lg'>Total Price:</span>
                                    <span className='text-lg font-semibold'>₹{totalPrice}</span>
                                </div>
                                
                                <div className='flex justify-between items-center'>
                                    <span className='text-lg text-[#00EA90]'>Discount</span>
                                    <span className='text-lg text-[#00EA90]'>-₹{discount}</span>
                                </div>
                                
                                <div className='flex justify-between items-center pt-4 border-t border-gray-300'>
                                    <span className='text-xl font-semibold'>Total Payable:</span>
                                    <span className='text-xl font-semibold'>₹{payable}</span>
                                </div>
                            </div>
                            
                            {/* Pay Now Button */}
                            <button className='w-full bg-[#FD7D68] text-white py-3 px-6 rounded-3xl font-amiri text-lg hover:bg-[#e56a55] transition-colors duration-300 shadow-md hover:shadow-lg'>
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;