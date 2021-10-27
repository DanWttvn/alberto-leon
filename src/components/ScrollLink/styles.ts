import { Link } from 'react-scroll'
import styled from 'styled-components'

export default styled(Link).attrs(() => ({ activeClass: 'active' }))`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};

  &.active {
    text-decoration: underline;
  }

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''}
  ${({ styles }) => ({ ...styles })}
`
