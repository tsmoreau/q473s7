import ThemeToggle from "../components/ThemeToggle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Transition, Disclosure } from "@headlessui/react";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center bg-th-background font-roboto w-screen">
      <Nav />
      <div className="pt-40 md:pt-56 -mt-3"></div>
      <div className=" pb-2 text-6xl tracking-tight text-center  border-b-2 w-full border-dashed border-th-primary-light">
        FAQ
      </div>
      <span className="mt-12">Basics</span>
      <div className="max-w-7/12  flex flex-col items-center mb-16 border-2 border-dashed border-th-primary-light ">
        <div className="mb-1 flex mx-8 md:max-w-xl flex-col text-xs md:text-sm items-center text-center px-6 py-1 md:px-8   flex justify-center">
          <Disclosure>
            <Disclosure.Button className="text-lg font-semibold focus:outline-none w-max text-center">
              What Do You ... Do?
            </Disclosure.Button>
            <Disclosure.Panel className="text-sm text-left pb-3">
              <span className="w-32 invisible">sef</span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
              vel mollitia? Vel provident culpa dignissimos possimus,
              perferendis consectetur odit accusantium dolorem amet voluptates
              aliquid, ducimus tempore incidunt quas. Veritatis molestias
              tempora distinctio voluptates sint! Itaque quasi corrupti, sequi
              quo odit illum impedit!
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div className="mb-1 flex mx-8 md:max-w-xl flex-col text-xs md:text-sm items-center text-center px-6 py-1 md:px-8    flex justify-center">
          <Disclosure>
            <Disclosure.Button className="text-lg font-semibold focus:outline-none w-max text-center">
              Where Do You Do It?
            </Disclosure.Button>
            <Disclosure.Panel className="text-sm text-left pb-3">
              <span className="w-32 invisible">sef</span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
              vel mollitia? Vel provident culpa dignissimos possimus,
              perferendis consectetur odit accusantium dolorem amet voluptates
              aliquid, ducimus tempore incidunt quas. Veritatis molestias
              tempora distinctio voluptates sint! Itaque quasi corrupti, sequi
              quo odit illum impedit!
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </div>
      <Footer />
    </main>
  );
}
