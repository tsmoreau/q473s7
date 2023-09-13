import ThemeToggle from "../components/ThemeToggle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <main className>
      <div className="bg-th-background-secondary font-roboto transition-colors duration-300 mx-auto">
        <Nav />
      </div>
      <div className="w-full ">
        <section class=" bg-th-background-secondary transition-colors duration-300">
          <div class="p-12 lg:px-16 py-48 pb-36">
            <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 class="text-8xl font-bold font-roboto  bg-th-background text-stone-700">
                Insight Makers{" "}
              </h2>

              <p class="hidden  md:mt-4 font-roboto md:block">
                Maker, Builder and Hands-on Materials learning for all ages!
              </p>
              <p class="hidden  md:mt-1 font-roboto md:block">
                We offer Maker Kits using Recycled Materials, Maker Classes for
                local Libraries & Schools, and Maker Events for Organizations of
                all kinds.
              </p>
              <p class="hidden  md:mt-1 font-roboto md:block">
                In addition we provide Adult Education in Home Maintenance and
                Trade Skills, and
              </p>

              <div class="mt-4 md:mt-8">
                <a
                  href="#"
                  class="inline-block rounded bg-tomato-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-tomato-100 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Build With Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-th-primary-medium">
          <div class="bg-th-primary-medium mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div class="relative z-10 lg:py-16">
                <div class="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt="House"
                    src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    class="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div class="bg-th-primary-medium relative flex items-center">
                <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 "></span>

                <div class="p-8 sm:p-16 lg:p-24">
                  <h2 class="text-2xl font-bold sm:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore, debitis.
                  </h2>

                  <p class="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                    beatae, magni dolores provident quaerat totam eos, aperiam
                    architecto eius quis quibusdam fugiat dicta.
                  </p>

                  <a
                    href="#"
                    class="mt-8 inline-block rounded border bg-yale_blue-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-th-primary-medium">
          <div class="bg-th-primary-medium mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div class="bg-th-primary-medium max-w-3xl">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
                alias doloribus impedit.
              </h2>
            </div>

            <div class="bg-th-primary-medium mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                <img
                  alt="Party"
                  src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div class="lg:py-16">
                <article class="space-y-4 ">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aut qui hic atque tenetur quis eius quos ea neque sunt,
                    accusantium soluta minus veniam tempora deserunt? Molestiae
                    eius quidem quam repellat.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolorum explicabo quidem voluptatum voluptas illo
                    accusantium ipsam quis, vel mollitia? Vel provident culpa
                    dignissimos possimus, perferendis consectetur odit
                    accusantium dolorem amet voluptates aliquid, ducimus tempore
                    incidunt quas. Veritatis molestias tempora distinctio
                    voluptates sint! Itaque quasi corrupti, sequi quo odit illum
                    impedit!
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
