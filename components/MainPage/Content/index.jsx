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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import api from "../../../services/api.service";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const verifyKeyPressed = async (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      await login();
    }
  };
  const login = async () => {
    api
      .post("/user/login", {
        email,
        password,
      })
      .then((resp) => {
        if (resp.data.auth) {
          setCookie("user", JSON.stringify(resp.data));

          const token = resp.data.token;
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };
          if (resp.data.user.user_type === "STUDENT") {
            api
              .get("/student/show", config)
              .then((respShow) => {
                setCookie("info", JSON.stringify(respShow.data));
                router.push("/dashboard");
              })

              .catch((e) => {
                toast.error(`Error: ${e.response.data.error}`);
              });
          }
        }
      })
      .catch((e) => {
        toast.error(`Error: ${e.response.data.error}`);
      });
  };

  return (
    <Section>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

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
            onKeyUp={(e) => {
              verifyKeyPressed(e);
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
            onKeyUp={(e) => {
              verifyKeyPressed(e);
            }}
          />
        </DivInputs>

        <Button
          onClick={async () => {
            await login();
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
