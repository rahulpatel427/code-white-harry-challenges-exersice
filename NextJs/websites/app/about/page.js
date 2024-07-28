import React from 'react'
import Image from 'next/image';
function about() {
  return (
    <div className='container mx-auto bg-slate-700 '>
      I'm About
      <Image className='mx-auto object-contain' width={700} height={700} src="https://www.menucool.com/rg/img/2.jpg" alt="" />
    </div>
  )
}

export default about

export const metadata = {
  title: "I'm about",
  description: "about Connect with the word using Facebook",
};
