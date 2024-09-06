import type * as T from './types'

/**
 * 다양한 함수가 액션 객체를 생성한다
 */

export const setUser = (payload: T.State): T.SetUserAction => ({
  type: '@remoteUser/setUser',
  payload
})

export const changeEmail = (payload: string): T.ChangeEmailAction => ({
  type: '@remoteUser/changeEmail',
  payload
})

export const changeName = (payload: T.NameType): T.ChangeNameAction => ({
  type: '@remoteUser/changeName',
  payload
})

export const changePicture = (payload: T.PictureType): T.ChangePictureAction => ({
  type: '@remoteUser/changePicture',
  payload
})
