import {useDispatch, useSelector} from 'react-redux'
import * as C from '../store/clock'
import {AppState} from '../store/AppState'
import {Title} from '../components'
import {useInterval} from '../hooks'

export default function ClockTest() {
  const clock = new Date(useSelector<AppState, C.State>(state => state.clock))
  const dispatch = useDispatch()

  useInterval(() => dispatch(C.setClock(new Date().toISOString())))

  return (
    <section className="mt-4">
      <Title>ClockTest</Title>
      <div className="flex flex-col items-center mt-4">
        <p className="text-2xl text-blue-600 text-bold">{clock.toLocaleTimeString()}</p>
        <p className="text-2xl text-blue-600 text-bold">{clock.toLocaleDateString()}</p>
      </div>
      <div className="mt-4"></div>
    </section>
  )
}
