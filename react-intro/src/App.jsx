import { useState } from 'react'
import New from "./New"
function App() {
  const username="harshal"
  return (
    <>
      <New/>
      <h1>Student of ISE {username}</h1>
    </>
    
  )
}

export default App
