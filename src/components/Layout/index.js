import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, Wrapper } from './styles'
import theme from '../../core/theme'

function Layout({ children }) {
  return (
    <ThemeProvider theme={theme.defaultTheme}>
      <GlobalStyles />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

export default Layout
