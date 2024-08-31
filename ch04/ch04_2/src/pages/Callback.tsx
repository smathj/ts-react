import * as D from '../data'
import {useCallback, useMemo} from 'react'
import {Button} from '../theme/daisyui'
import {Title} from '../components'

export default function Callback() {
  const onClick = useCallback(() => alert('버튼 클릭'), [])

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button key={index} onClick={onClick} className="btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  )

  return (
    <div className="mt-4">
      <Title>Callback</Title>
      <div className="flex justify-evenly mt-4">{buttons}</div>
    </div>
  )
}
