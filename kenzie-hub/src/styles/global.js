import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

}

body , input, button {
   font-family: 'Inter', sans-serif;
   font-size: 1rem;
} 

button{
    cursor: pointer;
}




a{
text-decoration: none;
}

:root{
    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative: #59323f;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343b41;
    --grey-1: #868e96;
    --grey-0: #f8f9fa;

    --success: #3fe864;
    --negative: #e83f5b;

    --title-1: 1.125rem;
    --title-2: calc(var(--title-1) - 0.25);
    --title-3: calc(var(--title-2) - 0.25);

    --radius-inputs-buttons-cards: 0.25rem;
}

.modal-content {
    width: 100%;
    max-width: 370px;
    background: var(--grey-3);
    padding: 1.5rem;
    position: relative;
    border-radius: var(--radius-inputs-buttons-cards);
    h3{
        margin-bottom: 1rem;
        color: var(--grey-0);
        font-size: 14px;
    }
    p{
        color: var(--grey-0);
        margin-bottom: 5px;
    }

}

.modal-overlay {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close-modal{
    color: var(--grey-1);
    background: transparent;
    border: none;
    position: absolute;
    right: 36px;
    top: 21px;

}
`;

export const colorPrimary = "#ff577f";
export const colorPrimaryFocus = "#ff427f";
export const colorPrimaryNegative = "#59323f";
export const grey4 = "#121214";
export const grey3 = "#212529";
export const grey2 = "#343b41";
export const grey1 = "#868e96";
export const grey0 = "#f8f9fa";
export const success = "#3fe864";
export const negative = "#e83f5b";
