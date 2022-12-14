import {
  Section,
  Title,
  Button,
  Subtitle,
} from "./style";
import { useRouter } from "next/router";
import {  getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Student from "../../models/Student.model";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
const Home = () => {
  const router = useRouter();

  const [infoData, setInfoData]= useState<Student>();

  useEffect(() => {
    try {
      const info: Student = JSON.parse(getCookie("info") as string);
      setInfoData(info);
    } catch (error) {
      toast.error(`Error: Inicie uma sessão`);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, []);

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
        limit={1}
        pauseOnHover
      />
      <Title>Seja bem vindo {infoData ? infoData.name : 'Usuário' }</Title>
      <Subtitle>
        Que tal dar um <span>match</span> na sua carreira?
      </Subtitle>
      <Button onClick={() => router.push("/match")}>Match</Button>
    </Section>
  );
};
export default Home;
