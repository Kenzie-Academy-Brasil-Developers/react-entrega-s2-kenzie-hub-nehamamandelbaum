import { Container } from "./styles";

const Card = ({ name, level, ...rest }) => {
  return (
    <Container {...rest}>
      <h3>{name}</h3>
      <span>{level}</span>
    </Container>
  );
};

export default Card;
