import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className='bg-transparent flex justify-center mt-2  '>
        <div className= 'text-white flex  w-96 justify-between border border-gray-700 p-2 rounded-xl px-4'>
            <a className='navbar hover:bg-green-500 hover:text-black rounded-2xl px-1 py-1 ' href="#about">Home</a>
            <a className='navbar hover:bg-green-500 hover:text-black rounded-2xl px-1 py-1 ' href="#work">Work</a>
            <a className='navbar hover:bg-green-500 hover:text-black rounded-2xl px-1 py-1 ' href="#Contect">Contect</a>
        </div>
    </div>
    </>
  )
}

export default NavBar