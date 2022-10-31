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
import {useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";
import api from "../../services/api.service";
import Mentor  from "../../models/Mentor.model";
import { AxiosResponse } from "axios";
const Home = () => {
  const router = useRouter();
  const [mentorsData, setMentorsData] = useState<Mentor[]>([]);
  useEffect(() => {
    const loadMentors = async(config: {}) =>{
      const response: AxiosResponse | any = await api
      .get<Mentor[]>("/student/match", config)
      .catch((e) => console.log(e));
    if(!response) return;
      setMentorsData(response.data);
    }
    try {
      const userData = JSON.parse(getCookie("user") as string);
      const token = userData.token;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      api.get("/student/show", config).catch((e) => {
        console.log(e);
        router.push("/");
      });
      if (userData.user.user_type === "STUDENT") {
        loadMentors( config);
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
