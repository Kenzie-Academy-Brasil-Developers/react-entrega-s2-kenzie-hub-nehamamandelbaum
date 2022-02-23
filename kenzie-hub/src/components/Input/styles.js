import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  color: var(--grey-0);
  font-size: 12px;
  width: 90%;
  margin-bottom: 25px;

  div {
    margin-bottom: 15px;
  }

  input {
    background: var(--grey-2);
    border: none;
    border-radius: var(--radius-inputs-buttons-cards);
    width: 100%;
    height: 40px;
    padding-left: 16px;
    color: var(--grey-1);
  }

  input::placeholder {
    font-size: 1rem;
  }

  input:focus {
    outline: 1px solid var(--grey-0);
    color: var(--grey-0);
  }
`;
