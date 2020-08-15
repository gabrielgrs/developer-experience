import React from 'react'
import Layout from '../components/Layout'
import { Wrapper } from '../styles/notFound'
import { getRandomEmoji } from '../helpers/emojis'

function NotFound() {
  return (
    <Layout>
      <Wrapper>
        <h1>Page not found ~ {getRandomEmoji()}</h1>
      </Wrapper>
    </Layout>
  )
}

export default NotFound
