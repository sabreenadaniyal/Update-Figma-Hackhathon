import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <main>
            <div className='w-full md:h-[500px] flex flex-col md:flex-row justify-around h-full bg-[#F2F0F1]'>
                {/*Left Side*/}
                <div className='md:w-[510px] md:ml-[230px] md:mt-10 pl-3'>
                    <div className='text-2xl md:text-5xl font-extrabold mt-9 md:mt-28'>
                        <Image 
                        src="/hero section/find clothes.png" 
                        alt="clothes"
                        width={577}
                        height={173}
                        className='md:ml-[-150px]'
                        />
                    </div>
                    <p className='text-sm md:mt-3 text-gray-600 md:ml-[-150px]'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out
                        your individuality and cater to your sense of style.</p>
                    <Link href="/Casual">
                        <button className='bg-black py-2 px-8 text-sm text-white rounded-full mt-4 w-[300px] lg:w-[210px] lg:h-[52px] md:ml-[-150px]'>
                            Shop Now</button>
                    </Link>
                </div>

                {/* Quality Products*/}
                <div className='md:hidden'>
                    <div className='w-[278px] h-[45px] flex space-x-5 items-center mt-[15px] ml-[40px] '>
                        <div className='leading-5'>
                            <p className='text-[24px] font-bold'>200+</p>
                            <p className='text-[10px] text-[#00000099]'>International Brands</p>
                        </div>
                         
                         <div className='border-x border-slate-gray-300 h-10'></div>

                        <div className='leading-5'>
                            <p className='text-[24px] font-bold'>2000+</p>
                            <p className='text-[10px] text-[#00000099]'>High-Quality Products</p>
                        </div>

                    </div>
                    <div className='w-[103px] h-[38px] ml-[115px] leading-5 mt-[10px]'>
                        <p className='text-[24px] font-bold'>30,000+</p>
                        <p className='text-[10px] text-[#00000099]'>Happy Customers</p>
                    </div>
                </div>


                {/* Right Side*/}
                <div className='relative'>
                    <Image 
                    className='w-[486px] mr-[200px] lg:w-[488.5px] md:mt-[60px] md:w-[600px] md:h-[440px] xl:ml-2'
                        src="/hero section/hero 1.jpeg" 
                        alt="profile"
                        width={200}
                        height={200}
                    />
                    {/* Small Star */}
                    <Image className='w-[50px] absolute top-[130px] left-[14px] md:top-[240px] md:left-[-40px] lg:left-[10px] lg:top-[230px] 
                    xl:left-[-10px] md:ml-11'
                        src="/hero section/small vector.png" 
                        alt="star"
                        width={200}
                        height={200}
                    />
                    {/* Large Star */}
                    <Image className='w-[80px] absolute top-[2px] right-[20px] md:top-[50px] md:right-[25px] lg:left-[300px] xl:left-[400px]'
                        src="/hero section/small vector.png" alt="star"
                        width={200}
                        height={200}
                    />
                </div>

            </div>
            {/* Brands Section */}
            <div className="w-full md:h-[122px] h-[146px] bg-black py-10">
                <div className="wrapper flex items-center justify-evenly flex-wrap gap-6">
                    <Image className='w-[80px] h-[23px] lg:w-[100px] xl:w-[166px]'
                        src="/hero section/versace logo.png"
                        alt="Versace"
                        width={166}
                        height={33}
                    />
                    <Image className='w-[50px] h-[26px] lg:w-[80px] xl:w-[91px]'
                        src="/hero section/zara-logo-1 1.png"
                        alt="Zara"
                        width={91}
                        height={38}
                    />
                    <Image className='w-[55px] h-[26px] lg:w-[100px] xl:w-[156px]'
                        src="/hero section/gucci-logo-1 1.png"
                        alt="Gucci"
                        width={156}
                        height={36}
                    />
                    <Image className='w-[100px] h-[21px] lg:w-[100px] xl:w-[194px]'
                        src="/hero section/prada-logo-1 1.png"
                        alt="Prada"
                        width={194}
                        height={32}
                    />
                    <Image className='w-[100px] h-[21px] lg:w-[120px] xl:w-[206px]'
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

