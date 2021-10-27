import React, { FC, useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Link from '../../components/Link'
import { checkCookie, setCookie } from '../../helpers/cookies'
import { BaseProps } from '../../models'

const PolicyBanner: FC<BaseProps> = () => {
  const [ isShown, setIsShown ] = useState(false)

  useEffect(() => {
    if (isShown) return
    const isPolicyAccepted = checkCookie('is_policy_accepted')
    if (isPolicyAccepted !== 'true') setIsShown(true)
  }, [])

  const handleAccept = () => {
    setCookie('is_policy_accepted', 'true', 15)
    setIsShown(false)
  }

  return (
    <Banner isShown={isShown}>
      <Text size="s" styles={{ flex: 1 }}>
        This website uses cookies to provide personalized use to the Web user. If you continue browsing we consider that you accept its use.
        <Link href="#">
          <Text size="s">Privacy Policy</Text>
        </Link>
      </Text>
      <Button onClick={handleAccept} styles={{ marginLeft: 'auto' }}>Accept</Button>
    </Banner>
  )
}

export default PolicyBanner
