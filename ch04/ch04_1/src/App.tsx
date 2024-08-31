import React, {useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './pages/Clock'
import {useClock} from './hook'

function App() {
  // let today = new Date()
  /*
  const [today, setToday] = useState(new Date())

  useEffect(() => {
    const duration = 1000
    const id = setInterval(() => {
      setToday(new Date())
    }, duration)
  }, [])

*/
  const today = useClock()
  return <Clock today={today} />
}

export default App
