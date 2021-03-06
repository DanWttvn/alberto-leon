import React, { FC, useRef } from 'react'
import { BaseProps } from '../../models'
import Styled from './styles'

export interface Props extends BaseProps {
  isShown?: boolean
}

const Banner: FC<Props> = ({ children, isShown = false, isHidden, ...props }) => {
  const ref = useRef<HTMLDivElement>()

  if (isHidden) return null

  return <Styled ref={ref} height={ref?.current?.clientHeight || 300} isShown={isShown} {...props}>{children}</Styled>
}

Banner.displayName = 'Banner'

export default Banner
