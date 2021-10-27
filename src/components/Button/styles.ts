import styled from 'styled-components'
import { Props } from '.'

const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 1.1rem;
  font-weight: 600;
`

export const ButtonA = styled(Button)`

  ${({ styles }) => ({ ...styles })}
`

export const ButtonB = styled(Button)`

  ${({ styles }) => ({ ...styles })}
`
