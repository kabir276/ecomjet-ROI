'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  
    scrollToBrands: () => void;
  }
  
  const Navbar = ({ 
  
    scrollToBrands 
  }: NavbarProps) => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false);
    }

  return (
    <div>
      <div className="p-6 md:p-10 md:pl-16 md:pr-16 flex items-center justify-between z-50">
        <div className="">
          <Link className="cursor-pointer flex flex-row" href="/">
            <Image
              priority
              src="/logo/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-20 md:h-20 flex justify-center"
            />
          <p className={`lg:text-3xl text-xl lg:font-semibold font-medium m-auto p-3 `} style={{ color: "rgb(152,106,242)"}}>Ecom Jet ROI</p>

          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
           
        </div>

        {/* <div className="flex md:hidden">
            {isDropDownVisible ? (
                // display an x icon when the drop is visible
                <div 
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
                >
                    <X />
                    <DropDownMenu onClose={closeDropDown} />
                    </div>
            ) : (
                <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
                />
            )}

        </div> */}

        <div className=" flex">
            <button 
            onClick={()=>scrollToBrands}
            className="
            inline-flex md:h-12 h-8  animate-shimmer items-center justify-center 
            rounded-md border-[1.8px] border-[rgba(151,106,242,0.34)] bg-[linear-gradient(110deg,#000103,45%,rgb(152,106,242,0.2),55%,#000103)] 
            bg-[length:200%_100%] px-3 md:px-6 text-xs md:text-lg font-medium text-slate-400 transition-colors
             focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50

            ">
               Schedule Call
            </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
