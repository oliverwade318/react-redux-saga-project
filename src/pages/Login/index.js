import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragraph } from "./style";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();

    dispatch({
      type: "BOTAO_CLICADO"
    });
  }
  return (
    <Container>
      <Title isRed>Login</Title>
      <Paragraph>Lorem Ipsum</Paragraph>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
