import styled from "styled-components";

export const PricingSectionWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  width: 80%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (max-width: 960px) {
    width: 90%;
    gap: 32px;
  }

  @media screen and (max-width: 550px) {
    width: 100%;
    gap: 24px;
  }
`
