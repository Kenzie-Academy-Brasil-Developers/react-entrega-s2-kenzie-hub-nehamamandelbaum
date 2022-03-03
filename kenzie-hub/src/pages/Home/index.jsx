import { Header, NavBar, Main, TitleContainer, CardContainer } from "./styles";
import Button from "../../components/Button";

import Card from "../../components/Card";

import logo from "../../assets/logo.svg";

import { useState } from "react";
import { NewTechModal } from "../../components/NewTechModal";

import { TechDetailsModal } from "../../components/TechDetailsModal";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../services/api";

Modal.setAppElement("#root");

const Home = ({ authenticated }) => {
  const [isNewTechModalOpen, setIsNewTechModalOpen] = useState(false);

  function openNewTechModal() {
    setIsNewTechModalOpen(true);
  }

  function closeNewTechModal() {
    setIsNewTechModalOpen(false);
  }

  const [isTechDetailsModalOpen, setIsTechDetailsModalOpen] = useState(false);

  function openTechDetailsModal() {
    setIsTechDetailsModalOpen(true);
  }

  function closeTechDetailsModal() {
    setIsTechDetailsModalOpen(false);
  }

  const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  const [userTechs, setUserTechs] = useState([]);

  function loadTechs() {
    api
      .get(`/users/${user.id}`)
      .then((response) => setUserTechs(response.data.techs))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadTechs();
  }, []);

  // Fazer o useEffect para a requisição das tecnologias, colocar no estado e listar.

  if (!authenticated) {
    return <Redirect to="/login" />;
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
          <h1>Olá, {user.name}!</h1>
          <span>{user.course_module}</span>
        </div>
      </Header>
      <Main>
        <TitleContainer>
          <h2>Tecnologias</h2>
          <Button onClick={openNewTechModal}>+</Button>
        </TitleContainer>
        <CardContainer>
          {userTechs.map((tech) => {
            return <Card tech={tech} onClick={openTechDetailsModal} />;
          })}
        </CardContainer>
        <NewTechModal
          isOpen={isNewTechModalOpen}
          onRequestClose={closeNewTechModal}
        />
        <TechDetailsModal
          isOpen={isTechDetailsModalOpen}
          onRequestClose={closeTechDetailsModal}
        />
      </Main>
    </>
  );
};

export default Home;
