import React from 'react'
import { auth } from "../firebase.js";


const style = {
    logout: `bg-blue-300 px-4 py-2 hover:bg-blue-600 text-gray-800 text-2xl font-bold`
    
}




const logout = () => {

    const signOut = () => {

       signOut(auth)
    
    }

  return (
    <button onClick={() => auth.signOut()} className={style.logout}>
        logout
    </button>
  )
}

export default logout