"use client"
import { useEffect, useState } from "react"
import { client } from '@/sanity/lib/client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


// To create static pages for dynamic routes
const Dynamic = (props: any) => {
     const [Data, setData] = useState<any>([])
    
    const [count, setCount] = useState(1)
    // console.log(props)

    useEffect(() => {
    const DynamicFetch = async () => {
    const fetchData = `*[_type == "products" && _id=="${props.params.id}"]{
    _id,
    category,
    name,
    description,
    price,
    discountPercent,
    isNew,
    sizes,
    colors,
    "imageUrl": image.asset->url
    }[0]`;

    const detailProducts:any = await client.fetch(fetchData)
    setData(detailProducts)
    //console.log(detailProducts)
}
DynamicFetch()
},[props.params.id])

    return (
        <article className='mt-12 mb-24 px-2 2xl:px-12 flex flex-col  gap-y-8'>

            <div className='border-4 border-white md:w-[60%] md:ml-[160px] lg:ml-[5px] xl:ml-[300px] flex flex-col lg:flex-row items-center
            rounded-xl'>
                <Image
                    src={Data.imageUrl}
                    alt="product Image"
                    width={200}
                    height={200}
                    className='w-[700px] h-[600px] rounded-xl'
                />

                <div className='ml-5 mt-[-24px] flex-col'>
                    {/* Category */}
                    <h1 className='text-gray-400 uppercase font-semibold text-2xl'>{Data.category}</h1>

                    {/* Name */}
                    <h1 className='text-3xl xs:text-3xl lg:text-4xl uppercase font-bold text-blue-950 underline'>
                        {Data.name}
                    </h1>

                    {/* Rating */}
                    <h4 className='text-lg font-semibold mt-2'>
                        <span className='text-yellow-500 text-xl'>&#9733;&#9733;&#9733;&#9733;</span> 4.5/5</h4>

                    {/* Price */}
                    <div className="flex">
                    <h1 className='mt-3'><span className='text-2xl font-semibold text-green-950'>${Data.price}</span></h1>

                    {/* Discounted Percentage */}
                    <h4 className='w-[56px] h-[28px] text-sm font-bold text-red-600 bg-red-200 rounded-[16px] px-4 py-1 mt-3 ml-2'>
                        {Data.discountPercent}%
                    </h4>
                    </div>

                    {/* Description */}
                    <p className='text-gray-600 xl:text-xl mt-2 md:text-md'>
                        {Data.description}
                    </p>

                    {/* colors */}
                    <div>
                        <p className='w-[93px] h-[11px] text-[#00000099] mt-2'>Select Colors</p>
                        <h4 className='gap-10 mt-3'>
                            {Data.colors && Data.colors.map((color: any, index: any) => (
                                <span key={index} className='mr-2'>
                                    {color}
                                </span>
                            ))}
                        </h4>
                    </div>

                    {/* Sizes */}
                    <div>
                        <p className='text-[#00000099] mt-2'>Choose Size</p>
                        <h4 className='gap-10'>
                            {Data.sizes && Data.sizes.map((size: any, index: any) => (
                                <span key={index} className='mr-2'>
                                    {size}
                                </span>
                            ))}
                        </h4>
                    </div>


                    {/* Link */}
                    <div className='flex space-x-4'>

                        <div className="lg:w-[170px] md:w-[140px] h-[44px] w-[90px] bg-[#F0F0F0] items-center justify-center border-2 rounded-full flex mt-3 border-gray-600">
                            <button onClick={() => setCount(count - 1)} className="w-[56px] h-[52px] text-[30px] font-bold">
                                -</button>
                            <button onClick={() => setCount(1)} className="w-[58px] h-[52px] text-[26px]">
                                1</button>
                            <button onClick={() => setCount(count + 1)} className="w-[56px] h-[52px] text-[30px] font-bold">
                                +</button>
                        </div>
                        <Link href="/Cart">
                            <div>
                                <button className='md:w-[300px] md:h-[52px] w-[200px] h-[44px] bg-black text-[#F0F0F0] text-base rounded-[62px]
                             hover:text-red-700 mt-3'>
                                    Add to Cart</button>
                            </div>
                        </Link>
                    </div>
                </div>


            </div>

        </article>

    )
}
export default Dynamic

