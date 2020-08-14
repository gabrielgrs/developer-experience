import React from 'react'
import { Refresh } from '@styled-icons/boxicons-regular/Refresh'
import { Wrapper, Text, Icon } from './styles'

function SWUpdater() {
  const onRefreshPage = () => window.location.reload()

  return (
    <Wrapper onClick={onRefreshPage}>
      <Text>You should refresh your application</Text>
      <Icon>
        <Refresh />
      </Icon>
    </Wrapper>
  )
}

export default SWUpdater
