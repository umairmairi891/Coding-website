import React from "react";

function Privacy() {

    return (
        <div className="dark:bg-black dark:text-white">
            <div className=" mx-3 md:mx-10 py-5">

                <div className="w-full p-5 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 3px 4px rgba(0,0,0,0.08)' }}>

                    <h1 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl"><span >🔐</span>Privacy Policy</h1>
                    <p className="mt-4 font-serif text-lg">Welcome to CodeCompanion, a platform dedicated to providing syntax, examples
                        and
                        resources for various programming languages. Your privacy is important to us. This Privacy
                        Policy
                        explains how we collect, use and protect your information when you use our website</p>
                </div>

                <div className=" w-full p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1) , 0 1px 3px rgba(0,0,0,0.08)' }}>
                    <h2 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl"><span>📖</span> Information We Collect</h2>
                    <p className="font-serif text-lg mt-3">We do not collect personal information from visitors  directly. However, we may collect non-personal data such as:</p>
                    <ol className="font-serif text-lg">
                        <li><span className="me-3">✅</span>Browser type and version</li>
                        <li><span className="me-3">✅</span>Page visited and time spend</li>
                        <li><span className="me-3">✅</span>Reffering websites</li>
                        <li><span className="me-3">✅</span>Device type an screen resolution</li>
                    </ol>
                </div>

                <div className="w-full p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 3px 4px rgba(0,0,0,0.08)' }}>

                    <h1 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl"><span >📌</span>Third Party Links</h1>
                    <p className="mt-4 font-serif text-lg">Our website may include links to external resources(e.g programming documentation, code repositories). We are not responsible for the privacy practices of those websites.</p>
                </div>


                <div className="w-full p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 3px 4px rgba(0,0,0,0.08)' }}>

                    <h1 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl"><span >🍪</span>Use of Cookies and Analytics</h1>
                    <p className="mt-4 font-serif text-lg">Oue site may use cookies and third-party services such as :</p>
                    <ol className="font-serif text-lg">
                        <li><span className="me-3">✅</span> Google Analytics/Cloudflare insights to track site traffic
                        </li>
                        <li><span className="me-3">✅</span>Google Fonts/Font Awesome for UI styling</li>
                        <li><span className="me-3">✅</span>Github embeds/ Youtube videos for educational content</li>
                    </ol>
                    <p className="text-lg font-serif">These third-party services may collect information according to their own privacy Policies. You can disable cookies through your browser setting if you prefer.</p>
                </div>

                <div className="w-full p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 3px 4px rgba(0,0,0,0.08)' }}>

                    <h1 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl"><span >👶</span>Children's Privacy</h1>
                    <p className="mt-4 font-serif text-lg">Our site is not directed to children under the age of 13. We do not knowingly collect any personal information from children.</p>
                </div>

                <div className="w-full p-5 mt-4 dark:border-1" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 3px 4px rgba(0,0,0,0.08)' }}>

                    <h1 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl"><span >📝</span>How we use information</h1>
                    <p className="mt-4 font-serif text-lg">The data we collect is used to :</p>
                    <ol className="font-serif text-lg">
                            <li><span class="me-3">✅</span>Analyze website traffic</li>
                            <li><span class="me-3">✅</span>Improve website structure and content</li>
                            <li><span class="me-3">✅</span>Ensure compatibility across devices</li>
                        </ol>
                </div>

            </div>
        </div>
    )
}

export default Privacy;