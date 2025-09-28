import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-violet-700 text-white py-2'>
      <dv className="logo">
        <span className='font-bold text-xl mx-8'>TaskMate</span>
      </dv>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
      </ul>
    </nav>
  )
}

export default Navbar
