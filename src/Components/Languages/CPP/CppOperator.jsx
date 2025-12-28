"use client"

import { useState } from "react"
import "/src/App.css"
import { NavLink } from "react-router-dom"

function CppOperator() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel]">C++ Operators</h2>
          <p className="py-2 font-thin leading-relaxed">Welcome to the C++ programming language</p>
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
                <NavLink className="w-[80%] hover:bg-gray-700 duration-300" to="/cppintroduction">
                  <li className="py-3 px-4 hover:bg-gray-700 duration-300">Introduction</li>
                </NavLink>
                <i
                  onClick={() => setisOpen(!isOpen)}
                  className="fa-solid fa-xmark cursor-pointer text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"
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

        <div
          className="mt-4 mx-0 rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <div className="p-5 w-full">
            <h2 className="font-[Itel] text-2xl leading-relaxed">
              C++ operators are special symbols that perform operations on one or more operands. They form the
              foundation of creating expressions and controlling program flow in C++, enabling you to manipulate data
              efficiently with strong type safety and performance optimization.
            </h2>
            <h1 className="font-bold text-2xl font-[Roboto] py-2">Here are the main categories of C++ operators:</h1>

            <h3 className="text-xl font-[Itel] py-2 leading-relaxed">
              <strong>Arithmetic Operators:</strong> Used for performing mathematical calculations on numeric values.
            </h3>
            <ul className="text-lg leading-relaxed">
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
                <strong className="font-bold px-4">/</strong>(Division)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">%</strong>(Modulus - remainder for integers)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">++</strong>(Increment - increases value by 1)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">--</strong>(Decrement - decreases value by 1)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2 leading-relaxed">
              <strong>Assignment Operators:</strong> Used to assign values to variables with optional operations.
            </h3>
            <ul className="text-lg leading-relaxed">
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
                <strong className="font-bold px-4">%=</strong>(Modulus and Assign)
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
              <li className="py-1">
                <strong className="font-bold px-4">{"<<="}</strong>(Left Shift Assignment)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">{">>="}</strong>(Right Shift Assignment)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2 leading-relaxed">
              <strong>Comparison Operators:</strong> Compare two values and return a boolean result (true or false).
            </h3>
            <ul className="text-lg leading-relaxed">
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

            <h3 className="text-xl font-[Itel] py-2 leading-relaxed">
              <strong>Logical Operators:</strong> Combine or modify boolean expressions for conditional logic.
            </h3>
            <ul className="text-lg leading-relaxed">
              <li className="py-1">
                <strong className="font-bold px-4">&&</strong>(Logical AND - returns true if both operands are true)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">||</strong>(Logical OR - returns true if at least one operand is
                true)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">!</strong>(Logical NOT - reverses the boolean value)
              </li>
            </ul>

            <h3 className="text-xl font-[Itel] py-2 leading-relaxed">
              <strong>Bitwise Operators:</strong> Perform operations on the binary representation of integers.
            </h3>
            <ul className="text-lg leading-relaxed">
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

            <h3 className="text-xl font-[Itel] py-2 leading-relaxed">
              <strong>Special C++ Operators:</strong> Unique operators specific to C++ language features.
            </h3>
            <ul className="text-lg leading-relaxed">
              <li className="py-1">
                <strong className="font-bold px-4">::</strong>(Scope Resolution - accesses global or namespace members)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">.</strong>(Member Access - accesses object members)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">-{">"}</strong>(Pointer Member Access - accesses members through
                pointers)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">? :</strong>(Ternary Operator - conditional expression)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">sizeof</strong>(Returns size of data type or object in bytes)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">&</strong>(Address-of - returns memory address of variable)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">*</strong>(Dereference - accesses value at pointer address)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">new</strong>(Dynamic memory allocation)
              </li>
              <li className="py-1">
                <strong className="font-bold px-4">delete</strong>(Dynamic memory deallocation)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppOperator
