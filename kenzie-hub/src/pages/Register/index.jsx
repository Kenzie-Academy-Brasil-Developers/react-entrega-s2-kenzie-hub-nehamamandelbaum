import { Container, Form, Header } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

import logo from "../../assets/logo.svg";

const Register = () => {
  return (
    <>
      <Header>
        <div>
          <img src={logo} alt="Kenzie Hub Logo" />
          <Button>Voltar</Button>
        </div>
      </Header>
      <Container>
        <Form>
          <h1>Crie sua Conta</h1>
          <span>Rápido e grátis, vamos nessa</span>
          <Input label="Nome" placeholder="Digite aqui o seu nome"></Input>
          <Input label="Email" placeholder="Digite aqui o seu email"></Input>
          <Input label="Senha" placeholder="Digite aqui a sua senha"></Input>
          <Input
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
          ></Input>
          <Select
            options={["Primeiro Módulo", "Segundo Módulo", "Terceiro Módulo"]}
            label="Selecionar Módulo"
          ></Select>

          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
