import { Container } from "./styles";

const Card = ({ name, level }) => {
  return (
    <Container>
      <h3>{name}</h3>
      <span>{level}</span>
    </Container>
  );
};

export default Card;
