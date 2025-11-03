import React from 'react'

function Documentation() {

    return (
        <div className='dark:bg-black dark:text-white'>
            <div className='py-5 mx-3 md:mx-10 '>
                <div className='p-5 w-full dark:border-1' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h1 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto] text-center">📚 Documentation</h1>

                    <h2 className="font-semibold font-[Popins] text-xl py-2 text-center">Welcome to the CodeCompanion.com Documentation</h2>
                    <p className="font-serif text-lg ">
                        Our goal is to provide a comprehensive, easy-to-use platform where learners, developers, and
                        educators can explore the syntax, structure, and examples of all major programming
                        languages.
                    </p>
                    <p className="font-serif text-lg py-2">
                        This documentation will help you understand how to navigate the site, access features, and
                        contribute to our growing community of coders.
                    </p>
                </div>


                <div className='p-5 w-full mt-4 dark:border-1' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>

                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">🧭 Table of Contents</h2>
                    <ul className="mt-4 font-semibold font-[Popins] text-lg">
                        <li><a href=""></a>1. Getting Started</li>
                        <li><a href=""></a>2. Site Structure</li>
                        <li><a href=""></a>3. How to use language page</li>
                        <li><a href=""></a>4. Code Examples & Syntax</li>
                        <li><a href=""></a>5. User Contributions</li>
                    </ul>
                </div>


                <div className='p-5 w-full mt-4 dark:border-1' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">🔰 1. Getting Started</h2>
                    <p className="font-semibold text-xl py-2">To begin using our platform:</p>
                    <ul className="font-serif text-lg py-2">
                        <li>Visit the Home Page</li>
                        <li>Navigate to Languages page</li>
                        <li>Select a programming language</li>
                        <li>Browse through Languages
                            <ul>
                                <li>Syntax</li>
                                <li>Data Types</li>
                                <li>Control Structure</li>
                                <li>Functions</li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className='p-5 w-full mt-4 dark:border-1' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">🗂️ 2. Site Structure</h2>
                    <p class="font-semibold font-[Popins] text-xl py-2">Our website is organized into the following main sections:</p>
                    <ul class="font-serif text-lg">
                        <li>Home-OverView and introduction</li>
                        <li>List of supported programming language</li>
                        <li>Community OverView of our Community</li>
                        <li>Blog Tips and industry updates</li>
                        <li>Documentation You are here</li>
                    </ul>
                </div>




                <div className='p-5 w-full mt-4 dark:border-1' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">💡 3. How to Use Language Pages</h2>
                    <p className="font-semibold font-[Popins] py-2 text-xl">Each language page provides:</p>
                    <ul className="font-serif text-lg">
                        <li>Overview and brief history</li>
                        <li>Syntax reference with examples</li>
                        <li>Side-by-side comparison with other languages</li>
                        <li>Features of specific languages</li>
                    </ul>
                </div>


                <div className='p-5 w-full mt-4 dark:border-1' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>

                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]">🧑‍💻 4. Code Examples & Syntax Highlighting</h2>
                    <p className="font-semibold font-[Popins] text-xl py-2">We provide  code snippets with:</p>
                    <ul className="font-serif text-lg">
                        <li>Proper syntax highlighting</li>
                        <li>Live previews (in supported languages like HTML/CSS/JS)</li>
                        <li>Real-world examples</li>
                        <li>Real-world applications</li>
                    </ul>
                </div>

                <div className='p-5 w-full mt-4 dark:border-1' style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className='border-l-5 border-blue-800 pl-5 font-bold text-3xl font-[Roboto]'>🤝 5. User Contributions</h2>
                    <p className="font-semibold text-xl py-2 font-[Popins]">You can contribute to the platform by:</p>
                    <ul className="font-serif text-lg">
                        <li>Submitting corrections or suggestions</li>
                        <li>Writing new syntax or tutorial pages</li>
                        <li>Reporting issues or outdated content</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Documentation;