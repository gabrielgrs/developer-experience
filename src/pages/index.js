import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Bash from '../components/Bash'
import { getRandomEmoji } from '../helpers/emojis'

import { Main, Title, Heart, TypeWritter } from '../styles/home'

function Home() {
  useEffect(() => {
    console.log(`%cHi there! ~ ${getRandomEmoji()}}`, 'color: #8338EC;')
  }, [])

  return (
    <Layout>
      <Main>
        <Title>
          <TypeWritter index={0}>
            Welcome{' '}
            <i>
              <u>dear</u>veloper
            </i>
          </TypeWritter>
          <TypeWritter index={1}>Let's embrace our dreams!</TypeWritter>
        </Title>
        <Heart>
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
        </Heart>
        <Bash interative initialMessages={[{ message: 'Hi there! ~ 👋' }]} />
      </Main>
    </Layout>
  )
}

export default Home
