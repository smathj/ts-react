import {ChangeEvent, FormEvent, useCallback, useState} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

type FormType = {
  name: string
  email: string
}

export default function ObjectState() {
  const [form, setForm] = useState<FormType>({name: '', email: ''})

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      // form 의 submit 기능을 제거 (안하면 깜박거림)
      e.preventDefault()

      console.log(form)
    },
    [form]
  )

  /*
  name or email 이 바낄때마다 formData 를 새로 만든다
   */

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    // v1. 축약 버전
    // setForm(state => ({...state, name: e.target.value}))

    // v2. 축약 안쓰는 버전
    setForm(form => {
      console.log('name 변경', {...form})
      return {...form, name: e.target.value}
    })
  }, [])

  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(form => ({...form, email: e.target.value}))
  }, [])

  return (
    <section className="mt-4">
      <Title>ObjectState</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <Input
              value={form.name}
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
              value={form.email}
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
