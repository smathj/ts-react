import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import './ClassComponent'
import ClassComponent from './ClassComponent'
import ArrowComponent from './ArrowComponent'

class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href={'https://www.google.com'} text={'Go to Google'} />
        <ArrowComponent href={'https://www.naver.com'} text={'Go to Naver'} />
      </ul>
    )
  }
}
/*
function App() {
  return (
    <ul>
      <li>
        <a href="http://www.google.com">
          <p>go to Google</p>
        </a>
      </li>
    </ul>
  )
}*/

export default App
