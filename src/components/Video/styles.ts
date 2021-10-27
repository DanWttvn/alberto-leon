import styled from 'styled-components'
import Link from '../Link'

export default styled(Link)`
  width: 50%;
  @media ${({ theme }) => theme.breakpoints.m} {
    width: 100%
  }
`

export const StyledPlayer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`