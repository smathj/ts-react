import type * as T from './types'

// 새로운 action 생성 , 디스패치가 리를 파라미터로 받아서 저장소의 상태 변경
export const setCounter = (payload: T.State): T.SetCounterAction => ({
  type: '@counter/setCounter',
  payload
})

export const increaseCounter = () => setCounter(1)
export const decreaseCounter = () => setCounter(-1)
