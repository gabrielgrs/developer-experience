import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { logTypes } from '../../helpers/bash'

import {
  Wrapper,
  Header,
  Actions,
  Content,
  Dot,
  Input,
  Message,
  BashIcon,
  Sidebar,
} from './styles'

function Bash({ initialMessages, interative }) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMinized, setIsMinized] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [messages, setMessages] = useState(initialMessages)
  const [value, setValue] = useState('')

  const checkMessage = (message) => {
    const current = [{ message, type: logTypes.input }]
    return current
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const newMessages = checkMessage(value)
      setMessages((prev) => [...prev, ...newMessages])
      setValue('')
    }
  }

  const onMinimize = () => setIsMinized((prev) => !prev)
  const onMaximize = () => setIsFullscreen((prev) => !prev)

  const onClose = () => {
    setIsClosed((prev) => !prev)
    setMessages([])
  }

  if (isClosed) {
    return (
      <Sidebar>
        <BashIcon onDoubleClick={onClose} />
      </Sidebar>
    )
  }

  if (isMinized)
    return (
      <Sidebar>
        <BashIcon onClick={onMinimize} />
      </Sidebar>
    )

  return (
    <Wrapper isFullscreen={isFullscreen}>
      <Header onDoubleClick={onMaximize}>
        <div>Bash ~</div>
        <Actions>
          <Dot onClick={onMinimize} color="green" />
          <Dot onClick={onMaximize} color="yellow" />
          <Dot onClick={onClose} color="red" />
        </Actions>
      </Header>
      <Content isFullscreen={isFullscreen}>
        {messages.map((l, index) => (
          <Message isInput={l.type === logTypes.input} key={index}>
            {l.message}
          </Message>
        ))}
        <Message>
          {/* <ArrowIcon /> */}
          {interative ? (
            <Input
              value={value}
              onChange={({ target }) => setValue(target.value)}
              onKeyDown={onKeyDown}
            />
          ) : null}
        </Message>
      </Content>
    </Wrapper>
  )
}

Bash.propTypes = {
  initialMessages: PropTypes.arrayOf(PropTypes.object),
  interative: PropTypes.bool,
}

Bash.defaultProps = {
  initialMessages: [],
  interative: false,
}

export default Bash
