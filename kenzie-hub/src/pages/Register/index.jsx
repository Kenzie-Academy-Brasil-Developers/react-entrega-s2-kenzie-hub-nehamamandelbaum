import { Container, Form, Header } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";

import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const Register = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Mínimo 8 dígitos!"),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "Senhas diferentes! "),
    course_module: yup.string().required("Selecione um módulo!"),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({ name, email, password, course_module }) => {
    const newUser = {
      email,
      password,
      name,
      bio: "hello world",
      contact: "hello World",
      course_module,
    };
    api
      .post("/users", newUser)
      .then((response) => {
        toast.success("Conta criada com sucesso! ", { theme: "dark" });
        return history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar a conta, tente outro email!", {
          theme: "dark",
        });
      });
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Header>
        <div>
          <img src={logo} alt="Kenzie Hub Logo" />
          <Button>Voltar</Button>
        </div>
      </Header>
      <Container>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Crie sua Conta</h1>
          <span>Rápido e grátis, vamos nessa</span>
          <Input
            label="Nome"
            placeholder="Digite aqui o seu nome"
            register={register}
            name="name"
            error={errors.name?.message}
          ></Input>
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
            error={errors.password?.message}
          ></Input>
          <Input
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            register={register}
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          ></Input>
          <Select
            options={[
              "Primeiro módulo (Introdução ao Frontend)",
              "Segundo módulo (Frontend Avançado)",
              "Terceiro módulo (Introdução ao Backend)",
              "Quarto módulo (Backend Avançado)",
            ]}
            label="Selecionar Módulo"
            register={register}
            name="course_module"
            error={errors.course_module?.message}
          ></Select>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
