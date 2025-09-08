import React from 'react'

function Community() {

  return (
    <div className=' mx-3 md:mx-10 py-8'>
      <div className="w-full p-5 bg-white rounded" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
        <h2 className='border-l-5 border-blue-800 pl-5 text-2xl font-bold font-[Roboto]'>Community</h2>
        <p className="mt-5 font-serif text-lg">Welcome to the Community hub of   <strong> CodeCompanion.com</strong> a spece for programmers, learners, educators and contributors to Connect, collaborate and grow
          together</p>
        <p className="font-serif mt-2 text-lg">We believe that programming is not just about writing code,it's about
          sharing knowledge, solving problems and supporting one another. That's why pur community is
          all about:</p>
      </div>

      <div className="p-5 bg-white mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>

        <h2 className='border-l-5 border-blue-800 pl-5 text-2xl font-bold font-[Roboto]'><span>📝</span>Forums & Discussion</h2>
        <p className="py-2 font-semibold font-[Popins] text-lg">Join conversation about:</p>
        <ul class="font-thin text-lg">
          <li>Language Specific help (e.g python, java, c++)</li>
          <li>Best practices and debugging tips</li>
          <li>Project showcases & code reviews</li>
        </ul>
      </div>

      <div className="p-5 mt-4 " style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>

        <h2 className="border-l-5 border-blue-800 pl-5 font-bold font-[Roboto] text-2xl"><span class="m">🤝</span>Events & Meetups </h2>
        <p className="font-semibold font-[Popins] mt-2 text-lg">We regularly host:</p>
        <ul class="font-thin text-lg">
          <li>Online work shops</li>
          <li>Live coding sessions</li>
          <li>Guest speaker events</li>
        </ul>
      </div>

      <div className="p-5 mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>

        <h2 className="border-l-5 border-blue-800 pl-5 text-2xl font-bold font-[Roboto]"> <span>💡</span>Contributor Program</h2>
        <p className="font-semibold mt-4 text-lg font-[Popins]">Want to give back to the Community</p>
        <ul class="font-thin text-lg py-2">
          <li>Submit tutorials or articles</li>
          <li>Add missing syntax or examples</li>
          <li>Report bugs or suggested features</li>
        </ul>
      </div>

      <div className="p-5 mt-4" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)' }}>
        <h2 className="border-l-5 border-blue-800 pl-5 font-bold text-2xl font-[Roboto]"><span class="me-3">🗯</span>Student Network</h2>
        <p className="font-semibold text-lg py-2 font-[Popins]">A space for students and beginners to:</p>
        <ul class="font-thin text-lg">
          <li>Learn from peers</li>
          <li>Share study materials</li>
          <li>Get help on assignments and projects</li>
        </ul>
      </div>

    </div>
  )
}

export default Community;