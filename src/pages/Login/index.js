import React, { useState } from "react";
import { get } from "lodash";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Container } from "../../styles/GlobalStyles";
import { Title, Form } from "./style";
import * as actions from "../../store/modules/auth/actions";

export default function Login(props) {
  const dispatch = useDispatch();

  const prevPath = get(props, "location.state.prevPath", "/"); // redireciona ou pra pagina que estava antes de login se der tudo certo ou pra home novamente

  const [name, setName] = useState(""); // a string vaiza é o valor inicial do input
  const [species, setSpecies] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error("Nome deve ter entre 3 e 255 caracteres");
    }

    if (species.length < 3 || species.length > 255) {
      formErrors = true;
      toast.error("Espécie deve ter entre 3 e 255 caracteres");
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ name, species, prevPath }));
  }

  return (
    <Container>
      <Title isBlack>Login</Title>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Espécie"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />

        <button type="submit">Acessar minha Conta</button>
      </Form>
    </Container>
  );
}
