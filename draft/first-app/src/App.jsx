import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data,setdata]=useState([]) 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, []);
  const Card=({props})=>{
    return <>
        <div className="card">
          <div>{props.userId}</div>
          <div>{props.title}</div>
          <div>{props.id}</div>
          <div>{props.body}</div>
        </div>
    </>
  }
  return (
    <>
      <div className="container">
        {data.map(item=>{
          return <Card key={item.userId} props={item}/>
        })}
      </div>
    </>
  )
}
export default App
