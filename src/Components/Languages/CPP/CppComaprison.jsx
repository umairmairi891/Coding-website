"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

function CppComparison() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-5 md:p-10">
        <div
          className="bg-gray-600 text-center py-5 px-6 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-xl font-[Itel]">C++ Comparison</h2>
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

        <div className="mt-4 rounded" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-1 md:p-5 w-full overflow-auto">
            <table className="responsive w-full">
              <thead>
                <tr className="text-xl font-bold font-[Itel] border-4 border-l-4 border-black">
                  <th className="px-4 py-2 font-[Itel] border-r-4 border-black">Features</th>
                  <th className="px-4 py-2 font-[Itel] border-r-4 border-black">C++</th>
                  <th className="px-4 py-2 font-[Itel] border-r-4 border-black">Other Languages</th>
                </tr>
              </thead>
              <tbody className="font-[Itel] text-lg">
                <tr>
                  <td className="px-1 border-4 font-bold py-2">Performance and Speed</td>
                  <td className="px-4 border-4 leading-relaxed">
                    C++ is renowned for its exceptional performance and low-level control over system resources. As a
                    compiled language with minimal runtime overhead, it delivers blazing-fast execution speeds ideal for
                    performance-critical applications. Direct memory management and hardware-level optimization make it
                    the go-to choice for high-performance computing.
                  </td>
                  <td className="px-4 border-4 leading-relaxed">
                    Interpreted languages like Python and JavaScript prioritize development speed over execution
                    performance. Java offers good performance with JIT compilation but includes garbage collection
                    overhead. Rust provides comparable performance to C++ with added memory safety guarantees, while Go
                    balances performance with simplicity.
                  </td>
                </tr>

                <tr>
                  <td className="px-1 py-2 border-4 font-bold">Memory Management</td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    C++ provides direct control over memory allocation and deallocation through pointers, references,
                    and manual memory management. Modern C++ offers smart pointers (unique_ptr, shared_ptr) that combine
                    low-level control with automatic resource management, giving developers flexibility to optimize
                    memory usage for specific needs.
                  </td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    Languages like Python, Java, and JavaScript use automatic garbage collection, simplifying
                    development but reducing control over memory. Rust enforces memory safety at compile-time through
                    its ownership system, preventing many common bugs without runtime overhead.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border-4 font-bold">Versatility and Use Cases</td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    C++ excels in system programming, game development, embedded systems, real-time applications,
                    high-frequency trading, operating systems, and performance-critical software. Its combination of
                    high-level abstractions and low-level control makes it suitable for applications requiring both
                    power and efficiency.
                  </td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    Python dominates data science and machine learning. JavaScript rules web development. Java powers
                    enterprise applications and Android development. Each language specializes in domains where its
                    trade-offs between performance, safety, and ease of use are most beneficial.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border-4 font-bold">Learning Curve</td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    C++ has a steep learning curve due to its complexity, manual memory management, pointer arithmetic,
                    and extensive feature set. However, mastering C++ provides deep understanding of computer systems,
                    memory architecture, and performance optimization that applies across all programming domains.
                  </td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    Python and JavaScript are beginner-friendly with simple syntax and automatic memory management. Java
                    offers a middle ground with strong typing and managed memory. Rust's learning curve is steep but
                    rewarding, enforcing safe practices through its compiler.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border-4 font-bold">Standard Library and Ecosystem</td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    C++ features the powerful Standard Template Library (STL) with containers, algorithms, and
                    iterators. The ecosystem includes mature libraries like Boost, Qt for GUI development, OpenCV for
                    computer vision, and countless specialized libraries for graphics, networking, and scientific
                    computing.
                  </td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    Python's PyPI hosts over 400,000 packages for diverse domains. JavaScript's NPM is the largest
                    package registry. Java maintains extensive enterprise libraries. While C++'s ecosystem is smaller,
                    its libraries are often performance-optimized and battle-tested in production systems.
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-2 border-4 font-bold">Career Opportunities</td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    C++ developers are highly sought after for game development, system programming, embedded systems,
                    financial technology, aerospace, robotics, and high-performance computing. The language's complexity
                    and power command premium salaries in industries where performance and efficiency are critical.
                  </td>
                  <td className="px-4 py-2 border-4 leading-relaxed">
                    Python developers find abundant opportunities in data science and AI. JavaScript dominates web
                    development roles. Java remains strong in enterprise. Each language offers competitive career paths,
                    with C++ particularly valued in specialized high-performance domains.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppComparison
