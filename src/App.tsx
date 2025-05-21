
// App.tsx
import { useState } from 'react'
import './App.css'
import Peeches from './peeches' // Correct import (note: filename is capitalized)

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <button onClick={() => setCount(count + 1)}>
        You clicked {count} times
      </button>
      <Peeches />
    </div>
  )
}

export default App

