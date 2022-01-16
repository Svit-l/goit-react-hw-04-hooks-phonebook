import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --main-color: #212121;
  --another-main-color: #ffffff;
  --main-font: 'Roboto', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
}

ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

img,
span {
  display: block;
}

body {
  font-family: var(--main-font);
  background: var(--another-main-color);
  color: var(--main-color);
}

a {
  text-decoration: none;
  /* outline: none; */
}
`;

export default GlobalStyle;
