import styled from "styled-components";

import { MdSearch } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;

  background-image: linear-gradient(#7143e3, #5c2ede);
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: black;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;

  &::placeholder {
    color: #191919;
  }
`;
export const Button = styled.button`
  display: center;
  align-items: center;
  justify-content: center;

  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid #ffff;
  transition: background 0.3s;

  &:hover {
    background: #fefefe;
  }
`;

export const MdIcon = styled(MdSearch)`
  margin-top: 8px;
`;
