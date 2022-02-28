import Modal from "react-modal";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

import { colorPrimaryNegative, grey1, grey2 } from "../../styles/global";

import { ButtonContainer } from "./styles";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const TechDetailsModal = ({ isOpen, onRequestClose }) => {
  const schema = yup.object().shape({
    name: yup.string(),
    status: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => console.log(data);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h3>Tecnologia Detalhes </h3>
      <button className="close-modal" type="button" onClick={onRequestClose}>
        X
      </button>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          label="Nome do Projeto"
          placeholder="Exemplo"
          name="name"
          register={register}
          error={errors.name?.message}
        />
        <Select
          label="Status"
          options={["Iniciante", "Intermediário", "Avançado"]}
          name="status"
          register={register}
          error={errors.status?.message}
        />
        <ButtonContainer>
          <Button backgroundColor={colorPrimaryNegative} hoverColor={grey2}>
            Salvar Alterações
          </Button>
          <Button backgroundColor={grey1} hoverColor={grey2} className="save">
            Excluir
          </Button>
        </ButtonContainer>
      </form>
    </Modal>
  );
};
