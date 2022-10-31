import { Nav, Label, Button, AiIcon, DivLogout, LogoutText } from "./style";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";

const LoggedHeader = () => {
  const router = useRouter();
  const logout = () => {
    deleteCookie("user");
    deleteCookie("info");
    router.push("/");
  };
  return (
    <Nav>
      <Label href="#">Bem vindo</Label>
      <DivLogout>
        <LogoutText>Logout</LogoutText>
        <Button onClick={() => logout()}>
          <AiIcon size={20}></AiIcon>
        </Button>
      </DivLogout>
    </Nav>
  );
};

export default LoggedHeader;
