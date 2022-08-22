import styled from "styled-components";

export const TextHuge = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
  
    @media (max-width: 832px) {
      position: relative;
      top: 0;
      left: 0;
    }
`

export const TextHugeStyling = styled.span`
    font-size: 14vw;
    text-shadow: 0 5px 18px rgba(0,0,0,.12);
    color: ${props => props.color ? props.color : 'var(--app-color-3)'};
  
    @media (max-width: 400px) {
      font-size: 64px;
    }
`