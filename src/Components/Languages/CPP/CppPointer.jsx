"use client"

import { useState } from "react"
import { NavLink } from "react-router-dom"

function CppPointers() {
  const [isOpen, setisOpen] = useState(false)
  return (
    <>
      <div className="p-3 md:p-10">
        <div
          className="bg-gray-600 text-center py-5 px-3 text-white rounded"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)" }}
        >
          <h2 className="font-bold text-2xl font-[Itel]">C++ Pointers</h2>
          <p className="py-2 text-xl font-[Lato] leading-relaxed">
            Master the power of memory management with C++ pointers
          </p>
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

        <div className="mx-0 mt-4" style={{ boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)" }}>
          <div className="p-5 w-full">
            <h2 className="border-l-5 border-blue-800 font-bold text-3xl font-[Roboto] pl-5">C++ Pointers</h2>
            <p className="py-3 font-[Itel] text-xl leading-relaxed">
              Pointers are one of the most powerful and fundamental features in C++. They allow you to directly access
              and manipulate memory addresses, enabling efficient memory management, dynamic data structures, and
              low-level system programming. Understanding pointers is essential for mastering C++ and writing
              high-performance applications.
            </p>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">What is a Pointer?</h3>
            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              A pointer is a variable that stores the memory address of another variable. Instead of holding a value
              directly, it "points to" the location in memory where that value is stored. Pointers use the asterisk (*)
              symbol for declaration and the ampersand (&) symbol to get the address of a variable.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              int num = 42;
              <br />
              int* ptr = &num; // ptr stores the address of num
              <br />
              cout &lt;&lt; *ptr; // Output: 42 (dereferencing the pointer)
            </div>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Declaring and Initializing Pointers</h3>
            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              Pointers are declared by specifying the data type followed by an asterisk. You can initialize a pointer
              with the address of a variable using the address-of operator (&). Always initialize pointers to avoid
              undefined behavior from accessing random memory locations.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              int x = 10;
              <br />
              int* ptr = &x; // Pointer to integer
              <br />
              <br />
              double y = 3.14;
              <br />
              double* dptr = &y; // Pointer to double
              <br />
              <br />
              int* nullPtr = nullptr; // Null pointer (C++11)
            </div>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Dereferencing Pointers</h3>
            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              Dereferencing a pointer means accessing the value stored at the memory address the pointer holds. This is
              done using the asterisk (*) operator. Through dereferencing, you can both read and modify the value at
              that memory location.
            </p>
            <div className="w-full md:w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              int value = 25;
              <br />
              int* ptr = &value;
              <br />
              <br />
              cout &lt;&lt; *ptr; // Output: 25
              <br />
              *ptr = 50; // Modify the value through pointer
              <br />
              cout &lt;&lt; value; // Output: 50
            </div>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Pointer Arithmetic</h3>
            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              C++ allows arithmetic operations on pointers, which is particularly useful when working with arrays. When
              you increment a pointer, it moves to the next element based on the size of the data type it points to.
              This enables efficient traversal of arrays and memory blocks.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              int arr[] = {"{10, 20, 30, 40, 50}"};
              <br />
              int* ptr = arr; // Pointer to first element
              <br />
              <br />
              cout &lt;&lt; *ptr; // Output: 10
              <br />
              ptr++; // Move to next element
              <br />
              cout &lt;&lt; *ptr; // Output: 20
              <br />
              ptr += 2; // Move 2 positions forward
              <br />
              cout &lt;&lt; *ptr; // Output: 40
            </div>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Pointers and Arrays</h3>
            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              Arrays and pointers are closely related in C++. An array name acts as a pointer to its first element, and
              you can use pointer notation to access array elements. This relationship makes it easy to pass arrays to
              functions and work with dynamic memory allocation.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              int numbers[] = {"{1, 2, 3, 4, 5}"};
              <br />
              int* ptr = numbers;
              <br />
              <br />
              // Both access the same element
              <br />
              cout &lt;&lt; numbers[2]; // Output: 3
              <br />
              cout &lt;&lt; *(ptr + 2); // Output: 3
            </div>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Dynamic Memory Allocation</h3>
            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              Pointers are essential for dynamic memory allocation in C++. Using the 'new' operator, you can allocate
              memory at runtime, and 'delete' frees that memory. This is crucial for creating flexible data structures
              like linked lists, trees, and managing resources efficiently.
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              // Allocate memory for single integer
              <br />
              int* ptr = new int(42);
              <br />
              cout &lt;&lt; *ptr; // Output: 42
              <br />
              delete ptr; // Free memory
              <br />
              <br />
              // Allocate array dynamically
              <br />
              int* arr = new int[5];
              <br />
              delete[] arr; // Free array memory
            </div>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Pointer to Pointer</h3>
            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              A pointer to pointer (double pointer) stores the address of another pointer. This is useful for creating
              multi-dimensional arrays dynamically, modifying pointers in functions, and building complex data
              structures. They are declared using two asterisks (**).
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              int value = 100;
              <br />
              int* ptr = &value;
              <br />
              int** pptr = &ptr; // Pointer to pointer
              <br />
              <br />
              cout &lt;&lt; **pptr; // Output: 100
              <br />
              **pptr = 200; // Modify value through double pointer
              <br />
              cout &lt;&lt; value; // Output: 200
            </div>

            <h3 className="font-bold text-2xl font-[Lato] mt-4">Smart Pointers (Modern C++)</h3>
            <p className="py-2 font-[Itel] text-xl leading-relaxed">
              Modern C++ (C++11 and later) introduces smart pointers that automatically manage memory, preventing memory
              leaks and dangling pointers. The three main types are unique_ptr (exclusive ownership), shared_ptr (shared
              ownership), and weak_ptr (non-owning reference).
            </p>
            <div className="w-full h-auto bg-black text-green-600 mt-1 py-4 px-4 rounded">
              #include &lt;memory&gt;
              <br />
              <br />
              // Unique pointer - exclusive ownership
              <br />
              std::unique_ptr&lt;int&gt; uptr = std::make_unique&lt;int&gt;(42);
              <br />
              <br />
              // Shared pointer - reference counting
              <br />
              std::shared_ptr&lt;int&gt; sptr = std::make_shared&lt;int&gt;(100);
              <br />
              <br />
              // No need to manually delete - automatic cleanup
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CppPointers
