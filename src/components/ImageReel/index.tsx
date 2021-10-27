import React, { Children, cloneElement, FC, useEffect, ReactElement, useState } from 'react'
import { BaseProps } from '../../models'
import Container from '../Container'

const ImageReel: FC<BaseProps> = ({ children, isHidden, ...props }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const childrenCount = Children.count(children)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex === childrenCount) return setCurrentIndex(0)
      setCurrentIndex(prev => prev + 1)
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  })

  if (isHidden) return null

  const items = Children.map(children, (x: ReactElement<BaseProps>, i) => {
    return cloneElement(x, { isHidden: currentIndex !== i })
  })

  return (
    <Container {...props}>
      {items}
    </Container>
  )
}

export default ImageReel