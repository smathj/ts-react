import {useToggle} from '../hooks'
import {useCallback, useEffect, useState} from 'react'
import * as D from '../data'
import {Avatar, Title} from '../components'
import {Button, Icon} from '../theme/daisyui'

export default function FetchTest() {
  // toggleLoading 은 useCallback 으로 캐쉬한 setter
  const [loading, toggleLoading] = useToggle()
  const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null)
  const [error, setError] = useState<Error | null>(null)

  const getRandomUser = useCallback(async () => {
    try {
      toggleLoading()
      // throw new Error('인위적 에러발생 !!!')
      const randomUser = await D.fetchRandomUser()
      console.log({randomUser})
      setRandomUser(randomUser)
      setError(null)
      // return randomUser
    } catch (e) {
      const error = e as Error
      console.error(error)
      setError(new Error(error.message))
      // return null
    } finally {
      toggleLoading()
    }
  }, [toggleLoading])

  //! useEffect 에 콜백함수 자체가 async 로 쓰면 안된다!!! clean up 함수 만 반환할 수 있어서그럼
  useEffect(() => {
    // v1.
    //   console.log('useEffect v1')
    // getRandomUser()

    // v2.
    ;(async () => {
      console.log('useEffect v2')
      await getRandomUser()
    })()
  }, [getRandomUser])

  //prettier-ignore
  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        {/*<Button className="btn-sm btn-primary" onClick={getRandomUser}>*/}
        <Button className="btn-wide btn-primary" onClick={getRandomUser}>
          {/*<Icon name="get_app" />*/}
          <span>get random user</span>
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <Button className="btn-circle loading bg-red-400"></Button>
        </div>
      )}
      {/* 다음은 오류가 발생했을 때 JSX 문 작성 예이다. error는 널값일 수 있으므로 이런 패턴으
          로 코드를 작성해야 한다. */}
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}
      {/* 마찬가지 이유로 널값일 수 있는 randomUser 데이터를 고려해 다음과 같은 패턴으로 JSX 문
          을 구현한다. 참고로 조건이 있는 JSX 문을 만들 때는 {조건 && ()} 형태의 코드를 먼저 만
          든 다음, 소괄호 안에 화면 UI를 구성하면 오류 없이 쉽게 만들 수 있다 */}
      {randomUser && (
        <div className="flex justify-center p-4 mt-4">
          <Avatar src={randomUser.picture.large} />
          <div className="ml-4">
            <p className="text-xl text-bold">
              {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
            </p>
            <p className="italic text-gray-600">{randomUser?.email}</p>
          </div>
        </div>
      )}
    </section>
  )
}
