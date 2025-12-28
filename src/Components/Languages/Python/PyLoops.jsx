"use client"

import { useState } from "react"

import "/src/App.css"
import { NavLink } from "react-router-dom"

function PyLoops() {
  const [isOpen, setisOpen] = useState(false)
  const i = 0 // Declare i variable
  const count = 0 // Declare count variable
  const index = 0 // Declare index variable
  const fruit = "" // Declare fruit variable
  const person = { name: "John", age: 30 } // Declare person variable
  const fruits = ["apple", "banana", "cherry"] // Declare fruits variable
  const squares = [] // Declare squares variable
  const even_numbers = [] // Declare even_numbers variable

  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel]">Python Loops</h2>
          <p className="py-2 font-thin">Welcome to the Python programming language</p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>

        {isOpen && (
          <div className="bg-cyan-900 h-auto navbar animate-animated text-white rounded w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
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

        <div className="mt-4 rounded" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="font-[Itel] text-xl">
              Python provides several types of loops to repeatedly execute a block of code based on a condition or to
              iterate over data structures efficiently.
            </h2>

            <h3 className="text-xl font-[Roboto] py-4">
              <strong className="px-4 text-2xl">For Loop:</strong>This loop is used to iterate over sequences like
              lists, tuples, strings, or ranges. It's the most common loop in Python and provides a clean, readable
              syntax for iteration.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`for i in range(5):\n    print(f'Iteration {i}')`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4">
              <strong className="px-4 text-2xl">While Loop:</strong>This loop repeatedly executes a block of code as
              long as a specified condition remains true. The condition is evaluated before each iteration, making it
              ideal for scenarios where the number of iterations is not predetermined.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`count = 0\nwhile count < 3:\n    print(f'Count: {count}')\n    count += 1`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4">
              <strong className="px-4 text-2xl">For Loop with Enumerate:</strong>This approach allows you to iterate
              over a sequence while keeping track of the index position. It's particularly useful when you need both the
              item and its position in the sequence.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`fruits = ['apple', 'banana', 'cherry']\nfor index, fruit in enumerate(fruits):\n    print(f'{index}: {fruit}')`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4">
              <strong className="px-4 text-2xl">For Loop with Dictionary:</strong>This loop iterates over dictionary
              items, allowing access to both keys and values. Python's dictionary iteration is optimized and provides
              multiple ways to access the data.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`person = {'name': 'John', 'age': 30}\nfor key, value in person.items():\n    print(f'{key}: {value}')`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4">
              <strong className="px-4 text-2xl">List Comprehension:</strong>This is a concise way to create lists based
              on existing sequences. It combines the loop and the list creation into a single, readable line of code,
              making it both efficient and Pythonic.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`squares = [x**2 for x in range(10)]\neven_numbers = [x for x in range(20) if x % 2 == 0]`}
            </div>

            <h3 className="text-xl font-[Roboto] py-4">
              <strong className="px-4 text-2xl">Break and Continue:</strong>Python provides control statements to modify
              loop behavior. The <strong>break</strong> statement exits the loop entirely, while{" "}
              <strong>continue</strong> skips the current iteration and proceeds to the next one.
            </h3>
            <div className="w-full py-3 px-4 h-auto bg-black text-green-600 rounded">
              {`for i in range(10):\n    if i == 3:\n        continue  # Skip 3\n    if i == 7:\n        break  # Stop at 7\n    print(i)`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyLoops
