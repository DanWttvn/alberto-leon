import React, { FC, useState, useEffect, useRef } from 'react'
import { BaseProps } from '../../models'
import Styled, { Hamburger, LinksContainer } from './styles'

const Menu: FC<BaseProps> = ({ children, isHidden, ...props }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ ref ])

  if (isHidden) return null

  return (
    <Styled ref={ref} {...props}>
      <LinksContainer direction="vertical" isHidden={!isOpen}>
        {children}
      </LinksContainer>
      <Hamburger onClick={setIsOpen.bind(undefined, !isOpen)} />
    </Styled>
  )
}

export default Menu
