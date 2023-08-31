import { useState } from 'react'
import './App.css'


function App() {
  const [Increase, setIncrese] = useState(0)
    
  const incrmnt = () => {
       setIncrese(Increase + 1)
       }
    
    const decrmnt = () => {
      setIncrese(Increase - 1)
    }
    
  return (
    <>
     <div className="main">
      <h1>{Increase}</h1>
       <div>
       <button onClick={incrmnt}>Increment</button>
       <button onClick={decrmnt}>Decrement</button>
       </div>
     </div> 
    </>
  )
}

export default App
