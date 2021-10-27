import React, { FC } from 'react'
import { BaseProps } from '../../models'
import { ButtonA, ButtonB } from './styles'

export interface Props extends BaseProps {
  onClick?: () => void
  variant?: 'A' | 'B'
}

const Button: FC<Props> = ({ children, onClick, variant = 'A', isHidden, ...props }) => {
  if (isHidden) return null

  let Styled

  switch (variant) {
  case 'B':
    Styled = ButtonB
    break
  case 'A':
  default:
    Styled = ButtonA
  }

  return <Styled onClick={onClick} {...props}>{children}</Styled>
}

export default Button
