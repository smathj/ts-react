import {useRef, useCallback} from 'react'
import {Title} from '../components'
import {Button} from '../theme/daisyui'

export default function ClickTest() {
  const inputRef = useRef<HTMLInputElement>(null)

  // onClick 함수를 캐시 inputRef.current 은 의존성 목록에 추가할 필요 없고 리엑트가 그렇게 설계되어 있다(즉 랜더링과 관련없음)
  const onClick = useCallback(() => inputRef.current?.click(), [])

  return (
    <section className="mt-4">
      <Title>ClickTest</Title>
      <div className="mt-4 flex justify-center items-center">
        <Button className="btn-primary mr-4" onClick={onClick}>
          여기를 클릭하세요
        </Button>
        <input ref={inputRef} className="hidden" type="file" accept="image/*" />
      </div>
    </section>
  )
}
