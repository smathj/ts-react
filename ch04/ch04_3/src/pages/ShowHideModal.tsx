import {useToggle} from '../hooks'
import {useCallback} from 'react'
import {Subtitle, Title} from '../components'
import {Button, Modal, ModalAction, ModalContent} from '../theme/daisyui'
import * as D from '../data'

export default function ShowHideModal() {
  const [open, toggleOpen] = useToggle(false)

  // 커스텀 훅도 마찬가지로 훅이므로, 함수를 캐시 시키자
  const onAccept = useCallback(() => {
    toggleOpen()
  }, [toggleOpen]) // 안전하게 의존성 배열에 넣는다, 변경 가능성이 현재는없지만 불가능한건 아니다

  return (
    <section className="mt-4">
      <Title>ShowHideModal</Title>
      <div className="flex justify-center p-4">
        <Button className="btn-primary" onClick={toggleOpen}>
          open modal
        </Button>
      </div>
      {/*모달 시작*/}
      <Modal open={open}>
        <ModalContent
          closeIconClassName="btn-primary btn-outline"
          onCloseIconClicked={toggleOpen}>
          <Subtitle>Modal</Subtitle>
          <p>{D.randomParagraphs()}</p>
          <ModalAction>
            <Button className="btn-primary" onClick={onAccept}>
              Accept
            </Button>
            <Button onClick={toggleOpen}>Close</Button>
          </ModalAction>
        </ModalContent>
      </Modal>
      {/*모달 끝*/}
    </section>
  )
}
