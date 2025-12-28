"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"
function PyObjects() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel] ">Python Dictionaries & Objects</h2>
          <p className="py-2 font-thin">Master Python's powerful data structures and object-oriented programming</p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>

        {isOpen && (
          <div className="bg-cyan-900 h-auto navbar animate-animated  text-white rounded w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
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
                <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Dictionaries</li>
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

        <div className="mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="text-xl font-[Lato]">
              In Python, dictionaries are versatile data structures that store key-value pairs, allowing efficient data
              organization and retrieval. Dictionaries are mutable, unordered collections that are fundamental to Python
              programming and are used to represent complex data structures and real-world entities.
            </h2>
            <h2 className="py-2 text-2xl font-bold font-[Roboto]">Key Characteristics of Python Dictionaries:</h2>

            <p className="text-xl py-2 font-[Itel]">
              {" "}
              <strong className="text-2xl">Key-Value Pairs:</strong> Dictionaries store data as key-value pairs, where
              each unique key maps to a specific value, enabling fast lookups
            </p>
            <h3 className="py-2 text-xl font-[Itel]">
              <strong className="text-2xl">Mutable:</strong> Dictionary values can be added, modified, or removed at any
              time during program execution
            </h3>
            <h3 className="py-2 text-xl font-[Itel]">
              {" "}
              <strong className="text-2xl">Dynamic Structure:</strong> Dictionaries can grow or shrink dynamically, and
              can contain values of any data type including nested dictionaries
            </h3>
            <h3 className="py-2 text-xl font-[Itel]">
              <strong className="text-2xl">Object-Oriented Support:</strong> Python fully supports object-oriented
              programming with classes, allowing you to create custom objects with attributes and methods
            </h3>
          </div>
        </div>

        <div className="mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="text-2xl font-bold font-[Roboto]">Creating Dictionaries</h2>
            <p className="text-xl py-2 font-[Itel]">
              The most common way to create a dictionary is using curly braces with key-value pairs:
            </p>
            <div className="py-3 bg-black text-green-600 px-4 rounded">
              person = &#123;"first_name": "John", "last_name": "Doe", "age": 30&#125;
            </div>
            <h2 className="text-2xl font-[Roboto] font-bold py-4">Common Dictionary Operations:</h2>
            <p className="py-2 text-lg font-[Itel]">
              <strong className="text-xl ">Adding new items:</strong> person["occupation"] = "Engineer"
            </p>
            <p className="py-2 text-lg font-[Itel]">
              <strong className="text-xl ">Modifying existing items:</strong> person["age"] = 31
            </p>
            <p className="py-2 text-lg font-[Itel]">
              <strong className="text-xl ">Deleting items:</strong> del person["age"]
            </p>
            <p className="py-2 text-lg font-[Itel]">
              <strong className="text-xl ">Iterating over dictionaries:</strong> person.keys(), person.values(),
              person.items()
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyObjects
