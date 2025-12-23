import React,{useState} from "react";

import '/src/App.css' 
import { NavLink } from 'react-router-dom';
function JsDOM(){

    const [isOpen, setisOpen] = useState(false);
    return(
    <>
    <div className="p-10">
        <div className="bg-gray-600 text-center py-5 px-3 text-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1),0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="font-bold text-xl font-[Itel] ">JavaScript DOM</h2>
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
           <div className="mt-4" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
    <div className="p-5 w-full">
  <h1 className="text-xl font-[Itel] font-bold py-2">The Document Object Model (DOM) in JavaScript represents the structure of an HTML or XML document as a tree of objects. It is a programming interface that allows JavaScript to interact with and manipulate the content, structure, and style of web pages.</h1>
  <h2 className="text-2xl font-[Roboto] font-bold py-2">Key aspects of the JavaScript DOM:</h2>

<h3 className="text-xl font-[Itel] py-2"><strong>Tree Structure:</strong> The DOM organizes the document as a hierarchical tree, where each element, attribute, and piece of text is a "node." The document object is the root node, and other elements like html, head, body, div , p , etc., are its descendants.
</h3>

<h3 className="text-xl font-[Itel] py-2"><strong>Objects and Properties:</strong> Each node in the DOM tree is represented as a JavaScript object. These objects have properties and methods that allow you to access and modify their characteristics. For example, an element node might have properties like id, className, innerHTML, and methods like appendChild(), removeChild(), addEventListener().
</h3>

<h3 className="text-xl font-[Itel] py-2 px-6"><strong>Manipulation:</strong> JavaScript uses the DOM to perform various manipulations on a web page, including:</h3>
<h4 className="text-xl font-[Itel] py-2 px-6"><strong>Accessing elements:</strong> Retrieving specific elements using methods like getElementById(), getElementsByClassName(), querySelector(), querySelectorAll().</h4>
<h4 className="text-xl font-[Itel] py-2 px-6"><strong>Modifying content:</strong> Changing the text content of elements (textContent, innerHTML), or attribute values (setAttribute()).</h4>
<h4 className="text-xl font-[Itel] py-2 px-6"><strong>Changing structure:</strong> Adding new elements (createElement(), appendChild()), removing elements (removeChild()), or moving elements within the document.</h4>
<h4 className="text-xl font-[Itel] py-2 px-6"><strong>Styling:</strong> Modifying CSS properties of elements (style property).</h4>
<h4 className="text-xl font-[Itel] py-2 px-6"><strong>Event Handling:</strong> Attaching event listeners to elements to respond to user interactions (e.g., clicks, keypresses) using addEventListener().
</h4>




    </div>
</div>





<div className="mt-4" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
    <div className="p-5 w-full">
     <h2 className="text-xl font-bold font-[Itel] py-2">Example of DOM manipulation:</h2>
     <div className="py-4 px-4 bg-black text-green-600 rounded">
        // Get an element by its ID
const myButton = document.getElementById('myButton');

// Add an event listener to the button
myButton.addEventListener('click', () = &#62; 
  // Create a new paragraph element
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This is a new paragraph added dynamically!';

  // Append the new paragraph to the body
  document.body.appendChild(newParagraph);
);
     </div>
    </div>
</div>




                
    </div>
    </>
    )
}

export default JsDOM;