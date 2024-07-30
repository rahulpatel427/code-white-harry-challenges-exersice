import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='flex'>
        <ul className='flex '>
          <a href="/"><li>Home</li></a>
          <a href="/about"><li>About</li></a>
          <a href="/contact"><li>Contact us</li></a>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
