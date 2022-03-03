import { Container } from "./styles";

const Card = ({ tech, ...rest }) => {
  return (
    <Container {...rest}>
      <h3>{tech.title}</h3>
      <span>{tech.status}</span>
    </Container>
  );
};

export default Card;
