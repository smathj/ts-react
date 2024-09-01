import {useEffect, useState} from 'react'
import {useEventListener} from './useEventListener'

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0])

  useEffect(() => {
    console.log('useWindowResize.useEffect[] 호출')
    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
  }, [])

  // 창 크기가 변경 될 때마다 설정
  useEventListener(window, 'resize', () => {
    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
  })

  return widthHeight
}
