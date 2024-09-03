export type IRandomUser = {
  email: string
  name: {title: string; first: string; last: string}
  picture: {large: string}
}

const convertRandomUser = (result: unknown) => {
  const {email, name, picture} = result as IRandomUser
  return {email, name, picture}
}

export const fetchRandomUser = async () => {
  const data = await (await fetch('https://randomuser.me/api/')).json()

  const {results} = data as {results: IRandomUser[]}
  return convertRandomUser(results[0])
}
