
import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
   
   function addvalue(){
    setCounter(counter+1)
    console.log(counter)
   }
   function removevalue(){
    if (counter>=1){
    setCounter(counter-1)
     } }
  return (
    <>
     <h1>counting is {counter}</h1>
     <button onClick={addvalue}> click Me</button>
     <button onClick={removevalue}>no clicks</button>

    </>
  )
}

export default App
