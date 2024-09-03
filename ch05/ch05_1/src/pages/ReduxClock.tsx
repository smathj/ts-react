import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../store'
import React from 'react'
import {Div, Subtitle, Title} from '../components'
import {useInterval} from '../hooks'

export default function ReduxClock() {
  // 리덕스로 생성된 스토어 에서 가져온다
  const today = useSelector<AppState, Date>(state => state.today)
  const dispatch = useDispatch()

  useInterval(() => {
    dispatch({type: 'setToday', today: new Date()})
  })

  return (
    <Div className="flex flex-col items-center justify-center mt-16">
      <Title className="text-5xl">ReduxClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}
