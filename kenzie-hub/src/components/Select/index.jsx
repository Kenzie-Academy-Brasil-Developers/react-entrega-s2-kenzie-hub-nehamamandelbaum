import { Container, ContainerDiv } from "./styles";

const Select = ({ options, label, ...rest }) => {
  return (
    <ContainerDiv>
      <label> {label}</label>

      <Container {...rest}>
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
