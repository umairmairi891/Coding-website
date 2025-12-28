"use client"

import { useState } from "react"
import "/src/App.css"
import { NavLink } from "react-router-dom"

function PyOperator() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel]">Python Operators</h2>
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

        <div
          className="mt-4 mx-0 rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <div className="p-5 w-full">
            <h2 className="font-[Itel] text-2xl">
              Python operators are special symbols or keywords that perform operations on one or more operands. They
              form the foundation of creating expressions and controlling program flow in Python, enabling you to
              manipulate data efficiently.
            </h2>
            <h1 className="font-bold text-2xl font-[Roboto] py-2">Here are the main categories of Python operators:</h1>

            <h3 className="text-xl font-[Itel] py-2">
              <strong>Arithmetic Operators:</strong> Used for performing mathematical calculations on numeric values.
            </h3>
            <ul className="text-lg">
              <li className="py-1">
                <strong className="font-bold px-4">+</strong>(Addition)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">-</strong>(Subtraction)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">*</strong>(Multiplication)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">/</strong>(Division - returns float)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">//</strong>(Floor Division - returns integer)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">%</strong>(Modulus - remainder)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">**</strong>(Exponentiation - power)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2">
              <strong>Assignment Operators:</strong> Used to assign values to variables with optional operations.
            </h3>
            <ul className="text-lg">
              <li className="py-1">
                <strong className="font-bold px-4">=</strong>(Simple Assignment)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">+=</strong>(Add and Assign)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">-=</strong>(Subtract and Assign)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">*=</strong>(Multiply and Assign)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">/=</strong>(Divide and Assign)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">//=</strong>(Floor Divide and Assign)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">%=</strong>(Modulus and Assign)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">**=</strong>(Exponent and Assign)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">&=</strong>(Bitwise AND Assignment)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">|=</strong>(Bitwise OR Assignment)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">^=</strong>(Bitwise XOR Assignment)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2">
              <strong>Comparison Operators:</strong> Compare two values and return a boolean result (True or False).
            </h3>
            <ul className="text-lg">
              <li className="py-1">
                <strong className="font-bold px-4">==</strong>(Equal to)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">!=</strong>(Not equal to)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">{">"}</strong>(Greater than)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">{"<"}</strong>(Less than)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">{">="}</strong>(Greater than or equal to)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">{"<="}</strong>(Less than or equal to)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2">
              <strong>Logical Operators:</strong> Combine or modify boolean expressions for conditional logic.
            </h3>
            <ul className="text-lg">
              <li className="py-1">
                <strong className="font-bold px-4">and</strong>(Logical AND - returns True if both operands are True)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">or</strong>(Logical OR - returns True if at least one operand is
                True)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">not</strong>(Logical NOT - reverses the boolean value)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2">
              <strong>Identity Operators:</strong> Compare the memory location of two objects.
            </h3>
            <ul className="text-lg">
              <li className="py-1">
                <strong className="font-bold px-4">is</strong>(Returns True if both variables point to the same object)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">is not</strong>(Returns True if variables point to different objects)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2">
              <strong>Membership Operators:</strong> Test if a value is present in a sequence.
            </h3>
            <ul className="text-lg">
              <li className="py-1">
                <strong className="font-bold px-4">in</strong>(Returns True if value is found in sequence)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">not in</strong>(Returns True if value is not found in sequence)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2">
              <strong>Bitwise Operators:</strong> Perform operations on the binary representation of integers.
            </h3>
            <ul className="text-lg">
              <li className="py-1">
                <strong className="font-bold px-4">&</strong>(Bitwise AND)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">|</strong>(Bitwise OR)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">^</strong>(Bitwise XOR)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">~</strong>(Bitwise NOT - inverts all bits)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">{"<<"}</strong>(Left Shift - shifts bits to the left)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">{">>"}</strong>(Right Shift - shifts bits to the right)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default PyOperator
