import { Header, NavBar, Main, TitleContainer, CardContainer } from "./styles";
import Button from "../../components/Button";

import Card from "../../components/Card";

import logo from "../../assets/logo.svg";

import { useState } from "react";
import { NewTechModal } from "../../components/NewTechModal";

const Home = () => {
  const [isNewTechModalOpen, setIsNewTechModalOpen] = useState(false);

  function openNewTechModal() {
    setIsNewTechModalOpen(true);
  }

  function closeNewTechModal() {
    setIsNewTechModalOpen(false);
  }

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
          <Button onClick={openNewTechModal}>+</Button>
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
        <NewTechModal
          isOpen={isNewTechModalOpen}
          onRequestClose={closeNewTechModal}
        />
      </Main>
    </>
  );
};

export default Home;
