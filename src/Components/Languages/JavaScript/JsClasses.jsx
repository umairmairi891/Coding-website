import React,{useState} from "react";

import '/src/App.css' 
import { NavLink } from 'react-router-dom';
function JsClasses(){

    const [isOpen, setisOpen] = useState(false);
    return(
    <>
    <div className="p-10">
        <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Classes</h2>
                    <p className="py-2 font-thin">Welcome to the JavaScript programming languages</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
                </div>

                {
                    isOpen && (
                        <div className="bg-cyan-900 h-auto navbar animate-animated  text-white rounded w-[100%] sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
                            <ul className=" text-lg font-[Roboto]">
                                <div className="flex justify-between items-center">
                                    <NavLink className='w-[80%]  hover:bg-gray-700  duration-300' to='/jsintroduction'>
                                        <li className="py-3 px-4  hover:bg-gray-700  duration-300">Introduction</li>
                                    </NavLink>
                                    <i onClick={() => setisOpen(!isOpen)} className="fa-solid fa-xmark cursor-pointer  text-center text-xl hover:bg-gray-700 w-[20%] py-4 px-3"></i>
                                </div>
                                <NavLink>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">History</li>
                                </NavLink>
                                <NavLink to='/jsworking'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Working</li>
                                </NavLink>
                                <NavLink to='/jssyntax'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Syntax</li>
                                </NavLink>
                                <NavLink to='/jsvariable'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Variables</li>
                                </NavLink>
                                <NavLink to='/jsdatatypes'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Data Types</li>
                                </NavLink>
                                <NavLink to='/jsfunction'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Functions</li>
                                </NavLink>
                                <NavLink to='/jsoperator'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Operators</li>
                                </NavLink>
                                <NavLink to='/jsloops'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Loops</li>
                                </NavLink>
                                <NavLink to='/jsobjects'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Objects</li>
                                </NavLink>
                                <NavLink to='/jsclasses'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Classes</li>
                                </NavLink>
                                <NavLink to='/jsdom'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">DOM</li>
                                </NavLink>
                                <NavLink to='/jscomparison'>
                                    <li className="py-3 px-4 hover:bg-gray-700 hover:text-white duration-300">Comparison</li>
                                </NavLink>
                            </ul>
                        </div>
                    )
                }

<div className="mt-4" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
    <div className="p-5 w-full">
     <h2 className="text-lg">JavaScript classes, introduced in ES6 (ECMAScript 2015), provide a more structured and object-oriented way to create objects with shared properties and methods. While JavaScript fundamentally uses a prototype-based inheritance model, classes offer a syntactic sugar to work with object-oriented programming (OOP) concepts in a cleaner and more familiar way for developers accustomed to class-based languages like Java or C++. 
</h2>
    </div>
</div>
<div className="mt-4" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
    <div className="p-5 w-full">
  <h1 className="text-2xl font-bold font-[Itel]">Key Concepts of JavaScript Classes:</h1>
  <h2 className="text-xl font-bold font-[Lato] py-2">Declaration: Classes are declared using the class keyword.</h2>
  <div className="px-4 py-4 bg-black text-green-600 rounded">
        class MyClass {
      // Class body
    }
  </div>
  <h2 className="text-xl  font-[Itel] py-3"><strong>Constructor:</strong> The constructor() method is a special method within a class that is automatically called when a new instance of the class is created using the new keyword. It's used to initialize the object's properties. 
</h2>

  <div className="px-4 py-4 bg-black text-green-600 rounded">
        class Person {
    }
  </div>
  <h2 className="text-xl font-[Itel] py-3"><strong>Methods:</strong> Functions defined within a class are called methods. They define the behavior of objects created from the class.</h2>
  
  <div className="px-4 py-4 bg-black text-green-600 rounded">
    class Person {

    }
  </div>

  <h2 className="text-xl font-[Itel] py-3"><strong>Instantiation:</strong> New objects (instances) are created from a class using the new keyword.</h2>
  
  <div className="px-4 py-4 bg-black text-green-600 rounded">
        const person1 = new Person("Alice", 30);
    person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
  </div>

  <h2 className="text-xl font-[Itel] py-3"><strong>Inheritance:</strong> Classes support inheritance using the extends keyword, allowing a child class to inherit properties and methods from a parent class. The super() keyword is used in the child class's constructor to call the parent class's constructor.</h2>

  
  <div className="px-4 py-4 bg-black text-green-600 rounded">
        class Student extends Person 
      constructor(name, age, studentId) 
        super(name, age); // Call parent class constructor
        this.studentId = studentId;
      

     

    const student1 = new Student("Bob", 20, "S123");
    student1.greet(); // Inherited method
    student1.study();
  </div>

<h2 className="text-xl font-[Itel] py-3"><strong>Static Methods:</strong> Methods can be declared as static using the static keyword. Static methods belong to the class itself, not to instances of the class, and are called directly on the class.</h2>


  <div className="px-4 py-4 bg-black text-green-600 rounded">
        class Calculator 
      static add(a, b) 
        return a + b;
      
    

    console.log(Calculator.add(5, 3)); // Output: 8
  </div>




    </div>
</div>
                
    </div>
    </>
    )
}

export default JsClasses;