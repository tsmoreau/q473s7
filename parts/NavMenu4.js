import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";

function Nav() {
  
    return (
    <Menu>
    <Menu.Button class="relative flex flex-row text-base tracking-tight hover:text-gray-400 ">
      Resource Hub
      <div className=" pl-1 w-5 h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
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
            href="/info"
          >
        <div className="px-1 py-0.5 rounded-md text-gray-800 hover:bg-gray-300 ">
Programs, Curriculum & More       </div>
        </a>
         <a
            className=""
            href="/"
          >
        <div className="px-1 py-0.5 rounded-md text-gray-800 hover:bg-gray-300 ">
        Events Calendar   </div>
        </a>
        
 

      
          <a
            className=""
            href="/faq"
          >
        <div className="px-1 py-0.5 rounded-md text-gray-800 hover:bg-gray-300 ">
        FAQ       </div>
        </a>


        
        </div>
    </Menu.Items>
  </Menu>

);
}


export default Nav;
