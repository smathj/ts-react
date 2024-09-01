import {Component} from 'react'
import {Title} from '../components'

export default class ClassLifecycle extends Component {
  state = {
    today: new Date(),
    intervalId: null as unknown as NodeJS.Timer
  }

  componentDidMount() {
    console.log('마운트 !!!')
    const duration = 1000
    const intervalId = setInterval(() => this.setState({today: new Date()}), duration)
    this.setState({intervalId})
  }

  componentWillUnmount() {
    console.log('언마운트 !!!')
    clearInterval(this.state.intervalId)
  }

  render() {
    // const today = new Date()
    const {today} = this.state
    return (
      <section>
        <Title>ClassLifecycle</Title>
        <div className="mt-4 flex flex-col items-center">
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
        </div>
      </section>
    )
  }
}
