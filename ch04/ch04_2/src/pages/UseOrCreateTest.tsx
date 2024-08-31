import {useOrCreate} from './UseOrCreate'
import * as D from '../data'
import {Avatar, Title} from '../components'

export default function UseOrCreateTest() {
  // prettier-ignore
  const headTexts = useOrCreate<string[]>('headTexts', () => [
    'NO',
    'NAME',
    'JOB TITLE',
    'EMAIL ADDRESS'
  ])

  // 100 명의 유저 생성
  const user = useOrCreate<D.IUser[]>('users', () =>
    D.makeArray(100).map(D.makeRandomUser)
  )

  // th
  const head = useOrCreate('head', () =>
    headTexts.map(text => <th key={text}>{text}</th>)
  )

  // body
  const body = useOrCreate('children', () =>
    user.map((user, index) => (
      <tr key={user.uuid}>
        <th>{index + 1}</th>
        <td className="flex items-center">
          <Avatar src={user.avatar} size="1.5rem" /> {/*이미지*/}
          <p className="ml-2">{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
      </tr>
    ))
  )

  return (
    <div className="m5-4">
      <Title>CreateOrUseTest</Title>
      <div className="overflow-x-auto mt-4 p-4">
        <table className="table table-zebra table-compact w-full">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </div>
  )
}
