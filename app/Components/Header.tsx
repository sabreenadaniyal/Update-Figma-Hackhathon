'use client'
import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import MobileNavbar from "./MobileNavbar";
import SearchBar from "./SearchBar";


const Header = () => {
 
  return (
    <header className="bg-white wrappper py-4">
      <div className="wrapper flex items-center justify-between px-4">
      
       {/* Menu */}
       <div className="lg:hidden">
          <MobileNavbar />
        </div>

        {/* Logo */}
        <div className="lg:hidden block">
          </div>
        <Link href="/" className="text-gray-900 text-2xl font-extrabold hover:opacity-5 cursor-pointer">SHOP.CO </Link>

        {/* Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/TShirt" className="hover:text-gray-900 flex items-center bg-white hover:bg-gray-300">
          Shop <FaAngleDown />
           </Link>
          <Link href="#topselling" className="hover:text-gray-900 hover:bg-gray-300">
            On Sale
          </Link>
          <Link href="#newarrival" className="hover:text-gray-900 hover:bg-gray-300">
            New Arrivals
          </Link>
          <Link href="#Hero" className="hover:text-gray-900 hover:bg-gray-300">
            Brands
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="lg:flex flex items-center space-x-6">
          {/* Search Box */}
          <div className="w-[557px] h-[48px] items-center bg-gray-100 rounded-full px-3 py-1 space-x-2 max-w-md lg:flex hidden md:flex">
            <SearchBar />
          </div>

          {/* User Icons */}
          <div className="flex items-center space-x-4">
            <CiSearch className="w-6 h-6 text-black font-extrabold hover:text-gray-700 cursor:pointer md:hidden" />
            
          {/*Cart */}
            <Link href="/Cart">
              <IoCartOutline className="w-6 h-6 hover:text-gray-700 cursor-pointer"/>
            </Link>
 
            {/* Login */}
            <Link href="/Login" target="blank">
            <FaRegUser className="w-6 h-6 hover:text-gray-700 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-between items-center px-4">
        {/* Burger Menu */}
        <button className="text-gray-900 text-lg focus:outline-none hidden">
          <FaAngleDown />
        </button>

        {/* Mobile Links */}
        <nav className="wrapper hidden  flex-col items-start space-y-2 mt-2">
          <Link href="/shop" className="hover:text-gray-900">
            Shop
          </Link>
          <Link href="/on sale" className="hover:text-gray-900">
            On Sale
          </Link>
          <Link href="/new arrival" className="hover:text-gray-900">
            New Arrivals
          </Link>
          <Link href="/brands" className="hover:text-gray-900">
            Brands
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
