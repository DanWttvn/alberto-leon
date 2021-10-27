import styled from 'styled-components'
import { Props } from './'

export default styled.img<Props>`
  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
