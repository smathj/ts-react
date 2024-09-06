import {useDispatch, useSelector} from 'react-redux'
import {AppState} from '../store/AppState'
import {useClock, useToggle} from '../hooks'
import * as R from '../store/remoteUser'
import * as D from '../data'
import {useCallback, useState} from 'react'
import {IRandomUser} from '../data'
import {Avatar, Title} from '../components'
import {Button} from '../theme/daisyui'
export default function RemoteUserTest() {
  const dispatch = useDispatch()
  const user = useSelector<AppState, R.State>(({remoteUser}) => remoteUser)
  const [loading, toggleLoading] = useToggle()
  const [error, setError] = useState<Error | null>(null)

  const getRemoteUser = useCallback(async () => {
    try {
      toggleLoading()
      const user: IRandomUser = await D.fetchRandomUser()
      dispatch(R.setUser(user))
    } catch (e) {
      const error = e as Error
      setError(error)
    } finally {
      toggleLoading()
    }
  }, [dispatch, toggleLoading])

  const changeName = useCallback(async () => {
    try {
      toggleLoading()
      const user: IRandomUser = await D.fetchRandomUser()
      dispatch(R.changeName(user.name))
    } catch (e) {
      const error = e as Error
      setError(error)
    } finally {
      toggleLoading()
    }
  }, [dispatch, toggleLoading])

  const changeEmail = useCallback(() => {
    dispatch(R.changeEmail(D.randomEmail()))
  }, [dispatch])

  const changePicture = useCallback(() => {
    dispatch(R.changePicture({large: D.randomAvatar()}))
  }, [dispatch])

  /*

  const getRemoteUser = useCallback(() => {
    toggleLoading()
    D.fetchRandomUser()
      .then(user => dispatch(R.setUser(user)))
      .catch(setError)
      .finally(toggleLoading)
  }, [dispatch, toggleLoading])
  const changeName = useCallback(() => {
    toggleLoading()
    D.fetchRandomUser()
      .then(user => dispatch(R.changeName(user.name)))
      .catch(setError)
      .finally(toggleLoading)
  }, [dispatch, toggleLoading])
  const changeEmail = useCallback(() => {
    dispatch(R.changeEmail(D.randomEmail()))
  }, [dispatch])
  const changePicture = useCallback(
    () => dispatch(R.changePicture({large: D.randomAvatar()})),
    [dispatch]
  )
*/

  return (
    <section className="mt-4">
      <Title>RemoteUserTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn-sm btn-primary" onClick={getRemoteUser}>
          GET REMOTE USER
        </Button>
        <Button className="ml-4 btn-sm btn-accent" onClick={changeName}>
          CHANGE NAME
        </Button>
        <Button className="ml-4 btn-sm btn-success" onClick={changeEmail}>
          CHANGE EMAIL
        </Button>
        <Button className="ml-4 btn-sm btn-secondary" onClick={changePicture}>
          CHANGE PICTURE
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <Button className="btn-circle loading"></Button>
        </div>
      )}
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}
      <div className="flex justify-center p-4 mt-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
          <p className="text-xl text-bold">
            {user.name.title}. {user.name.first} {user.name.last}
          </p>
          <p className="italic text-gray-600">{user.email}</p>
        </div>
      </div>
    </section>
  )
}
