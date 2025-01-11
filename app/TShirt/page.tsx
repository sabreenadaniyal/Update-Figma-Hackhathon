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
    <div>
      {/* Breadcrumbs */}
      <div className="wrapper border-gray-400 border-t mt-[20px]">
        <ul className="flex text-[14px] font-normal text-[#00000099] pt-[24px]">
          <li className="flex">Home <ChevronRight className="w-4" /></li>
          <li className="flex">Shop <ChevronRight className="w-4" /></li>
          <li className="flex">Men <ChevronRight className="w-4" /></li>
          <li className="flex font-bold">T-Shirt</li>
        </ul>
      </div>

      <div className='md:flex-col lg:flex lg:flex-row md:wrapper mt-2'>
        <div className='grid md:grid-cols-1 grid-col-1 h-full'>

          <div className='wrapper flex flex-col md:flex-row-reverse md:gap-5'>

            <div className='w-[350px] md:w-[444px] md:h-[530px] grid md:row-span-3 col-span-1'>
              <Image
                className=""
                src="/product details/green shirt.png"
                alt="img"
                width={444}
                height={530}
              />
            </div>


            <div className='flex md:flex-col mt-2 gap-2'>
              <div className='md:w-[152px] h-[167px]'>
                <Image
                  src="/product details/green shirt1.png"
                  alt="img"
                  width={152}
                  height={167} />
              </div>
              <div className='md:w-[152px] h-[167px]'>
                <Image
                  src="/product details/green shirt2.png"
                  alt="img"
                  width={152}
                  height={167} />
              </div>
              <div className='md:w-[152px] h-[167px]'>
                <Image
                  src="/product details/green shirt3.png"
                  alt="img"
                  width={152}
                  height={167} />
              </div>

            </div>
          </div>

        </div>

        <div className='lg:w-[400px] xl:mr-52 lg:ml-2 lg:mt-5 xl:ml-7 xl:mt-5'>

          <Image src="/product details/graphic shirt.png" alt="title"
            width={600}
            height={48} />

          <div className='flex items-center space-x-2'>
            <p className='text-[#FFC633;] text-[30px] '>★★★★★</p>
            <p className='text-[16px] font-normal text-[#000000]'>4.5/5</p>
          </div>
          <div className='flex items-center space-x-3'>
            <h3 className='text-[32px] font-bold'>$260</h3>
            <h3 className='line-through text-[#0000004D;] text-[32px]'>$300</h3>
            <p className='bg-[#FF33331A] text-[#FF3333] w-[72px] h-[34px] py-[5px] px-[14px] rounded-[62px]'>-40%</p>
          </div>

          <p className='text-[16px] font-normal text-[#00000099] lg:w-[590px] h-[33px] mt-4'>
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.</p>

          {/* Horizontal Line*/}
          <hr className='mt-20 lg:mt-8 md:mt-8' />

          <p className='w-[93px] h-[11px] text-[#00000099] mt-2'>Select Colors</p>
          <div className='flex space-x-2 mt-4'>
            <div className='w-[37px] h-[37px] rounded-full bg-[#4F4631] border-2 hover:border-black ml-2 focus:outline-none'>
              <Check className='text-white mx-[6px] my-[5px]' /></div>
            <div className='w-[37px] h-[37px] rounded-full bg-[#314F4A] border-2 hover:border-black ml-2 focus:outline-none'></div>
            <div className='w-[37px] h-[37px] rounded-full bg-[#31344F] border-2 hover:border-black ml-2 focus:outline-none'></div>
          </div>

          {/* Horizontal Line*/}
          <hr className='mt-8' />

          <p className='text-[#00000099] mt-2'>Choose Size</p>
          <div className='flex space-x-5 mt-4'>
            <button className='bg-[#F0F0F0] text-[#00000099] rounded-[62px] w-[86px] h-[46px] text-[14px] font-normal hover:bg-black hover:text-white'>Small</button>
            <button className='bg-[#F0F0F0] text-[#00000099] rounded-[62px] w-[105px] h-[46px] text-[14px] font-normal hover:bg-black hover:text-white'>Medium</button>
            <button className='bg-[#F0F0F0] text-[#00000099] rounded-[62px] w-[89px] h-[46px] text-[14px] font-normal hover:bg-black hover:text-white'>Large</button>
            <button className='bg-[#F0F0F0] text-[#00000099] rounded-[62px] w-[104px] h-[46px] text-[14px] font-normal hover:bg-black hover:text-white'>X-Large</button>

          </div>

          {/* Horizontal Line*/}
          <hr className='mt-8' />

          <div className='flex space-x-4 mt-8'>

            <div className="lg:w-[170px] md:w-[140px] h-[44px] w-[90px] bg-[#F0F0F0] items-center justify-center border-2 rounded-full flex">
              <button onClick={() => setCount(count - 1)} className="w-[56px] h-[52px] text-[30px] font-bold">
                -</button>
              <button onClick={() => setCount(1)} className="w-[58px] h-[52px] text-[26px]">
                1</button>
              <button onClick={() => setCount(count + 1)} className="w-[56px] h-[52px] text-[30px] font-bold">
                +</button>
            </div>

            <Link href="/Cart">
              <div>
                <button className='md:w-[300px] md:h-[52px] w-[200px] h-[44px] bg-black text-[#F0F0F0] text-base rounded-[62px] hover:text-red-700'>
                  Add to Cart</button>
              </div>
            </Link>
          </div>

        </div>
      </div>

      <div className="wrapper flex justify-around mt-10 hover:text-black gap-2">
        <Link href="" className="w-[133px] h-[14px] text-[16px] hover:text-black">
          Product Details
          <div className="border-b-2 border-gray-400 md:w-[320px] w-[110px] md:ml-[-140px] hover:border-black "></div>
        </Link>

        <Link href="" className="w-[133px] h-[14px] text-[16px] hover:text-black">
          Rating & Reviews
          <div className="border-b-2 border-black md:w-[320px] w-[130px] md:ml-[-140px] hover:border-black">
          </div>
        </Link>

        <Link href="" className="w-[133px] h-[14px] text-[16px] hover:text-black">
          FAQs
          <div className="border-b-2 border-gray-400 md:w-[320px] w-[100px] md:ml-[-140px] hover:border-black">
          </div>
        </Link>
      </div>


      {/* Reviews Header */}
      <div className="wrapper flex flex-wrap items-center justify-between mt-9 space-y-4">

        <div className="flex items-center">
          <h1 className="text-2xl font-bold sm:text-sm ">All Reviews</h1>
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
          <button className="px-6 py-2 bg-black text-white rounded-full hover:text-green-500">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="wrapper md:w-[610px] lg:w-[1100px] xl:w-[1300px] w-[358px] mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        {ratings.map((review, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-sm border hover:shadow-md border-gray-200">

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
        <button className='w-[230px] h-[52px] border-2 rounded-full border-gray-300 hover:bg-black hover:text-white'>Load More Reviews</button>
      </div>


      <div className="wrapper max-w-[1440px] mx-auto py-12 mt-8">

        {/* You might Header */}
        <div className="mb-6 items-center flex justify-center w-full h-[58px]">
          <Image
            src="/product Details/You might also like.png"
            alt="Also Like"
            width={579}
            height={58}
          />

          {/* You Might Also Like Products */}
          <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item, index) => (
              <div key={index}
                className="rounded-lg shadow-sm hover:shadow-md">

                <div className='w-[295px] h-[298px] gap-8'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={295}
                    height={298}
                    className="object-cover rounded-xl mb-4" />
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
            ))
            }
          </div>

        </div>





      </div>
    </div>
  )
}

export default TShirt
