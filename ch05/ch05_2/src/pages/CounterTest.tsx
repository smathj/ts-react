import * as C from '../store/counter'
import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../store/AppState'
import {useCallback} from 'react'
import {Subtitle, Title} from '../components'
import {Icon} from '../theme/daisyui'

export default function CounterTest() {
  const dispatch = useDispatch()

  //! 중요! rootReducer 와 AppState 의 속성명을 같게 해야한다
  const counter = useSelector<AppState, C.State>(({counter}) => counter)
  const increase = useCallback(() => dispatch(C.increaseCounter()), [dispatch])
  const decrease = useCallback(() => dispatch(C.decreaseCounter()), [dispatch])

  return (
    <section className="mt-4">
      <Title>CounterTest</Title>
      <div className="flex justify-center p-4 mt-4">
        <div className="flex items-center justify-around w-1/3 text-blue-500 text-bold">
          <Icon name="+" iconClassName="text-3xl" onClick={increase} />
          <Subtitle>{counter}</Subtitle>
          <Icon name="-" iconClassName="text-3xl" onClick={decrease} />
        </div>
      </div>
    </section>
  )
}
