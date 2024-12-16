import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiMail, CiInstagram } from "react-icons/ci";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-200 wrapper w-full mt-16">
      {/* Subscription Section */}
      <div className="wrapper bg-black text-white p-6 text-center md:flex md:justify-between md:items-center">
       <Image src="/hero section/upto date.png" alt="upto"
       width={551}
       height={91}/>
      
        <div className="flex flex-col md:flex-col items-center gap-4 w-[349px] h-[108px] sm:items-center">
          <div className='flex justify-start items-center bg-white rounded-[62px]'>
        <CiMail className='text-black ml-5'/>
          <input 
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 rounded-full sm:w-[349px] sm:h-[48px]"
          />
          </div>
          
          <input className="px-6 py-2 rounded-full sm:w-[349px] sm:h-[48px] "
            type="" placeholder="Subscribe to Newsletter"
          />
              
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-6 text-black">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-bold">SHOP.CO</h3>
          <p className="text-sm mt-2">
            We have clothes that suit your style and make you proud to wear them, for men and women alike.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="w-6 h-6 hover:text-blue-500" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook className="w-6 h-6 hover:text-blue-500" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <CiInstagram className="w-6 h-6 hover:text-pink-500" />
            </Link>
            <Link href="https://github.com" target="_blank">
              <FaGithub className="w-6 h-6 hover:text-gray-700" />
            </Link>
          </div>
        </div>

        {/* Links Sections */}
        {[
          {
            title: "Company",
            links: ["About", "Features", "Works", "Careers"],
          },
          {
            title: "Help",
            links: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
          },
          {
            title: "FAQ",
            links: ["Account", "Manage Deliveries", "Orders", "Payments"],
          },
          {
            title: "Resources",
            links: ["Free eBooks", "Development Tutorials", "How-To Blog", "YouTube Playlist"],
          },
        ].map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold ml-20">{section.title}</h3>
            <ul className="mt-4 space-x-2 ml-20 text-sm">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:underline cursor-pointer ml-2">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-400 h-px mx-6"></div>
      <div className="flex justify-between items-center p-3 text-sm">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div className="flex flex-wrap gap-1">
          {["Badge (5).png", "Badge (1).png", "Badge (2).png", "Badge (3).png", "Badge (4).png"].map((badge, idx) => (
            <Image
              key={idx}
              src={`/hero section/${badge}`}
              alt={`Badge ${idx + 1}`}
              width={47}
              height={32}
              className="rounded hover:bg-blue-400 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
