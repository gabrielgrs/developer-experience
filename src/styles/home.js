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

export const Bash = styled.div`
  background: #0d0d0d;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.2);
`

export const BashHeader = styled.div`
  border-radius: 8px;
  background: #0d0d0d;
  color: silver;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`

export const BashActions = styled.div`
  display: flex;
  align-items: center;
`

export const BashContent = styled.div`
  padding: 10px;
  line-height: 30px;
  height: 300px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    margin: 5px 0;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const Dot = styled.div`
  margin: 0 5px 2px;
  width: 11px;
  height: 11px;
  border-radius: 100px;
  background: ${({ color }) => color};
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
    width: 10em;
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
