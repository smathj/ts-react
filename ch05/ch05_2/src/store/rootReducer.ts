import {combineReducers} from 'redux'
import * as Clock from './clock'
import * as Counter from './counter'
import * as RemoteUser from './remoteUser'
import * as Cards from './cards'

export const rootReducer = combineReducers({
  clock: Clock.reducer, // 시계
  counter: Counter.reducer, // 카운터
  remoteUser: RemoteUser.reducer, // 사용자 정보 변경
  cards: Cards.reducer // 사용자 카드
})
