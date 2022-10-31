import {
  Section,
  Card,
  Title,
  DivDetails,
  Info,
  Response,
  Information,
  Detail,
  Button,
  AiIcon,
  Mentorships,
  ProfileImage,
  TextMentorship,
  InfoMentorship,
  Match,
  AiNext,
  AiBack,
  DivNotExist,
  AiUser,
  BtnMentoria,
  Loading,
} from "./style";
import Head from "next/head";
import Link from "next/link";
import { BrowserRouter as Router, useRouter } from "next/router";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { useState, useEffect } from "react";
import api from "../../services/api.service";

const Home = () => {
  const router = useRouter();
  const [mentorsData, setMentorsData] = useState({ name: "Usuario" });
  useEffect(() => {
    try {
      const userData = JSON.parse(getCookie("user"));
      const token = userData.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      api.get("/student/show", config).catch((e) => {
        console.log(e);
        router.push("/");
      });
      if (userData.user.user_type === "STUDENT") {
        api
          .get("/student/match", config)
          .then((resp) => {
            setMentorsData(resp.data);
          })
          .catch((e) => console.log(e));
      }
    } catch (error) {
      console.log(error);
      router.push("/");
    }
  }, []);

  const [mentorAtual, setMentorAtual] = useState(0);
  let mentors;
  if (mentorsData.length > 0) {
    mentors = mentorsData.map((mentor) => {
      return (
        <>
          <Information>
            <Detail>
              <Info>Nome:</Info>
              <Response>{mentor.name}</Response>
            </Detail>
            <Detail>
              <Info>Telefone:</Info>
              <Response>{mentor.phone}</Response>
            </Detail>
            <Detail>
              <Info>Email:</Info>
              <Response>{mentor.publicEmail}</Response>
            </Detail>
            <Detail>
              <Info>Área de mentoria:</Info>
              <Response>{mentor.InterestArea.mentoring_area}</Response>
            </Detail>
          </Information>
          <Mentorships>
            <TextMentorship>Mentorias:</TextMentorship>
            {mentor.Mentorships.map((mentorship) => {
              return (
                <>
                  <InfoMentorship>
                    <TextMentorship>{mentorship.name}</TextMentorship>
                  </InfoMentorship>
                </>
              );
            })}
          </Mentorships>
          <BtnMentoria>Obter mentoria</BtnMentoria>
        </>
      );
    });
  }

  const nextMentor = () => {
    if (mentorAtual + 1 > mentorsData.length - 1) {
      setMentorAtual(mentorAtual);
      return;
    }
    setMentorAtual(mentorAtual + 1);
  };
  const backMentor = () => {
    if (mentorAtual - 1 < 0) {
      setMentorAtual(mentorAtual);
      return;
    }
    setMentorAtual(mentorAtual - 1);
  };
  return mentorsData.length > 0 ? (
    <Section>
      <Head>
        <title>Mentora-Me</title>
      </Head>
      <Title>Seu melhor match é</Title>
      <Match>
        {mentorAtual === 0 ? (
          <DivNotExist />
        ) : (
          <Button
            onClick={() => {
              backMentor();
            }}
          >
            <AiBack></AiBack>
          </Button>
        )}

        <Card>
          <ProfileImage>
            <AiUser size={100}></AiUser>
          </ProfileImage>
          <DivDetails>{mentors[mentorAtual]}</DivDetails>
        </Card>
        {mentorAtual + 1 > mentorsData.length - 1 ? (
          <DivNotExist />
        ) : (
          <Button
            onClick={() => {
              nextMentor();
            }}
          >
            <AiNext></AiNext>
          </Button>
        )}
      </Match>
    </Section>
  ) : (
    <Loading>
      <Title>Carregando dados....</Title>
    </Loading>
  );
};
export default Home;
