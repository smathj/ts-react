import type {ChangeEvent} from 'react'

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    // 버블링 막기
    e.stopPropagation()
    // 기본 이벤트 값 제거
    e.preventDefault()
    console.log('onChangeValue', e.target.value)
  }

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    // 버블링 막기
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    // 버블링 막기
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }

  return (
    <div>
      <p>OnChange</p>
      <input
        type="text"
        onChange={onChangeValue}
        placeholder="아무 텍스트"
        defaultValue="Hello"
      />
      <input type="checkbox" onChange={onChangeChecked} defaultChecked />
      <input type="file" onChange={onChangeFiles} multiple accept="image/*" />
    </div>
  )
}
