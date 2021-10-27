import React, { FC } from 'react'
import { BaseProps, Theme } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  isCentered?: boolean
  isItalic?: boolean
  weight?: 'normal' | 'bold'
  size?: 's' | 'm' | 'l'
  color?: keyof Theme['colors'] | 'inherit'
}

const Text: FC<Props> = ({ children, color, weight = 'normal', size = 'm', isItalic, isHidden, isCentered, ...props }) => {
  if (isHidden) return null

  return (
    <Styled size={size} weight={weight} color={color} isCentered={isCentered} isItalic={isItalic} {...props}>
      {children}
    </Styled>
  )
}

export default Text
