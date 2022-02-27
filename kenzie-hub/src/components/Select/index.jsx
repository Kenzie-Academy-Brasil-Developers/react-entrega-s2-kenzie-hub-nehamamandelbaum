import { Container, ContainerDiv } from "./styles";

const Select = ({ options, label, register, name, error, ...rest }) => {
  return (
    <ContainerDiv>
      <label>
        {" "}
        {label} {!!error && <span>{error}</span>}
      </label>

      <Container {...register(name)} {...rest}>
        {options.map((option, index) => (
          <option value={option.toLowerCase()} key={index}>
            {option}
          </option>
        ))}
      </Container>
    </ContainerDiv>
  );
};

export default Select;
