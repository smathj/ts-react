import type {Action} from 'redux'
import * as D from '../../data'

// 상태
export type Card = D.ICard
export type State = Card[]

// 액션
export type AddCardAction = Action<'@cards/addCard'> & {
  payload: Card
}
export type RemoveCardAction = Action<'@cards/removeCard'> & {
  payload: String
}

export type Actions = AddCardAction | RemoveCardAction
