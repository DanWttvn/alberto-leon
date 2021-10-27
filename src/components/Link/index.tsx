import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  href: string
  target?: string
  onMouseOver?: () => void
  onMouseOut?: () => void
}

const Link: FC<Props> = ({ children, href, target = '_blank', isHidden, ...props }) => {

  if (isHidden) return null

  return (
    <Styled href={href} target={target} rel="noreferrer" {...props} >
      {children}
    </Styled>
  )
}

export default Link
