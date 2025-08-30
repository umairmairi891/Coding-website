import React from "react";
import {Link, NavLink } from "react-router-dom";
function Header(){

    return(
        <>
        <nav className='bg-sky-800 w-full h-16'>
      <div className='flex justify-between items-center px-5'>
         <div>
            <Link to='/'>
          <img className='w-25 h-12 mt-2' src="src/Images/Gemini_Generated_Image_jtostqjtostqjtos-removebg-preview.png" alt="" /> 
            </Link>
         </div>
         <div className='flex '>
          <ul className='md:flex hidden text-white space-x-6 font-[Roboto] text-xl'>
            <li>
                <NavLink to='/' className={({isActive})=>
                            `${isActive? 'text-orange-600 font-bold': "text-white"}`}>
                    Home
                </NavLink>
                </li>
            <li>
                <NavLink to='/about' className={({isActive})=>
                            `${isActive? 'text-orange-600 font-bold': "text-white"}`}> 
                   About
                </NavLink>
            </li>
            <li>
              <NavLink to='/syntax' className={({isActive})=>
                            `${isActive? 'text-orange-600 font-bold': "text-white"}`}> 
                   Syntax
                </NavLink>
            </li>
            <li>Languages</li>
          </ul>
         </div>
      </div>
     </nav>
        </>
    )
}

export default Header;