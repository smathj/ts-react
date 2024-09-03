// React와 관련된 타입들을 import합니다.
import {FC, DetailedHTMLProps, InputHTMLAttributes, forwardRef} from 'react'

/**
 ! DetailedHTMLProps:

 React에서 제공하는 제네릭 타입입니다.
 HTML 요소의 props를 더 자세하게 설명하기 위해 사용됩니다.
 두 개의 타입 매개변수를 받습니다.

 ! InputHTMLAttributes<HTMLInputElement>:

 첫 번째 타입 매개변수로 사용됩니다.
 input 요소에 특화된 모든 HTML 속성을 포함합니다.
 예: type, value, placeholder, onChange 등

 ! HTMLInputElement:
 두 번째 타입 매개변수로 사용됩니다.
 실제 DOM의 input 요소를 나타내는 인터페이스입니다.
 */

//? v1
// HTMLInputElement에 대한 React의 상세한 props 타입을 정의합니다.
export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

//? v2
// export type ReactInputProps = InputHTMLAttributes<HTMLInputElement>

// InputProps 타입을 ReactInputProps를 확장하여 정의합니다.
// 현재는 추가 속성이 없지만, 필요시 여기에 커스텀 속성을 추가할 수 있습니다.
export type InputProps = ReactInputProps & {}

// forwardRef를 사용하여 ref를 전달할 수 있는 Input 컴포넌트를 생성합니다.
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  // props에서 className을 분리하고 나머지는 inputProps로 묶습니다.
  const {className: _className, ...inputProps} = props

  // 기본 'input' 클래스와 전달받은 className을 합칩니다.
  const className = ['input', _className].join(' ')

  // 최종적으로 input 엘리먼트를 반환합니다.
  return <input ref={ref} {...inputProps} className={className} />
})
