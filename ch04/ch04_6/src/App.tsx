import React from 'react'
import logo from './logo.svg'
import './App.css'
import ResponsiveContextTest from './pages/ResponsiveContextTest'
import {ResponsiveProvider} from './contexts'

export default function App() {
  return (
    /*컨텍스트 제공*/
    <ResponsiveProvider>
      <main>
        {/* 컨텍스트 사용 */}
        <ResponsiveContextTest />
      </main>
    </ResponsiveProvider>
  )
}
