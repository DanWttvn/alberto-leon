import styled from 'styled-components'
import { BaseProps } from '../../models'
import { Menu } from '@styled-icons/remix-fill/Menu'
import Container from '../Container'

export default styled.div<BaseProps>`
  position: fixed;
  right: 50px;
  top: 50px;
  display: flex;
  flex-direction: row;
  z-index: ${({ theme }) => theme.zIndex.high};
  align-items: flex-start;
`

export const Hamburger = styled(Menu)`
  color: ${({ theme }) => theme.colors.secondary};
  width: 30px;
`

export const LinksContainer = styled(Container)`
  margin-right: 12px;
`