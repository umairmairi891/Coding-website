import React from "react";

function Support() {

    return (
        <div>
            <div className="py-5 mx-3 md:mx-10">

                <div className="p-5 w-full " style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h1 className="border-l-5 border-blue-800 font-bold text-3xl font-[Roboto] pl-5"><span className=" ">🛠</span>Support Center</h1>

                    <h2 class="mt-4 font-[Popins] text-xl">We are Here to Help you Code With Confidence</h2>

                    <p class="font-serif text-lg py-2">Welcome to the support center for <strong>CodeCompanion.com</strong> Your
                        one stop hub for ansewering, troubleshooting and assistence.</p>
                    <p class="font-serif text-lg">Whether you are facing a technical issue, have a question about syntax, or
                        want report a bug, we are here to support your Programming journey.</p>
                </div>

                <div className="p-5 w-full mt-4 " style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h1 className="border-l-5 border-blue-800 font-bold text-2xl font-[Roboto] pl-5"><span>💬</span>How we can help you?</h1>
                    <p className="font-serif text-lg py-2 ">Choose a category below to get started:</p>
                    <h2 className="text-xl font-[Popins] font-semibold"> <span ></span>Frequently asked question</h2>
                    <p className="font-serif text-xl font-semibold mt-2">Find quick answers to common questions:</p>
                    <ul className="font-serif text-lg">
                        <li>How do I fix syntax for a specific language?</li>
                        <li>Can I request support for new language?</li>
                        <li>How do I report a broken line or bug</li>
                    </ul>
                </div>

                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 font-bold text-2xl font-[Roboto] pl-5"><span >📖</span>Getting Started Guide</h2>
                    <p className="font-semibold text-lg py-2">New to our platform, started here:</p>
                    <ul className="text-lg">
                        <li>How to navigate language pages</li>
                        <li>Understanding code snippets and examples</li>
                        <li>Recommended Tutorials for beginners</li>
                    </ul>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 font-bold text-2xl font-[Roboto] pl-5"><span>⚙</span>Report an Issue or Bug</h2>
                    <p className="text-xl font-semibold py-2">Find something that's not working</p>
                    <ul className="text-lg ">
                        <li>Broken code block</li>
                        <li>Incorrect syntax</li>
                        <li>Page not load or displaying correctly</li>
                    </ul>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 font-bold text-2xl font-[Roboto] pl-5"><span >🤝</span>Contribute or Suggest Improvements</h2>
                    <p className="py-2 font-semibold text-xl">Want to help improve the site?</p>
                    <ul className="text-lg">
                        <li>Suggest new content</li>
                        <li>Submit updated syntax</li>
                        <li>Join as a contributor</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Support;