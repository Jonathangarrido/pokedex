import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  width: 100vw;
  z-index: 999;
`

const Common = styled.div`
  height: 50vh;
  overflow: hidden;
  position: relative;
  :before{
    background: #000;
    content: '';
    height: 20px;
    position: absolute;
    width: 100vw;
  }
`

export const Top = styled(Common)`
  background: #C71410;
  :before{
    bottom: 0;
  }
  >div{
    bottom: 0;
    transform: translate(-50%,50%);
  }
`

export const Bottom = styled(Common)`
  background: #fff;
  :before{
    top: 0;
  }
  >div{
    top: 0;
    transform: translate(-50%,-50%);
  }
`

export const Center = styled.div`
  background: #fff;
  border-radius: 50%;
  border: 16px solid #000; 
  height: 150px;
  left: 50%;
  position: absolute;
  width: 150px;
`

const load = keyframes`
  0% { 
    background: #C9CBD6; 
  }
  50% { 
    background: #C71410; 
    box-shadow: 0 0 75px #C71410;
  }
  100% { 
    background: #C9CBD6; 
  }
`

export const Button = styled(Center)`
  animation: ${load} 1s infinite;
  border: 0;
  border: none;
  height: 80px;
  width: 80px;
`