import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;

    //! for build only
    /* outline: 1px dashed salmon; */
  }

  :root {
    --main-color1: darkcyan;
    --main-color2: white;
    --accent-color1: mediumvioletred;
    --accent-color2: yellow;
  }

  body {
    margin: 0;
    font-family: system-ui;
    min-height: 100vh;
    background-color: var(--main-color1);
  }

  ul {
    padding: 0;
  }

  li {
    list-style: none;
  }

  .favoriteDiv{
    position: relative;
    width: 360px;
    height: 240px;
  }
  .favoriteDiv:hover {
    animation: MoveUpDown 2s linear infinite;
  }

  img {
    object-fit: cover;
    border: 20px outset brown;
    border: 20px outset darkgoldenrod;
    border-radius: 5px;
    box-shadow: 10px 10px 20px #333;
  }

  a {
    text-decoration: none;
    color: unset
  }

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.25rem);
    }
  }
`;
