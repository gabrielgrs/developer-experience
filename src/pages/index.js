import React from 'react'
import Layout from '../components/Layout'

import {
  Main,
  Title,
  Heart,
  Bash,
  BashHeader,
  BashActions,
  BashContent,
  Dot,
  TypeWritter,
} from '../styles/home'

function Home() {
  return (
    <Layout>
      <Main>
        <Title>
          Welcome{' '}
          <i>
            <u>dear</u>veloper
          </i>
        </Title>
        <Heart>
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
        </Heart>
        <Bash>
          <BashHeader>
            <div>Bash ~</div>
            <BashActions>
              <Dot color="red" />
              <Dot color="yellow" />
              <Dot color="green" />
            </BashActions>
          </BashHeader>
          <BashContent>
            <div>{'>'} console.log('developer')</div>
            <TypeWritter index={0}>Let's learn together!</TypeWritter>
            <TypeWritter index={1}>Let's embrace our dreams!</TypeWritter>
          </BashContent>
        </Bash>
      </Main>
    </Layout>
  )
}

export default Home
