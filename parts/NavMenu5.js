import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { BiMoon, BiSun, BiUserPlus } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";



function Nav() {
  
    return (
    <Menu>
    <Menu.Button class="relative flex flex-row text-md  hover:text-gray-400 ">
      Support Us
      <div className=" pl-1 w-5 h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </Menu.Button>
    <Menu.Items >
      <div className="filter drop-shadow-lg bg-gray-100 z-30 absolute transform   px-4  p-2 rounded-md flex flex-col text-sm w-max">
        <a
            className=""
            href="/"
          >
        <div className="flex px-1 py-0.5 rounded-md text-gray-800 hover:bg-gray-300 ">
Volunteer With Us        </div>
        </a>
         <a
            className=""
            href="/"
          >
        <div className="px-1 py-0.5 rounded-md text-gray-800 hover:bg-gray-300 ">
  Materials Donations    </div>
        </a>
        
       
          <a
            className=""
            href="/"
          >
        <div className="px-1 py-0.5 rounded-md text-gray-800 hover:bg-gray-300 ">
        Contact Us     </div>
        </a>


        
        </div>
    </Menu.Items>
  </Menu>

);
}


export default Nav;
