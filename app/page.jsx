'use client';
import React from "react";
import Navbar from "./components/Navbar.jsx";
import {auth} from "./firebase.js";
import {useAuthState} from "react-firebase-hooks/auth";
import Chat from "./components/chat.jsx";

const style = {
  appContainer: `max-w-[728px] mx-auto`,
  sectionContainer: `overflow-auto flex flex-col h-[90vh] bg-indigo-300 mt-10 shadow-lg shadow-indigo-500 border-2 border-indigo-400 relative `
};

export default function Home() {
  const [user] = useAuthState(auth);
  // console.log(user);


  return (
   <div className={style.appContainer}>
    <section className={style.sectionContainer}>
      {/*NavBar*/}
      <Navbar />


        {/*Chat component*/}

        <Chat />


    </section>

   </div>
  );
}
