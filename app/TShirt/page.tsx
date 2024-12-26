"use client"
import { useState } from "react"
import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react';
import { Check } from 'lucide-react';
import Link from "next/link";
import { ChevronDown } from 'lucide-react';
import { Ellipsis } from 'lucide-react'

const TShirt = () => {
  const [count, setCount] = useState(1)
  const ratings = [
    {
      stars: "★★★★★", // Rendered star
      title: "Samantha D.",
      image: "/product details/green tick.png",
      reviews:
        "I absolutely love this t-shirt! The design is unique & the fabric feels so comfortable: As a fellow designer, I appreciate the attention to details. It's become my favorite go-to t-shirt.",
      posting: "Posted on August 14, 2023",
    },
    {
      stars: "★★★★★", // Rendered star
      title: "Alex M.",
      image: "/product details/green tick.png",
      reviews:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I am quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      posting: "Posted on August 15, 2023",
    },
    {
      stars: "★★★★", // Rendered star
      title: "Ethan R.",
      image: "/product details/green tick.png",
      reviews:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eyes, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      posting: "Posted on August 16, 2023",
    },
    {
      stars: "★★★★★", // Rendered star
      title: "Olivia P.",
      image: "/product details/green tick.png",
      reviews:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident the designer poured their creativity into making this t-shirt stand out.",
      posting: "Posted on August 17, 2023",
    },
    {
      stars: "★★★★★", // Rendered star
      title: "Liam K.",
      image: "/product details/green tick.png",
      reviews:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
      posting: "Posted on August 18, 2023",
    },
    {
      stars: "★★★★★", // Rendered star
      title: "Ava H.",
      image: "/product details/green tick.png",
      reviews:
        "I am not just wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the designer make this shirt a conversation starter.",
      posting: "Posted on August 19, 2023",
    },
  ]
  const items = [
    {
      image: "/product details/blue shirt.png",
      title: "Polo with Contrast Trims",
      stars: "★★★★", // Rendered star
      rating: "4.0/5",
      SalePrice: "$212",
      OriginalPrice: "$242",
      button: "-20%",
    },
    {
      image: "/product details/screen print.png",
      title: "Gradient Graphic T-shirt.",
      stars: "★★★★", // Rendered star
      rating: "3.5/5",
      SalePrice: "$145",
    },
    {
      image: "/product details/pink shirt.png",
      title: "Polo with Tipping Details",
      stars: "★★★★★", // Rendered star
      rating: "4.5/5",
      SalePrice: "$180",
    },
    {
      image: "/product details/black stripe shirt.png",
      title: "Black Striped T-shirt",
      stars: "★★★★★", // Rendered star
      rating: "5.0/5",
      SalePrice: "$120",
      OriginalPrice: "$150",
      button: "-30%",
    },
  ]

  return (
    <div className='wrapper w-[1440px] border-gray-400 mt-[25px] border-t mx-auto px-4 md:px-8'>

      {/* Breadcrumbs */}
      <div className="w-[259px] h-[22px] flex mt-5 text-gray-500 gap-1">
        <ul className="flex gap-1">
          <li>Home <ChevronRight className="ml-11 mt-[-22px]" /></li>
          <li>Shop <ChevronRight className="ml-9 mt-[-22px]" /></li>
          <li>Men <ChevronRight className="ml-7 mt-[-22px]" /></li>
          <li className="font-semibold">T-Shirt</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-wrap md:flex-wrap mt-2 gap-6">

        {/* Left Side:Images */}
        <div className="flex-1 grid grid-cols-2 gap-4 w-[320px] h-[530px] mt-5">
          <div className="w-[152px] h-[167px]">
            <Image src="/product details/green shirt1.png" alt="shirt"
              width={152}
              height={167} />
          </div>
          <div className="row-span-3 w-[444px] h-[530px]">
            <Image src="/product details/green shirt.png" alt="shirt"
              width={444}
              height={530} />

          </div>
          <div className="w-[152px] h-[167px] ">
            <Image src="/product details/green shirt2.png" alt="shirt"
              width={152}
              height={167} />
          </div>
          <div className="w-[152px] h-[167px]">
            <Image src="/product details/green shirt3.png" alt="shirt"
              width={152}
              height={167} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[404px] h-[670] flex-col mx-auto ml-[590px] lg:w-1/2 flex lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <Image className='mt-[-535px] mb-1' src="/product details/graphic shirt.png" alt="shirt"
          width={600}
          height={48}
        />

        <div className="flex flex-col mb-4 w-[193px] h-[24.71px]">
          <span className="flex items-center text-yellow-400 text-2xl">
            &#9733; &#9733; &#9733; &#9733; &#9733;
            <span className="text-gray-600 ml-3 text-lg">4.5/5</span>
          </span>

          <div className='mt-3 flex'>
            <h3 className='w-[81px] h-[43px] text-bold text-3xl font-bold'>$260</h3>
            <h4 className='line-through text-gray-500 text-2xl'>$300</h4>
            <span className='bg-red-200 text-red-600 w-[72px] h-[34px] rounded-xl ml-3 px-3 py-1'>-40%</span>
          </div>

          <p className="w-[590px] h-[33px] text-gray-500 mt-2 text-[16px]">
            This graphic t-shirt which is perfect for any occassion.Crafted from a soft
            and breathable fabric.it offers superior comfort and style.
          </p>

          {/* Horizontal Line*/}
          <div className='w-[590px] text-gray-400 border-gray-300 border-b-2 mt-9'></div>

          {/* Color Swatch*/}
          <div className="mt-5 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <span className="mr-3 w-[93px] h-[11px] text-gray-400 text-[16px]">Select Colours</span>
            <div className="w-[143px] h-[37px] mt-3">
              <button className="w-[37px] h-[37px] border-2 border-[#4F4631] bg-[#4F4631] hover:border-black rounded-full focus:outline-none">
                <Check className="text-white ml-1 text-xs" />
              </button>
              <button className="w-[37px] h-[37px] border-2 border-[#314F4A] bg-[#314F4A] hover:border-black ml-2 rounded-full focus:outline-none"></button>
              <button className="w-[37px] h-[37px] border-2 border-[#31344F] bg-[#31344F] hover:border-black  ml-2 rounded-full focus:outline-none"></button>
            </div>

            {/* Horizontal Line*/}
            <div className='w-[590px] text-gray-400 border-gray-300 border-b-2 mt-6'></div>

            {/* Size */}
            <div className=" mt-4 items-center">
              <span className="text-gray-400 text-[16px]">Choose Size</span>
              <div className="w-[420px] h-[46px] mt-3 flex gap-2">
                <div className='w-[86px] h-[46px] px-6 py-3 bg-gray-300 hover:bg-black hover:text-white rounded-full'>Small</div>
                <div className='w-[86px] h-[46px] px-5 py-3 bg-gray-300 hover:bg-black hover:text-white  rounded-full'>Medium</div>
                <div className='w-[86px] h-[46px] px-6 py-3 bg-gray-300 hover:bg-black hover:text-white  rounded-full'>Large</div>
                <div className='w-[86px] h-[46px] px-4 py-3 bg-gray-300 hover:bg-black hover:text-white  rounded-full'>X-Large</div>
              </div>
            </div>

            {/* Horizontal Line*/}
            <div className='w-[590px] text-gray-400 border-gray-300 border-b-2 mt-6'></div>

            {/* Button */}
            <div className="flex mt-5">

              <div className="items-center flex border-2 bg-gray-300 rounded-full  w-[170px] h-[52px]">
                <button onClick={() => setCount(count - 1)} className="w-[56px] h-[52px] text-[30px] font-bold">
                  -</button>
                <button onClick={() => setCount(1)} className="w-[58px] h-[52px] text-[26px]">
                  1</button>
                <button onClick={() => setCount(count + 1)} className="w-[56px] h-[52px] text-[30px] font-bold">
                  +</button>
              </div>

              <Link href="/Cart" className="ml-5 rounded-[62px] bg-black">
                <button className="w-[400px] h-[52px] text-white items-center text-[16px] hover:bg-gray-500">
                  Add To Cart</button>
              </Link>


            </div>
          </div>

        </div>

      </div>

      <div className="flex justify-around mb-8 hover:text-black">
        <Link href="" className="w-[133px] h-[14px] text-[16px] hover:text-black">
          Product Details
          <div className="border-b-2 border-gray-400 w-[500px] ml-[-140px] hover:border-black "></div>
        </Link>

        <Link href="" className="w-[133px] h-[14px] text-[16px] hover:text-black">
          Rating & Reviews
          <div className="border-b-2 border-black w-[500px] ml-[-140px] hover:border-black">
          </div>
        </Link>

        <Link href="" className="w-[133px] h-[14px] text-[16px] hover:text-black">
          FAQs
          <div className="border-b-2 border-gray-400 w-[330px] ml-[-60px] hover:border-black">
          </div>
        </Link>

      </div>

      <div className="wrapper max-w-[1440px] mx-auto px-4 mt-10">

        {/* Reviews Header */}
        <div className="flex flex-wrap items-center justify-between mb-4 space-y-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold sm:text-sm ">All Reviews</h1>
            <span className="text-gray-400 ml-2">(451)</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
              <Image
                src="/product details/vector.png"
                alt="Sort Icon"
                width={24}
                height={24}
              />
            </div>
            <button className="flex items-center px-4 py-2 bg-gray-300 rounded-full">
              Latest <ChevronDown className="ml-2" />
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-full">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 ">
          {ratings.map((review, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-sm border border-gray-200">

              {/* Review Header */}
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-xl">{review.stars}</span>
                <Ellipsis className="ml-[450px] text-gray-500 cursor-pointer" />
              </div>

              <div className='flex'>
                <h2 className="text-lg font-semibold flex">{review.title}</h2>
                <Image
                  src={review.image}
                  alt="Verified Icon"
                  width={19}
                  height={19}
                  className="ml-2  rounded-full"
                />
              </div>

              {/* Review Body */}
              <p className="text-gray-600 mb-4 mt-1">{review.reviews}</p>
              <p className="text-gray-400 text-sm">{review.posting}</p>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <button className='w-[230px] h-[52px] border-2 rounded-full border-gray-300'>Load More Reviews</button>
        </div>
      </div>


      <div className="wrapper max-w-[1440px] mx-auto py-12 mt-8">
        {/* You might Header */}
        <div className="mb-6 items-center flex justify-center w-full h-[58px]  ">
          <Image
            src="/product details/You might also like.png"
            alt="Also Like"
            width={579}
            height={58}
          />
        </div>

        {/* You Might Also Like Products */}
        <div className="wrapper grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div key={index} className="rounded-lg shadow-sm hover:shadow-md ">

              <div className='w-[295px] h-[298px]'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={295}
                  height={298}
                  className="object-cover rounded-xl mb-4"
                />
              </div>
              <div>
                <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 text-2xl">{item.stars}</span>
                  <span className="text-gray-400 ml-2">{item.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  {item.SalePrice && (
                    <span className="text-2xl font-bold text-black">{item.SalePrice}</span>
                  )}
                  {item.OriginalPrice && (
                    <span className="text-xl font-bold text-gray-400 line-through mr-[100px]">{item.OriginalPrice}</span>
                  )}
                  {item.button && (
                    <span className="w-[58px] h-[28px] text-sm font-bold mr-[10px] text-red-600 bg-red-200 rounded-[16px] px-3 py-1">{item.button}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>




    </div>

  )
}

export default TShirt






