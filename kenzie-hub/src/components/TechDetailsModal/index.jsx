import Modal from "react-modal";

import Input from "../Input";
import Button from "../Button";
import Select from "../Select";

import { colorPrimaryNegative, grey1, grey2 } from "../../styles/global";

import { ButtonContainer } from "./styles";

Modal.setAppElement("#root");
export const TechDetailsModal = ({ isOpen, onRequestClose }) => {
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
      <form>
        <Input label="Nome do Projeto" placeholder="Exemplo" />
        <Select
          label="Status"
          options={["Iniciante", "Intermediário", "Avançado"]}
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
