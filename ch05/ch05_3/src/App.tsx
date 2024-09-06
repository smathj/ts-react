import React from 'react'
import './App.css'

import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store/useStore'
import FetchTest from './pages/FetchTest'
import ErrorMessageTest from './pages/ErrorMessageTest'
import LoadingTest from './pages/LoadingTest'
import LoggerTest from './pages/LoggerTest'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <FetchTest />
      <ErrorMessageTest />
      <LoadingTest />
      <LoggerTest />
    </ReduxProvider>
  )
}
