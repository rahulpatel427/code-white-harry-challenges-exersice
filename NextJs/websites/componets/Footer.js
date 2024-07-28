import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className="text-center">Copyright &copy;  Facebook | All right reserved</div>
        <ul className='flex text-sm gap-2  '>
          <a href="/"><li className='text-sm  margin'>Home</li></a>
          <a href="/about"><li className='text-sm'>About</li></a>
          <a href="/contact"><li className='text-sm'>Contact</li></a>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
