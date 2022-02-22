import { Container } from "./styles";

const Input = ({ label, placeholder, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <input type="text" placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
