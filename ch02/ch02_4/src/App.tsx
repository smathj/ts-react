import React from 'react'
import logo from './logo.svg'
import './App.css'
import P from './P'

function App() {
  // const texts = [<p key={1}>hello</p>, <p key={2}>world</p>]
  const texts = ['hello', 'world'].map((text, index) => (
    // <p key={index} children={text}></p>
    <P key={index} children={text} />
  ))

  // return <div>{texts}</div>
  return <div children={texts}></div>
}

export default App
