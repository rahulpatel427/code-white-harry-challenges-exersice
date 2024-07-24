import { useEffect, useState } from 'react'
import Navbar from './componets/Navbar.jsx'
import './App.css'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json();
    setCards(data);
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <>
    <Navbar />
       <div className="container">
        {cards.map((card)=>{
          return <div key={card.id} className="card">
            <img src="https://i.pinimg.com/originals/e2/da/7a/e2da7a1792a4e6ed85c6be372d9a07f5.jpg" alt="" />
            <h1>{card.title}</h1>
            <p>{card.body}</p>
            <span>By: UserId: {card.userId}</span>
          </div>
        })}
    
       </div>
    </>
  )
}

export default App
