import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Title, Paragraph } from "./style";
import * as exampleActions from "../../store/modules/examples/actions";

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(event) {
    event.preventDefault();

    dispatch(exampleActions.requestClickButton());
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
