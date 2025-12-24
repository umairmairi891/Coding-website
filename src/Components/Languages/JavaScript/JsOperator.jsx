import React,{useState} from "react";

import '/src/App.css' 
import { NavLink } from 'react-router-dom';
function JsOperator(){

    const [isOpen, setisOpen] = useState(false);
    return(
    <>
    <div className="p-10">
        <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Operators</h2>
                    <p className="py-2 font-thin">Welcome to the JavaScript programming languages</p>
                    <button onClick={() => setisOpen(!isOpen)} className="bg-purple-900 hover:bg-purple-700 px-6 py-2 rounded-lg cursor-pointer mt-3 text-white">Start learning more</button>
                </div>

                {
                    isOpen && (
                        <div className="bg-cyan-900 h-auto navbar animate-animated  text-white rounded w-full sm:sw-[30%] md:w-[30%] lg:w-[20%] absolute top-16 left-0 md:left-0">
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
     
     <div className="mt-4 mx-0 rounded" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
       <div className="p-5 w-full">
        <h2 className="font-[Itel] text-2xl">JavaScript operators are special symbols or keywords that perform operations on one or more operands. They are fundamentals to creating expressions and controlling program flow in JavaScript.</h2>
        <h1 className="font-bold text-2xl font-[Roboto] py-2">Here are the main categories of JavaScript operators:</h1>
        <h3 className="text-xl font-[Itel] py-2"><strong>Arithmetic Operators:</strong>Used for performing mathematical calculations.</h3>
        <ul className="text-lg ">
            <li className="py-1"><strong className="font-bold px-4">+</strong>(Addtition)</li>
            <li className="py-1"><strong className="font-bold px-4">-</strong>(Subtraction)</li>
            <li className="py-1"><strong className="font-bold px-4">*</strong>(Multiplication)</li>
            <li className="py-1"><strong className="font-bold px-4">/</strong>(Division)</li>
            <li className="py-1"><strong className="font-bold px-4">%</strong>(Modulus)</li>
            <li className="py-1"><strong className="font-bold px-4">**</strong>(Exponentiation)</li>
            <li className="py-1"><strong className="font-bold px-4">++</strong>(Increment)</li>
            <li className="py-1"><strong className="font-bold px-4">--</strong>(Decrement)</li>
        </ul>
        <h3 className="text-xl font-[Itel] py-2"><strong>Assignment Operator:</strong> Used to assign values to variables.</h3>
        <ul className="text-lg">
            <li className="py-1"><strong className="font-bold px-4">=</strong>(Simple Assignment)</li>
            <li className="py-1"><strong className="font-bold px-4">+=</strong>(Add and Assign)</li>
            <li className="py-1"><strong className="font-bold px-4">-=</strong>(Subtract and Assign)</li>
            <li className="py-1"><strong className="font-bold px-4">*=</strong>(Multiply and Assign)</li>
            <li className="py-1"><strong className="font-bold px-4">/=</strong>(Divide and Assign)</li>
            <li className="py-1"><strong className="font-bold px-4">%=</strong>(Modulus and Assign)</li>
            <li className="py-1"><strong className="font-bold px-4">&&=</strong>(Logical AND Assignment)</li>
            <li className="py-1"><strong className="font-bold px-4">||=</strong>(Logical or Assignment)</li>
            <li className="py-1"><strong className="font-bold px-4">??=</strong>(Nullish coalescing Assignment)</li>
        </ul>
        <h3 className="text-xl font-[Itel] py-2"><strong>Comparison Operator:</strong> Compare two values and return a boolean.</h3>
        <ul className="text-lg">
            <li className="py-1"><strong className="font-bold px-4">==</strong>(Loose equality)</li>
            <li className="py-1"><strong className="font-bold px-4">===</strong>(Strict equality)</li>
            <li className="py-1"><strong className="font-bold px-4">!=</strong>(Loose inequality)</li>
            <li className="py-1"><strong className="font-bold px-4">!==</strong>(Strict inequality)</li>
            <li className="py-1"><strong className="font-bold px-4">&#62;</strong>(Greater than)</li>
            <li className="py-1"><strong className="font-bold px-4">&#60;</strong>(Less than)</li>
            <li className="py-1"><strong className="font-bold px-4">&#62;=</strong>(Greater than or equal to )</li>
            <li className="py-1"><strong className="font-bold px-4">&#60;=</strong>(Less than or equal to)</li>
        </ul>
        <h3 className="text-xl font-[Itel] py-2"><strong>Logical Operator:</strong> Combine or modify boolean expression.</h3>
        <ul className="text-lg">
            <li className="py-1"><strong className="font-bold px-4">&&</strong>(Logical AND)</li>
            <li className="py-1"><strong className="font-bold px-4">||</strong>(Logical OR)</li>
            <li className="py-1"><strong className="font-bold px-4">!</strong>(Logical NOT)</li>
        </ul>
        <h3 className="text-xl font-[Itel] py-2"><strong>Bitwise Operator:</strong> Perform operations on the binary representation of numbers.</h3>
        <ul className="text-lg">
            <li className="py-1"><strong className="font-bold px-4">&</strong>(Bitwise AND)</li>
            <li className="py-1"><strong className="font-bold px-4">|</strong>(Bitwise OR)</li>
            <li className="py-1"><strong className="font-bold px-4">^</strong>( Bitwise XOR)</li>
            <li className="py-1"><strong className="font-bold px-4">~</strong>( Bitwise NOT)</li>
            <li className="py-1"><strong className="font-bold px-4">&#60;&#60;</strong>(Left Shift)</li>
            <li className="py-1"><strong className="font-bold px-4">&#62;&#62;</strong>(Rigth Shift)</li>
            <li className="py-1"><strong className="font-bold px-4">&#62;&#62;&#62;</strong>(Zero fill right shift)</li>
        </ul>

       </div>
     </div>

                
    </div>
    </>
    )
}

export default JsOperator;