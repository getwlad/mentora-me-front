import {
  Section,
  Div,
  Title,
  Form,
  Input,
  Button,
  AiIcon,
  DivInputs,
  LoadIcon,
} from "./style";
import Image from "next/image";
import loading from "./../../public/icons/loading.svg";
import Head from "next/head";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import Link from "next/link";
import { BrowserRouter as Router, useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef } from "react";
import api from "../../services/api.service";
const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const ref = useRef(null);
  const verifyKeyPressed = async (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      await login();
    }
  };

  const login = async () => {
    setClicked(true);
    const resp = await api
      .post("/user/login", {
        email,
        password,
      })
      .catch((e) => {
        toast.error(`Error: ${e.response.data.error}`);
      });

    if (!resp) return;

    setCookie("user", JSON.stringify(resp.data));
    const token = resp.data.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (resp.data.user.user_type === "STUDENT") {
      const studentResponse = await api
        .get("/student/show", config)
        .catch((e) => {
          toast.error(`Error: ${e.response.data.error}`);
        });
      if (!studentResponse) {
        return;
      }
      setCookie("info", JSON.stringify(studentResponse.data));
      router.push("/dashboard");
    }
    setClicked(false);
  };

  return (
    <Section>
      <Head>
        <title>Mentora-Me</title>
      </Head>
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
          id="btn-login"
          onClick={async () => {
            await login();
            setClicked(false);
          }}
          ref={ref}
        >
          {clicked ? (
            <Image src={loading} alt="po" height={42} width={42} />
          ) : (
            <AiIcon size={42} />
          )}
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
