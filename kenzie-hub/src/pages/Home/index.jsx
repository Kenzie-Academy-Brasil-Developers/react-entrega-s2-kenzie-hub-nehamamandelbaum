import { Header, NavBar, Main } from "./styles";
import Button from "../../components/Button";

import logo from "../../assets/logo.svg";

import Card from "../../components/Card";

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
        <Card name="React JS" level="Intermediário"></Card>
      </Main>
    </>
  );
};

export default Home;
