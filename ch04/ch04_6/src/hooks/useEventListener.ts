import {useEffect} from 'react'

export const useEventListener = (
  target: EventTarget | null,
  type: string,
  callback: EventListenerOrEventListenerObject | null
) => {
  useEffect(() => {
    console.log('useEventListener.useEffect[target, type, callback] 호출')

    if (target && callback) {
      target.addEventListener(type, callback)
      // clean up
      return () => {
        console.log('clean up : useEventListener')
        target.removeEventListener(type, callback)
      }
    }
  }, [target, type, callback])
}
