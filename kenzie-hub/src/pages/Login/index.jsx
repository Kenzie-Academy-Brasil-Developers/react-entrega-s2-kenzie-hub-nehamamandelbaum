import { Container, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { grey1, grey2 } from "../../styles/global";

import logo from "../../assets/logo.svg";

const Login = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="" />
        <Form>
          <h1>Login</h1>

          <Input label="Email" placeholder="Digite aqui o seu email"></Input>
          <Input label="Senha" placeholder="Digite aqui a sua senha"></Input>

          <Button>Entrar</Button>
          <span>Ainda não possui um conta? </span>
          <Button backgroundColor={grey1} hoverColor={grey2}>
            Cadastre-se
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
