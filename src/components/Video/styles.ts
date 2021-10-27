import styled from 'styled-components'
import Link from '../Link'

export default styled(Link)`
  width: 50%;
  background: tomato;

  @media ${({ theme }) => theme.breakpoints.m} {
    width: 100%
  }
`