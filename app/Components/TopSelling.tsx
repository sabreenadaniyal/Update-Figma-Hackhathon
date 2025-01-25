'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

const TopSelling = () => {
    const [Data, setData] = useState([])

    useEffect(() => {
        const DataFetch = async () => {
            const TopSellingData = (
                `*[_type == "products"][2...6]{
    _id,
    name,
    category,
    discountPercent,
    isNew,
    price,
    "imageUrl": image.asset->url
}`
            );

            const TopSellingData_Fetch = await client.fetch(TopSellingData)
            setData(TopSellingData_Fetch)
            console.log(TopSellingData_Fetch)
        }
        DataFetch()
    }, [])

    return (
        <div className="wrapper py-3" id="topselling">
            {/* Top selling Header */}
            <div className="mb-6 items-center flex justify-center w-full h-[58px]">
                <Image
                    src="/hero section/top selling.png"
                    alt="new arrivals"
                    width={346}
                    height={58}
                />
            </div>

            {/* Top Selling Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-2 ml-2">
                {Data.map((item: any, index: any) => (
                    <div key={index}
                        className="rounded-lg shadow-sm hover:shadow-md flex flex-col">

                        <div className='w-[295px] h-[298px] gap-8'>
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={295}
                                height={295}
                                className="rounded-xl h-full w-full" />
                        </div>

                        <div>
                            {/* Category */}
                            <h1 className='text-gray-900 uppercase font-bold text-2xl ml-2'>{item.category}</h1>
                            <h3 className="md:w-[225px] font-bold mb-2 ml-2">{item.name}</h3>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500 text-2xl ml-2">★★★★★</span>
                                <span className="text-gray-400 ml-2">4.5/5</span>
                            </div>
                            <div className="flex items-center justify-between">
                                {item.price && (
                                    <span className="text-2xl font-bold text-black">${item.price}</span>
                                )}
                                {item.discountPercent && (
                                    <span className="w-[58px] h-[28px] text-sm font-bold mr-[100px] text-red-600 bg-red-200 rounded-[16px] px-4 py-1">
                                        -{item.discountPercent}%</span>
                                )}
                            </div>
                        </div>
                        <Link href={`/Dynamic/${item._id}`}>
                            <div className="w-[60%] h-[40px] mx-auto text-center mt-4
                         bg-gradient-to-r from-black to-gray-500 text-white font-semibold py-2 px-4
                                rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out">
                                <button className='font-bold'>
                                    More Details
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TopSelling
