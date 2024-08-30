document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('addEventListener 클릭 이벤트1', isTrusted, target, bubbles)
})

document.getElementById('root')?.addEventListener('click', (e: Event) => {
  const {isTrusted, target, bubbles} = e
  console.log('addEventListener 클릭 이벤트2', isTrusted, target, bubbles)
})

export default function EventListener() {
  return <div>EventListener</div>
}
