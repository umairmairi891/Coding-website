"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

function CppIntroduction() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="bg-white w-full p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel] ">C++ Introduction</h2>
          <p className="py-2 text-xl font-[Lato]">Welcome to the Introduction of C++ programming language</p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>

        {isOpen && (
          <div className="bg-cyan-900 h-auto navbar animate-animated   text-white rounded w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
            <ul className=" text-lg font-[Roboto]">
              <div className="flex justify-between items-center">
                <NavLink className="w-[80%]  hover:bg-gray-700  duration-300" to="/cppintroduction">
                  <li className="py-3 px-4  hover:bg-gray-700  duration-300">Introduction</li>
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

      <div className="mx-3 md:mx-10 py-5">
        <div className="p-5 w-full" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <h2 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl">Introduction</h2>
          <p className="text-lg py-2 px-4">
            C++ is a high-performance, compiled programming language known for its efficiency and control over system
            resources. It extends the C programming language with object-oriented features, providing both low-level
            memory manipulation and high-level abstractions. C++ supports multiple programming paradigms, including
            procedural, object-oriented, and generic programming.
          </p>
          <p className="text-lg py-2 px-4">
            C++ is widely used in various domains: 1. Game Development with engines like Unreal Engine and Unity 2.
            System Programming for operating systems, drivers, and embedded systems 3. High-Performance Applications
            like browsers, databases, and real-time simulations
          </p>
        </div>

        <div className="p-5 w-full mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <h2 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl">Key Aspects of C++</h2>
          <p className="text-lg py-2 px-4">
            Performance and Efficiency: C++ is a compiled language that produces highly optimized machine code, making
            it one of the fastest programming languages available. Its low-level capabilities allow developers to have
            fine-grained control over memory management and system resources.
          </p>
          <p className="text-lg py-1 px-4 ">
            Versatile and Multi-Purpose: C++ can be used for game development, system programming, embedded systems,
            high-performance computing, and more. Its powerful Standard Template Library (STL) and extensive ecosystem
            make it suitable for a wide range of applications.
          </p>
          <p className="text-lg py-1 px-4">
            Compiled and Statically Typed: C++ is a compiled language, meaning code is translated to machine code before
            execution, which ensures high performance. It is also statically typed, so variable types are determined at
            compile time, providing type safety and early error detection.
          </p>
          <p className="text-lg py-1 px-4">
            Object-Oriented and Generic: C++ supports multiple programming paradigms, including object-oriented
            programming with classes, inheritance, and polymorphism, as well as generic programming with templates and
            the Standard Template Library.
          </p>
          <p className="text-lg py-1 px-4">
            Robust Standard Library and Modern Features: C++ has a comprehensive Standard Template Library that provides
            data structures, algorithms, and utilities. Modern C++ (C++11 and beyond) includes powerful features like
            smart pointers, lambda expressions, move semantics, and more for safer and more expressive code.
          </p>
        </div>
      </div>
    </>
  )
}

export default CppIntroduction
