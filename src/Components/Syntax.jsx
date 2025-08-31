import React from "react";
import { NavLink } from "react-router-dom";
function Syntax() {
    return (
        <>
            <div className="w-full p-10">
                <div className=" ">
                    <ul className="grid gap-5 grid-cols-1 sm:grid-cols-12">
                        <NavLink to='/pythonsyntax' className='col-span-12 sm:col-span-2 md:col-span-4'>

                            <li className="font-bold  transform transition-transform duration-300 hover:scale-105 font-[Roboto]   w-full text-center bg-gray-400  rounded shadow-xl cursor-pointer p-5">
                                <h2 className="text-xl">Python Syntax</h2>
                                <p className="font-thin mt-3">A language for backend development</p>
                            </li>
                        </NavLink>

                        <NavLink to='/jssyntax' className='col-span-12   sm:col-span-2 md:col-span-4'>
                            <li className="font-bold text-center  bg-gray-400 w-full rounded shadow-xl cursor-pointer p-5 transform transition-transform duration-300 hover:scale-105">
                                <h2 className="text-xl font-[Roboto]">JavaScript Syntax</h2>
                                <p className="font-thin mt-3">A language for web development</p>
                            </li>
                        </NavLink>


                        <NavLink to='/cplusplussyntax' className='col-span-12 sm:col-span-2 md:col-span-4'>

                            <li className="font-bold text-center bg-gray-400 w-full 
                              rounded shadow-xl cursor-pointer p-5 transform transition-transform duration-300 hover:scale-105">

                                <h2 className="font-[Roboto] text-xl">C++ Syntax</h2>

                                <p className="font-thin mt-3">A language for gaming development</p>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Syntax;