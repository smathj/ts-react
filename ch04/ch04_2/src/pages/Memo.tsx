import {useOrCreate} from './UseOrCreate'
import * as D from '../data'
import {Avatar, Title} from '../components'
import {useMemo} from 'react'

export default function Memo() {
  // prettier-ignore
  const headTexts = useMemo<string[]>(() => [
    'NO',
    'NAME',
    'JOB TITLE',
    'EMAIL ADDRESS'
  ], [])

  // 100 명의 유저 생성
  const users = useMemo<D.IUser[]>(() => D.makeArray(100).map(D.makeRandomUser), [])

  // th
  const head = useMemo(
    () => headTexts.map(text => <th key={text}>{text}</th>),
    [headTexts]
  )

  // body
  const body = useMemo(
    () =>
      users.map((user, index) => (
        <tr key={user.uuid}>
          <th>{index + 1}</th>
          <td className="flex items-center">
            <Avatar src={user.avatar} size="1.5rem" /> {/*이미지*/}
            <p className="ml-2">{user.name}</p>
          </td>
          <td>{user.jobTitle}</td>
          <td>{user.email}</td>
        </tr>
      )),
    [users]
  )

  return (
    <div className="m5-4">
      <Title>Memo</Title>
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
