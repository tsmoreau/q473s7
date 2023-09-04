import ThemeToggle from "../components/ThemeToggle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className=" ">
      <div className=" mx-auto ">
        <Nav />
      </div>

      <div className="  flex flex-col pt-24 items-center   text-3xl lg:text-4xl ">
    <span className="   text-center text-6xl ">
      Frequently Asked Questions
    </span>

    <div className=" pt-12  w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex justify-center ">
      Our Mission
    </div>

    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 bg-gray-300 flex justify-center text-base ">
     sgrdg
    </div>

    <div id="goals" className=" pt-12   flex justify-center ">
      Our Goals
    </div>

    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 bg-gray-300 flex text-base justify-center">
     sgrdg
    </div>


    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12  pt-12  flex justify-center ">
      Our Staff
    </div>

    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex justify-center ">
      <div className="grid grid-cols-3   gap-6">
         <div className="h-48 w-32 bg-yellow-300"></div>
          <div className="h-48 w-32 bg-yellow-300"></div>
           <div className="h-48 w-32 bg-yellow-300"></div>
            <div className="h-48 w-32 bg-yellow-300"></div>
      </div>
    </div>

    <div className=" pt-12   flex justify-center ">
    Our Board
    </div>

    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex justify-center ">
      <div className="grid grid-cols-3   gap-6">
         <div className="h-48 w-32 bg-yellow-300"></div>
          <div className="h-48 w-32 bg-yellow-300"></div>
           <div className="h-48 w-32 bg-yellow-300"></div>
            <div className="h-48 w-32 bg-yellow-300"></div>
      </div>
    </div>

    <div className=" pt-12   flex justify-center ">
    Our Partners & Sponsors
    </div>

    <div className="w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex justify-center ">
      <div className="grid grid-cols-3   gap-6">
         <div className="h-48 w-32 bg-yellow-300"></div>
          <div className="h-48 w-32 bg-yellow-300"></div>
           <div className="h-48 w-32 bg-yellow-300"></div>
            <div className="h-48 w-32 bg-yellow-300"></div>
      </div>
    </div>


        </div>



        <Footer />
    </main>
  );
}