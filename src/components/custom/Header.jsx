import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <>
          <div className="flex items-center justify-between px-10 py-3 backdrop-blur-sm sticky top-0 z-10 border-b-[0.5px] border-gray-300">
      <a href="/">
        <div className="flex gap-2 items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAXamaSF8es3kqz-aKl6VPD-lMBq8knxS5w&s" height={"30px"} width={"30px"}/>
          <h2 className="font-bold text-2xl">Yaatra AI</h2>
        </div>
      </a>
      <div className="flex gap-2 items-center">
        <a href="/create-trip"><Button>Get Started</Button></a>
      </div>
    </div>
    </>
  )
}

export default Header
