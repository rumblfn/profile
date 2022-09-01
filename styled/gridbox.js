import styled from "styled-components";

export const GridWorksWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 960px) {
    padding: 0 64px 48px 48px;
  }

  @media screen and (max-width: 550px) {
    padding: 0 36px 24px 24px;
  }
`

export const GridWorksBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  
  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`