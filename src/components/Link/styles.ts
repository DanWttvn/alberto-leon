import styled from 'styled-components'
import { Props } from '.'

export default styled.a<Props>`
  margin: 0;
  cursor: pointer;

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''}
  ${({ styles }) => ({ ...styles })}
`