import { Nav, Label } from "./style";
import { Snackbar, Alert, AlertProps } from "@mui/material";
import { useState } from "react";
const Header = (props) => {
  return (
    <Nav>
      <Label href="#">Home</Label>
      <Label href="#">Mentores</Label>
      <Label href="#">Sobre</Label>
    </Nav>
  );
};

export default Header;
