import styled from "styled-components";

export const TextHuge = styled.div`
    margin-top: 1%;
    margin-left: 2%;
    display: flex;
    flex-direction: column;
  
    @media (max-width: 832px) {
      position: relative;
      top: 0;
      left: 0;
    }
`

export const TextHugeStyling = styled.span`
    font-size: ${props => props.size ? props.size : '14vw'};
    text-shadow: 0 5px 18px rgba(0,0,0,.12);
    color: ${props => props.color ? props.color : 'var(--app-color-2)'};
    line-height: 105%;

    @media (min-width: 1440px) {
      font-size: ${props => props.size ? props.size : '10vw'};
    }
  
    @media (max-width: 400px) {
      font-size: ${props => props.minSize ? props.minSize : '64px'};
    }
`

export const TextHugeHeadingStyling = styled.span`
    font-size: ${props => props.size ? props.size : '4vw'};
    text-shadow: 0 5px 18px rgba(0,0,0,.12);
    color: ${props => props.color ? props.color : 'var(--app-color-2)'};
    line-height: 105%;
    

    @media (min-width: 1440px) {
      font-size: ${props => props.size ? props.size : '10vw'};
    }

    @media screen and (max-width: 800px) {
      font-size: ${props => props.minSize ? props.minSize : '64px'};
    }
`

export const TextHugeHeadingBoxStyling = styled.div`
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`