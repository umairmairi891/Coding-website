
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function About(){
    return(
        < >
        <div className="dark:bg-black dark:text-white py-3">
        <div className='px-5 py-5 mt-3 mx-1 md:mx-10   '>
            <div className='flex  flex-col justify-center items-center'>
                <h2 className="text-2xl font-bold font-[Popins]">Who we are</h2>
                <p className="block font-[Roboto] py-3 text-xl">Empowering developers through <TypedHeading/> </p>
            </div>

            <div className="grid grid-cols-1">
                <div className='card w-full bg-white-400 p-3 rounded  dark:border-1 dark:border-white' style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
                    <h2 className='font-bold py-2 text-2xl border-l-6 pl-5 border-indigo-800'>Our Mission</h2>
                    <p className="px-5 font-thin text-xl">To make programming easy and accessable to everyone by providing a comprehensive hub for syntax, tutorials and examples</p>
                </div>

                <div className="bg-white-400 p-3 rounded mt-4 dark:border-1 dark:border-white" style={{boxShadow:'0px 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
                  <h2 className='font-bold py-2 text-2xl border-l-6 pl-5 border-indigo-800'>Our Vision</h2>
                  <p className="px-5 font-thin text-xl">Build a global community wheres coders, from students to professional, can explore, learn and contribute</p>
                </div>


                <div className="bg-white-400 p-3 rounded mt-4 dark:border-1 dark:border-white" style={{boxShadow:'0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)'}}>
                  <h2 className='font-bold py-2 text-2xl border-l-6 pl-5 border-indigo-800'>What we offer</h2>
                  <ul className='mt-3 font-thin text-xl'>
                    <li><span className='mr-5 '>✔</span>Clean syntax reference pages for 50+ languages</li>
                    <li><span className='mr-5 '>✔</span>Real time syntax checker</li>
                    <li><span className='mr-5 '>✔</span>Beginner to expert tutorials</li>
                    <li><span className='mr-5 '>✔</span>Community Q&A and contribution</li>
                  </ul>
                </div>

<div className="bg-white-400 p-3 rounded mt-4 dark:border-1 dark:border-white" style={{boxShadow:'0px 4px 6px rgba(0,0,0,0.1), 0px 1px 3px rgba(0,0,0,0.08)'}}>
                  <h2 className='font-bold py-2 text-2xl border-l-6 pl-5 border-indigo-800 '>Meet the Team</h2>
                  <p className="px-5 font-thin text-xl py-2">For question, feedback or collaboration</p>
                  <p className="px-5 font-thin text-xl py-2 overflow-auto">Contact@codecompanion.com</p>
                </div>

            </div>
        </div>
        </div>
        </>
    )
}


  const TypedHeading = () => {
      const el = useRef(null); // Ref to attach Typed.js to

      useEffect(() => {
        const typed = new Typed(el.current, {
          strings: [
            "Knowledge",
            "Practice",
            "Examples",
          ],
          typeSpeed: 60,  // Typing speed in milliseconds
          backSpeed: 40,  // Backspacing speed in milliseconds
          loop: true,     // Loop the animation
          startDelay: 500, // Delay before starting in milliseconds
          backDelay: 1000, // Delay before backspacing in milliseconds
        });

        // Cleanup function to destroy the Typed instance on unmount
        return () => {
          typed.destroy();
        };
      }, []); // Empty dependency array ensures it runs once on mount

      return (
        <div>
          <h3 className='text-xl font-bold font-[Roboto] text-center'>
            <span ref={el}></span> {/* The span where the typing effect will appear */}
          </h3>
        </div>
      );
    };


export default About;