import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import SEO from '../SEO'
import { GlobalStyles, Wrapper } from './styles'
import theme from '../../core/theme'

function Layout({ children, title, lang, description }) {
  return (
    <ThemeProvider theme={theme.defaultTheme}>
      <SEO title={title} lang={lang} description={description} />
      <GlobalStyles />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Layout.defaultProps = {
  title: 'Developer Experience',
  lang: 'en',
  description: 'Website developed for developers',
}

export default Layout
