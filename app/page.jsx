import Image from "next/image";
import React from "react";
import Navbar from "./components/Navbar.jsx";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-indigo-300 mt-10 shadow-lg shadow-indigo-500 border-2 border-indigo-400 relative `
};

export default function Home() {
  return (
   <div className={style.appContainer}>
    <section className={style.sectionContainer}>
      {/*NavBar*/}
      <Navbar />


        {/*Chat component*/}

    </section>

   </div>
  );
}
