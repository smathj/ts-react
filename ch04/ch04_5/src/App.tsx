import React from 'react'
import logo from './logo.svg'
import './App.css'
import ValidatableInputTest from './pages/ValidatableInputTest'
import ForwardRefTest from './pages/ForwardRefTest'
import InputValueTest from './pages/InputValueTest'
import InputFocusTest from './pages/InputFocusTest'
import FileDrop from './pages/FileDrop'
import ClickTest from './pages/ClickTest'

export default function App() {
  return (
    <main>
      <ValidatableInputTest />
      <ForwardRefTest />
      <InputValueTest />
      <InputFocusTest />
      <FileDrop />
      <ClickTest />
    </main>
  )
}
