import {configureStore} from '@reduxjs/toolkit'
import {rootReducer} from './rootReducer'
import {useMemo} from 'react'

const initializeStore = () => {
  // 리덕스 저장소 생성
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware()
  })

  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}
