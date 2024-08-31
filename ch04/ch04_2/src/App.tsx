import React from 'react'
import logo from './logo.svg'
import './App.css'
import HighOrderCallback from './pages/HighOrderCallback'
import Callback from './pages/Callback'
import Memo from './pages/Memo'
import UseOrCreateTest from './pages/UseOrCreateTest'

function App() {
  return (
    <div>
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UseOrCreateTest />
    </div>
  )
}

export default App
