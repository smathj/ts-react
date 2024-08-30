import React, {useState, useEffect} from 'react'
import type {DragEvent} from 'react'

export default function FileDrop() {
  const [images, setImages] = useState<string[]>([])

  const onDragOver = (e: DragEvent) => e.preventDefault()

  const onDrop = (e: DragEvent) => {
    console.log('onDrop')
    e.preventDefault()
    const files = e.dataTransfer.files
    if (files) {
      const newImages: string[] = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file.type.startsWith('image/')) {
          const objectUrl = URL.createObjectURL(file)
          console.log('objectUrl :', objectUrl)
          newImages.push(objectUrl)
        }
      }
      // 기존 이미지 뒤에 순서를 유지하여 새로운 이미지 추가
      setImages(prevImages => [...prevImages, ...newImages])
    }
  }

  // 컴포넌트 언마운트 시 URL 해제
  // React.useEffect(() => {
  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 실행됩니다.
    // 의존성 배열의 값이 변경될 때마다 실행됩니다.
    // 빈 의존성 배열([])을 사용하면 마운트 시에만 한 번 실행됩니다.
    console.log('useEffect 호출')

    return () => {
      // [cleanup 함수 (언마운트 때 실행)]
      // 컴포넌트가 언마운트될 때 실행됩니다.
      // 의존성 배열의 값이 변경되어 effect가 다시 실행되기 직전에 실행됩니다.
      // 빈 의존성 배열([])을 사용하면 언마운트 시에만 실행됩니다.
      console.log('cleanup 호출')
      images.forEach(URL.revokeObjectURL)
    }
  }, [images])

  return (
    <div>
      <p>FileDrop</p>
      <div
        id="fileDrop"
        onDrop={onDrop}
        onDragOver={onDragOver}
        style={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center'
        }}>
        <h1>여기에 이미지 파일 떨궈</h1>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '20px'}}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Dropped image ${index}`}
            style={{maxWidth: '200px', maxHeight: '200px', margin: '5px'}}
          />
        ))}
      </div>
    </div>
  )
}
