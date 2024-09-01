import React from 'react'
import logo from './logo.svg'
import './App.css'
import ArrayState from './pages/ArrayState'
import ObjectState from './pages/ObjectState'
import BasicForm from './pages/BasicForm'
import HigherOrderRadioInputTest from './pages/HigherOrderRadioInputTest'
import RadioInputTest from './pages/RadioInputTest'
import ShowHideModal from './pages/ShowHideModal'
import InputTest from './pages/InputTest'
import NumberState from './pages/NumberState'

export default function App() {
  return (
    <div>
      <ArrayState />
      <ObjectState />
      <BasicForm />
      <HigherOrderRadioInputTest />
      <RadioInputTest />
      <ShowHideModal />
      <InputTest />
      <NumberState />
    </div>
  )
}
