import React from 'react'
import './App.css'

import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store/useStore'
import CardsTest from './pages/CardsTest'
import RemoteUserTest from './pages/RemoteUserTest'
import CounterTest from './pages/CounterTest'
import ClockTest from './pages/ClockTest'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <CardsTest />
      <RemoteUserTest />
      <CounterTest />
      <ClockTest />
    </ReduxProvider>
  )
}
