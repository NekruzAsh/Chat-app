import React from 'react'
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "./signin.jsx";
import Logout from "./logout.jsx";

const style = {
  nav: `w-full h-16 bg-indigo-500 flex justify-between items-center`,
  heading: `text-white text-2xl font-bold ml-2`,
  rightContent: `flex items-center mr-2`
}

const Navbar = () => {

  const [user] = useAuthState(auth);
  // console.log(user);

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>ChatMingle</h1>
      <div className={style.rightContent}>
        {user ? <Logout /> : <Signin />} 
      </div>
    </div>
  )
}

export default Navbar