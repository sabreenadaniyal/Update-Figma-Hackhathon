'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import Link from 'next/link';


const NewArrivals = () => {
    const [Data, setData] = useState([])

    useEffect(() => {
        const DataFetch = async () => {
            const NewArrivalsData = `*[_type == "products"][9...13] {
                _id,
                name,
                category,
                discountPercent,
                isNew,
                price,
                "imageUrl": image.asset->url
            }`;
            const NewArrivalsData_Fetch = await client.fetch(NewArrivalsData)
            setData(NewArrivalsData_Fetch)
            // console.log(NewArrivalsData_Fetch)
        }
        DataFetch()
    },[])

    return (
        <div className="wrapper py-12 mt-5" id="newarrival">
            {/* new arrival Header */}
            <div className="mb-6 items-center flex justify-center w-full h-[58px] lg:w-[403px] wrapper">
                <Image
                    src="/hero section/NEW ARRIVALS.png"
                    alt="new arrivals"
                    width={403}
                    height={58}
                />
            </div>

            {/* New Arrival Products */}
            <div className="md:wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {Data.map((item: any,index:any) => (
                    <div key={index}
                        className="rounded-lg shadow-sm border-gray-300 hover:shadow-md flex flex-col">

                        <div className='w-[295px] h-[298px] gap-8'>
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={295}
                                height={295}
                                className=" rounded-xl h-full w-full"/>
                        </div>

                        {/* Category */}
                        <h1 className='text-gray-900 uppercase font-bold text-2xl ml-2'>{item.category}</h1>

                        <div className='ml-2'>
                            <h3 className="font-bold mb-2 md:w-[225px]">{item.name}</h3>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500 text-2xl">★★★★★</span>
                                <span className="text-gray-400 ml-2">5.0/5</span>
                            </div>

                            <div className="flex items-center">
                                {item.price && (
                                    <span className="text-2xl font-bold text-black">${item.price}</span>
                                )}
                                {item.discountPercent && (
                                    <span className="w-[58px] h-[28px] text-sm font-bold ml-2 text-red-600 bg-red-200 rounded-[16px] px-4 py-1">
                                        {item.discountPercent}%</span>
                                )}

                            </div>
                        </div>

                        <Link href={`/Dynamic/${item._id}`}>
                            <div className="w-[60%] h-[40px] mx-auto text-center mt-4
                         bg-gradient-to-r from-black to-gray-500 text-white font-semibold py-2 px-4
                                rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out">
                                <button className='font-bold'>More Details</button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='md:wrapper md:w-[658px] lg:w-full mt-14 border-2'></div>
        </div>
    )
}
export default NewArrivals
