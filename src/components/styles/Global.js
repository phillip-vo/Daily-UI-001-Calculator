import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito Sans', sans-serif;
        font-size: 2em;
        margin: 0;
    }

    .app {
        background-color: ${({ theme }) => theme.colors.primary};
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`;

export default GlobalStyles;
