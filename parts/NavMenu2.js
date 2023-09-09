import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";

function Nav() {
  
    return (
    <Menu>
    <Menu.Button class="font-medium relative flex flex-row text-base tracking-tight hover:text-slate-300 ">
      What We Do
     
    </Menu.Button>
    <Menu.Items >
      <div className="font-medium filter drop-shadow-lg bg-gray-100 z-30 absolute -left-16 transform   px-4  p-2 rounded-md flex flex-col text-sm w-max">
      
      <a
            className=""
            href="/"
          >
        <div className="px-2.5 py-1.5 rounded-md  hover:bg-slate-200">
       Maker & Trade Skills Education     </div>
        </a>

      <a
            className=""
            href="/"
          >
        <div className="px-2.5 py-1.5 rounded-md  hover:bg-slate-200">
      
      STEM & Sustainability Education
         </div>
        </a>
        
      
        <a
            className=""
            href="/"
          >
        <div className="px-2.5 py-1.5 rounded-md  hover:bg-slate-200">
        Plastics Recycling & Production   </div>
        </a>
        
        <a
            className=""
            href="/"
          >
        <div className="px-2.5 py-1.5 rounded-md  hover:bg-slate-200">
Social Equity Advocacy      </div>
        </a>
         
        <a
            className=""
            href="/"
          >
        <div className="px-1 py-0.5 rounded-md text-gray-800 hover:bg-gray-300 ">
                </div>
        </a>

        
        </div>
    </Menu.Items>
  </Menu>

);
}


export default Nav;
