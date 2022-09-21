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
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const serverUrl = "https://mentora-me.herokuapp.com/";
  const api = axios.create({
    baseURL: serverUrl,
  });
  const router = useRouter();
  const [infoData, setInfoData] = useState({ name: "Usuario" });
  useEffect(() => {
    try {
      const userData = JSON.parse(getCookie("user"));
      const info = JSON.parse(getCookie("info"));
      setInfoData(info);
    } catch (error) {
      console.log(error);
      router.push("/");
    }
  }, []);

  return (
    <Section>
      <Title>Seja bem vindo {infoData.name}</Title>
      <Subtitle>
        Que tal dar um <span>match</span> na sua carreira?
      </Subtitle>
      <Button onClick={() => router.push("/match")}>Match</Button>
    </Section>
  );
};
export default Home;
