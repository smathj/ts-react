import {useEffect, useState} from 'react'
import {useEventListener} from './useEventListener'

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0])

  useEffect(() => {
    console.log('useWindowResize.useEffect[] 호출')
    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
  }, [])

  //! 커스텀 훅
  // 창 크기가 변경 될 때마다 설정
  // 화살표 함수 () => {...}는 컴포넌트가 렌더링될 때마다
  // 새로 생성 그러기 때문에 클린업이 자주 발생
  // prettier-ignore
  useEventListener(
      window,
      'resize',
      () => {    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])}
  )

  return widthHeight
}
