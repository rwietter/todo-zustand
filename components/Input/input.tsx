import { InputHTMLAttributes } from "react";
import { DefaultInput } from './styles'
const Input = (props: InputHTMLAttributes<HTMLInputElement>, { children }: any) => {
  return (
    <DefaultInput {...props}>
      {children}
    </DefaultInput>
  )
}

export { Input }
