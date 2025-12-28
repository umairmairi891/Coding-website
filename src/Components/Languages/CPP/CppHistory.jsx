"use client"

import { useState } from "react"
import "/src/App.css"
import { NavLink } from "react-router-dom"

function CppHistory() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-3 md:p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel]">C++ History</h2>
          <p className="py-2 text-xl font-[Lato]">Welcome to the History of C++ programming language</p>
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
              <NavLink>
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

        <div className="mx-1 mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">History</h2>
            <p className="text-lg font-serif py-2 leading-relaxed">
              C++ has a rich history that began in 1979 when Bjarne Stroustrup, a Danish computer scientist working at
              Bell Labs, started developing the language as an enhancement to C. Originally called "C with Classes," it
              was designed to combine the efficiency and flexibility of C with the object-oriented programming paradigm.
              The language was officially renamed C++ in 1983, with the "++" symbolizing the increment operator in C,
              suggesting an evolution from its predecessor. Stroustrup's vision was to create a language that would
              support low-level system programming while providing high-level abstractions for better code organization
              and reusability.
            </p>
          </div>
        </div>

        <div className="mx-1 mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">
              Key milestones in C++ history include:
            </h2>
            <p className="text-lg font-serif py-3 leading-relaxed">
              1979: Bjarne Stroustrup begins work on "C with Classes" at Bell Labs, introducing classes, basic
              inheritance, and function overloading to the C programming language.
            </p>
            <p className="text-lg font-serif py-3 leading-relaxed">
              1983: The language is officially renamed C++, symbolizing its evolution from C. Features like virtual
              functions, function name overloading, and references are introduced.
            </p>
            <p className="text-lg font-serif py-3 leading-relaxed">
              1985: The first commercial release of C++ arrives with Cfront, a compiler that translated C++ code to C.
              The first edition of "The C++ Programming Language" book is published.
            </p>
            <p className="text-lg font-serif py-3 leading-relaxed">
              1998: C++98 becomes the first standardized version of C++, published by the International Organization for
              Standardization (ISO). It introduces the Standard Template Library (STL) with containers, algorithms, and
              iterators.
            </p>
            <p className="text-lg font-serif py-3 leading-relaxed">
              2003: C++03 is released as a bug-fix revision, addressing issues in the C++98 standard without adding
              major new features.
            </p>
            <p className="text-lg font-serif py-3 leading-relaxed">
              2011: C++11 revolutionizes the language with modern features including auto keyword, lambda expressions,
              smart pointers, move semantics, range-based for loops, and multithreading support, marking the beginning
              of "Modern C++."
            </p>
            <p className="text-lg font-serif py-3 leading-relaxed">
              2014: C++14 is released as an incremental improvement over C++11, adding generic lambdas, variable
              templates, and improved constexpr support.
            </p>
            <p className="text-lg font-serif py-3 leading-relaxed">
              2017: C++17 brings structured bindings, if constexpr, fold expressions, and optional, variant, and any
              types. The standard library continues to expand with filesystem support and parallel algorithms.
            </p>
            <p className="text-lg font-serif py-3 leading-relaxed">
              2020: C++20 introduces groundbreaking features like concepts, ranges, coroutines, modules, and the
              spaceship operator, representing the most significant update since C++11.
            </p>
          </div>
        </div>

        <div className="mx-1 mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">The Future of C++</h2>
            <p className="text-lg font-serif py-2 leading-relaxed">
              C++ continues to evolve as one of the most powerful and widely-used programming languages in the world.
              The language remains essential for performance-critical applications, system programming, and domains
              where hardware control is paramount. C++23 has already been finalized, bringing further improvements to
              the language with features like deducing this, improved constant evaluation, and standard library
              enhancements. Looking ahead, C++26 is under active development with proposals for reflection,
              pattern-matching, and networking capabilities. The language maintains its dominance in game development
              with engines like Unreal Engine and Unity, high-performance computing, embedded systems, and financial
              trading platforms. Modern C++ emphasizes safety, performance, and expressiveness, with ongoing efforts to
              make the language more accessible while preserving its zero-overhead principles. The future of C++ looks
              robust, with a vibrant community, continuous standardization efforts, and expanding use cases from
              artificial intelligence to quantum computing, ensuring its relevance for decades to come.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppHistory
