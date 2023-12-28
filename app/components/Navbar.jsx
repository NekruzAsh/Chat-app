import React from 'react'


const style = {
    nav: `w-full h-16 bg-indigo-500 flex justify-center items-center`,
    heading: `text-white text-2xl font-bold`
    
}

const Navbar = () => {
  return (
    <div className={style.nav}>
            <h1 className={style.heading}>ChatMingle</h1>
    </div>
  )
}

export default Navbar