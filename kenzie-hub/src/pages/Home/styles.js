import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: var(--grey-4);
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 25px;

  div {
    width: 100%;
    max-width: 780px;

    display: flex;
    justify-content: space-between;
    button {
      width: 12%;
    }
  }
`;

export const Header = styled.header`
  background-color: var(--grey-4);
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 25px;
  color: var(--grey-0);

  div {
    width: 100%;
    max-width: 780px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 18px;
    }
    span {
      font-size: 12px;
      color: var(--grey-1);
    }
  }
`;

export const Main = styled.main`
  background: var(--grey-4);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 12px;
  color: var(--grey-0);
  background: var(--grey-4);
  width: 100%;
  max-width: 780px;
  padding-bottom: 20px;
  align-items: center;

  button {
    width: 10%;
  }
  h2 {
    font-size: 16px;
  }
`;

export const CardContainer = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  background: var(--grey-3);
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 780px;
  border-radius: var(--radius-inputs-buttons-cards);
`;
