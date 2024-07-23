import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const [showBtn, setShowBtn] = useState(true)
const [todo, setTodo] = useState([
  {
    title: "jay ma renuka",
    desc: "Ma Renuka Temple is a Famous.",
  },
  {
    title: "jay ma bhawani",
    desc: "Ma bhawani Temple is a Famous.",
  },
  {
    title: "jay ma Durga",
    desc: "Ma Durga Temple is a Famous.",
  },
])

const Todo = ()=>{
  return(
        <>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
        </>
  )
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


       {todo.map(todo=>{
        return <Todo todo={todo}/>
       })}

{/* This is a conditional Rendering  */}
         { showBtn ? <button >Show Btn Is True </button> :  <button >Show Btn Is False </button> }  
      
       {/* This is a && rendering */}
        {/* {showBtn && <button type="button" >I'll Be shown only click second Btn true</button>} */}


      <div className="card">
        
        <button onClick={() => setShowBtn(!showBtn)}>
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
