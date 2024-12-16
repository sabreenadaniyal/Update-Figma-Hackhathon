"use client"
import React from 'react';
import { RxCross2 } from "react-icons/rx";
import  { useState } from 'react';

const TopHeader = () => {
  // State to control visibility
  const [isVisible, setIsVisible] = useState(true);
  // Conditional rendering: Ensure JSX is returned

  return (
    <>
    {isVisible && (
    <div className="w-full h-[38px] bg-black flex justify-center items-center">
      <div className="w-[859px] flex items-center justify-between text-white">
        {/* Left Section */}
        <div className="flex gap-4">
          <p className="text-gray-300 text-base">
            Sign up and get 20% off your first order.{' '}
            <span className="text-white underline hover:bg-gray-600 cursor-pointer rounded-sm">
              Sign Up Now
            </span>
          </p>
        </div>

        {/* Close Button */}
        <div className="flex items-center">
          <RxCross2 className="text-white w-[20px] h-[20px] cursor-pointer hover:bg-rose-950" 
          onClick={() => setIsVisible(false)} /> {/* Hide on click */}
        </div>
      </div>
    </div>
  )}
  </>
  );
};

export default TopHeader;
