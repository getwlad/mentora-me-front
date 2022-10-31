import styled from "styled-components";
import { AiOutlineLogout } from "react-icons/ai";

export const Nav = styled.nav`
  display: flex;
  text-align: center;
  height: 80px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  flex-grow: 0;
`;

export const DivLogout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.a`
  font-size: 1.8rem;
  color: #fff;
  margin: 5px 5px;
  padding: 5px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
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
  height: 40px;
  border: 3px solid #fff;
  transition: background 0.3s;
  margin: 10px 10px;

  cursor: pointer;

  &:hover {
    background: red;
  }
  @media (max-width: 768px) {
    &:hover {
      background: green;
    }
  }
`;

export const AiIcon = styled(AiOutlineLogout)`
  margin-top: 4px;
`;
export const LogoutText = styled.span`
  color: #fff;
  font-size: 1.2rem;
`;
