import React, { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { BiMoon, BiSun, BiScatterChart } from "react-icons/bi";

function Nav() {
  
    return (
    <Menu>
    <Menu.Button class="text-th-accent-dark font-semibold relative flex flex-row text-base  hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
       About Us
      
    </Menu.Button>
    <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-200"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
    <Menu.Items >
      <div className="text-black font-medium filter drop-shadow-lg bg-white z-30 absolute -left-32 transform    p-2 rounded flex flex-col text-sm w-max">
        <a
            className=""
            href="/about"
          >
        <div className="px-2.5 py-1.5 rounded-md  hover:bg-slate-200">
            Staff & Board
        </div>
        </a>
         <a
            className=""
            href="/"
          >
        <div className="px-2.5 py-1.5 rounded-md hover:bg-slate-200 ">
            Our Mission
        </div>
        </a>
        
        <a
            className=""
            href="/about/#goals"
          >
            
        <div className="px-2.5 py-1.5 rounded-md hover:bg-slate-200 ">
            Our Goals
        </div>
        </a>

        <a
            className=""
            href="/"
          >
        <div className="px-2.5 py-1.5 rounded-md  hover:bg-slate-200 ">
            Our Partners & Sponsors
        </div>
        </a>
        
        </div>
    </Menu.Items>
    </Transition>
  </Menu>

);
}


export default Nav;
