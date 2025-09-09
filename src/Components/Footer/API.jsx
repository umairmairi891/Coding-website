import React from "react";

function API() {

    return (
        <div>
            <div className="py-5 mx-3 md:mx-10 ">
                <div className="p-5 w-full" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]">API References</h2>
                    <h2 className="font-serif text-xl font-semibold mt-2">Access Programming knowledge Programatically</h2>
                    <p className="font-serif text-lg py-2">Welcome to the API Reference for
                        <strong>CodeCompanion.com</strong> the ultimate resource for developers who want to
                        interact with our programming languages database through code.
                    </p>
                    <p className="font-serif text-lg ">Our public API allows you to fetch syntax, access languages
                        details and builds apps or tools using our structured content directly from your own
                        application. </p>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><span >🔐</span>Authentication</h2>
                    <p className="font-serif text-lg mt-2">Currently our API is open to the public for read-only access. No
                        API key is required</p>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"> <span >🛠</span>Use Cases</h2>
                    <ul class="font-serif text-lg py-2">
                        <li>Build your own coding app with real time syntax help</li>
                        <li>Integrate language docs into an IDE extension</li>
                        <li>Create a chatbot that answers programming queries</li>
                        <li>Power an education tool or Tutorial generator</li>
                    </ul>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><span >⚠</span>Rate Limits
                    </h2>
                    <ul class="font-serif text-lg py-2">
                        <li>No Authentication: 100 requests per hour</li>
                        <li>API key: Higher limits and write access</li>
                    </ul>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"> <span >🧪</span>Try it out</h2>
                    <p class="font-serif font-semibold py-2 text-xl" >Use tools like</p>
                    <ul class="font-serif text-lg ">
                        <li>Postman</li>
                        <li>Insomnia</li>
                        <li>fetch() or axios in JavaScript</li>
                    </ul>
                </div>


                <div className="p-5 w-full mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"> <span >📩</span>Comming Soon</h2>
                    <ul class="font-serif text-lg py-2">
                        <li>POST/feedback</li>
                        <li>POST/contributions</li>
                        <li>Authenticated usage with personal API keys</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default API