import Modal from "react-modal";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

import { colorPrimaryNegative, grey1, grey2 } from "../../styles/global";

import { ButtonContainer } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const TechDetailsModal = ({ isOpen, onRequestClose, tech }) => {
  const schema = yup.object().shape({
    title: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

  const onSubmitFunction = (data) => {
    api
      .put(`/users/techs/${tech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>
        toast.success("Tecnologia atualizada com sucesso!", { theme: "dark" })
      )
      .catch((err) => console.log(err));
    onRequestClose();
  };

  function deleteTech(tech) {
    api
      .delete(`/users/techs/${tech.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) =>
        toast.success("Tech apagado com sucesso!", { theme: "dark" })
      )
      .catch((err) => console.log(err));
    onRequestClose();
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h3>Tecnologia Detalhes: </h3>
      <button className="close-modal" type="button" onClick={onRequestClose}>
        X
      </button>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Nome do Projeto"
          placeholder={tech.title}
          name="title"
          register={register}
          error={errors.title?.message}
          value={tech.title}
        />
        <p>Status Atual: {tech.status}</p>
        <p>Selecione o status que você quer: </p>
        <Select
          label="Status"
          options={["Iniciante", "Intermediário", "Avançado"]}
          name="status"
          register={register}
          error={errors.status?.message}
          selected={tech.status}
        />
        <ButtonContainer>
          <Button
            backgroundColor={colorPrimaryNegative}
            hoverColor={grey2}
            type="submit"
          >
            Salvar Alterações
          </Button>
          <Button
            backgroundColor={grey1}
            hoverColor={grey2}
            className="save"
            type="button"
            onClick={() => deleteTech(tech)}
          >
            Excluir
          </Button>
        </ButtonContainer>
      </form>
    </Modal>
  );
};
