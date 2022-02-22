import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

}

body , input, button {
   font-family: 'Inter', sans-serif;
   font-size: 0.75rem;
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

    --title-1: 1rem;
    --title-2: calc(var(--title-1) - 0.25);
    --title-3: calc(var(--title-2) - 0.25);

    --radius-inputs-buttons-cards: 0.25rem;
}
`;

export default GlobalStyle;
