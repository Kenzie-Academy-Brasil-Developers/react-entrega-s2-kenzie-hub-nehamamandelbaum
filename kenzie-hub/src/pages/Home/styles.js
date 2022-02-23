import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: black;
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
  background-color: black;
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

export const Main = styled.main``;
