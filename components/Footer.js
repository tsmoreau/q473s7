export default function Footer() {
  return (
    <div class="font-roboto w-full flex justify-center border-t-0 border-th-primary-light border-dashed">
      <footer class="w-11/12 md:w-9/12  relative pt-16 pb-6">
        <div className="flex flex-col lg:flex-row items-center justify-center pb-8  pt-6">
          <div className="w-96 transform -translate-y-2 flex flex-col items-center lg:items-baseline">
            <h4 class="text-3xl font-semibold ">Let's keep in touch!</h4>
            <h5 class="text-sm mt-2 mb-2 text-center lg:text-left">
              Subscribe to our Newsletter to Learn About New Program
              Initiatives, Events, Exclusive Maker Kits & More!
            </h5>
            <input
              type="text"
              class="h-10 w-full bg-th-background text-th-primary-light border-2 border-dashed border-th-primary-light p-2 text-sm "
              placeholder="Your Email"
            />
            <button class="mt-4 w-min inline-block rounded-lg bg-th-primary-dark px-12 py-3 text-sm font-medium text-white transition hover:bg-tomato-100 focus:outline-none focus:ring focus:ring-yellow-400">
              Subscribe
            </button>
          </div>
          <div className="e w-72 mt-16 lg:-mt-8 lg:ml-20 text-center font-semibold lg:text-left text-2xl lg:text-base">
            RESOURCES:
            <div className="font-normal  text-sm h-min grid gap-2 md:gap-1.5 mt-3 text-center grid-cols-1 lg:text-left">
              <span>Frequently Asked Questions</span>
              <span>Program Projects Guides</span>
              <span>Tools & Materials Guides</span>
              <span>Inclusive Skills Guide</span>

              <span>Support Us</span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>

        <div class="pt-20 flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full  px-4 mx-auto text-center">
            <div class="text-xs  pt-1">
              Privacy Policy <span className="ml-2">Terms & Conditions</span>
            </div>
          </div>
          <div class="w-full  px-4 mx-auto text-center">
            <div class="text-xs   pb-1">
              Copyright © <span id="get-current-year">2023</span> Stasse
              Integrated Solutions
            </div>
          </div>
        </div>
      </footer>{" "}
    </div>
  );
}
