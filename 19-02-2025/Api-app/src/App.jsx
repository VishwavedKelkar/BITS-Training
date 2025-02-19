import { useState } from 'react'
import './App.css'
import FetchAPI from './Components/FetchAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchAPI/>
    </>
  )
}

export default App
