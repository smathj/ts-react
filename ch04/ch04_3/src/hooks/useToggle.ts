import {ChangeEvent, useCallback, useState} from 'react'

export const useToggle = (initialChecked: boolean = false): [boolean, () => void] => {
  const [checked, setChecked] = useState<boolean>(initialChecked)

  // checked 의 반대값
  // toggleChecked 는 함수이다
  const toggleChecked = useCallback(() => setChecked(checked => !checked), [])

  return [checked, toggleChecked]
}
