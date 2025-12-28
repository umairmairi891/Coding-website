"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"
import "/src/App.css"

function CppWorking() {
  const [isOpen, setisOpen] = useState(false)

  return (
    <>
      <div className="p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel]">C++ Working</h2>
          <p className="py-2 text-xl font-[Lato] leading-relaxed">
            Welcome to understanding how C++ programming language works
          </p>
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
        className="mx-3 md:mx-10 mt-2 mb-4"
        style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
      >
        <div className="p-5">
          <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">How C++ Works?</h2>
          <p className="text-xl font-[Lato] py-2 leading-relaxed">
            C++ is a high-performance, compiled, and statically typed programming language that provides low-level
            memory manipulation alongside high-level abstractions. It's widely used for game development, system
            programming, embedded systems, high-performance applications, and real-time simulations. C++'s combination
            of efficiency and powerful features makes it the language of choice for performance-critical applications.
          </p>
          <p className="text-xl font-[Lato] py-2 leading-relaxed">
            C++ was created in 1979 by Bjarne Stroustrup as an extension of the C programming language and has since
            become one of the most influential programming languages in computing history. Its design philosophy
            balances performance with abstraction, offering features like classes, templates, and operator overloading.
            C++ supports multiple programming paradigms including procedural, object-oriented, and generic programming,
            making it exceptionally versatile for systems requiring both speed and sophisticated code organization.
          </p>
        </div>
      </div>
      <div
        className="mx-3 md:mx-10 mt-2 mb-4 p-5"
        style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}
      >
        <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">C++ Compiler</h2>
        <p className="text-xl font-[Lato] py-2 leading-relaxed">
          The C++ compiler is responsible for translating C++ source code into machine code. Popular compilers include
          GCC (GNU Compiler Collection), Clang (LLVM-based), MSVC (Microsoft Visual C++), and Intel C++ Compiler. These
          compilers follow a systematic multi-stage process to compile and optimize C++ code into efficient executable
          programs.
        </p>
        <h2 className="font-semibold font-[Itel] text-xl">How C++ Compiles and Executes Code?</h2>
        <p className="text-xl font-[Lato] py-2 leading-relaxed">
          <strong>Preprocessing:</strong> When you compile a C++ program, the preprocessor first handles all directives
          that begin with #, such as #include, #define, and conditional compilation directives. It expands macros,
          includes header files, and produces a translation unit ready for compilation.
        </p>
        <p className="text-xl font-[Lato] py-2 leading-relaxed">
          <strong>Compilation:</strong> The compiler then parses the preprocessed code, performs lexical and syntax
          analysis, and converts it into assembly language. During this phase, the compiler performs type checking,
          template instantiation, and generates an intermediate representation of your code that can be optimized.
        </p>
        <p className="text-xl font-[Lato] py-2 leading-relaxed">
          <strong>Assembly:</strong> The assembler converts the assembly language code into object code (machine code).
          This produces .o or .obj files containing binary instructions specific to the target processor architecture,
          along with symbol tables and relocation information.
        </p>
        <p className="text-xl font-[Lato] py-2 leading-relaxed">
          <strong>Linking:</strong> Finally, the linker combines all object files and resolves references between them,
          linking with standard libraries and any external libraries your program uses. The result is a standalone
          executable file that can run directly on your operating system without requiring any interpreter, making C++
          programs exceptionally fast.
        </p>
      </div>
    </>
  )
}

export default CppWorking
