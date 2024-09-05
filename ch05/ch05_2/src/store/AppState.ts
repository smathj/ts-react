import * as Clock from './clock'
import * as Counter from './counter'
import * as RemoteUser from './remoteUser'
import * as Cards from './cards'

// 앱 상태
export type AppState = {
  clock: Clock.State // 시계
  counter: Counter.State // 카운터
  remoteUser: RemoteUser.State // 사용자 정보 변경
  cards: Cards.State // 사용자 카드
}
