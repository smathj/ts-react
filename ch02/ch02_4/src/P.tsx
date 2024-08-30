import {FC, ReactNode, PropsWithChildren} from 'react'

export type PProps = {
  children?: ReactNode | undefined
}

// const P: FC<PProps> = props => {
//   const {children} = props
//   return <p children={children} />
// }

// const P: FC<PropsWithChildren<PProps>> = props => {
//   return <p {...props} />
// }

const P: FC<PProps> = props => {
  return <p {...props} />
}

export default P
