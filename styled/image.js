import styled from "styled-components";

export const ImageBox = styled.div`
    margin: 56px 24px;
    overflow: hidden;
    border-radius: ${props => props.borderRadius ? props.borderRadius : '16px'};
    width: fit-content;
    height: fit-content;
    max-width: ${props => props.width ? props.width : '300px'};
    max-height: ${props => props.height ? props.height : '300px'};
`