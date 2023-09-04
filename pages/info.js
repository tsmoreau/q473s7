import ThemeToggle from "../components/ThemeToggle";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Card1 from "../parts/Card1";

export default function AboutPage() {
  return (
    <main className=" w-screen">
    <div className=" mx-auto ">
      <Nav />
    </div>

    <div className="min-h-screen bg-th-background-secondary  flex flex-col pt-24 items-center">
  <span className="Avenir font-semibold  text-center text-3xl lg:text-5xl w-3/4">
    Programs, Curriculum & More
  </span>


<div className="mt-6 w-5/6 bg-slate-100 rounded-lg flex justify-center text-lg space-x-4">

  <div className=" ">
    Programs Details
    </div>
  <div className=" ">
    Curriculum Overview
   
  
  </div>
  <div className=" ">
    Inclusive Skills Tree
  </div>
  </div>

<div className="w-5/6 bg-slate-100 rounded-lg flex justify-center text-lg space-x-4">

  <div className=" ">
   Resources for Schools & Libraries
  </div>
  <div className=" ">
    Tools & Materials Guides
  </div>


  </div>


</div>


      <Footer />
  </main>

  );
}
