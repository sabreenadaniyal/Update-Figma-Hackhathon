import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <main>
            <div className='w-full md:h-[500px] flex flex-col md:flex-row justify-around h-full bg-[#F2F0F1]'>
                {/*Left Side*/}
                <div className='md:w-[510px] md:ml-[230px] md:mt-10 pl-3'>
                    <div className='text-2xl md:text-5xl font-extrabold mt-16'>
                        <Image src="/hero section/find clothes.png" alt="clothes"
                            width={577}
                            height={173}
                        />
                    </div>
                    <p className='text-sm md:mt-3 text-gray-600'>Browse through our diverse range of meticulously crafted garments, designed to bring out
                        your individuality and cater to your sense of style.</p>
                    <Link href="/TShirt">
                        <button className='bg-black py-2 px-8 text-sm text-white rounded-[16px] mt-4'>Shop Now</button>
                    </Link>
                </div>

                {/* Right Side*/}
                <div className='relative'>
                    <Image className='w-[486px] mr-[260px]'
                        src="/hero section/hero 1.jpeg" alt="profile"
                        width={200}
                        height={200}
                    />
                    {/* Star */}
                    <Image className='w-[50px] absolute top-[130px] left-[14px] md:top-[240px] md:left-[-35px]'
                        src="/hero section/small vector.png" alt="star"
                        width={200}
                        height={200}
                    />
                    <Image className='w-[80px] absolute top-[20px] right-[20px] md:top-[50px] md:right-[300px]'
                        src="/hero section/small vector.png" alt="star"
                        width={200}
                        height={200}
                    />
                </div>

            </div>
            {/* Brands Section */}
            <div className="w-full h-[122px] bg-black py-10">
                <div className="wrapper flex items-center justify-evenly flex-wrap gap-6">
                    <Image
                        src="/hero section/versace logo.png"
                        alt="Versace"
                        width={166}
                        height={33}
                    />
                    <Image
                        src="/hero section/zara-logo-1 1.png"
                        alt="Zara"
                        width={91}
                        height={38}
                    />
                    <Image
                        src="/hero section/gucci-logo-1 1.png"
                        alt="Gucci"
                        width={156}
                        height={36}
                    />
                    <Image
                        src="/hero section/prada-logo-1 1.png"
                        alt="Prada"
                        width={194}
                        height={32}
                    />
                    <Image
                        src="/hero section/ck logo.png"
                        alt="Calvin Klein"
                        width={206}
                        height={33}
                    />
                </div>
            </div>
        </main>
    )
}

export default Hero

