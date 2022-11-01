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
import Image from "next/image";
import loading from "./../../public/icons/loading.svg";
import Head from "next/head";
import { setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import User from "../../models/User.model";
import UserService from "../../services/user.service";
import StudentService from "../../services/student.service";
import Student from "../../models/Student.model";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const userService = new UserService();
  const studentService = new StudentService();
  const verifyKeyPressed = async (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      await login();
    }
  };

  const login = async () => {
    if (clicked) return;
    setClicked(true);
    const userResponse = await userService.login(email, password);
    if (!userResponse.auth) {
      toast.error(userResponse.error);
      return setClicked(false);
    }
    const user: User = userResponse.user;
    setCookie("user", JSON.stringify(userResponse));
    const token = userResponse.token;
    if (user.user_type === "STUDENT") {
      const student: Student | string = await studentService.getStudent(token);
      if (typeof student === "string") {
        toast.error(`Erro: ${student}`);
        return setClicked(false);
      }
      setCookie("info", JSON.stringify(student));
      toast.success("Login efetuado com sucesso");
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    }
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
          }}
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
