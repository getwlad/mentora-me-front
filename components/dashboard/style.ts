import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  color: white;
  width: 100%;
  position: relative;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  color: #fff;
`;
export const Subtitle = styled.h2`
  color: #fff;
`;

export const Button = styled.button`
  display: center;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: transparent;
  width: 80px;
  border-radius: 30px;
  height: 64px;
  border: 3px solid #fff;
  transition: background 0.3s;
  margin: 10px 10px;

  cursor: pointer;

  &:hover {
    background: green;
  }
  @media (max-width: 768px) {
    &:hover {
      background: green;
    }
  }
`;
