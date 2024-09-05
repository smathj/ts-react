import {configureStore} from '@reduxjs/toolkit'
import {useMemo} from 'react'
import {rootReducer} from './rootReducer'

/**
 * 리덕스 스토어 생성
 */
const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer
  })
  return store
}

/**
 * 커스텀 훅
 * 리덕스 스토어를 반환 및 캐싱한다
 */
export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
