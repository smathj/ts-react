const rootDit = document.getElementById('root')
if (rootDit) {
  rootDit.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('루트 영역에 마우스 클릭', isTrusted, target, bubbles)
  }

  rootDit.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e
    console.log('루트 영역에 마우스 클릭2', isTrusted, target, bubbles)
  }
}

export default function OnClick() {
  return <div>OnClick</div>
}
