import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  max-width: 740px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--grey-4);
  padding: 0px 12px;
  border-radius: var(--radius-inputs-buttons-cards);

  h3 {
    color: var(--grey-0);
    font-size: 14px;
  }
  span {
    color: var(--grey-1);
    font-size: 12px;
  }
`;
