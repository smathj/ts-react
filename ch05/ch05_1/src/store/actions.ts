import {Action} from 'redux'

export type SetTodayAction = Action<'setToday'> & {
  // export type SetTodayAction = Action<string> & {
  today: Date
}

export type Actions = SetTodayAction
