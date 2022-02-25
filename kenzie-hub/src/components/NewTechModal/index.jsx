import Modal from "react-modal";
import { Container } from "./styles";

import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

export const NewTechModal = ({ isOpen, onRequestClose }) => {
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

      <Container>
        <Input label="Nome" placeholder="Digite o nome da tecnologia"></Input>
        <Select
          label="Selecionar Status"
          options={["Iniciante", "Intermediário", "Avançado"]}
        ></Select>
        <Button type="submit">Cadastrar Tecnologia</Button>
      </Container>
    </Modal>
  );
};
