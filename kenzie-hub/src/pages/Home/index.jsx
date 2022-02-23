import Button from "../../components/Button";
import Select from "../../components/Select";

const Home = () => {
  return (
    <>
      <div> Hello World!! </div>
      <div>Essa é a Página Home</div>
      <Button>Esse é um botão de teste</Button>
      <Select
        options={["Opção 1", "Opção 2"]}
        label="Selecione seu módulo"
      ></Select>
    </>
  );
};

export default Home;
