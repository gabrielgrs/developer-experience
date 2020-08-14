import React from 'react'
import Layout from '../components/Layout'
import Bash from '../components/Bash'

import { Main, Title, Heart, TypeWritter } from '../styles/home'

function Home() {
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
        <Bash initialMessages={[{ message: 'Hi there! ~ 👋' }]} />
      </Main>
    </Layout>
  )
}

export default Home
