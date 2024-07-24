import { useState } from 'react';
import './App.css'
import { v4 as uuidv4 } from 'uuid';

import Navbar from "./componets/Navbar.jsx";
function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

const handleEdit =(e, id)=> {
  let t = todos.filter(i=>{i.id===id})
  setTodo(t[0])
console.log(t)
}

const handleDelete= (e, id)=>{
let isConfirm = confirm("Are You Sure You Want To Delete This Todo");
if(isConfirm){
  let newTodos = todos.filter(item=>{
    return  item.id !== id;
   })
   setTodos(newTodos)
}
}

const handleAdd =() =>{
setTodos([...todos, {id:uuidv4(),todo, isCompleted:false}])
setTodo("")
console.log(todo)
}

const handleChange =(e) =>{ 
setTodo(e.target.value)
}
const handleCheckbox =(e) => {
 let id =  e.target.name;
 let index = todos.findIndex(item=>{
  return item.id === id;
 })
 let newTodos = [...todos]
 newTodos[index].isCompleted = !newTodos[index].isCompleted;
 setTodos(newTodos)
 console.log(newTodos)
}


  return (
    <>
 <Navbar />
  <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]">
      <div className="addTodo my-5">
        <h2 className='text-lg font-bold'>Add a Todo</h2>
        <input onChange={handleChange} value={todo} type="text" className='w-1/2' />
        <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-6'>Save</button>
      </div>
          <h1 className='text-lg font-bold'>Your Todos</h1>
          

          {todos.length === 0 && <div className='m-5'>No Todo Available</div> }
          {todos.map(item=>{
            return  <div key={item.id} className="todos">
            
            <div className="todo flex w-3/4 justify-between my-3">

            <div className="flex gap-4">
            <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
            </div>
              
              <div className="buttons">
                <button onClick={(e)=>handleEdit(e,item.id)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'> Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'> Delete</button>
              </div>
            </div>
          </div>

          })}
      
      </div>
    </>
  )
}

export default App
