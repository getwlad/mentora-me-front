import styled from "styled-components";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";

export const Section = styled.section`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  height: 100%;

  color: white;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Div = styled.div`
  width: 100%;
`;
export const DivInputs = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 10px;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: column;

    width: 300px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 5rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    justify-content: stretch;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  padding: 10px;
  margin: 5px;
  color: black;
  background-color: #fff;

  &::placeholder {
    color: black;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
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

export const AiIcon = styled(AiOutlineLogin)`
  margin-top: 8px;
`;
