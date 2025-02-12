'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Check } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { Product } from '../types/products';


const Casual = () => {
    const [Data, setData] = useState([])
    const [filter, setFilter] = useState<Product[]>([])
    const [PriceRange, setPriceRange] = useState<number>(300)

    useEffect(() => {
        const DataFetch = async () => {
            const NewArrivalsData = `*[_type == "products"][0...9] {
                    _id,
                    name,
                    category,
                    discountPercent,
                    price,
                    "imageUrl": image.asset->url
                }`;
            const CasualsData_Fetch = await client.fetch(NewArrivalsData)
            setData(CasualsData_Fetch)
            //console.log()
            setFilter(CasualsData_Fetch)   // Ensure initial filter state
        }
        DataFetch()
    }, [])

    useEffect(() => {
        const filterProducts = Data.filter((product: { price: number }) => product.price <= PriceRange)
        setFilter(filterProducts)
    }, [PriceRange, Data])


    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => [
        setPriceRange(Number(e.target.value))
    ]

    return (
        <div className='md:mb-[130px] mb-[100px] lg:mb-[210px]'>
            <div className="wrapper mt-5">
                <div className="border-2 wrapper"></div>
                <ul className="flex text-sm sm:text-base items-center text-gray-500 mt-2">
                    <li>Home</li>
                    <li>
                        <ChevronRight className="w-4 sm:w-5" />
                    </li>
                    <li className="font-semibold">Casual</li>
                </ul>
            </div>

            <div className="wrapper flex flex-col lg:flex-row mt-3">
                {/* Sidebar */}
                <div className="w-full lg:w-[295px] h-auto lg:h-[1220px] py-5 px-6 border-2 border-gray-200 rounded-2xl mt-2">
                    <div className="flex justify-between">
                        <h2 className="text-base lg:text-lg font-bold">Filter</h2>
                        <SlidersHorizontal className="w-4 h-5 text-gray-600" />
                    </div>
                    <hr className="bg-gray-300 mt-4" />

                    {/* Categories */}
                    <div className="mt-4">
                        <ul className="text-base text-gray-600 space-y-5">
                            {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((item) => (
                                <li key={item} className="flex justify-between">
                                    {item}
                                    <ChevronRight className="w-4" />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr className="bg-gray-300 mt-5" />

                    {/* Price */}
                    <div className="flex justify-between mt-5">
                        <h2 className="text-base justify-around lg:text-lg font-bold">Price</h2>
                        <ChevronUp className="w-4" />
                    </div>

                    <input type="range" 
                        min="50"
                        max="300"
                        className='w-full cursor-pointer'
                        value={PriceRange}
                        onChange={handlePriceChange}
                    />
                    <p>Price Range in $:{PriceRange}</p>

                    <hr className="bg-gray-300 mt-5" />

                    {/* Colors */}
                    <div className="flex justify-between mt-5">
                        <h2 className="text-base lg:text-lg font-bold">Colors</h2>
                        <ChevronUp className="w-4" />
                    </div>
                    <div className="grid grid-cols-5 gap-2 mt-5">
                        {['#00C12B', '#F50606', '#F5DD06', '#F57906', '#06CAF5', '#063AF5', '#7D06F5', '#F506A4', '#FFFFFF', '#000000'].map((color, index) => (
                            <div
                                key={index}
                                className="w-9 h-9 border-2 rounded-full border-gray-400 cursor-pointer"
                                style={{ backgroundColor: color }}>

                            </div>
                        ))}
                        <Check className='ml-1 mt-[-36px] text-white cursor-pointer' />
                    </div>

                    <hr className="bg-gray-300 mt-5" />

                    {/* Size */}
                    <div className="flex justify-between mt-5">
                        <h2 className="text-base lg:text-lg font-bold">Size</h2>
                        <ChevronUp className="w-4" />
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        {['XX-Small', 'X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large', '3X-Large'].map((size) => (
                            <button key={size} className="w-full text-sm text-gray-600 bg-gray-100 py-2 rounded-full hover:bg-black
                            hover:text-white">
                                {size}
                            </button>
                        ))}
                    </div>
                    <hr className="bg-gray-300 mt-5" />

                    {/* Dress Style */}
                    <div className="flex justify-between mt-5">
                        <h2 className="text-base lg:text-lg font-bold">Dress Style</h2>
                        <ChevronUp className="w-4" />
                    </div>
                    <div className="mt-5">
                        <ul className="text-base text-gray-600 space-y-5">
                            {['Casual', 'Formal', 'Party', 'Gym'].map((style) => (
                                <li key={style} className="flex justify-between">
                                    {style}
                                    <ChevronRight className="w-4" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full lg:w-[247px] h-12 bg-black mt-5 rounded-full flex items-center justify-center">
                        <button className="text-white text-sm">Apply Filter</button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full h-auto lg:h-[1300px] mt-5 lg:mt-0">
                    <div className="w-full h-auto flex flex-col lg:flex-row justify-between items-center">
                        <h1 className="text-xl lg:text-2xl font-semibold ml-4">Product List</h1>
                        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2 text-sm lg:text-base font-normal">
                            <p>Showing 1-9 of 100 Products</p>
                            <p>Sorted by:</p>
                            <p className="flex items-center font-semibold">
                                Most popular <ChevronDown className="w-4" />
                            </p>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-3">
                        {filter.map((item: any, index: any) => (
                            <div key={index} className="rounded-lg shadow-sm hover:shadow-md mt-2 ml-4">
                                <Link href={`/Dynamic/${item._id}`}>
                                    <div className='w-[295px] h-[298px]'>
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            width={295}
                                            height={298}
                                            className="object-cover rounded-xl w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-[20px] text-gray-600 font-semibold ml-2">{item.category}</h3>
                                        <h3 className="text-[16px] font-bold mb-2 ml-2">{item.name}</h3>
                                        <div className="flex items-center mb-2 ml-2">
                                            <span className="text-yellow-500 text-2xl">★★★★★</span>
                                            <span className="text-gray-400 ml-2">4.5/5</span>
                                        </div>
                                        <div className="flex items-center ml-2">
                                            {item.price && (
                                                <span className="text-2xl font-bold text-black">${item.price}</span>
                                            )}
                                            {item.discountPercent && (
                                                <span className="w-[56px] h-[28px] text-sm font-bold ml-2 text-red-600 bg-red-200 rounded-[16px] px-3 py-1">{item.discountPercent}%</span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className='border-2 wrapper mt-7'></div>

                    <div className="w-full lg:w-[920px] h-[40px] mt-7 flex lg:flex-row justify-between items-center gap-4 lg:gap-0">
                        {/* Previous Button */}
                        <div className="w-[110px] h-[36px] border-2 rounded-lg font-semibold">
                            <h5 className="flex px-2 py-2 gap-1 items-center justify-center hover:bg-black hover:text-white rounded-lg">
                                <ArrowLeft />
                                Previous
                            </h5>
                        </div>

                        {/* Page Numbers */}
                        <div className="w-full lg:w-[292px] h-[40px] border-2 rounded-lg hidden lg:flex flex-wrap justify-center lg:justify-start items-center">
                            <h6 className="w-[40px] h-[40px] border-2 flex items-center justify-center hover:bg-gray-500">1</h6>
                            <h6 className="w-[40px] h-[40px] border-2 flex items-center justify-center hover:bg-gray-500">2</h6>
                            <h6 className="w-[40px] h-[40px] border-2 flex items-center justify-center hover:bg-gray-500">3</h6>
                            <h6 className="w-[49px] h-[40px] border-2 flex items-center justify-center hover:bg-gray-400">...</h6>
                            <h6 className="w-[40px] h-[40px] border-2 flex items-center justify-center hover:bg-gray-500">8</h6>
                            <h6 className="w-[40px] h-[40px] border-2 flex items-center justify-center hover:bg-gray-500">9</h6>
                            <h6 className="w-[40px] h-[40px] border-2 flex items-center justify-center hover:bg-gray-500">10</h6>
                        </div>

                        {/* Next Button */}
                        <div className="w-[86px] h-[36px] border-2 rounded-lg font-semibold">
                            <h5 className="flex px-3 py-2 gap-1 items-center justify-center hover:bg-black hover:text-white rounded-lg">
                                Next
                                <ArrowRight />
                            </h5>
                        </div>

                    </div>


                </div>
            </div>
        </div>


    )
}

export default Casual
