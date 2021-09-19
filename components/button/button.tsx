import { ButtonHTMLAttributes } from "react";
import { DefaultButton } from './styles'
const Button = ({ children }: any,props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <DefaultButton {...props}>
      {children}
    </DefaultButton>
  )
}

export { Button }
