import ThemeToggle from "../components/ThemeToggle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-th-background font-roboto w-screen flex-col flex items-center">
      <Nav />
      <div className="pt-40 md:pt-48 "></div>
      <div className="mb-0.5  text-6xl tracking-tight text-center  border-b-0 w-full border-dashed border-th-primary-light">
        Trade Skills Program
      </div>
      <div className="px-4 grid md:grid-cols-2 xl:grid-cols-3 border-2 border-dashed border-th-primary-light w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mb-12">
        <div className="flex flex-col items-center ">
          <span className="text-2xl mt-10 ">Home Maintenance Basics</span>
          <div className="flex h-96 w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border border-dashed border-th-primary-light flex justify-center"></div>

          <div className="flex w-11/12 flex-col  text-sm text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1 leading-tight font-light">
              Join us for an overview of basic home maintenance, taught by a
              second-generation General Contractor. Basics of plumbing,
              electrical, framing, cabinetry, and more are covered using
              interactive aids, and there is a generous Q&A period where
              individual questions and situations can be addressed.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <span className="text-2xl mt-10 ">Residential Electrical 101</span>
          <div className="flex h-96 w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border border-dashed border-th-primary-light flex justify-center"></div>

          <div className="flex w-11/12 flex-col  text-sm text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1 leading-tight font-light">
              Join us for an overview of electricity in the context of the
              common American home, apartment or condo, taught by a
              second-generation General Contractor. There are explanations and
              excercises relating to circuit breakers and household electrical
              panels, receptacles, light switches, and more, and there is a
              generous Q&A period where individual questions and situations can
              be addressed.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <span className="text-2xl mt-10 ">Residential Plumbing 101</span>
          <div className="flex h-96 w-11/12 flex-col  text-base text-center px-4 pb-4 md:px-8  border border-dashed border-th-primary-light flex justify-center"></div>

          <div className="flex w-11/12 flex-col  text-sm text-center px-4 pb-4 md:px-8  border-0 border-dashed border-th-primary-light flex justify-center">
            <p className="py-1 leading-tight font-light">
              Join us for an overview of electricity in the context of the
              common American home, apartment or condo, taught by a
              second-generation General Contractor. There are explanations and
              excercises relating to circuit breakers and household electrical
              panels, receptacles, light switches, and more, and there is a
              generous Q&A period where individual questions and situations can
              be addressed.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
