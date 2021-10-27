import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Loader from '../components/Loader'
import Skip from '../components/Skip'
import Text from '../components/Text'
import PolicyBanner from '../containers/PolicyBanner'

const Library: FC = () => {

  return (
    <>
      <Link to="/route">Router Link</Link>

      <Button variant="A">Button A</Button>
      <Button variant="B">Button B</Button>
      
      <Loader />

      <Skip />

      <Text size="s">size s</Text>
      <Text size="m">size m</Text>
      <Text size="l">size l</Text>

      <Text weight="normal">weigth normal</Text>
      <Text weight="bold">weight bold</Text>
      <Text weight="normal" isItalic>italic normal</Text>
      <Text weight="bold" isItalic>italic bold</Text>

      <PolicyBanner />
    </>
  )
}

export default Library
