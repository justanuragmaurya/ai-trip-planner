import React from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import { Link } from 'react-router-dom'
function App() {
  return (
    <>
      <h1>Sub to my channel</h1>
      <Link to = "/create-trip">
      <Button> Click me</Button>
      </Link>
    </>
  )
}

export default App
