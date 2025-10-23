import React, { useState } from "react";

import '/src/App.css'
import { NavLink } from 'react-router-dom';
function JsComparison() {

    const [isOpen, setisOpen] = useState(false);
    return (
        <>
            <div className="p-10">
                <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript Comparison</h2>
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

                <div className="mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <div className="p-5 w-full">
                      <table className="responsive w-full">
                        <tr className="text-xl font-bold font-[Itel] border-4 border-l-4 border-black">
                            <th>Functions</th>
                         <th className="px-4 ">JavaScript</th>
                         <th className="px-4">Other Languages</th>
                         </tr>
                         <tbody>
                            <tr>
                                <td className="px-4"> 1. Ease of Learning and Use</td>
                                <td>JavaScript: Known for its simplicity and flexibility, JavaScript is often recommended for beginners. Its syntax is user-friendly, and since it’s interpreted, it allows for rapid testing and feedback.</td>
                                <td>Other Languages: Languages like Python also offer ease of learning, while others like C++ or Java might have a steeper learning curve due to more complex syntax and the need for understanding low-level programming concepts.</td>
                            </tr>

                            <tr>
                                <td>2. Performance and Speed</td>
                                <td>JavaScript: It’s fast for web-based applications, especially with modern JavaScript engines like V8 (used in Chrome). However, for computation-heavy tasks, it may not be as efficient as compiled languages.</td>
                                <td>Other Languages: Languages like C, C++, and Rust offer higher performance for CPU-intensive tasks. Java, with its Just-In-Time (JIT) compiler, strikes a balance between performance and ease of use.</td>
                            </tr>

                            <tr>
                                <td>3. Versatility and Use Cases</td>
                                <td>JavaScript: Exceptionally versatile, it’s used for front-end and back-end development (thanks to Node.js), mobile apps (React Native), and even desktop applications (Electron).</td>
                                <td>Other Languages: Python is renowned for its use in data science, AI, and machine learning. Java is a staple for enterprise-level backend services, and Swift/Objective-C are primarily used for iOS app development.</td>
                            </tr>

                            <tr>
                                <td>4. Community and Ecosystem</td>
                                <td>JavaScript: Boasts a massive, active community. The NPM (Node Package Manager) repository is one of the largest software registries in the world.</td>
                                <td>Other Languages: Python has a strong community, especially in scientific computing. Java also has a vast ecosystem, particularly in corporate environments.</td>
                            </tr>

                            <tr>
                                <td>5. Frameworks and Libraries</td>
                                <td>JavaScript: Rich in frameworks and libraries like React, Angular, and Vue.js for front-end development, and Express.js for the back-end.</td>
                                <td>Other Languages: Python has Django and Flask, while Java has Spring and Hibernate. Each language has its own set of tools, catering to different project needs.</td>
                            </tr>

                            <tr>
                                <td>6. Career Opportunities</td>
                                <td>JavaScript: High demand in web development, both front-end and back-end (Node.js).</td>
                                <td>Other Languages: Python and Java also offer extensive career opportunities in various fields like web development, data science, and enterprise applications.</td>
                            </tr>
                         </tbody>
                      </table>
                    </div>
                </div>


            </div>
        </>
    )
}

export default JsComparison;