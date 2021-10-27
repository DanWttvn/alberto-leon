import React, { FC } from 'react'
import Image from '../components/Image'
import Menu from '../components/Menu'
import Section from '../components/Section'
import ImageReel from '../components/ImageReel'
import ScrollLink from '../components/ScrollLink'
import Video from '../components/Video'
import Container from '../components/Container'

const Home: FC = () => {
  return (
    <main>
      <Menu>
        <ScrollLink toSection="work">WORK</ScrollLink>
        <ScrollLink toSection='world'>WORLD</ScrollLink>
        <ScrollLink toSection='about'>ABOUT</ScrollLink>
      </Menu>
      <Section>
        <ImageReel isFullWidth>
          <Image src="https://picsum.photos/1000/700"/>
          <Image src="https://picsum.photos/1000/701"/>
          <Image src="https://picsum.photos/1000/702"/>
          <Image src="https://picsum.photos/1000/703"/>
        </ImageReel>
      </Section>
      <Section>
        <Container isFullWidth>
          <Video id={597291369}/>
          <Video id={597291369}/>
          <Video id={597291369}/>
          <Video id={597291369}/>
          <Video id={597291369}/>
        </Container>
      </Section>
    </main>
  )
}

export default Home
