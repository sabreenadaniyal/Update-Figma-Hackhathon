import React from "react";
import { ChevronRight, Trash2, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "/product details/screen print.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: "/hero section/cheque shirt.jpg",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: "/hero section/bluepant.jpg",
    },
  ];

  return (
    <div className="wrapper lg:p-10 mb-[100px]">
      {/* Breadcrumb */}
      <div className="mb-4">
        <ul className="flex text-sm sm:text-base items-center text-gray-500">
          <li>Home</li>
          <li>
            <ChevronRight className="w-4 sm:w-5 mx-1" />
          </li>
          <li className="font-semibold">Cart</li>
        </ul>
      </div>

      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section: Cart Items */}
        <div className="flex-1 border-2 rounded-lg p-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-6 mt-4">
              <Image
                src={item.image}
                alt={item.name}
                width={124}
                height={124}
                className="rounded-lg"
              />
              <div className="flex justify-between w-full flex-row">
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="text-sm text-gray-500">Color: {item.color}</p>
                  <p className="mt-2 font-bold text-lg">${item.price}</p>
                </div>
                <div className="flex flex-col items-end">
                  <Trash2 className="text-red-600 w-5 h-5 mb-4 cursor-pointer mt-5" />
                  <div className="flex items-center bg-gray-200 rounded-full md:px-4 md:py-2 gap-2 mt-14">
                    <button className="text-lg font-bold">-</button>
                    <p>1</p>
                    <button className="text-lg font-bold">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Order Summary */}
        <div className="w-full lg:w-[400px] lg:h-[458px] border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-bold">$565</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Discount (-20%)</span>
              <span className="text-red-500 font-bold">-$113</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="font-bold">$15</span>
            </div>
            <hr />
            <div className="flex justify-between">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-bold">$467</span>
            </div>
          </div>

          {/* Promo Code */}
          <div className="flex items-center mt-6 gap-2">
            <div className="flex items-center bg-gray-200 rounded-lg px-3 w-full">
              <Tag className="text-gray-400" />
              <input
                type="text"
                className="bg-transparent outline-none w-full pl-2 py-2"
                placeholder="Add Promo Code"
              />
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-black text-white mt-6 py-3 rounded-full flex items-center justify-center gap-2">
            Go To Checkout <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
