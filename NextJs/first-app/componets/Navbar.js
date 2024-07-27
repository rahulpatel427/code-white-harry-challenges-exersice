import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex justify-between bg-slate-800 text-white py-4 '>
        {/* <div>Facebook</div> */}
        <ul className='flex   '>
          <a href="/"><li>Home</li></a>
          <a href="/about"><li>About</li></a>
          <a href="/contact"><li>Contact us</li></a>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
