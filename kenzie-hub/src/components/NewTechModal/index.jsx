import Modal from "react-modal";
import { Container } from "./styles";

import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const NewTechModal = ({ isOpen, onRequestClose }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório!"),
    status: yup.string().required("Selecione um campo! "),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const onSubmitFunction = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Tecnologia Cadastrada com sucesso!", { theme: "dark" });
      })
      .catch((err) =>
        toast.error("Você já cadastrou essa tech! ", { theme: "dark" })
      );
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h3>Cadastrar tecnologia</h3>
      <button className="close-modal" type="button" onClick={onRequestClose}>
        X
      </button>

      <Container onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Nome"
          placeholder="Digite o nome da tecnologia"
          register={register}
          error={errors.title?.message}
          name="title"
        ></Input>
        <Select
          label="Selecionar Status"
          options={["Iniciante", "Intermediário", "Avançado"]}
          register={register}
          error={errors.status?.message}
          name="status"
        ></Select>
        <Button type="submit">Cadastrar Tecnologia</Button>
      </Container>
    </Modal>
  );
};
