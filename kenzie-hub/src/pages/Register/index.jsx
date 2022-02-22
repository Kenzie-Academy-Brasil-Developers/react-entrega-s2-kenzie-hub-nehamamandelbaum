import { Container, Form } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Register = () => {
  return (
    <>
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

          <Button>Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
