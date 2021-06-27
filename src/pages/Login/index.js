import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragraph } from "./style";

export default function Login() {
  return (
    <Container>
      <Title isRed>Login</Title>
      <Paragraph>Lorem Ipsum</Paragraph>
      <button type="button">Enviar</button>
    </Container>
  );
}
