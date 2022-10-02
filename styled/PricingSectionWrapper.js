import styled from "styled-components";

export const PricingSectionWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  padding: 0 96px;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (max-width: 960px) {
    padding: 0 64px 48px 48px;
  }

  @media screen and (max-width: 550px) {
    padding: 0 36px 24px 24px;
  }
`
