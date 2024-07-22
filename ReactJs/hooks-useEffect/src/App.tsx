import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)
 const [color, setColor] = useState(0);
  // useEffect ek react hook he jo ki componets ke mount hone par chalta he jab bhi ye components load ho jaye browser me tab alert kr de ya koi operation kre jo likha he.. or esa tbhi karo jb array [] khali ho 
  // ******** we use multiple arrays []
useEffect(() => {
 alert("Hey welcome to my page.")
}, [])

useEffect(() => {
 alert("Count Was Changed.")
 setColor(color + 1)
 
}, [count]) // yha pr ye btaya gya he ki jab bhi count ki value ya count change ho tb tb chle
                                                                                                                                   

  return (
    <>
 <Navbar color={"navy blue" + color}  />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
