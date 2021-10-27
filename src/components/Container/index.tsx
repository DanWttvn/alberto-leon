import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  direction?: 'horizontal' | 'vertical'
}

const Container: FC<Props> = ({ children, direction = 'horizontal', isHidden, ...props }) => {
  if (isHidden) return null

  return <Styled direction={direction} {...props}>{children}</Styled>
}

export default Container
