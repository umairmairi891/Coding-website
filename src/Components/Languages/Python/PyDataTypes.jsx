"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"

function PyDataTypes() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-3 md:p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel]">Python Data Types</h2>
          <p className="py-2 text-xl font-[Lato]">Welcome to the Python programming language</p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>

        {isOpen && (
          <div className="bg-cyan-900 h-auto navbar animate-animated text-white rounded w-full sm:w-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
            <ul className="text-lg font-[Roboto]">
              <div className="flex justify-between items-center">
                <NavLink className="w-[80%] hover:bg-gray-700 duration-300" to="/pyintroduction">
                  <li className="py-3 px-4 hover:bg-gray-700 duration-300">Introduction</li>
                </NavLink>
                <i
                  onClick={() => setisOpen(!isOpen)}
                  className="fa-solid fa-xmark cursor-pointer text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"
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

        <div className="mx-0 mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 font-bold text-3xl font-[Roboto] pl-5">Python Data Types</h2>
            <p className="py-3 font-[Itel] text-xl">
              Python has several built-in data types, categorized into two main groups:{" "}
              <strong>Primitive (Immutable)</strong> and <strong>Non-Primitive (Mutable)</strong> types. These data
              types help define the kind of values that can be stored and manipulated in your programs.
            </p>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">
              Primitive Data Types: These represent single immutable values
            </h3>

            <p className="py-2 font-[Itel] text-xl">
              <strong>Integer (int):</strong> Represents whole numbers without decimal points, both positive and
              negative.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              age = 30
              <br />
              temperature = -5
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>Float:</strong> Represents numbers with decimal points for precise calculations.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              price = 19.99
              <br />
              pi = 3.14159
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>String (str):</strong> Represents sequences of characters enclosed in single quotes, double
              quotes, or triple quotes for multi-line strings.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              name = 'Alice'
              <br />
              greeting = "Hello World"
              <br />
              message = """This is a<br />
              multi-line string"""
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>Boolean (bool):</strong> Represents logical values and can have only two states: True or False
              (note the capitalization in Python).
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              is_active = True
              <br />
              has_permission = False
            </div>

            <p className="py-2 font-[Itel] text-xl">
              <strong>None:</strong> Represents the absence of a value or a null value. It is Python's equivalent to
              null in other languages and is commonly used to indicate that a variable has no value assigned.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              empty_value = None
              <br /># Used when a variable intentionally has no value
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyDataTypes
