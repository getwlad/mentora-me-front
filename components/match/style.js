import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  height: 100%;
  width: 100%;

  background-image: linear-gradient(#6153c3, #cf9fff);
  @media (max-width: 768px) {
    overflow: scroll;
  }
`;
