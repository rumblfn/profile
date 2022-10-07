import styled from "styled-components";

export const PageBox = styled.div`
    padding: ${props => props.padding ? props.padding : '64px'};
    background: ${props => props.color ? props.color : 'linear-gradient(-45deg, var(--gr-color-1), var(--gr-color-2), var(--gr-color-3), var(--gr-color-4))'};
    min-height: ${props => props.height ? props.height : 'calc(100vh - 64px)'};
    width: 100vw;
    position: relative;
    animation: gradient 15s ease infinite;
    z-index: 2;
    background-size: 400% 400%;
    overflow: hidden !important;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`