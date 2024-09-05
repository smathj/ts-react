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
  // 리덕스 스토어
  const store = useStore()
  return (
    /*리덕스 프로바이더에 스토어는 필수 속성값이다 */
    <ReduxProvider store={store}>
      <main className="p-8">
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
