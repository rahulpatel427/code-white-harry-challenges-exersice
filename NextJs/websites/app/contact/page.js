import React from 'react'
import Script from 'next/script';
function contact() {
  return (
    <div>
      <Script>
        {
          ` alert("welcome") `
        }
      </Script>
      i'm contact
    </div>
  )
}

export default contact

export const metadata = {
  title: "I'm contact",
  description: "Connect with the word using Facebook",
};

