import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-cyan-800 text-white">
      <div className="text-xl font-bold bg-green">My App</div>
      <div className="flex space-x-4">
        <a href="#" className="hover:underline ">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </div>
  )
}

export default Navbar