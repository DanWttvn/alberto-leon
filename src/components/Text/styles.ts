import styled, { css } from 'styled-components'
import { Props } from '.'

export default styled.p<Props>`
  text-align: ${({ isCentered }) => isCentered ? 'center' : 'inherit'};
  font-weight: ${({ weight }) => weight};
  font-style: ${({ isItalic }) => isItalic ? 'italic' : 'normal'};
  margin: 0;
  color: ${({ theme, color }) => color ? theme.colors[color] : 'inherit'};

  ${({ size }) => size === 's' && css`
    font-size: 0.85rem;
    line-height: 1.3rem;
  `}

  ${({ size }) => size === 'm' && css`
    font-size: 1rem;
    line-height: 1.59rem;
  `}

  ${({ size }) => size === 'l' && css`
    font-size: 2rem;
    line-height: 2rem;
  `}

  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''};
  ${({ styles }) => ({ ...styles })}
`
