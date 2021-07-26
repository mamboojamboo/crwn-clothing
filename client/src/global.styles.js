import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body { 
        font-family: 'Open Sans Condensed';
        margin: 0;
        padding: 20px 40px;

        @media screen and (max-width: 800px) {
            padding: 10px;
        };

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: black;
    }
`;

export default GlobalStyles;