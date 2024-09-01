import React, {ChangeEvent, useCallback, useState} from 'react'
import {Title} from '../components'

export default function InputTest() {
  const [value, setValue] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value)
    setValue(e.target.value)
  }, [])

  const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.checked)
    setChecked(e.target.checked)
  }, [])

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <input type="text" defaultValue={value} onChange={onChangeValue} />
        <input type="checkbox" defaultChecked={checked} onChange={onChangeChecked} />
      </div>
    </section>
  )
}
