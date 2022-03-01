import { Container, Form } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { grey1, grey2 } from "../../styles/global";

import logo from "../../assets/logo.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory, Redirect } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const redirectToRegister = () => history.push("/register");
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório!"),
    password: yup.string().required("Campo obrigatório! "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@kenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@kenzieHub:user", JSON.stringify(user));
        setAuthenticated(true);
        return history.push("/");
      })
      .catch((err) =>
        toast.error("Email ou senha inválidos! ", { theme: "dark" })
      );
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Container>
        <img src={logo} alt="" />
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>

          <Input
            label="Email"
            placeholder="Digite aqui o seu email"
            register={register}
            name="email"
            error={errors.email?.message}
          ></Input>
          <Input
            label="Senha"
            placeholder="Digite aqui a sua senha"
            register={register}
            name="password"
            error={errors.email?.message}
          ></Input>

          <Button type="submit">Entrar</Button>
          <span className="create--account">Ainda não possui um conta? </span>
          <Button
            backgroundColor={grey1}
            hoverColor={grey2}
            type="button"
            onClick={redirectToRegister}
          >
            Cadastre-se
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
