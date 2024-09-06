import type {Action} from 'redux'
import * as D from '../../data'

/**
 * 타입을 정의해두었다
 * 액션에 사용할 상태와
 * 리듀서에 분기를 탈때도 상태를 사용한다
 */

// 사용자 --------------------------------------------------------------------
export type State = D.IRandomUser
export type SetUserAction = Action<'@remoteUser/setUser'> & {
  payload: State
}

// 이메일 --------------------------------------------------------------------
export type ChangeEmailAction = Action<'@remoteUser/changeEmail'> & {
  payload: string
}

// 이름 --------------------------------------------------------------------
export type NameType = {
  title: string
  first: string
  last: string
}

export type ChangeNameAction = Action<'@remoteUser/changeName'> & {
  payload: NameType
}

// 사진 --------------------------------------------------------------------
export type PictureType = {large: string}

export type ChangePictureAction = Action<'@remoteUser/changePicture'> & {
  payload: PictureType
}

export type Actions =
  | SetUserAction
  | ChangeEmailAction
  | ChangeNameAction
  | ChangePictureAction
