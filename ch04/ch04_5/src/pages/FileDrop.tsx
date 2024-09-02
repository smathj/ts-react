import {useState, useRef, useCallback, useMemo, ChangeEvent} from 'react'
import {useToggle} from '../hooks'
import {Title, Div} from '../components'
import {Button} from '../theme/daisyui'
import {imageFileReaderP} from '../utils'

export default function FileDrop() {
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const [error, setError] = useState<Error | null>(null)
  const [loading, toggleLoading] = useToggle(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const onDivClick = useCallback(() => inputRef.current?.click(), [])

  const makeImageUrls = useCallback(
    async (files: File[]) => {
      try {
        const promises = Array.from(files).map(roopFile => imageFileReaderP(roopFile))
        toggleLoading()
        const urls = await Promise.all(promises)
        setImageUrls([...urls, ...imageUrls])
      } catch (e) {
        console.log(1, e)
        const error = e as Error
        console.log(2, error)
        setError(error)
      } finally {
        toggleLoading()
        console.log({imageUrls})
      }
    },
    [toggleLoading, imageUrls] // toggleLoading 참조 딱히 안쓰임, imageUrls 가 핵심
  )

  const onInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setError(null)
      const files = e.target.files
      files && makeImageUrls(Array.from(files))
    },
    [makeImageUrls]
  )

  const onDivDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) =>
      // 중요
      e.preventDefault(),
    []
  )

  const onDivDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      // 중요
      e.preventDefault()
      setError(null)
      const files = e.dataTransfer?.files
      files && makeImageUrls(Array.from(files))
    },
    [makeImageUrls]
  )

  // 연산 캐시
  // prettier-ignore
  const images = useMemo(()=>
      imageUrls.map((url, index) => (
          <Div key={index} src={url}
          className="m-2 bg-transparent bg-center bg-no-repeat bg-contain"
               width="5rem" height="5rem" />
      ))
      , [imageUrls])

  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>FileDrop</Title>
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 font-bold">{error.message}</p>
        </div>
      )}
      <div
        onClick={onDivClick}
        className="w-full mt-4 bg-gray-200 border border-gray-500">
        {loading && (
          <div className="flex items-center justify-center">
            {/*<Button className="btn-circle loading"></Button>*/}
            {/*<span className="loading loading-spinner text-accent"></span>*/}
            <Button className="loading w-20 h-20 z-40 loading-spinner text-accent"></Button>
          </div>
        )}

        {/*드래그 드랍영역*/}
        <div
          onDragOver={onDivDragOver}
          onDrop={onDivDrop}
          className="flex flex-col items-center justify-center h-40 cursor-pointer">
          <p className="text-3xl font-bold">여기에 파일을 떨구거나, 클릭하세요</p>
        </div>
        <input
          ref={inputRef}
          onChange={onInputChange}
          multiple
          className="hidden"
          type="file"
          accept="image/*"
        />
      </div>

      {/*이미지 영역*/}
      <div className="flex flex-wrap justify-center">{images}</div>
    </section>
  )
}
