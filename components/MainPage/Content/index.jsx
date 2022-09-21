import {
  Section,
  Div,
  Title,
  Form,
  Input,
  Button,
  AiIcon,
  DivInputs,
} from "./style";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import Link from "next/link";
import { BrowserRouter as Router, useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const serverUrl = "https://mentora-me.herokuapp.com/";
  const api = axios.create({
    baseURL: serverUrl,
  });
  const login = async () => {
    api
      .post("/user/login", {
        email,
        password,
      })
      .then((resp) => {
        if (resp.data.auth) {
          setCookie("user", resp.data);
          const token = resp.data.token;
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          if (resp.data.user.user_type === "STUDENT") {
            api
              .get("/student/show", config)
              .then((resp) => {
                setCookie("info", resp.data);
              })
              .catch((e) => {
                console.log(e);
                router.push("/");
              });
          }
          router.push("/dashboard");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Section>
      <Div>
        <Title>
          Encontre
          <br />o mentor
          <br /> perfeito
        </Title>
      </Div>
      <Form>
        <DivInputs>
          <Input
            placeholder="Email"
            type="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Senha"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </DivInputs>

        <Button
          onClick={async () => {
            await login();
            // router.push("/dashboard")
          }}
        >
          <AiIcon size={42} />
        </Button>

        <span>
          Ainda não tem uma conta?{" "}
          <Link href="/register">
            <a>Registre-se</a>
          </Link>
        </span>
      </Form>
    </Section>
  );
};
export default Home;
