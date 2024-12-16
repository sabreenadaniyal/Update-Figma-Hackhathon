// import React from 'react';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';
// import { Ellipsis } from 'lucide-react'

// const Reviews = () => {
//     const ratings = [
//         {
//             stars: "★★★★★", // Rendered star
//             title: "Samantha D.",
//             image: "/product details/green tick.png",
//             reviews:
//                 "I absolutely love this t-shirt! The design is unique & the fabric feels so comfortable: As a fellow designer, I appreciate the attention to details. It's become my favorite go-to t-shirt.",
//             posting: "Posted on August 14, 2023",
//         },
//         {
//             stars: "★★★★★", // Rendered star
//             title: "Alex M.",
//             image: "/product details/green tick.png",
//             reviews:
//                 "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I am quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
//             posting: "Posted on August 15, 2023",
//         },
//         {
//             stars: "★★★★", // Rendered star
//             title: "Ethan R.",
//             image: "/product details/green tick.png",
//             reviews:
//                 "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eyes, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
//             posting: "Posted on August 16, 2023",
//         },
//         {
//             stars: "★★★★★", // Rendered star
//             title: "Olivia P.",
//             image: "/product details/green tick.png",
//             reviews:
//                 "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident the designer poured their creativity into making this t-shirt stand out.",
//             posting: "Posted on August 17, 2023",
//         },
//         {
//             stars: "★★★★★", // Rendered star
//             title: "Liam K.",
//             image: "/product details/green tick.png",
//             reviews:
//                 "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
//             posting: "Posted on August 18, 2023",
//         },
//         {
//             stars: "★★★★★", // Rendered star
//             title: "Ava H.",
//             image: "/product details/green tick.png",
//             reviews:
//                 "I am not just wearing a t-shirt; I am wearing a piece of design philosophy. The intricate details and thoughtful layout of the designer make this shirt a conversation starter.",
//             posting: "Posted on August 19, 2023",
//         },
//     ];

//     return (
//         <div className="wrapper max-w-[1440px] mx-auto px-4 mt-10">

//             {/* Reviews Header */}
//             <div className="flex flex-wrap items-center justify-between mb-4 space-y-4">
//                 <div className="flex items-center">
//                     <h1 className="text-2xl font-semibold sm:text-sm ">All Reviews</h1>
//                     <span className="text-gray-400 ml-2">(451)</span>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                     <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
//                         <Image
//                             src="/product details/vector.png"
//                             alt="Sort Icon"
//                             width={24}
//                             height={24}
//                         />
//                     </div>
//                     <button className="flex items-center px-4 py-2 bg-gray-300 rounded-full">
//                         Latest <ChevronDown className="ml-2" />
//                     </button>
//                     <button className="px-6 py-2 bg-black text-white rounded-full">
//                         Write a Review
//                     </button>
//                 </div>
//             </div>

//             {/* Reviews Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {ratings.map((review, index) => (
//                     <div
//                         key={index}
//                         className="p-6 rounded-lg shadow-sm border border-gray-200"
//                     >
//                         {/* Review Header */}
//                         <div className="flex items-center mb-4">
//                             <span className="text-yellow-500 text-xl">{review.stars}</span>
//                             <Ellipsis className="ml-[450px] text-gray-500 cursor-pointer" />
//                         </div>

//                         <div className='flex'>
//                             <h2 className="text-lg font-semibold flex">{review.title}</h2>
//                             <Image
//                                 src={review.image}
//                                 alt="Verified Icon"
//                                 width={19}
//                                 height={19}
//                                 className="ml-2  rounded-full"
//                             />
//                         </div>

//                         {/* Review Body */}
//                         <p className="text-gray-600 mb-4 mt-1">{review.reviews}</p>
//                         <p className="text-gray-400 text-sm">{review.posting}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className='text-center mt-12'>
//                 <button className='w-[230px] h-[52px] border-2 rounded-full border-gray-300'>Load More Reviews</button>
//             </div>
//         </div>
//     );
// };

// export default Reviews;
