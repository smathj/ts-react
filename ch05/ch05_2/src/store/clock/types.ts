import type {Action} from 'redux'

export type State = string

// 교집합이니 type + payload => action !!!
export type SetClockAction = Action<'@clock/setClock'> & {
  payload: State
}

export type Actions = SetClockAction
