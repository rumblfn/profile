import styled from "styled-components";

export const PageBox = styled.div`
    padding: ${props => props.padding ? props.padding : '64px'};
    background-color: ${props => props.color ? props.color : 'var(--app-color-3)'};
    height: ${props => props.height ? props.height : 'calc(100vh - 64px)'};
    width: 100vw;
    position: relative;
`