import type * as T from './types'

// 액션 생성기 생성
// T.SetClockAction 타입 리턴
export const setClock = (payload: T.State): T.SetClockAction => ({
  // action 은 type 이 필수 값
  type: '@clock/setClock',
  payload
})
