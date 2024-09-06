import * as T from './types'

const initialState: T.State = 0

/**
 *
 * @param state 초기화 상태이거나, 기존 상태
 * @param action 새로운 action 객체
 */
export const reducer = (state: T.State = initialState, action: T.Actions) => {
  // console.log('Counter reducer ', action)
  switch (action.type) {
    case '@counter/setCounter':
      return state + action.payload
  }

  return state
}
