import styled from "styled-components";
import Link from "next/link";
import { AiFillForward, AiFillBackward, AiOutlineUser } from "react-icons/ai";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  width: 100%;

  flex-grow: 1;
`;

export const Loading = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Card = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rebeccapurple;
  @media (max-width: 768px) {
    width: 300px;
    height: 100%;
    flex-direction: column;
  }
`;
export const DivDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2px 10px;
  padding: 5px;
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
    background: rebeccapurple;
  }
  @media (max-width: 768px) {
    &:hover {
      background: none;
    }
  }
`;
export const BtnMentoria = styled.button`
  display: center;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: transparent;
  width: 80px;
  border-radius: 10px;
  height: 64px;
  border: 3px solid #fff;
  transition: background 0.3s;
  margin: 10px 10px;

  cursor: pointer;

  bottom: 0;
  &:hover {
    background: green;
  }
`;
export const DivNotExist = styled.div`
  border-radius: 30px;
  height: 64px;
  margin: 5px;
  width: 80px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AiNext = styled(AiFillForward)`
  margin-top: 8px;
`;
export const AiBack = styled(AiFillBackward)`
  margin-top: 8px;
`;
export const AiUser = styled(AiOutlineUser)`
  margin-top: 8px;
`;

export const ProfileImage = styled.div`
  height: 80px;
  width: 200px;
  background-color: transparent;
  border-radius: 10px;
  margin: 5px;
  border: none;
  @media (max-width: 768px) {
    width: 100px;
    flex-direction: column;
  }
`;

export const Info = styled.span`
  color: #fff;
`;
export const Response = styled.span`
  color: #fff;
`;

export const Detail = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 5px;
  padding: 2px;
  @media (max-width: 768px) {
    width: 160px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Information = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Mentorships = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const InfoMentorship = styled.div`
  color: #fff;
  margin: 5px;
`;

export const TextMentorship = styled.span`
  color: #fff;
  margin: 5px;
`;

export const Match = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
