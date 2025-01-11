import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Dressstyle = () => {
  return (

    <div className="md:wrapper bg-[#F0F0F0] mt-[20px] rounded-[20px] w-full md:w-[700px] lg:w-[1000px] lg:h-full md:h-[780px] items-center">
      <div className="flex justify-center w-full">
        <Image
          src="/hero section/dress STYLE.png"
          width={687}
          height={58}
          alt="Dress Style Header"
          className="mt-10 w-[250px] md:w-[500px]"
        />
      </div>

      <div className="flex flex-col md:mt-10 md:wrapper">
        {/* Casual Style */}
        <div className="md:flex md:gap-[20px] mt-5 w-full">
          <Link href="/Casual">
            <div className="relative flex flex-col md:ml-8 items-center md:flex-row p-4 cursor-pointer">
              <p className="text-[24px] md:text-[36px] mb-48 left-11 font-bold absolute">Casual</p>
              <Image
                src="/hero section/casual.jpg"
                width={407}
                height={289}
                alt="Casual Style"
                className="w-full h-[200px] md:h-[280px] rounded-[20px] hover:shadow-lg transition"
              />
            </div>
          </Link>

          {/* Formal Style */}
          <div className="md:ml-[-15px] md:w-[620px] md:h-[300px] relative flex flex-col mt-2 items-center md:flex-row md:mt-0 p-4 cursor-pointer">
            <p className="text-[24px] md:text-[36px] mb-44 left-11 font-bold absolute">Formal</p>
            <Image
              src="/hero section/formal.jpg"
              width={684}
              height={289}
              alt="Formal Style"
              className="rounded-[20px] h-[200px] md:h-[280px] md:mt-4 hover:shadow-lg transition"
            />
          </div>
        </div>

        <div className="md:flex gap-[2px]">
          {/* Party Style */}
          <div className="md:ml-[25px] md:w-[620px] md:h-[300px] relative flex flex-col items-center md:flex-row p-4 cursor-pointer">
            <p className="text-[24px] md:text-[36px] mb-44 left-11 font-bold absolute">Party</p>
            <Image
              src="/hero section/party.jpg"
              width={684}
              height={289}
              alt="Party Style"
              className="rounded-[20px] h-[200x] md:h-[280px] hover:shadow-lg transition"
            />
          </div>

          {/* Gym Style */}
          <div className="md:ml-[13px] md:w-[450px] md:h-[289px] h-[230px] flex flex-col items-center md:flex-row p-4 cursor-pointer md:mt-0 ">
            <Image
              src="/hero section/gym.jpg"
              width={407}
              height={289}
              alt="Gym Style"
              className="rounded-[20px] h-[200px] md:h-[280px] md:mr-8 md:mt-2 md:w-[600px] hover:shadow-lg transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dressstyle;

