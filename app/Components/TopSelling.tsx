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
                `*[_type == "products"][1...5]{
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
        <div className="wrapper py-3">
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

                        <div className='w-full flex-1'>
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={295}
                                height={298}
                                className="rounded-xl h-full w-full" />
                        </div>

                        <div>
                            {/* Category */}
                            <h1 className='text-black uppercase font-bold text-2xl ml-2'>{item.category}</h1>
                            <h3 className="md:w-[225px] font-bold mb-2">{item.name}</h3>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500 text-2xl">★★★★★</span>
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
                            <div className="w-[60%] h-[40px] mx-auto text-center py-2 bg-black text-white hover:text-black 
                         hover:bg-gray-200 rounded-2xl mt-6">
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
