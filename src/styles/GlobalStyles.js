import styled, { createGlobalStyle } from "styled-components";
import { PrimaryColor, PrimaryDarkColor } from "../congif/colors";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${PrimaryDarkColor};
    color: ${PrimaryDarkColor};
  }

  html,
  body,
  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${PrimaryColor};
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
  }

  a {
    text-decoration: none;
    color: ${PrimaryColor};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background-color: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
