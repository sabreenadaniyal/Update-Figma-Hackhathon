import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiInstagram } from "react-icons/ci";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";
import TopFooter from './TopFooter';

const Footer = () => {
  return (
    <main className="bg-[#F0F0F0] w-full h-full md:h-[450px] lg:w-[1250px] xl:w-[1500px] relative max-w-screen-2xl mx-auto">
    {/* Render */}
    <span className="absolute top-[-80px]">
    <TopFooter/>
    </span>
  {/* container */}
  <div  className="flex h-full md:h-[400px] flex-col md:flex-row justify-around items-start p-5 pt-[160px] sm:pt-32 border-b">
    {/* top div */}
    <div className="flex flex-col justify-center items-center w-[200px]"> 
      <ul>
          <h2 className="text-2xl sm:text-3xl font-extrabold">SHOP.CO</h2>
          <p className="text-sm mt-1"> We have clothes that suits your style and which you are proud to wear. From women to men.</p>
             {/* icon */}
             <div className="flex items-center space-x-3 mt-1">
              <Link href="https://twitter.com" target="_blank">
              <FaTwitter className=" text-xl w-6 h-6 hover:text-blue-700"/>
              </Link>
              <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="text-xl w-6 h-6 hover:text-blue-500"/>
              </Link>
              <Link href="https://instagram.com" target="_blank">
              <CiInstagram className="text-xl w-6 h-6 hover:text-pink-700"/>
              </Link>
              <Link href="https://github.com" target="_blank">
              <FaGithub className="text-xl w-6 h-6 hover:text-gray-500"/>
              </Link>
             </div>
      </ul>
    </div>
    {/* mid div */}
    <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4">
        {/* box 1 */}
           <ul className="space-y-3 ">
             <h2 className="text-lg font-semibold sm:text-2xl">COMPANY</h2>
             <li  className="text-sm text-gray-500">About</li>
             <li  className="text-sm text-gray-500">Features</li>
             <li  className="text-sm text-gray-500">Works</li>
             <li  className="text-sm text-gray-500">Career</li>
             </ul>
          {/* box 2 */}
          <ul className="space-y-3">
             <h2 className="text-lg font-semibold sm:text-2xl">HELP</h2>
             <li  className="text-sm text-gray-500">Customer Support</li>
             <li  className="text-sm text-gray-500">Delivery Details</li>
             <li  className="text-sm text-gray-500">Terms and Conditions</li>
             <li  className="text-sm text-gray-500">Privacy Policy</li>
             </ul>
          {/* box 3*/}
          <ul className="space-y-3">
             <h2 className="text-lg font-semibold sm:text-2xl">FAQ</h2>
             <li  className="text-sm text-gray-500">Account</li>
             <li  className="text-sm text-gray-500">Manage Deliveries</li>
             <li  className="text-sm text-gray-500">Orders</li>
             <li  className="text-sm text-gray-500">Payments</li>
             </ul>
          {/* box 4 */}
          <ul className="space-y-3">
             <h2 className="text-lg font-semibold sm:text-2xl">RESOURCES</h2>
             <li className="text-sm text-gray-500">Free eBooks</li>
             <li className="text-sm text-gray-500">Development Tutorial</li>
             <li className="text-sm text-gray-500">How To - Blog</li>
             <li className="text-sm text-gray-500">Youtube Playlist</li>
             </ul>
    </div>
     
  </div>
   {/* bottom div */}
   <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
          <p className="text-sm xl:ml-12">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="flex items-center xl:mr-12">
              <Image src={"/hero section/Badge (5).png"} className="w-[50px]" width={100} height={100} alt="pic"/>
              <Image src={"/hero section/Badge (1).png"} className="w-[50px]" width={100} height={100} alt="pic"/>
              <Image src={"/hero section/Badge (2).png"} className="w-[50px]" width={100} height={100} alt="pic"/>
              <Image src={"/hero section/Badge (3).png"} className="w-[50px]" width={100} height={100} alt="pic"/>
              <Image src={"/hero section/Badge (4).png"} className="w-[50px]" width={100} height={100} alt="pic"/>
          </div>
      </div>
  </main>
  )
}

export default Footer
