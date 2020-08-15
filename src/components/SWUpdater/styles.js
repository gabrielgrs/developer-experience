import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d0d0d;
  border-radius: 2px;
  box-shadow: 0px 0px 5px 0px rgba(255, 255, 255, 0.2);
  position: fixed;

  width: 340px;
  right: calc(50vw - 340px / 2);
  padding: 20px 10px;

  animation: moveUp 1s ease-in-out both;

  @keyframes moveUp {
    from {
      bottom: -50px;
      opacity: 0;
    }

    to {
      bottom: 30px;
      opacity: 1;
    }
  }
`

export const Text = styled.p``

export const Icon = styled.div`
  color: white;
  width: 30px;
  height: 30px;
  margin: 0 10px;
`
