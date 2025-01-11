import React from 'react'
import Image from 'next/image'

const TopSelling = () => {
    const items = [
        {
            image: "/hero section/tshirt.jpg",
            title: "VERTICAL STRIPED SHIRT",
            stars: "★★★★★", // Rendered star
            rating: "5.0/5",
            SalePrice: "$212",
            OriginalPrice: "$232",
            button: "-20%",
        },
        {
            image: "/hero section/orange shirt.jpg",
            title: "COURAGE GRAPHIC T-SHIRT",
            stars: "★★★★", // Rendered star
            rating: "4.0/5",
            SalePrice: "$145",
        },
        {
            image: "/hero section/shorts.jpg",
            title: "LOOSE FIT BERMUDA SHORTS",
            stars: "★★★", // Rendered star
            rating: "3.0/5",
            SalePrice: "$80",
        },
        {
            image: "/hero section/black pant.jpg",
            title: "FADED SKINNY JEANS",
            stars: "★★★★★", // Rendered star
            rating: "4.5/5",
            SalePrice: "$210",
        },
    ]

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <div key={index} className="rounded-lg shadow-sm hover:shadow-md ">

                        <div className='w-full relative'>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={295}
                                height={298}
                                className="object-fill rounded-xl mb-4"
                            />
                        </div>
                        <div>
                            <h3 className="md:w-[225px] font-bold mb-2">{item.title}</h3>
                            <div className="flex items-center mb-2">
                                <span className="text-yellow-500 text-2xl">{item.stars}</span>
                                <span className="text-gray-400 ml-2">{item.rating}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                {item.SalePrice && (
                                    <span className="text-2xl font-bold text-black">{item.SalePrice}</span>
                                )}
                                {item.OriginalPrice && (
                                    <span className="text-xl font-bold text-gray-400 line-through mr-[80px]">{item.OriginalPrice}</span>
                                )}
                                {item.button && (
                                    <span className="w-[58px] h-[28px] text-sm font-bold mr-[100px] text-red-600 bg-red-200 rounded-[16px] px-3 py-1">{item.button}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='md:w-[358px] md:h-[46px] lg:w-[218px] lg:h-[52px] md:ml-40 lg:ml-[410px] xl:ml-[510px] border-2  rounded-full mt-9 wrapper hover:bg-black hover:text-white'>
                <button className='px-24 py-3 md:px-40 md:py-3 lg:px-20 text-base'>View All</button>
            </div>

        </div>
    )
}

export default TopSelling