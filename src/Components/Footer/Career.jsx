import React from "react";

function Career() {
  return (
    <div className="p-5 mx-1 md:mx-10">
      <div className=" w-full py-5 mt-5 mb-5 px-5 rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08) ' }}>
        <div>
          <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><i class="fa fa-users py-1"></i> Career Opportunities</h2>

          <h2 class="mt-3 font-serif text-lg">Join us in Empowering the Future of programming</h2>
          <p class="mt-3 font-serif text-lg ">At <strong>CodeCompanion</strong>, we are passionate about making  programming knowledge  accessible, organized and easy to understand for everyone, from beginners to experienced  developers. We believe that coding is for <strong>everyone</strong> and we are building a platform that supports learning across all major programming languages and frameworks.</p>
        </div>
      </div>

      <div className="py-5 w-full px-5" style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
        <h2 className="border-l-5 border-blue-800 text-2xl font-bold pl-5 font-[Roboto]">Why Work With Us</h2>
        <ul class="font-serif text-lg mt-3">
          <li class="mt-2"><i class="fa fa-globe"></i> <span>Global Impact:</span> Help millions
            of learners
            and
            developers around the world</li>
          <li class="mt-2"><i class="fa fa-graduation-cap"></i><span> Education-Focused:</span>
            Contribute to a
            platform that empowers people to learn,
            teach and grow</li>
          <li class="mt-2"><i class="fa fa-desktop"></i><span> Tech-Driven Culture:</span> Work on
            real world
            web
            technologies, from front-end to
            back-end</li>
          <li class="mt-2"><i class="fa fa-handshake"></i><span> Flexible-Collaboration:</span>
            We value
            contributions from
            remote developers, freelancers , educators and open source enthusaiasts.</li>
        </ul>
      </div>

      <div className="py-5 w-full px-5 mt-3" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
        <h2 className="border-l-5 border-blue-800 pl-5 text-2xl font-bold font-[Roboto]">Open Roles</h2>

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-12 mt-4">
          <div className="sm:col-span-4 bg-gray-300 p-5 rounded">
            <h4 className="text-center text-xl font-bold font-[Roboto]">Content Writers & Technical Authors</h4>
            <ul class="py-3 font-serif">
              <li>Create high quality articles, tutorials and syntax guide</li>
              <li>Languages: Python, JavaScript, c++, Java ,Html/CSS and more</li>
            </ul>
          </div>
          <div className="sm:col-span-4 bg-gray-300 p-5 rounded">
            <h4 className="text-center text-xl font-bold font-[Roboto]">Web Developers</h4>
            <ul class="py-3 font-serif">
              <li>Enhance the site features, responsiveness and performance</li>
              <li>Skills: HTML, CSS , JavaScript and Github</li>
            </ul>
          </div>
          <div className="sm:col-span-4 bg-gray-300 p-5 rounded">
            <h4 className="text-center text-xl font-bold font-[Roboto]">SEO & Digital Marketing </h4>
            <ul class="py-3 font-serif">
              <li>Help us reach more learners globally through strategic outreach.</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="py-5 w-full px-5 mt-5" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
        <h2 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl">Who Should Apply</h2>
        <ul class="text-lg font-serif mt-4 ">
          <li>Progrmming students and hobbyists</li>
          <li>Professional developers wanting to give back</li>
          <li>Teachers or trainers in tech educators</li>
          <li>Freelancers or open-source contributers</li>
        </ul>
      </div>

    </div>
  )
}

export default Career;