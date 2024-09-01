import {ChangeEvent, FormEvent, useCallback, useState} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

export default function BasicForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      // form 의 submit 기능을 제거 (안하면 깜박거림)
      e.preventDefault()

      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      console.log(Object.fromEntries(formData))

      const map = new Map()
      map.set('이름', 'kim')
      map.set('나이', 2)
      console.log(Object.fromEntries(map))
    },
    [name, email]
  )
  /*
  name or email 이 바낄때마다 formData 를 새로 만든다
   */

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(notUsed => e.target.value)
  }, [])

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(notUsed => e.target.value)
  }, [])

  return (
    <section className="mt-4">
      <Title>BasicForm</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <Input
              value={name}
              onChange={onChangeName}
              id="name"
              type="text"
              placeholder="enter your name"
              className="input-primary"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <Input
              value={email}
              onChange={onChangeEmail}
              id="email"
              type="email"
              placeholder="enter your email"
              className="input-primary"
            />
          </div>
          <div className="flex justify-center mt-4">
            <input
              type="submit"
              value="SUBMIT"
              className="w-1/2 btn btn-sm btn-primary"
            />
            <input
              type="button"
              defaultValue="CANCEL"
              className="w-1/2 ml-4 btn btn-sm"
            />
          </div>
        </form>
      </div>
    </section>
  )
}
