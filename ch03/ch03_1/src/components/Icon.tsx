import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'
type ReactSpanProps = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// IconProps extends ReactSpanProps 와 같다 (JAVA)
// 함수형에서는 | 합집합, & 교집합 을 나타냄
export type IconProps = ReactSpanProps & {
  name: string
  // style?: CSSProperties
}

// 타입스크립트에서 매개변수 이름을 바꿀 수 있다
// => className: _className (className 라는 파라미터 이름을 _className 로 바꾼다)
export const Icon: FC<IconProps> = ({name, className: _className, ...props}) => {
  // const {name, style} = IconProps
  const className = ['meterial-icons', _className].join(' ')
  return (
    // <span className="meterial-icons" style={style}>
    <span {...props} className={className}>
      {name}
    </span>
  )
}
