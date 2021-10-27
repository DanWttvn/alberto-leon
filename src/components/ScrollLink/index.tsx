import React, { FC } from 'react'
import { SectionTitle, BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  toSection: SectionTitle
}

const ScrollLink: FC<Props> = ({ children, toSection, isHidden, ...props }) => {
  if (isHidden) return null
  return <Styled to={toSection} activeClass="active" spy={true} smooth={true} {...props}>{children}</Styled>
}

export default ScrollLink
