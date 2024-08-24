import { useEffect, useState } from 'react'
import "./main.css"

function App() {
  return (
    <>
      <div className='layout'>
        <div className="slot">
          <div className="widget">Task 1</div>
        </div>
        <div className="slot">
          <div className="widget">Task 2</div>
        </div>
        <div className="slot">
          <div className="widget">Task 3</div>
        </div>
      </div>
    </>
  )
}

export default App
