import React from 'react'
import './App.css'

import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store/useStore'
import RemoteUserTest from './pages/RemoteUserTest'
import CounterTest from './pages/CounterTest'
import ClockTest from './pages/ClockTest'
import CardTest from './pages/CardsTest'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <CardTest />
      <RemoteUserTest />
      <CounterTest />
      <ClockTest />
    </ReduxProvider>
  )
}
