import {useCallback, useMemo, useState} from 'react'
import {Title} from '../components'
import {Icon} from '../theme/daisyui'

export default function NumberState() {
  const [count, setCount] = useState<number>(0)

  // 함수 캐시화 useCallback
  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [])

  // 함수 캐시화 useCallback
  const decrement = useCallback(() => {
    setCount(count => count - 1)
  }, [])

  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-1/4 mt-4">
          <Icon
            name="+"
            className="btn-primary btn-lg"
            iconClassName="text-4xl"
            onClick={increment}
          />
          <p className="text-3xl text-bold text-primary">{count}</p>
          <Icon
            name="-"
            className="btn-accent btn-lg"
            iconClassName="text-4xl"
            onClick={decrement}
          />
        </div>
      </div>
    </section>
  )
}
