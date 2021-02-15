import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const ResetStyle = createGlobalStyle`
  ${reset}
  *,
  * & {
    box-sizing: border-box;
  }
  html {
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  ul,ol,li {
    list-style: none;
  }
  button {
    border: none;
    background: transparent;
  }
  body {
    ${'' /* background: #000000; */}
  }
`;

export default ResetStyle;
