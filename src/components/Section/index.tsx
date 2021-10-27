import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

interface Props extends BaseProps {
  id?: string
}

const Section: FC<Props> = ({ id = '', children, isHidden, ...props }) => {
  if (isHidden) return null
  return <Styled id={id} {...props}>{children}</Styled>
}

export default Section