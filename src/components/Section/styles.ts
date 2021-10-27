import styled from 'styled-components'
import { BaseProps } from '../../models'

export default styled.section<BaseProps>`
  position: relative;
  width: 100%;
	max-width: 2500px;
	margin: 0 auto;
	display: flex;
	flex-flow: row wrap;
	align-items: center;

  ${({ styles }) => ({ ...styles })}
`
