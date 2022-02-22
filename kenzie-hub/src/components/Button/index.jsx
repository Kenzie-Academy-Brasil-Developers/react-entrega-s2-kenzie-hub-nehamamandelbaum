import { colorPrimaryFocus } from "../../styles/global";
import { Container } from "./styles";

const Button = ({
  children,
  backgroundColor = "#ff577f",
  small = false,
  hoverColor = colorPrimaryFocus,
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      small={small}
      hoverColor={hoverColor}
    >
      {children}
    </Container>
  );
};

export default Button;
