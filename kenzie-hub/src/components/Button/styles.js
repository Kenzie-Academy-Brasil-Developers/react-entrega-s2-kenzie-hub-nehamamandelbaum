import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.backgroundColor};
  color: white;
  height: ${(props) => (props.small ? "32px" : "48px")};
  border-radius: var(--radius-inputs-buttons-cards);
  border: none;
  padding: 0px 20px;
  transition: 0.3s;

  :hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
