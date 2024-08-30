import type {DragEvent} from 'react'

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) => {
    console.log('onDragStart', e.dataTransfer)
  }

  const onDragEnd = (e: DragEvent<HTMLElement>) => {
    console.log('onDragEnd', e.dataTransfer)
  }

  const onDragOver = (e: DragEvent) => {
    e.preventDefault()
    // console.log('onDragOver', e.dataTransfer)
  }
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer) // 이 안에 파일 있음
  }

  return (
    <div draggable>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnter={onDragEnd}>
        <h1>드래그하셈</h1>
      </div>
      <div onDrop={onDrop} onDragOver={onDragOver}>
        <h1>여기에 떨궈</h1>
      </div>
    </div>
  )
}
