import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Dressstyle = () => {
    return (
        <div className="wrapper bg-[#F0F0F0] mt-5 rounded-2xl px-4 py-8 lg:py-10">
            {/* Header */}
            <div className="flex justify-center">
                <Image
                    src="/hero section/dress STYLE.png"
                    width={687}
                    height={58}
                    alt="Dress Style"
                    className="mt-5 lg:mt-10"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 mt-10">
                {/* Row 1 */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Casual Card */}
                    <div className="relative flex flex-col bg-white rounded-[20px] shadow-md overflow-hidden">
                        <Link href="/Casual">
                        <p className="w-[114px] h-[49px] absolute top-12 left-10 text-[36px] lg:text-2xl font-bold text-gray-800 z-10">
                            Casual
                        </p>
                        </Link>
                        <Image
                            src="/hero section/casual.jpg"
                            width={407}
                            height={289}
                            alt="Casual Design"
                            className="object-cover h-[340px] w-full"
                        />
                    </div>

                    {/* Formal Card */}
                    <div className="relative flex flex-col bg-white rounded-[20px] shadow-md overflow-hidden">
                        <p className="w-[116px] h-[49px] absolute top-10 left-10 text-[36px] lg:text-2xl font-bold text-gray-800 z-10">
                            Formal
                        </p>
                        <Image
                            src="/hero section/formal.jpg"
                            width={684}
                            height={289}
                            alt="Formal Design"
                            className="object-cover h-[340px] w-full"
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Party Card */}
                    <div className="relative flex flex-col bg-white rounded-[20px] shadow-md overflow-hidden">
                        <p className="w-[89px] h-[49px] absolute top-10 left-10 text-[36px] lg:text-2xl font-bold text-gray-800 z-10">
                            Party
                        </p>
                        <Image
                            src="/hero section/party.jpg"
                            width={684}
                            height={289}
                            alt="Party Design"
                            className="object-cover h-[340px] w-full"
                        />
                    </div>

                    {/* Gym Card */}
                    <div className="relative flex flex-col bg-white rounded-[20px] shadow-md overflow-hidden">
                        {/* <p className="absolute top-4 left-6 text-xl lg:text-2xl font-bold text-gray-800 z-10">
                            Gym
                        </p> */}
                        <Image
                            src="/hero section/gym.jpg"
                            width={452}
                            height={677}
                            alt="Gym Design"
                            className="object-cover h-[340px] w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dressstyle;
