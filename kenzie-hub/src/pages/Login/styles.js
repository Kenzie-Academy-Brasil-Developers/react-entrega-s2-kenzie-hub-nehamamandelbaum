import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  padding: 22px 42px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 370px;
  background: var(--grey-3);
  margin: 0px 12px;
  border-radius: var(--radius-inputs-buttons-cards);
  padding: 40px 0px;

  h1 {
    color: var(--grey-0);
    font-size: var(--title-1);
  }

  span {
    color: var(--grey-1);
    font-size: 12px;
    margin: 25px 0px;
  }
`;

export const Header = styled.header`
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
