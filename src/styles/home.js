import styled, { keyframes } from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
`

export const Title = styled.h1`
  transition: background-color 300ms linear, color 1s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const Heart = styled.div`
  padding: 10px 0;
  font-size: 3rem;
`

const caret = keyframes`
  0%, 100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
`

const firstTextAnimation = keyframes`
  0%, 50%, 100% {
    width: 0;
  }

  10%, 40% {
    width: 11em;
  }
`

const secondTextAnimation = keyframes`
  0%, 50%, 100% {
    width: 0;
  }

  60%, 90% {
    width: 13em;
  }
`

const animations = {
  0: firstTextAnimation,
  1: secondTextAnimation,
}

export const TypeWritter = styled.span`
  /* animation: ${firstTextAnimation}; */
  animation: ${({ index }) => animations[index]};
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  padding: 10px 0;
  animation-duration: 18s;
  animation-timing-function: steps(25, end);
  animation-iteration-count: infinite;

  &:after {
    content: '|';
    position: absolute;
    right: 0;
    animation: ${caret} infinite;
    animation-duration: 1s;
    animation-timing-function: steps(1, end);
  }
`
