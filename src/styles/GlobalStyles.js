import styled, { createGlobalStyle } from "styled-components";
import * as color from "../config/colors";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${color.PrimaryDarkColor};
    color: ${color.PrimaryDarkColor};
  }

  html,
  body,
  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: ${color.PrimaryColor};
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
  }

  a {
    text-decoration: none;
    color: ${color.PrimaryColor};
  }

  ul {
    list-style: none;
  }

  body 
  .Toastify 
  .Toastify__toast-container
  .Toastify__toast--success {
    background: ${color.successColor};
  }

  body 
  .Toastify 
  .Toastify__toast-container
  .Toastify__toast--error {
    background: ${color.errorColor};
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
