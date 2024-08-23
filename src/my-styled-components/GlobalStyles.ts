import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Antonio", sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  min-height: 100vh;
  background: url("./public/assets/background-stars.svg"), #070724;
  background-size: cover;
}

p,
li,
a{
  font-family: "Raleway", sans-serif;
}

`;

export default GlobalStyles;
