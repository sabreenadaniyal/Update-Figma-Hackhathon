import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HappyCustomer = () => {
    return (
        <div className="wrapper flex flex-col px-4 py-10 mt-5">
            {/* Header */}
            <div className="md:flex md:justify-between md:items-center flex flex-wrap md:gap-4 md:ml-12">
                <Image
                    src="/hero section/happycustomer.png"
                    alt="Happy Customers"
                    width={654}
                    height={58}
                    className='w-[250px] lg:w-[654px]'
                />
                <div className="md:gap-3 md:mr-12 hidden md:hidden lg:inline-flex">
                    <ArrowLeft
                        className="cursor-pointer hover:bg-gray-300 rounded-full w-[24px] h-[24px] "
                        aria-label="Previous testimonials"
                    />
                    <ArrowRight
                        className="cursor-pointer hover:bg-gray-300 rounded-full w-[24px] h-[24px]"
                        aria-label="Next testimonials"
                    />
                </div>
            </div>

            {/* Customer Testimonials */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-10 w-full">

                {/* Testimonial Card */}
                {[
                    {
                        name: 'Sarah M.',
                        review:
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
                    },
                    {
                        name: 'Alex K.',
                        review:
                            'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
                    },
                    {
                        name: 'James L.',
                        review:
                            "As someone who's always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
                    },
                ].map((testimonial, index) => (
                    <div
                        key={index}
                        className="w-full max-w-sm p-6 border-2 border-gray-200 rounded-2xl bg-white shadow-sm">
                        <span className="text-[#FFC633] text-3xl mb-4 block">
                            &#9733;&#9733;&#9733;&#9733;&#9733;
                        </span>
                        <div className="flex items-center mb-4">
                            <h1 className="font-bold text-lg">{testimonial.name}</h1>
                            <Image
                                src="/hero section/green tick.png"
                                alt="Verified Customer"
                                width={20}
                                height={20}
                                className="ml-2"
                            />
                        </div>
                        <p className="text-sm leading-6 text-gray-600">{testimonial.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HappyCustomer;
