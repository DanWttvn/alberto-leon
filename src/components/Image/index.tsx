import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  src: string
}

const Image: FC<Props> = ({ src, isHidden, ...props }) => {
  if (isHidden) return null
  return <Styled src={src} loading="lazy" {...props}/>
}

export default Image
