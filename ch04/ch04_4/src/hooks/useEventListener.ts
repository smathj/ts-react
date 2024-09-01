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
      return () => target.removeEventListener(type, callback)
    }
  }, [target, type, callback])
}
