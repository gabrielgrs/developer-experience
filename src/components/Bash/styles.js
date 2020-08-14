import styled from 'styled-components'

import { TerminalFill } from '@styled-icons/bootstrap/TerminalFill'

export const Wrapper = styled.div`
  position: ${({ isFullscreen }) => (isFullscreen ? 'absolute' : 'initial')};
  top: 0;
  left: 0;
  background: #0d0d0d;
  border-radius: 8px;
  width: 100%;
  max-width: ${({ isFullscreen }) => (isFullscreen ? 'initial' : '500px')};
  height: ${({ isFullscreen }) => (isFullscreen ? '100%' : '300px')};
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.2);
  animation: appears 500ms ease-in-out;
  transition: width 1s ease-in-out;

  @keyframes appears {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

export const Header = styled.div`
  border-radius: 8px;
  background: #0d0d0d;
  color: silver;
  display: flex;
  padding: 10px;
  justify-content: space-between;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  padding: 10px;
  line-height: 30px;
  max-height: ${({ isFullscreen }) =>
    isFullscreen ? 'calc(100% - 50px)' : '260px'};
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    margin: 5px 0;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

export const Dot = styled.div`
  cursor: pointer;
  opacity: 0.7;
  margin: 0 5px 2px;
  width: 11px;
  height: 11px;
  border-radius: 100px;
  background: ${({ color }) => color};

  &:hover {
    opacity: 1;
  }
`

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.primary};
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
`

export const Message = styled.div`
  font-size: ${({ theme }) => theme.fonts.size};

  & input {
    font-size: ${({ theme }) => theme.fonts.size};
  }

  &:before {
    content: '~ ';
    color: ${({ theme, isInput }) =>
      isInput ? theme.colors.primary : theme.colors.black};
  }
`

export const BashIcon = styled(TerminalFill)`
  position: fixed;
  left: 0;
  top: 0;
  height: 70px;
  width: 70px;
`

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 70px;
  background: ${({ theme }) => theme.colors.black};
`
