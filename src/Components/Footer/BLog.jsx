import React from "react";

function Blog() {

    return (
        <div>
            <div className="py-5 mx-3 md:mx-10">
                <div className="p-5 w-full" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08) ' }}>
                    <h1 className="text-center font-bold text-3xl font-[Roboto]">Explore the world of Code</h1>
                    <h1 className="text-center font-[Itel] font-semibold text-xl py-2">One post at a Time</h1>
                    <p className="font-serif text-lg md:text-center">
                        Welcome to the official Blog of <span class="fw-bold">CodeCompanion.com</span> — your go-to platform
                        for learning, understanding, and exploring all programming languages in one place.</p>
                    <p class="font-serif text-lg md:text-center py-2">Whether you are a beginner curious about coding or an
                        experienced
                        developer looking for
                        insights, our blog has something for everyone.</p>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08) ' }}>

                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]">🔎What You Will Find Here</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 py-3">
                        <div className="bg-gray-600 p-5 sm:col-span-4 rounded text-white">
                            <h2 className="text-2xl font-semibold py-2 font-[Roboto]">📖 Programming Tips & Tutorials</h2>
                            <p className="text-lg"> Clear, beginner-friendly guides to help you write better code.</p>
                        </div>
                        <div className="bg-gray-600 p-5 sm:col-span-4 rounded text-white">
                            <h2 className="text-2xl font-semibold py-2 font-[Roboto]">🧠 Language Comparisons</h2>
                            <p className="text-lg">Java vs Python? C++ vs Rust? We break it down for you.</p>
                        </div>
                        <div className="bg-gray-600 p-5 sm:col-span-4 rounded text-white">
                            <h2 className="text-2xl font-semibold py-2 font-[Roboto]">🚀 Latest Trends in Tech</h2>
                            <p className="text-lg"> Stay updated with what's new in web development, AI, mobile apps, and more.</p>
                        </div>
                    </div>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08) ' }}>

                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]">🌐 Featured Posts</h2>

                    <ul className="font-[Popins] text-lg mt-4">
                        <li className="flex flex-col md:flex-row justify-between items-center px-1 md:px-5 py-2">
                            <span className="d-flex items-center"><span className="mt-md-0 mt-2 me-3">✅</span> Top 10
                                Programming
                                Languages to Learn in 2025</span>
                            <button className="bg-indigo-900  text-white px-3 py-1 rounded-lg"
                                data-bs-target="#summary1" data-bs-toggle="modal">Summarize
                                ✨</button>
                        </li>
                        <li className="flex flex-col md:flex-row justify-between items-center px-1 md:px-5 py-2">
                            <span className="d-flex items-center"><span className="mt-md-0 mt-2 me-3">✅</span> How to Choose the
                                Right Language for Your Project</span>
                            <button className="bg-indigo-900  text-white px-3 py-1 rounded-lg"
                                data-bs-target="#summary1" data-bs-toggle="modal">Summarize
                                ✨</button>
                        </li>
                        <li className="flex flex-col md:flex-row justify-between items-center px-1 md:px-5 py-2">
                            <span className="d-flex items-center"><span className="mt-md-0 mt-2 me-3">✅</span> HTML vs Markdown:
                                Which One Should You Use?</span>
                            <button className="bg-indigo-900  text-white px-3 py-1 rounded-lg"
                                data-bs-target="#summary1" data-bs-toggle="modal">Summarize
                                ✨</button>
                        </li>
                        <li className="flex flex-col md:flex-row justify-between items-center px-1 md:px-5 py-2">
                            <span className="d-flex items-center"><span className="mt-md-0 mt-2 me-3">✅</span> Introduction to
                                Git &
                                GitHub for Beginners</span>
                            <button className="bg-indigo-900  text-white px-3 py-1 rounded-lg"
                                data-bs-target="#summary1" data-bs-toggle="modal">Summarize
                                ✨</button>
                        </li>
                    </ul>
                    
                    <div className="text-center rounded text-white font-semibold py-2">
                        <button className="bg-purple-800 px-4 py-2 rounded-2xl hover:bg-purple-950 cursor-pointer" >Browse All
                            Posts</button>
                    </div>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08) ' }}>
                    
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><span class="me-3">✍️</span>Want to Write for Us?</h2>

                    <p className="font-serif text-lg py-2">Are you passionate about coding?</p>
                    <p className="font-serif text-lg py-1">Do you enjoy teaching or sharing your experiences?</p>
                    <p className="font-serif text-lg py-1">We're always looking for guest contributors, students, and developers who want
                        to share their knowledge with the world.</p>
                        
                        <p className="mt-4 font-semibold text-lg font-[Popins]">📧 Email us at: <a href=""
                                >blog@CodeCompanion.com</a></p>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08) ' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><span>📃</span> Learn. Share. Grow.</h2>

                    <p className="py-2 font-serif text-lg">
                        Our blog is an extension of our mission: to make coding simple, accessible, and
                        community-driven.
                    </p>
                    <p className="font-serif text-lg">
                        We hope our posts help you learn something new — and maybe even inspire your next big project.
                    </p>
                    <p className="text-center font-semibold text-2xl py-3 font-[Itel]">
                        Happy Coding! <span>💻✨</span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Blog;