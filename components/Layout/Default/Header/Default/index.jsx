import { Nav, Label } from "./style";

const DefaultHeader = (props) => {
  return (
    <Nav>
      <Label href="#">Home</Label>
      <Label href="#">Mentores</Label>
      <Label href="#">Sobre</Label>
    </Nav>
  );
};

export default DefaultHeader;