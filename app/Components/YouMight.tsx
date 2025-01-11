// import React from 'react'
// import Image from 'next/image'

// const YouMight = () => {
//     const items = [
//         {
//             image: "/product details/blue shirt.png",
//             title: "Polo with Contrast Trims",
//             stars: "★★★★", // Rendered star
//             rating: "4.0/5",
//             SalePrice: "$212",
//             OriginalPrice: "$242",
//             button: "-20%",
//         },
//         {
//             image: "/product details/screen print.png",
//             title: "Gradient Graphic T-shirt.",
//             stars: "★★★★", // Rendered star
//             rating: "3.5/5",
//             SalePrice: "$145",
//         },
//         {
//             image: "/product details/pink shirt.png",
//             title: "Polo with Tipping Details",
//             stars: "★★★★★", // Rendered star
//             rating: "4.5/5",
//             SalePrice: "$180",
//         },
//         {
//             image: "/product details/black stripe shirt.png",
//             title: "Black Striped T-shirt",
//             stars: "★★★★★", // Rendered star
//             rating: "5.0/5",
//             SalePrice: "$120",
//             OriginalPrice: "$150",
//             button: "-30%",
//         },
//     ]
//     return (
//         <div className="wrapper max-w-[1440px] mx-auto py-12 mt-8">
//             {/* You might Header */}
//             <div className="mb-6 items-center flex justify-center w-full h-[58px]  ">
//                 <Image
//                     src="/product details/You might also like.png"
//                     alt="Also Like"
//                     width={579}
//                     height={58}
//                 />
//             </div>

//             {/* You Might Also Like Products */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//                 {items.map((item, index) => (
//                     <div key={index} className="rounded-lg shadow-sm hover:shadow-md ">
                        
//                         <div className='w-[295px] h-[298px]'>
//                         <Image
//                             src={item.image}
//                             alt={item.title}
//                             width={295}
//                             height={298}
//                             className="object-cover rounded-xl mb-4"
//                         />
//                         </div>
//                         <div>
//                         <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
//                         <div className="flex items-center mb-2">
//                             <span className="text-yellow-500 text-2xl">{item.stars}</span>
//                             <span className="text-gray-400 ml-2">{item.rating}</span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             {item.SalePrice && (
//                                 <span className="text-2xl font-bold text-black">{item.SalePrice}</span>
//                             )}
//                             {item.OriginalPrice && (
//                                 <span className="text-xl font-bold text-gray-400 line-through mr-[100px]">{item.OriginalPrice}</span>
//                             )}
//                              {item.button && (
//                                 <span className="w-[58px] h-[28px] text-sm font-bold mr-[10px] text-red-600 bg-red-200 rounded-[16px] px-3 py-1">{item.button}</span>
//                             )}
//                         </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default YouMight