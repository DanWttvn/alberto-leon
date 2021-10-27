import React, { FC } from 'react'
import { BaseProps } from '../../models'
import Styled, { Circle } from './styles'

export type Props = BaseProps 

const Loader: FC<Props> = ({ isHidden, ...props }) => {
  if (isHidden) return null

  return (
    <Styled {...props} viewBox="12 12 24 24">
      <Circle cx="24" cy="24" r="8" />
    </Styled>
  )
}

export default Loader
