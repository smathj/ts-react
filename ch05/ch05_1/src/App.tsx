import React from 'react'
import logo from './logo.svg'
import './App.css'
import UseReducerClock from './pages/UseReducerClock'
import ReduxClock from './pages/ReduxClock'
import {Action} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {Provider as ReduxProvider} from 'react-redux'
import {AppState, rootReducer, useStore} from './store'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
