import {AppState} from './AppState'
import {Action} from 'redux'
import {Actions} from './actions'

const initialAppState = {
  today: new Date()
  // today: JSON.stringify(new Date())
}

export const rootReducer = (state: AppState = initialAppState, action: Actions) => {
  switch (action.type) {
    case 'setToday': {
      return {...state, today: action.today}
    }
  }
  return state // 필수
}
