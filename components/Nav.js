import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Menu } from "@headlessui/react";
import ThemeToggle from "./ThemeToggle";
import Nav1 from "../parts/NavMenu1";
import Nav2 from "../parts/NavMenu2";
import Nav3 from "../parts/NavMenu3";
import Nav4 from "../parts/NavMenu4";
import Nav5 from "../parts/NavMenu5";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" bg-brown-100 h-32 border-8 border-gray-100">
        <div>
          <div class=" max-w-6xl mx-auto relative py-8 flex justify-between items-center">
            <a
              href="/"
              className="flex flex-col text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
            >
              <h1 className="lg:ml-2 ml-6 text-5xl Avenir tracking-tighter md:text-5x1 lg:text-5xl">
                upcycle.us
              </h1>
<h3 className="lg:ml-12 ml-16 transform -translate-y-21 text-xl Avenir tracking-tighter md:text-xl lg:text-xl">
                we build creativity
              </h3>
            </a>

            <ul class=" hidden absolute top-1/2 right-10 transform -translate-y-1/2  lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
              <li>
            <Nav1 />
              </li>
              <li>
              <Nav2 />
              </li>
              <li><Nav3 /></li>
              <li><Nav4 /></li>
              <li class="relative"><Nav5 /></li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
            <div class="hidden absolute top-1/2 -right-10 px-2 transform -translate-y-1/2 -translate-x-1/4 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto "></div>
            <div class="lg:hidden flex ">
              <div className="mr-2 mt-2.5">
                {" "}
                <ThemeToggle />
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="mr-8 inline-flex items-center justify-center p-2 rounded-md  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (

<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={1}
stroke="currentColor"
className="w-6 h-6"
> <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
                
</svg>

                 
                ) : (
                 


<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 0 0"
strokeWidth={3}
stroke="currentColor"
className="w-6 h-6"
aria-hidden="true"
>  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />              
</svg>
                
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition show={isOpen}>
          {(ref) => (
            <div class="relative z-50">
              <div class="fixed inset-0 bg-gray-800 opacity-25"></div>
              <div class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm pt-4 pr-4 pl-4 bg-white border-r overflow-y-auto">
                <div class="flex justify-between mb-6 mx-2">
                  <a
                    href="/"
                    className="text-lg font-normal rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
                  >
                    <h1 className="text-4xl font-semibold Avenir tracking-tighter text-gray-900 md:text-3x1 lg:text-4xl">
                      upcycle us
                    </h1>
                  </a>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth={3}
stroke="currentColor"
className="w-6 h-6"

>  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />              
</svg>
                  </button>
                </div>
                <div>
                  <ul className="mx-2">
                    <li class="mb-1">
                      <Nav1 />
                    </li>
                    <li class="mb-1">
                     <Nav2 />
                    </li>
                    <li class="mb-1">
                      <a
                        class="block mb-6 p-4 text-sm  text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded"
                        href="/faq"
                      >
                        Our Impact
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="mt-auto">
                  <p class="my-4 text-xs text-center text-gray-400">
                    <span>Copyright © 2021</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
