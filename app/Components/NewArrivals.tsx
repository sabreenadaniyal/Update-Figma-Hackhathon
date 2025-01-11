import React from 'react'
import Image from 'next/image'

const NewArrivals = () => {
    const items = [
        {
            image: "/hero section/shirt.jpg",
            title: "T-SHIRT WITH TAPE DETAILS",
            stars: "★★★★★", // Rendered star
            rating: "4.5/5",
            SalePrice: "$120",
        },
        {
            image: "/hero section/bluepant.jpg",
            title: "SKINNY FIT JEANS",
            stars: "★★★★", // Rendered star
            rating: "3.5/5",
            SalePrice: "$240",
            OriginalPrice: "$260",
            button: "-30%",
        },
        {
            image: "/hero section/cheque shirt.jpg",
            title: "CHECKERED SHIRT",
            stars: "★★★★★", // Rendered star
            rating: "4.5/5",
            SalePrice: "$180",
        },
        {
            image: "/hero section/shirt 3.jpg",
            title: "SLEEVE STRIPED T-SHIRT",
            stars: "★★★★★", // Rendered star
            rating: "4.5/5",
            SalePrice: "$130",
            OriginalPrice: "$160",
            button: "-30%",
        },

    ]

    return (
        <div className="wrapper py-12 mt-2">
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
            <div className="md:wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <div key={index} 
                    className="rounded-lg shadow-sm hover:shadow-md">

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
                            <h3 className="font-bold mb-2 md:w-[225px]">{item.title}</h3>
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
            <div className='md:w-[358px] md:h-[46px] lg:w-[218px] lg:h-[52px] md:ml-40 lg:ml-[410px] xl:ml-[510px] border-2 rounded-full mt-12 wrapper hover:bg-black hover:text-white'>
                <button className='px-24 py-3 md:px-40 md:py-3 lg:px-20 text-base'>View All</button>
            </div>
            <div className='md:wrapper md:w-[658px] lg:w-full mt-10 border-2'></div>
        </div>
    )
}

export default NewArrivals
