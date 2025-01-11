import { Menu } from 'lucide-react';
import { FaAngleDown } from "react-icons/fa6";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const MobileNavbar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Menu className='text-black w-3 h-3' />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription className="bg-slate-400">
                            <ul className="text-white space-y-4 p-5 text-center justify-center items-center w-full h-44 flex-col">
                                <li className='flex items-center justify-center'><a href="">Shop</a><FaAngleDown /></li>
                                <li><a href="">On Sale</a></li>
                                <li><a href="">New Arrivals</a></li>
                                <li><a href="">Brands</a></li>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}
export default MobileNavbar
