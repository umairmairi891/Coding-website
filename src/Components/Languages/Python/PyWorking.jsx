"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import "/src/App.css"

function PyWorking() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel]">Python Working</h2>
          <p className="py-2 text-xl font-[Lato]">Welcome to understanding how Python programming language works</p>
          <button
            onClick={() => setisOpen(!isOpen)}
            className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white"
          >
            Start learning more
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="bg-cyan-900 h-auto navbar text-white rounded w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
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
        className="mx-3 md:mx-10 mt-2 mb-4"
        style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
      >
        <div className="p-5">
          <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">How Python Works?</h2>
          <p className="text-xl font-[Lato] py-2">
            Python is a high-level, interpreted, and dynamically typed programming language that emphasizes code
            readability and simplicity. It's widely used for web development, data analysis, artificial intelligence,
            scientific computing, and automation. Python's elegant syntax and powerful libraries make it an ideal choice
            for both beginners and experienced developers.
          </p>
          <p className="text-xl font-[Lato] py-2">
            Python was created in 1991 by Guido van Rossum and has since become one of the most popular programming
            languages in the world. Its design philosophy emphasizes code readability with significant use of whitespace
            and clear, logical syntax. Python supports multiple programming paradigms including procedural,
            object-oriented, and functional programming, making it incredibly versatile for various applications.
          </p>
        </div>
      </div>
      <div
        className="mx-3 md:mx-10 mt-2 mb-4 p-5"
        style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
      >
        <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">Python Interpreter</h2>
        <p className="text-xl font-[Lato] py-2">
          The Python interpreter is responsible for executing Python code. Popular implementations include CPython (the
          standard implementation), PyPy (with JIT compilation), and Jython (running on the JVM). These interpreters
          follow a systematic process to interpret and execute Python code:
        </p>
        <h2 className="font-semibold font-[Itel] text-xl">How Python Interprets and Executes Code?</h2>
        <p className="text-lg font-serif py-2">
          <strong>Lexical Analysis:</strong> When you run a Python script, the interpreter first performs lexical
          analysis to break down the source code into tokens. These tokens represent the smallest meaningful units like
          keywords, identifiers, operators, and literals.
        </p>
        <p className="text-xl font-[Lato] py-2">
          <strong>Parsing:</strong> The tokens are then parsed to create an Abstract Syntax Tree (AST), which represents
          the hierarchical structure of your code. This tree captures the grammatical structure and helps the
          interpreter understand the logical flow of your program.
        </p>
        <p className="text-xl font-[Lato] py-2">
          <strong>Compilation to Bytecode:</strong> Python compiles the AST into bytecode, which is a lower-level,
          platform-independent representation of your source code. This bytecode is stored in .pyc files to improve
          performance on subsequent runs.
        </p>
        <p className="text-xl font-[Lato] py-2">
          <strong>Execution:</strong> Finally, the Python Virtual Machine (PVM) executes the bytecode instruction by
          instruction, producing the desired output or behavior as defined by your Python code. This step-by-step
          execution makes Python an interpreted language, though the bytecode compilation adds efficiency.
        </p>
      </div>
    </>
  )
}

export default PyWorking
