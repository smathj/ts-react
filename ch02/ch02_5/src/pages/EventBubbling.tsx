import type {SyntheticEvent} from 'react'

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, type} = e
    console.log('이벤트 버블링 <div>', {isTrusted, target, bubbles, type})
  }

  const onButtonClick = (e: SyntheticEvent) => {
    const {isTrusted, target, bubbles, type} = e
    console.log('이벤트 버블링 <button>', {isTrusted, target, bubbles, type})
    // 버블링 막기
    e.stopPropagation()
  }

  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  )
}
