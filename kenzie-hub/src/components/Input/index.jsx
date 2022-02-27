import { Container } from "./styles";

const Input = ({ label, placeholder, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </Container>
  );
};

export default Input;
