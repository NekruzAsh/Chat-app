"use client";
import React from "react";
import Navbar from "./components/Navbar.jsx";
import Chat from "./components/chat.jsx";

import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `overflow-auto flex flex-col h-[70vh] bg-indigo-300 mt-10 shadow-xl shadow-indigo-500 border border-indigo-400 relative`,
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
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}
