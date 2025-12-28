"use client"

import { useState } from "react"
import { NavLink, Link } from "react-router-dom"

function CPlusPlus() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <div className="w-full ">
      <div className="flex justify-center py-6 mt-3 mb-3">
        <div
          className="max-w-[80%] md:max-w-lg p-3 md:p-5 text-center rounded"
          style={{ boxShadow: "0 3px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-[Roboto]">Welcome to C++</h2>
          <p className=" py-2 text-xl font-[Lato] font-semibold mt-4 ">
            A powerful programming language for system, application and game development
          </p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>

        {isOpen && (
          <div className="bg-cyan-900 navbar h-auto animate-animated  text-white  w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
            <ul className=" text-lg font-[Roboto]">
              <div className="flex justify-between items-center">
                <NavLink className="w-[80%]  hover:bg-gray-700  duration-300" to="/cppintroduction">
                  <li className="py-3 px-4   hover:bg-gray-700  duration-300">Introduction</li>
                </NavLink>
                <i
                  onClick={() => setisOpen(!isOpen)}
                  className="fa-solid fa-xmark cursor-pointer  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"
                ></i>
              </div>
              <NavLink to="/cpphistory">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
              </NavLink>
              <NavLink to="/cppworking">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Working</li>
              </NavLink>
              <NavLink to="/cppsyntax">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Syntax</li>
              </NavLink>
              <NavLink to="/cppvariable">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
              </NavLink>
              <NavLink to="/cppdatatypes">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
              </NavLink>
              <NavLink to="/cppfunction">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
              </NavLink>
              <NavLink to="/cppoperator">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
              </NavLink>
              <NavLink to="/cpploops">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
              </NavLink>
              <NavLink to="/cppobjects">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
              </NavLink>
              <NavLink to="/cppclasses">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
              </NavLink>
              <NavLink to="/cpplibraries">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Libraries</li>
              </NavLink>
              <NavLink to="/cppcomparison">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
              </NavLink>
            </ul>
          </div>
        )}
      </div>
      <div className=" grid-cols-1 w-full p-5">
        <div
          className="p-6  bg-white-500 w-full"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <h2 className="text-lg md:text-2xl font-semibold border-l-5 border-blue-800 pl-5 font-[Roboto]">
            {" "}
            <span className="mr-3">🔰</span>Syntax Overview
          </h2>

          <div className="w-full full h-auto bg-black text-green-600 mt-4 py-4 rounded">
            <p className="px-3">cout &lt;&lt; "Hello" &lt;&lt; endl;</p>
            <p className="px-3">cin &gt;&gt; variable;</p>
          </div>
        </div>

        <div
          className=" p-6 mt-4   bg-white-500 w-full"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="text-2xl font-semibold border-l-5 border-blue-800 pl-5 py-3">
            {" "}
            <span className="mr-3">🛠</span>Use Cases
          </h2>
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-12 mt-4 pt-3 md:pt-0">
            <div className="bg-gray-400 p-3 col-span-4 rounded-xl h-auto text-center hover:scale-110 cursor-pointer duration-300">
              <h2 className=" text-2xl font-bold font-[Roboto] py-2">Game Development</h2>
              <p className="font-[Itel] text-xl">
                C++ used for Game Development with Unreal Engine, Unity and custom engines
              </p>
            </div>
            <div className="bg-gray-400 p-3 col-span-4 rounded-xl h-auto text-center hover:scale-110 cursor-pointer duration-300">
              <h2 className=" text-2xl font-bold font-[Roboto] py-2">System Programming</h2>
              <p className="font-[Itel] text-xl">C++ used for Operating Systems, Drivers and embedded systems</p>
            </div>
            <div className="bg-gray-400 p-3 col-span-4 rounded-xl h-auto text-center hover:scale-110 cursor-pointer duration-300">
              <h2 className=" text-2xl font-bold font-[Roboto] py-2">High Performance Apps</h2>
              <p className="font-[Itel] text-xl">
                C++ used for Desktop Applications, browsers, databases and performance-critical software
              </p>
            </div>
          </div>
        </div>
        <div
          className="p-6 mt-4   bg-white-500 w-full"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="text-2xl font-[Roboto] font-semibold border-l-5 border-blue-800 pl-5">
            {" "}
            <span className="mr-3">🔰</span>Key Features
          </h2>

          <ul className="mt-4 text-xl font-semibold py-3 font-[Itel]">
            <li className="py-1">Compiled, high-performance general-purpose language</li>
            <li className="py-1">Supports object-oriented, procedural and generic programming</li>
            <li className="py-1">Direct memory manipulation with pointers and references</li>
            <li className="py-1">Rich Standard Template Library (STL) with containers and algorithms</li>
            <li className="py-1">Low-level control with high-level abstractions and efficiency</li>
          </ul>
        </div>
        <div
          className="p-6 mt-4 bg-white w-full"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="border-l-5 text-2xl  border-blue-800 pl-5 font-bold font-[Roboto]">
            <span className="">📝</span>Learning Resources
          </h2>

          <ul class="mt-4 font-semibold font-[Popins] text-xl">
            <Link to="https://cplusplus.com/doc/tutorial/">
              <li>C++ Language Tutorial</li>
            </Link>
            <li>
              <a href="https://en.cppreference.com/">CPP Reference Documentation</a>
            </li>
            <li>
              <a href="https://www.learncpp.com/">LearnCPP.com Interactive Tutorial</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CPlusPlus
