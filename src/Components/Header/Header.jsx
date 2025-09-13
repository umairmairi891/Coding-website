import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropDown, setdropDown] = useState(false)
  return (
    <>
      <nav className='bg-sky-800 w-full h-16'>
        <div className='flex justify-between items-center px-5'>
          <div>
            <Link to='/'>
              <img className='w-25 h-12 mt-2' src="/Images/Gemini_Generated_Image_jtostqjtostqjtos-removebg-preview.png" alt="" />
            </Link>
          </div>
          <div className='flex '>
            <ul className='md:flex hidden text-white space-x-10 mr-5 font-[Roboto] text-xl '>
              <li>
                <NavLink to='/' className={({ isActive }) =>
                  `${isActive ? 'text-orange-600 font-bold' : "text-white"}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' className={({ isActive }) =>
                  `${isActive ? 'text-orange-600 font-bold' : "text-white"}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/syntax' className={({ isActive }) =>
                  `${isActive ? 'text-orange-600 font-bold' : "text-white"}`}>
                  Syntax
                </NavLink>
              </li>
              <li>
                <div className="">
                  <div className="cursor-pointer" onClick={() => { setdropDown(!dropDown) }}>
                    Languages
                  </div>
                  {dropDown && (
                    <div className=" absolute right-2 ">
                      <ul className="bg-gray-300 rounded text-black">
                        <li className="px-5 py-2 hover:bg-teal-500 duration-300 " onClick={() => { setdropDown(!dropDown) }}>
                          <NavLink to='/javascript' >
                            JavaScript
                          </NavLink>
                        </li>
                        <li className="px-5 py-2  hover:bg-teal-500 duration-300" onClick={() => { setdropDown(!dropDown) }}>
                          <NavLink to='/javascript' >
                            JavaScript
                          </NavLink>
                        </li>
                        <li className="px-5 py-2  hover:bg-teal-500 duration-300" onClick={() => { setdropDown(!dropDown) }}>
                          <NavLink to='/javascript' >
                            JavaScript
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div >
          <div className="block text-white md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <i className="fa-solid fa-bars text-2xl"></i>
            </button>
          </div>

        </div>
        
        {isOpen && (
          <div className='md:hidden bg-sky-800 absolute w-full'>
            <ul className='flex flex-col text-white space-y-3 p-5 font-[Roboto] text-lg'>
              <li>
                <NavLink to='/' onClick={() => setIsOpen(false)} className={({ isActive }) =>
                  `${isActive ? 'text-orange-600 font-bold' : "text-white"}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' onClick={() => setIsOpen(false)} className={({ isActive }) =>
                  `${isActive ? 'text-orange-600 font-bold' : "text-white"}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to='/syntax' onClick={() => setIsOpen(false)} className={({ isActive }) =>
                  `${isActive ? 'text-orange-600 font-bold' : "text-white"}`}>
                  Syntax
                </NavLink>
              </li>
              <li>
                <div className="">
                  <div className="cursor-pointer" onClick={() => { setdropDown(!dropDown) }}>
                    Languages
                  </div>
                  {dropDown && (
                    <div className=" absolute  ">
                      <ul className="bg-gray-300 rounded text-black">
                        <li className="px-5 py-2 hover:bg-teal-500 duration-300 " onClick={() => { setdropDown(!dropDown) }}>
                          <NavLink to='/javascript' >
                            JavaScript
                          </NavLink>
                        </li>
                        <li className="px-5 py-2  hover:bg-teal-500 duration-300" onClick={() => { setdropDown(!dropDown) }}>
                          <NavLink to='/javascript' >
                            JavaScript
                          </NavLink>
                        </li>
                        <li className="px-5 py-2  hover:bg-teal-500 duration-300" onClick={() => { setdropDown(!dropDown) }}>
                          <NavLink to='/javascript' >
                            JavaScript
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}

      </nav>
    </>
  )
}

export default Header;