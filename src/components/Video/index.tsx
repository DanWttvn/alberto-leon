import React, { FC, useEffect, useRef, useState } from 'react'
import { BaseProps } from '../../models'
import Player from '@vimeo/player'
import Styled, { StyledPlayer } from './styles'

interface Props extends BaseProps {
  id: number
}

const Video: FC<Props> = ({ id, isHidden, ...props }) => {
  const ref = useRef(null)
  const [ isHovered, setIsHovered ] = useState(false)

  useEffect(() => {
    if (!ref?.current) return

    const options = {
      id,
      loop: true,
      controls: false,
      muted: true,
      resposive: true
    }

    const player = new Player(ref?.current, options)

    if (isHovered) player.play()
    else player.unload()

  }, [ ref, isHovered ])

  if (isHidden) return null

  return (
    <Styled href={`https://vimeo.com/${id}`} onMouseOver={setIsHovered.bind(undefined, true)} onMouseOut={setIsHovered.bind(undefined, false)} {...props}>
      <StyledPlayer ref={ref} />
    </Styled>
  )
}

export default Video
