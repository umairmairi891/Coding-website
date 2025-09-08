import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
function JavaScript() {

    const [isOpen, setisOpen] = useState(false)

    return (
        <div className="w-full ">
            <div className="flex justify-center py-6 mt-3 mb-3">
                <div className="max-w-[80%] md:max-w-lg p-3 md:p-5 text-center rounded" style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08' }}>
                    <h2 className="text-2xl md:text-3xl font-bold font-[Roboto]">Welcome to JavaScript</h2>
                    <p className="texl-xl font-semibold mt-4 font-[Popins]">A programming langauge of a frontent, backend and scripting</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
                </div>

                {
                    isOpen && (
                        <div className="bg-cyan-900 h-auto  text-white  w-[100%] sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
                            <ul className=" text-lg font-[Roboto]">
                                <NavLink className='flex justify-between items-center '>
                                    <li className="py-3 px-4 w-[80%] hover:bg-gray-700  duration-300">Introduction</li>
                                    <i onClick={() => setisOpen(!isOpen)} className="fa-solid fa-xmark  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"></i>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Working</li>
                                </NavLink>
                                <NavLink to='/jssyntax'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Syntax</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">DOM</li>
                                </NavLink>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
                                </NavLink>
                            </ul>
                        </div>
                    )
                }
            </div>
            <div className=" grid-cols-1 w-full p-5" >
                <div className="p-6  bg-white-500 w-full" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }} >
                    <h2 className="text-lg md:text-2xl font-semibold border-l-5 border-blue-800 pl-5 font-[Roboto]"> <span className="mr-3">🔰</span>Syntax Overview</h2>

                    <div className="w-[100%] md:w-[100%] h-auto bg-black text-green-600 mt-4 py-4 rounded">
                        <p className="px-3">
                            console.log('Hello')
                        </p>
                        <p className="px-3">alert('Hello alert')

                        </p>
                    </div>
                </div>

                <div className="p-6 mt-4   bg-white-500 w-full" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }} >
                    <h2 className="text-2xl font-semibold border-l-5 border-blue-800 pl-5"> <span className="mr-3">🛠</span>Use Cases</h2>
                    <div className="grid gap-10 grid-cols-1 sm:grid-cols-12 p-5">
                        <div className="bg-gray-400 p-3 col-span-4 rounded-xl h-auto text-center hover:scale-110 cursor-pointer duration-300">
                            <h2 className=" text-2xl font-bold font-[Roboto] py-2">Web Development</h2>
                            <p className="font-thin">JavaScript used for web Development using HTML, CSS and Frameworks</p>
                        </div>
                        <div className="bg-gray-400 p-3 col-span-4 rounded-xl h-auto text-center hover:scale-110 cursor-pointer duration-300">
                            <h2 className=" text-2xl font-bold font-[Roboto] py-2">Frontend Development</h2>
                            <p className="font-thin">JavaScript used for Frontend Development using HTML, CSS and CSS Frameworks</p>
                        </div>
                        <div className="bg-gray-400 p-3 col-span-4 rounded-xl h-auto text-center hover:scale-110 cursor-pointer duration-300">
                            <h2 className=" text-2xl font-bold font-[Roboto] py-2">Backend Development</h2>
                            <p className="font-thin">JavaScript used for Backend Development using node.js, express.js and many other Frameworks</p>
                        </div>
                    </div>

                </div>
                <div className="p-6 mt-4   bg-white-500 w-full" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }} >
                    <h2 className="text-2xl font-[Roboto] font-semibold border-l-5 border-blue-800 pl-5"> <span className="mr-3">🔰</span>Key Features</h2>

                    <ul className="mt-4 font-semibold py-3 font-[Popins]">
                        <li className="py-1">Interpreted, high-level scripting language</li>
                        <li className="py-1">Supports object-oriented and functional programming</li>
                        <li className="py-1">Runs in browsers and on servers (via Node.js)</li>
                        <li className="py-1">Massive ecosystem of libraries and frameworks (React, Vue, etc.)</li>
                        <li className="py-1">Asynchronous programming with Promises and async/await</li>
                    </ul>

                </div>
                <div className="p-6 mt-4 bg-white w-full" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
                        <h2 className="border-l-5 text-2xl  border-blue-800 pl-5 font-bold font-[Roboto]"><span className="">📝</span>Learning Resources</h2>
                    
                    <ul class="mt-4 font-semibold font-[Popins]">
                        <Link to='"https://developer.mozilla.org/en-US/docs/Web/JavaScript"'>
                            <li>MDN JavaScript Docs</li>
                        </Link>
                            <li><a href="https://javascript.info/">JavaScript.info (Modern JS)</a></li>
                            <li><a href="https://www.freecodecamp.org/learn/">freeCodeCamp JavaScript Tutorials</a></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default JavaScript;