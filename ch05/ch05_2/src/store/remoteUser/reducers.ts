import * as T from './types'

const initialState: T.State = {
  email: '',
  name: {title: '', first: '', last: ''},
  picture: {large: ''}
}

/**
 * @param state 기존 상태 데이터
 * @param action 새로운 상태 데이터
 * 따라서 리듀서는 기존 상태와 새로운 상태를 조합해서 순수함수로서 새로운 상태 객체를 리턴한다
 */
export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@remoteUser/setUser':
      return action.payload
    case '@remoteUser/changeEmail':
      return {...state, email: action.payload}
    case '@remoteUser/changeName':
      return {...state, name: action.payload}
    case '@remoteUser/changePicture':
      return {...state, picture: action.payload}
  }
  return state
}
