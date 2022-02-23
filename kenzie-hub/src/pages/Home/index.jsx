import { Header, NavBar, Main, TitleContainer, CardContainer } from "./styles";
import Button from "../../components/Button";

import Card from "../../components/Card";

import logo from "../../assets/logo.svg";

const Home = () => {
  return (
    <>
      <NavBar>
        <div>
          <img src={logo} alt="Kenzie Hub Logo" />
          <Button>Voltar</Button>
        </div>
      </NavBar>

      <Header>
        <div>
          <h1>Olá, Samule Leão</h1>
          <span>Primeiro Módulo (Introdução ao Front-End)</span>
        </div>
      </Header>
      <Main>
        <TitleContainer>
          <h2>Tecnologias</h2>
          <Button>+</Button>
        </TitleContainer>
        <CardContainer>
          <Card name="React.js" level="Avançado"></Card>
          <Card name="React.js" level="Avançado"></Card>
          <Card name="React.js" level="Avançado"></Card>
          <Card name="React.js" level="Avançado"></Card>
          <Card name="React.js" level="Avançado"></Card>
          <Card name="React.js" level="Avançado"></Card>
          <Card name="React.js" level="Avançado"></Card>
          <Card name="React.js" level="Avançado"></Card>
        </CardContainer>
      </Main>
    </>
  );
};

export default Home;
