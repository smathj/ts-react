// 전역 변수
const cache: Record<string, any> = {}

// 캐시가 있으면 캐시 리턴, 없으면 저장 후 리턴
export const useOrCreate = <T>(key: string, callback: () => T): T => {
  if (!cache[key]) {
    cache[key] = callback()
  }
  return cache[key] as T
}
