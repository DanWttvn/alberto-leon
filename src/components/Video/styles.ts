import styled from 'styled-components'
import RootLink from '../Link'

export default styled.div`
  width: 50%;
  @media ${({ theme }) => theme.breakpoints.m} {
    width: 100%
  }
`

export const Link = styled(RootLink)`
  position: absolute;
  inset: 0;
`

export const StyledPlayer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`