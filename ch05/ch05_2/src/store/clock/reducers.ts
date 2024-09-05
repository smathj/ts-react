import * as T from './types'

// T.State => string 타입
const initialState: T.State = new Date().toISOString()
export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@clock/setClock':
      return action.payload
  }

  return state
}
