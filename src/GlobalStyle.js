import { createGlobalStyle } from "styled-components";
import background from './assets/images/background-screen.jpg'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background-image: url('${background}');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default GlobalStyle;