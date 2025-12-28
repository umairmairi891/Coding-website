"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

function PyIntroduction() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="bg-white w-full p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel] ">Python Introduction</h2>
          <p className="py-2 text-xl font-[Lato]">Welcome to the Introduction of Python programming language</p>
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
                <NavLink className="w-[80%]  hover:bg-gray-700  duration-300" to="/pyintroduction">
                  <li className="py-3 px-4  hover:bg-gray-700  duration-300">Introduction</li>
                </NavLink>
                <i
                  onClick={() => setisOpen(!isOpen)}
                  className="fa-solid fa-xmark cursor-pointer  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"
                ></i>
              </div>
              <NavLink to="/pyhistory">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
              </NavLink>
              <NavLink to="/pyworking">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Working</li>
              </NavLink>
              <NavLink to="/pysyntax">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Syntax</li>
              </NavLink>
              <NavLink to="/pyvariable">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
              </NavLink>
              <NavLink to="/pydatatypes">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
              </NavLink>
              <NavLink to="/pyfunction">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
              </NavLink>
              <NavLink to="/pyoperator">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
              </NavLink>
              <NavLink to="/pyloops">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
              </NavLink>
              <NavLink to="/pyobjects">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
              </NavLink>
              <NavLink to="/pyclasses">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
              </NavLink>
              <NavLink to="/pylibraries">
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Libraries</li>
              </NavLink>
              <NavLink to="/pycomparison">
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
            Python is a high-level, interpreted programming language known for its simplicity and readability. It
            emphasizes code readability with its notable use of significant indentation. Python supports multiple
            programming paradigms, including procedural, object-oriented, and functional programming.
          </p>
          <p className="text-lg py-2 px-4">
            Python is widely used in various domains: 1. Web Development with frameworks like Django and Flask 2. Data
            Science and Machine Learning with libraries like NumPy, Pandas, and TensorFlow 3. Automation and Scripting
            for task automation and system administration
          </p>
        </div>

        <div className="p-5 w-full mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <h2 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl">Key Aspects of Python</h2>
          <p className="text-lg py-2 px-4">
            Easy to Learn and Use: Python's syntax is designed to be intuitive and mirrors natural language, making it
            an excellent choice for beginners. Its simplicity allows developers to focus on solving problems rather than
            dealing with complex syntax.
          </p>
          <p className="text-lg py-1 px-4 ">
            Versatile and Multi-Purpose: Python can be used for web development, data analysis, artificial intelligence,
            scientific computing, automation, and more. Its extensive standard library and third-party packages make it
            suitable for a wide range of applications.
          </p>
          <p className="text-lg py-1 px-4">
            Interpreted and Dynamic: Python is an interpreted language, meaning code is executed line by line, which
            makes debugging easier. It is also dynamically typed, so variable types are determined at runtime, providing
            flexibility in coding.
          </p>
          <p className="text-lg py-1 px-4">
            Object-Oriented and Functional: Python supports multiple programming paradigms, including object-oriented
            programming with classes and inheritance, as well as functional programming with features like lambda
            functions and list comprehensions.
          </p>
          <p className="text-lg py-1 px-4">
            Large Community and Rich Ecosystem: Python has a vast and active community that contributes to an extensive
            ecosystem of libraries and frameworks. This includes powerful tools for data science (Pandas, NumPy),
            machine learning (TensorFlow, PyTorch), web development (Django, Flask), and more.
          </p>
        </div>
      </div>
    </>
  )
}

export default PyIntroduction
