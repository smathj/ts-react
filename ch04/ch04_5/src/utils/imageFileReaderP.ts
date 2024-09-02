// Promise<string> 리턴
export const imageFileReaderP = (file: Blob) =>
  // 아래를 리턴
  new Promise<string>((resolve, reject) => {
    const fileReader = new FileReader()

    // 이벤트
    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target?.result

      if (result && typeof result === 'string')
        resolve(result) // 이미지 base64 url
      else reject(new Error(`imageFileReaderP: 이미지 파일을 읽을 수 없습니다`))
    }

    fileReader.readAsDataURL(file)
  })
