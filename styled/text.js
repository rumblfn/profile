import styled from "styled-components";

export const TextHuge = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
`

export const TextHugeStyling = styled.span`
    font-size: 14vw;
    text-shadow: 0 5px 18px rgba(0,0,0,.12);
    color: ${props => props.color ? props.color : 'var(--app-color-3)'};
`