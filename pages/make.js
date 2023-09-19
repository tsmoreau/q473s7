import ThemeToggle from "../components/ThemeToggle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-th-background font-roboto w-screen flex-col flex items-center">
      <Nav />
      <div className="pt-40 md:pt-48 "></div>
      <div
        id="mission"
        className="mb-0.5  text-6xl tracking-tight text-center  border-b-2 w-full border-dashed border-th-primary-light"
      >
        Maker Program
      </div>
      <div className="border-2 flex flex-col items-center border-dashed border-th-primary-light w-11/12 md:w-10/12 lg:w-8/12  mt-8 mb-4">
        <span className="text-3xl pb-1 pt-5">Mini-Makerspace Days</span>

        <div className="pb-1 h-full flex flex-col items-center ">
          <div className="w-11/12 h-96 border-2 border-dashed border-th-primary-light "></div>
          <div className="flex  w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1">
              Join Us for an introduction to tools, building, and making for
              ages 10 and up. Participants can assemble one or more boxed maker
              kits, explore the micro kids museum or just free play with the
              provided tools and materials in a Pop-Up Mini-Makerspace.
              Instruction and safety orientation provided.
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 flex flex-col items-center border-dashed border-th-primary-light w-11/12 md:w-10/12 lg:w-8/12  mt-8 mb-4">
        <span className="text-3xl pb-1 pt-5">Maker Kits</span>

        <div className="pb-1 h-full flex flex-col items-center ">
          <div className="w-11/12 h-96 border-2 border-dashed border-th-primary-light "></div>
          <div className="flex  w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1">
              Join Us for an introduction to tools, building, and making for
              ages 10 and up. Participants can assemble one or more boxed maker
              kits, explore the micro kids museum or just free play with the
              provided tools and materials in a Pop-Up Mini-Makerspace.
              Instruction and safety orientation provided.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
