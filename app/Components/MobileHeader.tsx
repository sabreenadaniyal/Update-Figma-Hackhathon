import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { FaAngleDown } from "react-icons/fa6";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavigationMenuDemo } from './NavigationDemo';


const MobileHeader = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription className="bg-white text-lg ">
              <nav className="items-center flex flex-col space-x-10">
                <Link href="/shop" className="hover:text-gray-900 text-gray-700 text-center items-center ml-10">
                  <NavigationMenuDemo /></Link>
                <Link href="/sale" className="hover:text-gray-900">On Sale</Link>
                <Link href="/new arrival" className="hover:text-gray-900">New Arrival</Link>
                <Link href="/brands" className="hover:text-gray-900 ">Brands</Link>
              </nav>


            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      

    </div>
  )
}

export default MobileHeader