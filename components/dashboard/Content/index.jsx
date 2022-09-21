import {
  Section,
  Div,
  Title,
  Form,
  Input,
  Button,
  AiIcon,
  DivInputs,
  Subtitle,
} from "./style";
import Link from "next/link";
import { BrowserRouter as Router, useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const router = useRouter();
  const once = useRef(true);
  const [infoData, setInfoData] = useState({ name: "Usuario" });

  useEffect(() => {
    try {
      if (once.current) {
        toast.success("Login efetuado com sucesso");
        once.current = false;
      }
      const userData = JSON.parse(getCookie("user"));
      const info = JSON.parse(getCookie("info"));
      setInfoData(info);
    } catch (error) {
      toast.error(`Error: Inicie uma sessão`);
      router.push("/");
    }
  }, []);

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
        limit={1}
        pauseOnHover
      />
      <Title>Seja bem vindo {infoData.name}</Title>
      <Subtitle>
        Que tal dar um <span>match</span> na sua carreira?
      </Subtitle>
      <Button onClick={() => router.push("/match")}>Match</Button>
    </Section>
  );
};
export default Home;
